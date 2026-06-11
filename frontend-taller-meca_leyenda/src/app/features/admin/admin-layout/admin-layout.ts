import { Component, OnDestroy, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../../core/services/auth.service';
import { OfflineBannerComponent } from '../../../shared/components/offline-banner/offline-banner';
import { AdminRealtimeService } from '../services/admin-realtime.service';
import { Store } from '@ngrx/store';
import { selectUnreadNotifications } from '../../../store/auth/auth.selectors';
import { ToolbarNotificationsComponent } from '../../../shared/components/toolbar-notifications/toolbar-notifications';
import { PANEL_MOBILE_MEDIA, panelIsMobileViewport } from '../../../shared/utils/panel-sidenav.state';

@Component({
  standalone: true,
  selector: 'app-admin-layout',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    OfflineBannerComponent,
    ToolbarNotificationsComponent,
  ],
  template: `
    <div class="app-topnav-shell">
      <header class="app-topnav" [class.app-topnav--mobile]="isMobile()">
        <div class="app-topnav-brand">
          <span class="app-panel-brand-mark app-panel-brand-mark--admin">
            <mat-icon>admin_panel_settings</mat-icon>
          </span>
          <div class="app-topnav-brand-text">
            <span class="app-panel-brand-title">Admin</span>
            <span class="app-panel-brand-sub">Mecanica</span>
          </div>
        </div>

        <button
          mat-icon-button
          type="button"
          class="app-topnav-burger"
          (click)="toggleMenu()"
          [attr.aria-label]="menuOpen() ? 'Cerrar menú' : 'Abrir menú'"
        >
          <mat-icon>{{ menuOpen() ? 'close' : 'menu' }}</mat-icon>
        </button>

        <nav class="app-topnav-links" [class.app-topnav-links--open]="menuOpen()">
          <a routerLink="/admin/dashboard" routerLinkActive="active" (click)="closeMenu()">
            <mat-icon>insights</mat-icon><span>KPIs operativos</span>
          </a>
          <a routerLink="/admin/usuarios" routerLinkActive="active" (click)="closeMenu()">
            <mat-icon>manage_accounts</mat-icon><span>Usuarios</span>
          </a>
          <a routerLink="/admin/talleres" routerLinkActive="active" (click)="closeMenu()">
            <mat-icon>home_repair_service</mat-icon><span>Talleres</span>
          </a>
          <a routerLink="/admin/comision" routerLinkActive="active" (click)="closeMenu()">
            <mat-icon>sell</mat-icon><span>Comisión</span>
          </a>
          <a routerLink="/admin/planes" routerLinkActive="active" (click)="closeMenu()">
            <mat-icon>workspace_premium</mat-icon><span>Planes</span>
          </a>
          <a routerLink="/admin/incidentes" routerLinkActive="active" (click)="closeMenu()">
            <mat-icon>emergency</mat-icon><span>Incidentes</span>
          </a>
          <a routerLink="/admin/pagos" routerLinkActive="active" (click)="closeMenu()">
            <mat-icon>payments</mat-icon><span>Pagos</span>
          </a>
          <a routerLink="/admin/reportes" routerLinkActive="active" (click)="closeMenu()">
            <mat-icon>bar_chart</mat-icon><span>Reportes</span>
          </a>
          <a routerLink="/admin/notificaciones" routerLinkActive="active" (click)="closeMenu()">
            <mat-icon>notifications_active</mat-icon><span>Notificaciones</span>
            @if (unread() > 0) {
              <span class="nav-badge">{{ unread() }}</span>
            }
          </a>
        </nav>

        <div class="app-topnav-actions">
          <app-toolbar-notifications />
          <span class="user-name">{{ auth.currentUser()?.first_name }}</span>
          <button mat-icon-button type="button" (click)="auth.logout()" aria-label="Salir">
            <mat-icon>logout</mat-icon>
          </button>
        </div>
      </header>

      @if (menuOpen() && isMobile()) {
        <div class="app-topnav-backdrop" (click)="closeMenu()"></div>
      }

      <app-offline-banner />
      <div class="app-panel-content admin-content"><router-outlet /></div>
    </div>
  `,
  styles: ``,
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
  readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly breakpoint = inject(BreakpointObserver);
  private readonly realtime = inject(AdminRealtimeService);
  private readonly store = inject(Store);
  private readonly platformId = inject(PLATFORM_ID);
  readonly unread = this.store.selectSignal(selectUnreadNotifications);

  readonly isMobile = toSignal(
    this.breakpoint.observe(PANEL_MOBILE_MEDIA).pipe(map((r) => r.matches)),
    { initialValue: panelIsMobileViewport(this.platformId) },
  );

  protected readonly menuOpen = signal(false);

  constructor() {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => this.menuOpen.set(false));
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      void this.realtime.start();
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.realtime.stop();
    }
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
