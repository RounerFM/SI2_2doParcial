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
import { Store } from '@ngrx/store';
import { selectUnreadNotifications } from '../../../store/auth/auth.selectors';
import { WorkshopOwnerService } from '../services/workshop-owner.service';
import { WorkshopRealtimeService } from '../services/workshop-realtime.service';
import { OfflineBannerComponent } from '../../../shared/components/offline-banner/offline-banner';
import { ToolbarNotificationsComponent } from '../../../shared/components/toolbar-notifications/toolbar-notifications';
import { PANEL_MOBILE_MEDIA, panelIsMobileViewport } from '../../../shared/utils/panel-sidenav.state';

@Component({
  standalone: true,
  selector: 'app-workshop-layout',
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
          <span class="app-panel-brand-mark app-panel-brand-mark--workshop">
            <mat-icon>build_circle</mat-icon>
          </span>
          <div class="app-topnav-brand-text">
            <span class="app-panel-brand-title">Panel</span>
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
          <a routerLink="/taller/dashboard" routerLinkActive="active" (click)="closeMenu()">
            <mat-icon>space_dashboard</mat-icon><span>Dashboard</span>
          </a>
          <a routerLink="/taller/incidentes" routerLinkActive="active" (click)="closeMenu()">
            <mat-icon>minor_crash</mat-icon><span>Incidentes</span>
          </a>
          <a routerLink="/taller/tecnicos" routerLinkActive="active" (click)="closeMenu()">
            <mat-icon>engineering</mat-icon><span>Técnicos</span>
          </a>
          <a routerLink="/taller/suscripcion" routerLinkActive="active" (click)="closeMenu()">
            <mat-icon>verified_user</mat-icon><span>Suscripción</span>
          </a>
          <a routerLink="/taller/perfil" routerLinkActive="active" (click)="closeMenu()">
            <mat-icon>store</mat-icon><span>Perfil</span>
          </a>
          <a routerLink="/taller/ingresos" routerLinkActive="active" (click)="closeMenu()">
            <mat-icon>account_balance_wallet</mat-icon><span>Ingresos</span>
          </a>
          <a routerLink="/taller/notificaciones" routerLinkActive="active" (click)="closeMenu()">
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

      @if (bannerNoWorkshop) {
        <div class="app-panel-banner app-panel-banner--warn">
          <mat-icon>storefront</mat-icon>
          <span
            >Aún no registraste tu negocio.
            <a routerLink="/taller/perfil">Completá el perfil</a>.</span
          >
        </div>
      }
      @if (bannerPendingVerification) {
        <div class="app-panel-banner app-panel-banner--info">
          <mat-icon>verified_user</mat-icon>
          <span
            >Tu cuenta está <strong>pendiente de verificación</strong> por administración. Podés seguir
            usando el panel; algunas acciones pueden depender de la aprobación.
            <a routerLink="/taller/perfil">Ver perfil</a></span
          >
        </div>
      }
      <app-offline-banner />
      <div class="app-panel-content workshop-content">
        <router-outlet />
      </div>
    </div>
  `,
  styles: ``,
})
export class WorkshopLayoutComponent implements OnInit, OnDestroy {
  readonly auth = inject(AuthService);
  private readonly store = inject(Store);
  private readonly workshops = inject(WorkshopOwnerService);
  private readonly realtime = inject(WorkshopRealtimeService);
  private readonly router = inject(Router);
  private readonly breakpoint = inject(BreakpointObserver);
  private readonly platformId = inject(PLATFORM_ID);
  readonly unread = this.store.selectSignal(selectUnreadNotifications);

  readonly isMobile = toSignal(
    this.breakpoint.observe(PANEL_MOBILE_MEDIA).pipe(map((r) => r.matches)),
    { initialValue: panelIsMobileViewport(this.platformId) },
  );

  protected readonly menuOpen = signal(false);

  bannerNoWorkshop = false;
  bannerPendingVerification = false;

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.realtime.start();
    this.refreshBanners();
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        this.menuOpen.set(false);
        this.refreshBanners();
      });
  }

  ngOnDestroy(): void {
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

  private refreshBanners() {
    this.workshops.getMyWorkshop().subscribe({
      next: (w) => {
        this.bannerNoWorkshop = w.id <= 0 && !this.workshops.hasPendingWorkshopSync();
        this.bannerPendingVerification = w.id > 0 && !w.is_verified;
      },
      error: () => {
        this.bannerNoWorkshop = !this.workshops.hasPendingWorkshopSync();
        this.bannerPendingVerification = false;
      },
    });
  }
}
