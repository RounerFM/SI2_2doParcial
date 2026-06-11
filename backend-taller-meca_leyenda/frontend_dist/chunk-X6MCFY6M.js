import{a as pt}from"./chunk-GAJWJ7U4.js";import{a as le,b as me}from"./chunk-V77ZVHZW.js";import{b as wt}from"./chunk-DO36KI4F.js";import{i as B,m as dt,p as we,q as de,r as ct,s as ut}from"./chunk-NYZ6Z67J.js";import{b as ft,h as _t,i as bt,l as vt,o as yt,r as Mt}from"./chunk-KFD7DSIN.js";import{e as ht}from"./chunk-QQU3I7BS.js";import{a as st,b as mt,c as se}from"./chunk-M7VMCU4Z.js";import{b as lt}from"./chunk-JILZNYYL.js";import{b as xt,c as Ct}from"./chunk-5DUYSZVR.js";import{d as A,e as Qe}from"./chunk-7AYH7UZR.js";import{e as ot,f as rt}from"./chunk-TVZOXZVL.js";import{b as gt}from"./chunk-NMQHVFGJ.js";import{A as Ze,E as xe,G as oe,H as Je,N as et,Q as tt,R as nt,T as it,U as re,X as at,_ as U,z as $e}from"./chunk-DCLDOQZW.js";import{B as Ce,n as C,u as We,v as F}from"./chunk-K2A264FN.js";import{$b as Me,C as Q,D as Ee,Eb as D,Fb as y,Ga as E,Gb as M,Ha as Re,I,Ib as Le,Jb as He,Kb as x,La as T,Lb as l,Mb as m,Nb as R,Ob as ye,Pb as Ve,T as W,U as ve,Ub as O,Uc as ae,V as Te,Vb as je,Xc as f,Yb as h,Zb as Ye,_b as u,a as q,ab as d,ac as ne,ba as P,bc as Ue,cc as Xe,da as H,dc as j,e as G,ec as Y,fa as a,fb as Oe,gb as Ae,ib as te,ic as qe,kb as Be,kc as g,la as _,lb as Fe,lc as Ge,ma as b,mc as c,n as be,na as Se,nc as k,oc as ie,pa as $,pb as p,qa as Z,qb as S,rb as V,t as K,ta as J,ua as ee,ub as ze,wb as Ne,xc as Ke,ya as w}from"./chunk-MWS6LDTZ.js";import{a as _e,b as Pe}from"./chunk-C6Q5SG76.js";var xn=()=>{let i=a(dt),r=a(A),e=a(B),t=a(T);return C(t)?i.get("access_token")?e.select(de).pipe(I(1),K(n=>n?!0:(r.navigate(["/auth/login"]),!1))):(r.navigate(["/auth/login"]),!1):!0};var Sn=i=>{let r=a(B),e=a(A),t=a(T),n=i.data.roles??[];return C(t)?r.select(de).pipe(I(1),K(o=>o&&n.includes(o.role)?!0:(e.navigate(["/auth/login"]),!1))):!0};function Lt(i,r){if(i&1){let e=O();l(0,"button",4),h("click",function(){_(e);let n=u(2);return b(n.retrySync())}),c(1),m()}if(i&2){let e=u(2);x("disabled",e.syncing()),d(),ie(" ",e.syncing()?"Sincronizando\u2026":"Sincronizar ahora"," ")}}function Ht(i,r){if(i&1&&(l(0,"div",1)(1,"mat-icon"),c(2),m(),l(3,"div",2)(4,"strong"),c(5),m(),l(6,"span"),c(7),m()(),y(8,Lt,2,2,"button",3),m()),i&2){let e=u();g("offline-banner--warn",!e.network.online()),d(2),k(e.network.online()?"cloud_upload":"cloud_offline"),d(3),k(e.title()),d(2),k(e.subtitle()),d(),M(e.network.online()&&e.queue.pendingCount()>0?8:-1)}}var Dt=class i{network=a(xt);queue=a(Ct);messages=a(gt);syncing=w(!1);visible(){return!this.network.online()||this.queue.pendingCount()>0}title(){return this.network.online()?this.queue.pendingCount()>0?`${this.queue.pendingCount()} acci\xF3n(es) pendiente(s)`:"":"Sin conexi\xF3n"}subtitle(){return this.network.online()?this.queue.pendingCount()>0?"Hay cambios en cola. Pulsa sincronizar o espera la reconexi\xF3n autom\xE1tica.":"":"Las acciones se guardan en el navegador y se env\xEDan al recuperar internet."}async retrySync(){this.syncing.set(!0);try{let r=await this.queue.flush();r.synced>0&&this.messages.success(`${r.synced} acci\xF3n(es) sincronizada(s)`),r.failed>0&&this.messages.warning(`${r.failed} acci\xF3n(es) fallaron. Reintenta m\xE1s tarde.`)}finally{this.syncing.set(!1)}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-offline-banner"]],decls:1,vars:1,consts:[[1,"offline-banner",3,"offline-banner--warn"],[1,"offline-banner"],[1,"offline-banner__text"],["mat-stroked-button","","type","button",3,"disabled"],["mat-stroked-button","","type","button",3,"click","disabled"]],template:function(e,t){e&1&&y(0,Ht,9,6,"div",0),e&2&&M(t.visible()?0:-1)},dependencies:[se,mt,me,le],styles:[".offline-banner[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:12px;padding:10px clamp(12px,3vw,24px);font-size:.875rem;line-height:1.45;background:#e0f2fe;color:#0c4a6e;border-bottom:1px solid rgb(56 189 248 / 35%);max-width:1280px;margin:0 auto;width:100%;box-sizing:border-box}.offline-banner--warn[_ngcontent-%COMP%]{background:#fff7ed;color:#9a3412;border-bottom-color:#fb923c59}.offline-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{flex-shrink:0;margin-top:2px}.offline-banner__text[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:2px}.offline-banner__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.8125rem;opacity:.9}"]})};var kt="mat-badge-content",Vt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["ng-component"]],decls:0,vars:0,template:function(t,n){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--mat-badge-background-color, var(--mat-sys-error));
  color: var(--mat-badge-text-color, var(--mat-sys-on-error));
  font-family: var(--mat-badge-text-font, var(--mat-sys-label-small-font));
  font-weight: var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));
  border-radius: var(--mat-badge-container-shape, var(--mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));
  color: var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--mat-badge-legacy-small-size-container-size, unset);
  height: var(--mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--mat-badge-small-size-container-size, 6px);
  min-height: var(--mat-badge-small-size-container-size, 6px);
  line-height: var(--mat-badge-small-size-line-height, 6px);
  padding: var(--mat-badge-small-size-container-padding, 0);
  font-size: var(--mat-badge-small-size-text-size, 0);
  margin: var(--mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--mat-badge-legacy-container-size, unset);
  height: var(--mat-badge-legacy-container-size, unset);
  min-width: var(--mat-badge-container-size, 16px);
  min-height: var(--mat-badge-container-size, 16px);
  line-height: var(--mat-badge-line-height, 16px);
  padding: var(--mat-badge-container-padding, 0 4px);
  font-size: var(--mat-badge-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--mat-badge-legacy-large-size-container-size, unset);
  height: var(--mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--mat-badge-large-size-container-size, 16px);
  min-height: var(--mat-badge-large-size-container-size, 16px);
  line-height: var(--mat-badge-large-size-line-height, 16px);
  padding: var(--mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2,changeDetection:0})}return i})(),It=(()=>{class i{_ngZone=a(ee);_elementRef=a(E);_ariaDescriber=a(at);_renderer=a(te);_animationsDisabled=U();_idGenerator=a(re);get color(){return this._color}set color(e){this._setColor(e),this._color=e}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(e){this._updateRenderedContent(e)}_content;get description(){return this._description}set description(e){this._updateDescription(e)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=a(et);_document=a(Z);constructor(){let e=a(oe);e.load(Vt),e.load(Je)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let e=this._renderer.createElement("span"),t="mat-badge-active";return e.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),e.setAttribute("aria-hidden","true"),e.classList.add(kt),this._animationsDisabled&&e.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(e),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(t)})}):e.classList.add(t),e}_updateRenderedContent(e){let t=`${e??""}`.trim();this._isInitialized&&t&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=t),this._content=t}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(e){let t=this._elementRef.nativeElement.classList;t.remove(`mat-badge-${this._color}`),e&&t.add(`mat-badge-${e}`)}_clearExistingBadges(){let e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${kt}`);for(let t of Array.from(e))t!==this._badgeElement&&t.remove()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=V({type:i,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(t,n){t&2&&g("mat-badge-overlap",n.overlap)("mat-badge-above",n.isAbove())("mat-badge-below",!n.isAbove())("mat-badge-before",!n.isAfter())("mat-badge-after",n.isAfter())("mat-badge-small",n.size==="small")("mat-badge-medium",n.size==="medium")("mat-badge-large",n.size==="large")("mat-badge-hidden",n.hidden||!n.content)("mat-badge-disabled",n.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",f],disabled:[2,"matBadgeDisabled","disabled",f],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",f]}})}return i})(),Pt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=S({type:i});static \u0275inj=P({imports:[tt,F]})}return i})();var Kt=["mat-menu-item",""],Qt=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Wt=["mat-icon, [matMenuItemIcon]","*"];function $t(i,r){i&1&&(Se(),l(0,"svg",2),R(1,"polygon",3),m())}var Zt=["*"];function Jt(i,r){if(i&1){let e=O();ye(0,"div",0),Ye("click",function(){_(e);let n=u();return b(n.closed.emit("click"))})("animationstart",function(n){_(e);let o=u();return b(o._onAnimationStart(n.animationName))})("animationend",function(n){_(e);let o=u();return b(o._onAnimationDone(n.animationName))})("animationcancel",function(n){_(e);let o=u();return b(o._onAnimationDone(n.animationName))}),ye(1,"div",1),ne(2),Ve()()}if(i&2){let e=u();Ge(e._classList),g("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),je("id",e.panelId),D("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var ke=new H("MAT_MENU_PANEL"),X=(()=>{class i{_elementRef=a(E);_document=a(Z);_focusMonitor=a(xe);_parentMenu=a(ke,{optional:!0});_changeDetectorRef=a(ae);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new G;_focused=new G;_highlighted=!1;_triggersSubmenu=!1;constructor(){a(oe).load(rt),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&h("click",function(s){return n._checkDisabled(s)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(D("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),g("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",f],disableRipple:[2,"disableRipple","disableRipple",f]},exportAs:["matMenuItem"],attrs:Kt,ngContentSelectors:Wt,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(Me(Qt),ne(0),l(1,"span",0),ne(2,1),m(),R(3,"div",1),y(4,$t,2,0,":svg:svg",2)),t&2&&(d(3),x("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),d(),M(n._triggersSubmenu?4:-1))},dependencies:[ot],encapsulation:2,changeDetection:0})}return i})();var en=new H("MatMenuContent");var tn=new H("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),De="_mat-menu-enter",ue="_mat-menu-exit",N=(()=>{class i{_elementRef=a(E);_changeDetectorRef=a(ae);_injector=a($);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=U();_allItems;_directDescendantItems=new Re;_classList={};_panelAnimationState="void";_animationDone=new G;_isAnimating=w(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,n=_e({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{n[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{n[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new J;close=this.closed;panelId=a(re).getId("mat-menu-panel-");constructor(){let e=a(tn);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new it(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(W(this._directDescendantItems),ve(e=>Q(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),o=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[o]&&!n[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(W(this._directDescendantItems),ve(t=>Q(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:nt(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Oe(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=Pe(_e({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===ue;(t||e===De)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===De||e===ue)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(ue),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?De:ue)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(W(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["mat-menu"]],contentQueries:function(t,n,o){if(t&1&&Ue(o,en,5)(o,X,5)(o,X,4),t&2){let s;j(s=Y())&&(n.lazyContent=s.first),j(s=Y())&&(n._allItems=s),j(s=Y())&&(n.items=s)}},viewQuery:function(t,n){if(t&1&&Xe(Ae,5),t&2){let o;j(o=Y())&&(n.templateRef=o.first)}},hostVars:3,hostBindings:function(t,n){t&2&&D("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",f],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:f(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Ke([{provide:ke,useExisting:i}])],ngContentSelectors:Zt,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(Me(),Ne(0,Jt,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),nn=new H("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=a($);return()=>_t(i)}});var z=new WeakMap,an=(()=>{class i{_canHaveBackdrop;_element=a(E);_viewContainerRef=a(Fe);_menuItemInstance=a(X,{optional:!0,self:!0});_dir=a(We,{optional:!0});_focusMonitor=a(xe);_ngZone=a(ee);_injector=a($);_scrollStrategy=a(nn);_changeDetectorRef=a(ae);_animationsDisabled=U();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=q.EMPTY;_menuCloseSubscription=q.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=a(ke,{optional:!0});this._parentMaterialMenu=t instanceof N?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&z.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=z.get(t);z.set(t,this),n&&n!==this&&n._closeMenu();let o=this._createOverlay(t),s=o.getConfig(),v=s.positionStrategy;this._setPosition(t,v),this._canHaveBackdrop?s.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:s.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof N&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(Te(t.close)).subscribe(()=>{v.withLockedPosition(!1).reapplyLastPosition(),v.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof N&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(I(1)).subscribe(()=>{t.detach(),z.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&z.delete(n),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=yt(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof N&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new bt({positionStrategy:vt(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let o=n.connectionPair.overlayX==="start"?"after":"before",s=n.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,s)})})}_setPosition(e,t){let[n,o]=e.xPosition==="before"?["end","start"]:["start","end"],[s,v]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[pe,ge]=[s,v],[he,fe]=[n,o],L=0;if(this._triggersSubmenu()){if(fe=n=e.xPosition==="before"?"start":"end",o=he=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Ie=this._parentMaterialMenu.items.first;this._parentInnerPadding=Ie?Ie._getHostElement().offsetTop:0}L=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(pe=s==="top"?"bottom":"top",ge=v==="top"?"bottom":"top");t.withPositions([{originX:n,originY:pe,overlayX:he,overlayY:s,offsetY:L},{originX:o,originY:pe,overlayX:fe,overlayY:s,offsetY:L},{originX:n,originY:ge,overlayX:he,overlayY:v,offsetY:-L},{originX:o,originY:ge,overlayX:fe,overlayY:v,offsetY:-L}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:be(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Ee(s=>this._menuOpen&&s!==this._menuItemInstance)):be();return Q(e,n,o,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new ft(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return z.get(e)===this}_triggerIsAriaDisabled(){return f(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Be()};static \u0275dir=V({type:i})}return i})(),St=(()=>{class i extends an{_cleanupTouchstart;_hoverSubscription=q.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new J;onMenuOpen=this.menuOpened;menuClosed=new J;onMenuClose=this.menuClosed;constructor(){super(!0);let e=a(te);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{Ze(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){$e(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=V({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&h("click",function(s){return n._handleClick(s)})("mousedown",function(s){return n._handleMousedown(s)})("keydown",function(s){return n._handleKeydown(s)}),t&2&&D("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu==null?null:n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[ze]})}return i})();var Rt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=S({type:i});static \u0275inj=P({imports:[lt,Mt,F,ht]})}return i})();var Ot=(()=>{class i{get vertical(){return this._vertical}set vertical(e){this._vertical=Ce(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Ce(e)}_inset=!1;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,n){t&2&&(D("aria-orientation",n.vertical?"vertical":"horizontal"),g("mat-divider-vertical",n.vertical)("mat-divider-horizontal",!n.vertical)("mat-divider-inset",n.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,n){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return i})(),At=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=S({type:i});static \u0275inj=P({imports:[F]})}return i})();var sn=(i,r)=>r.id;function ln(i,r){if(i&1&&(l(0,"span",6),c(1),m()),i&2){let e=u();d(),ie("",e.unread()," sin leer")}}function mn(i,r){i&1&&(l(0,"button",7),c(1,"Cargando\u2026"),m())}function dn(i,r){i&1&&(l(0,"button",7),c(1,"No hay notificaciones"),m())}function cn(i,r){if(i&1){let e=O();l(0,"button",10),h("click",function(){_(e);let n=u(2);return b(n.openList())}),l(1,"span",11),c(2),m(),l(3,"span",12),c(4),m()()}if(i&2){let e=r.$implicit;g("unread",!e.is_read),d(2),k(e.title),d(2),k(e.body)}}function un(i,r){if(i&1&&Le(0,cn,5,4,"button",9,sn),i&2){let e=u();He(e.preview())}}var Bt=class i{auth=a(pt);api=a(ut);realtime=a(wt);store=a(B);router=a(A);platformId=a(T);unread=this.store.selectSignal(ct);preview=w([]);loading=w(!1);listUrl=this.auth.isAdmin()?"/admin/notificaciones":"/taller/notificaciones";sub;ngOnInit(){C(this.platformId)&&(this.refreshUnread(),this.sub=this.realtime.userEvent$.subscribe(()=>{this.refreshUnread(),this.preview().length>0&&this.loadPreview()}))}ngOnDestroy(){this.sub?.unsubscribe()}badgeLabel(){let r=this.unread();return r>99?"99+":String(r)}onMenuOpen(){this.loadPreview()}openList(){this.router.navigateByUrl(this.listUrl)}refreshUnread(){this.api.unreadCount().subscribe({next:r=>this.store.dispatch(we({count:r.unread_count})),error:()=>{}})}loadPreview(){this.loading.set(!0),this.api.list().subscribe({next:r=>{this.preview.set(r.slice(0,6)),this.loading.set(!1);let e=r.filter(t=>!t.is_read).length;this.store.dispatch(we({count:e}))},error:()=>this.loading.set(!1)})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-toolbar-notifications"]],decls:19,vars:6,consts:[["notifMenu","matMenu"],["mat-icon-button","","type","button","aria-label","Notificaciones",1,"notif-btn",3,"menuOpened","matMenuTriggerFor"],["matBadgeColor","warn","matBadgeSize","small","aria-hidden","true",3,"matBadge","matBadgeHidden"],["xPosition","before",1,"toolbar-notif-menu"],[1,"menu-head",3,"click"],[1,"menu-title"],[1,"menu-count"],["mat-menu-item","","disabled",""],["mat-menu-item","",3,"click","routerLink"],["mat-menu-item","",1,"notif-item",3,"unread"],["mat-menu-item","",1,"notif-item",3,"click"],[1,"item-title"],[1,"item-body"]],template:function(e,t){if(e&1&&(l(0,"button",1),h("menuOpened",function(){return t.onMenuOpen()}),l(1,"mat-icon",2),c(2,"notifications"),m()(),l(3,"mat-menu",3,0)(5,"div",4),h("click",function(o){return o.stopPropagation()}),l(6,"span",5),c(7,"Notificaciones"),m(),y(8,ln,2,1,"span",6),m(),R(9,"mat-divider"),y(10,mn,2,0,"button",7)(11,dn,2,0,"button",7)(12,un,2,0),R(13,"mat-divider"),l(14,"button",8),h("click",function(){return t.openList()}),l(15,"mat-icon"),c(16,"list"),m(),l(17,"span"),c(18,"Ver todas"),m()()()),e&2){let n=qe(4);x("matMenuTriggerFor",n),d(),x("matBadge",t.badgeLabel())("matBadgeHidden",t.unread()===0),d(7),M(t.unread()>0?8:-1),d(2),M(t.loading()?10:t.preview().length===0?11:12),d(4),x("routerLink",t.listUrl)}},dependencies:[me,le,se,st,Pt,It,Rt,N,X,St,At,Ot,Qe],styles:[".notif-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:24px;width:24px;height:24px}  .toolbar-notif-menu{max-width:min(360px,92vw)}.menu-head[_ngcontent-%COMP%]{padding:12px 16px 8px;display:flex;flex-direction:column;gap:2px}.menu-title[_ngcontent-%COMP%]{font-weight:700;font-size:.9375rem;color:var(--app-text, #0f172a)}.menu-count[_ngcontent-%COMP%]{font-size:.75rem;color:var(--app-text-muted, #64748b)}.notif-item[_ngcontent-%COMP%]{height:auto!important;min-height:48px;line-height:1.35!important;white-space:normal!important;padding-top:8px!important;padding-bottom:8px!important}.notif-item.unread[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%]{font-weight:700}.item-title[_ngcontent-%COMP%]{display:block;font-size:.875rem;color:var(--app-text, #0f172a)}.item-body[_ngcontent-%COMP%]{display:block;font-size:.75rem;color:var(--app-text-muted, #64748b);margin-top:2px}"]})};var pn="(max-width: 959.98px)";function Qi(i){return C(i)?window.matchMedia(pn).matches:!1}export{xn as a,Sn as b,Dt as c,Bt as d,pn as e,Qi as f};
