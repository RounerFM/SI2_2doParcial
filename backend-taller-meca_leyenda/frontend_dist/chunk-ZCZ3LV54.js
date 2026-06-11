import{a as Le}from"./chunk-JSJTEK25.js";import{a as ue,b as fe,c as ge,d as ve,e as ye,f as Ce,g as Te,h as xe,i as ke,j as Ie,k as we}from"./chunk-7ZZ6SHSV.js";import{a as he}from"./chunk-GU6VDINS.js";import"./chunk-DO36KI4F.js";import"./chunk-NYZ6Z67J.js";import{a as Ee}from"./chunk-OAEVGB53.js";import{a as Me}from"./chunk-SVRL5NPH.js";import{d as De,i as Pe}from"./chunk-HIHIFTNZ.js";import{b as be,d as pe,e as gt}from"./chunk-KFD7DSIN.js";import{b as ce,c as me}from"./chunk-QQU3I7BS.js";import"./chunk-KR4BU27S.js";import"./chunk-5AVPOCWO.js";import{a as oe}from"./chunk-OH5YLOS2.js";import"./chunk-44NAOAQY.js";import"./chunk-A5SM4APU.js";import{b as le,c as de}from"./chunk-M7VMCU4Z.js";import"./chunk-JILZNYYL.js";import{a as _e}from"./chunk-QZ5AFMAU.js";import"./chunk-BFFDVSIC.js";import"./chunk-5DUYSZVR.js";import"./chunk-XUXOVJYY.js";import{e as Xt}from"./chunk-7AYH7UZR.js";import{e as ft,f as se}from"./chunk-TVZOXZVL.js";import"./chunk-NMQHVFGJ.js";import{F as te,G as ee,L as ne,R as ae,T as ie,U as re,_ as at}from"./chunk-DCLDOQZW.js";import{n as Ut,u as _t,v as Jt,w as ut}from"./chunk-K2A264FN.js";import{$b as U,A as Et,Ac as pt,Bc as ht,C as G,D as Rt,Da as Ht,Db as Vt,Ea as K,Eb as M,Fb as z,Ga as B,Gb as Q,H as St,Ha as Nt,Hb as dt,Ib as ct,Jb as mt,Kb as b,La as Ot,Lb as o,Mb as s,Nb as u,Rb as f,S as Bt,Sb as g,T as q,U as At,Ub as j,Uc as et,V as F,Xc as C,Yb as x,Yc as nt,_b as v,a as E,ab as l,ac as X,ba as Ft,bc as J,c as Pt,cc as W,da as S,dc as h,e as $,ec as _,fa as d,fb as Z,gb as Y,ib as lt,ic as bt,jc as $t,k as Mt,kc as k,la as D,lb as zt,lc as A,ma as P,mc as c,n as Lt,nc as y,oc as Gt,pa as st,pb as I,pc as qt,qb as Qt,rb as R,rc as Kt,sb as jt,sc as Zt,ta as T,tc as Yt,ua as H,ub as O,vb as p,wb as Wt,xc as V,ya as N,zc as tt}from"./chunk-MWS6LDTZ.js";import"./chunk-C6Q5SG76.js";var kt=["*"];function We(n,i){n&1&&X(0)}var Ve=["tabListContainer"],$e=["tabList"],Ge=["tabListInner"],qe=["nextPaginator"],Ke=["previousPaginator"],Ze=["content"];function Ye(n,i){}var Ue=["tabBodyWrapper"],Xe=["tabHeader"];function Je(n,i){}function tn(n,i){if(n&1&&p(0,Je,0,0,"ng-template",12),n&2){let t=v().$implicit;b("cdkPortalOutlet",t.templateLabel)}}function en(n,i){if(n&1&&c(0),n&2){let t=v().$implicit;y(t.textLabel)}}function nn(n,i){if(n&1){let t=j();o(0,"div",7,2),x("click",function(){let a=D(t),r=a.$implicit,m=a.$index,w=v(),L=bt(1);return P(w._handleClick(r,L,m))})("cdkFocusChange",function(a){let r=D(t).$index,m=v();return P(m._tabFocusChanged(a,r))}),u(2,"span",8)(3,"div",9),o(4,"span",10)(5,"span",11),z(6,tn,1,1,null,12)(7,en,1,1),s()()()}if(n&2){let t=i.$implicit,e=i.$index,a=bt(1),r=v();A(t.labelClass),k("mdc-tab--active",r.selectedIndex===e),b("id",r._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",r.fitInkBarToContent),M("tabIndex",r._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",r._tabs.length)("aria-controls",r._getTabContentId(e))("aria-selected",r.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),l(3),b("matRippleTrigger",a)("matRippleDisabled",t.disabled||r.disableRipple),l(3),Q(t.templateLabel?6:7)}}function an(n,i){n&1&&X(0)}function rn(n,i){if(n&1){let t=j();o(0,"mat-tab-body",13),x("_onCentered",function(){D(t);let a=v();return P(a._removeTabBodyWrapperHeight())})("_onCentering",function(a){D(t);let r=v();return P(r._setTabBodyWrapperHeight(a))})("_beforeCentering",function(a){D(t);let r=v();return P(r._bodyCentered(a))}),s()}if(n&2){let t=i.$implicit,e=i.$index,a=v();A(t.bodyClass),b("id",a._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",a.animationDuration)("preserveContent",a.preserveContent),M("tabindex",a.contentTabIndex!=null&&a.selectedIndex===e?a.contentTabIndex:null)("aria-labelledby",a._getTabLabelId(t,e))("aria-hidden",a.selectedIndex!==e)}}var on=new S("MatTabContent"),sn=(()=>{class n{template=d(Y);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=R({type:n,selectors:[["","matTabContent",""]],features:[V([{provide:on,useExisting:n}])]})}return n})(),ln=new S("MatTabLabel"),Ae=new S("MAT_TAB"),dn=(()=>{class n extends pe{_closestTab=d(Ae,{optional:!0});static \u0275fac=(()=>{let t;return function(a){return(t||(t=K(n)))(a||n)}})();static \u0275dir=R({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[V([{provide:ln,useExisting:n}]),O]})}return n})(),Fe=new S("MAT_TAB_GROUP"),It=(()=>{class n{_viewContainerRef=d(zt);_closestTabGroup=d(Fe,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new $;position=null;origin=null;isActive=!1;constructor(){d(ee).load(se)}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new be(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=I({type:n,selectors:[["mat-tab"]],contentQueries:function(e,a,r){if(e&1&&J(r,dn,5)(r,sn,7,Y),e&2){let m;h(m=_())&&(a.templateLabel=m.first),h(m=_())&&(a._explicitContent=m.first)}},viewQuery:function(e,a){if(e&1&&W(Y,7),e&2){let r;h(r=_())&&(a._implicitContent=r.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,a){e&2&&M("id",null)},inputs:{disabled:[2,"disabled","disabled",C],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[V([{provide:Ae,useExisting:n}]),Ht],ngContentSelectors:kt,decls:1,vars:0,template:function(e,a){e&1&&(U(),Wt(0,We,1,0,"ng-template"))},encapsulation:2})}return n})(),vt="mdc-tab-indicator--active",Re="mdc-tab-indicator--no-transition",yt=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let t=this._items.find(a=>a.elementRef.nativeElement===i),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let a=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(a),this._currentItem=t}}},cn=(()=>{class n{_elementRef=d(B);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(vt);return}let a=e.getBoundingClientRect(),r=t.width/a.width,m=t.left-a.left;e.classList.add(Re),this._inkBarContentElement.style.setProperty("transform",`translateX(${m}px) scaleX(${r})`),e.getBoundingClientRect(),e.classList.remove(Re),e.classList.add(vt),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(vt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),a=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",a.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||n)};static \u0275dir=R({type:n,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",C]}})}return n})();var He=(()=>{class n extends cn{elementRef=d(B);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(a){return(t||(t=K(n)))(a||n)}})();static \u0275dir=R({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,a){e&2&&(M("aria-disabled",!!a.disabled),k("mat-mdc-tab-disabled",a.disabled))},inputs:{disabled:[2,"disabled","disabled",C]},features:[O]})}return n})(),Se={passive:!0},mn=650,bn=100,pn=(()=>{class n{_elementRef=d(B);_changeDetectorRef=d(et);_viewportRuler=d(me);_dir=d(_t,{optional:!0});_ngZone=d(H);_platform=d(ut);_sharedResizeObserver=d(oe);_injector=d(st);_renderer=d(lt);_animationsDisabled=at();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new $;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new $;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new T;indexFocused=new T;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Se),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Se))}ngAfterContentInit(){let t=this._dir?this._dir.change:Lt("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(St(32),F(this._destroyed)),a=this._viewportRuler.change(150).pipe(F(this._destroyed)),r=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new ie(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Z(r,{injector:this._injector}),G(t,a,e,this._items.changes,this._itemsResized()).pipe(F(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),r()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(m=>{this.indexFocused.emit(m),this._setTabFocus(m)})}_itemsResized(){return typeof ResizeObserver!="function"?Mt:this._items.changes.pipe(q(this._items),At(t=>new Pt(e=>this._ngZone.runOutsideAngular(()=>{let a=new ResizeObserver(r=>e.next(r));return t.forEach(r=>a.observe(r.elementRef.nativeElement)),()=>{a.disconnect()}}))),Bt(1),Rt(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!ae(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,a=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+a)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let a=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:r,offsetWidth:m}=e.elementRef.nativeElement,w,L;this._getLayoutDirection()=="ltr"?(w=r,L=w+m):(L=this._tabListInner.nativeElement.offsetWidth-r,w=L-m);let ot=this.scrollDistance,Dt=this.scrollDistance+a;w<ot?this.scrollDistance-=ot-w:L>Dt&&(this.scrollDistance+=Math.min(L-Dt,w-ot))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,a=t-e>=5;a||(this.scrollDistance=0),a!==this._showPaginationControls&&(this._showPaginationControls=a,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Et(mn,bn).pipe(F(G(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:a,distance:r}=this._scrollHeader(t);(r===0||r>=a)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||n)};static \u0275dir=R({type:n,inputs:{disablePagination:[2,"disablePagination","disablePagination",C],selectedIndex:[2,"selectedIndex","selectedIndex",nt]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return n})(),hn=(()=>{class n extends pn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new yt(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static \u0275fac=(()=>{let t;return function(a){return(t||(t=K(n)))(a||n)}})();static \u0275cmp=I({type:n,selectors:[["mat-tab-header"]],contentQueries:function(e,a,r){if(e&1&&J(r,He,4),e&2){let m;h(m=_())&&(a._items=m)}},viewQuery:function(e,a){if(e&1&&W(Ve,7)($e,7)(Ge,7)(qe,5)(Ke,5),e&2){let r;h(r=_())&&(a._tabListContainer=r.first),h(r=_())&&(a._tabList=r.first),h(r=_())&&(a._tabListInner=r.first),h(r=_())&&(a._nextPaginator=r.first),h(r=_())&&(a._previousPaginator=r.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,a){e&2&&k("mat-mdc-tab-header-pagination-controls-enabled",a._showPaginationControls)("mat-mdc-tab-header-rtl",a._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",C]},features:[O],ngContentSelectors:kt,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,a){e&1&&(U(),o(0,"div",5,0),x("click",function(){return a._handlePaginatorClick("before")})("mousedown",function(m){return a._handlePaginatorPress("before",m)})("touchend",function(){return a._stopInterval()}),u(2,"div",6),s(),o(3,"div",7,1),x("keydown",function(m){return a._handleKeydown(m)}),o(5,"div",8,2),x("cdkObserveContent",function(){return a._onContentChanges()}),o(7,"div",9,3),X(9),s()()(),o(10,"div",10,4),x("mousedown",function(m){return a._handlePaginatorPress("after",m)})("click",function(){return a._handlePaginatorClick("after")})("touchend",function(){return a._stopInterval()}),u(12,"div",6),s()),e&2&&(k("mat-mdc-tab-header-pagination-disabled",a._disableScrollBefore),b("matRippleDisabled",a._disableScrollBefore||a.disableRipple),l(3),k("_mat-animation-noopable",a._animationsDisabled),l(2),M("aria-label",a.ariaLabel||null)("aria-labelledby",a.ariaLabelledby||null),l(5),k("mat-mdc-tab-header-pagination-disabled",a._disableScrollAfter),b("matRippleDisabled",a._disableScrollAfter||a.disableRipple))},dependencies:[ft,ne],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return n})(),_n=new S("MAT_TABS_CONFIG"),Be=(()=>{class n extends gt{_host=d(Ct);_ngZone=d(H);_centeringSub=E.EMPTY;_leavingSub=E.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(q(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=R({type:n,selectors:[["","matTabBodyHost",""]],features:[O]})}return n})(),Ct=(()=>{class n{_elementRef=d(B);_dir=d(_t,{optional:!0});_ngZone=d(H);_injector=d(st);_renderer=d(lt);_diAnimationsDisabled=at();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=E.EMPTY;_position;_previousPosition;_onCentering=new T;_beforeCentering=new T;_afterLeavingCenter=new T;_onCentered=new T(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=d(et);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Z(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),a.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,"transitionstart",a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Z(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=I({type:n,selectors:[["mat-tab-body"]],viewQuery:function(e,a){if(e&1&&W(Be,5)(Ze,5),e&2){let r;h(r=_())&&(a._portalHost=r.first),h(r=_())&&(a._contentElement=r.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,a){e&2&&M("inert",a._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,a){e&1&&(o(0,"div",1,0),p(2,Ye,0,0,"ng-template",2),s()),e&2&&k("mat-tab-body-content-left",a._position==="left")("mat-tab-body-content-right",a._position==="right")("mat-tab-body-content-can-animate",a._position==="center"||a._previousPosition==="center")},dependencies:[Be,ce],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return n})(),Ne=(()=>{class n{_elementRef=d(B);_changeDetectorRef=d(et);_ngZone=d(H);_tabsSubscription=E.EMPTY;_tabLabelSubscription=E.EMPTY;_tabBodySubscription=E.EMPTY;_diAnimationsDisabled=at();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Nt;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new T;focusChange=new T;animationDone=new T;selectedTabChange=new T(!0);_groupId;_isServer=!d(ut).isBrowser;constructor(){let t=d(_n,{optional:!0});this._groupId=d(re).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let a=this._tabBodyWrapper.nativeElement;a.style.minHeight=a.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((a,r)=>a.isActive=r===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,a)=>{e.position=a-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),a;for(let r=0;r<e.length;r++)if(e[r].isActive){this._indexToSelect=this._selectedIndex=r,this._lastFocusedTabIndex=null,a=e[r];break}!a&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(q(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new Tt;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=G(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,a){e.focusIndex=a,t.disabled||(this.selectedIndex=a)}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,a)=>e._setActiveClass(a===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=I({type:n,selectors:[["mat-tab-group"]],contentQueries:function(e,a,r){if(e&1&&J(r,It,5),e&2){let m;h(m=_())&&(a._allTabs=m)}},viewQuery:function(e,a){if(e&1&&W(Ue,5)(Xe,5)(Ct,5),e&2){let r;h(r=_())&&(a._tabBodyWrapper=r.first),h(r=_())&&(a._tabHeader=r.first),h(r=_())&&(a._tabBodies=r)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(e,a){e&2&&(M("mat-align-tabs",a.alignTabs),A("mat-"+(a.color||"primary")),$t("--mat-tab-animation-duration",a.animationDuration),k("mat-mdc-tab-group-dynamic-height",a.dynamicHeight)("mat-mdc-tab-group-inverted-header",a.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",a.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",C],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",C],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",C],selectedIndex:[2,"selectedIndex","selectedIndex",nt],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",nt],disablePagination:[2,"disablePagination","disablePagination",C],disableRipple:[2,"disableRipple","disableRipple",C],preserveContent:[2,"preserveContent","preserveContent",C],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[V([{provide:Fe,useExisting:n}])],ngContentSelectors:kt,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,a){e&1&&(U(),o(0,"mat-tab-header",3,0),x("indexFocused",function(m){return a._focusChanged(m)})("selectFocusedIndex",function(m){return a.selectedIndex=m}),ct(2,nn,8,17,"div",4,dt),s(),z(4,an,1,0),o(5,"div",5,1),ct(7,rn,1,10,"mat-tab-body",6,dt),s()),e&2&&(b("selectedIndex",a.selectedIndex||0)("disableRipple",a.disableRipple)("disablePagination",a.disablePagination),Vt("aria-label",a.ariaLabel)("aria-labelledby",a.ariaLabelledby),l(2),mt(a._tabs),l(2),Q(a._isServer?4:-1),l(),k("_mat-animation-noopable",a._animationsDisabled()),l(2),mt(a._tabs))},dependencies:[hn,He,te,ft,gt,Ct],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return n})(),Tt=class{index;tab};var Oe=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=Qt({type:n});static \u0275inj=Ft({imports:[Jt]})}return n})();var it=class n{label;priorityKey=null;get cls(){let i=(this.priorityKey??this.label??"").toLowerCase();return i.includes("cr\xEDt")||i.includes("crit")?"crit":i.includes("alta")||i.includes("high")?"high":i.includes("media")||i.includes("medium")?"med":i.includes("baja")||i.includes("low")?"low":"unk"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["app-priority-chip"]],inputs:{label:"label",priorityKey:"priorityKey"},decls:2,vars:3,template:function(t,e){t&1&&(o(0,"mat-chip"),c(1),s()),t&2&&(A(e.cls),l(),y(e.label))},dependencies:[Me],styles:["mat-chip[_ngcontent-%COMP%]{font-size:12px;min-height:26px}.crit[_ngcontent-%COMP%]{background:#b71c1c!important;color:#fff}.high[_ngcontent-%COMP%]{background:#ef6c00!important;color:#fff}.med[_ngcontent-%COMP%]{background:#f9a825!important}.low[_ngcontent-%COMP%]{background:#2e7d32!important;color:#fff}.unk[_ngcontent-%COMP%]{background:#757575!important;color:#fff}"]})};var rt=class n{transform(i){if(i==null||i==="")return"\u2014";let t=Number(i);return Number.isNaN(t)?String(i):`${t.toFixed(1)} km`}static \u0275fac=function(t){return new(t||n)};static \u0275pipe=jt({name:"distanceKm",type:n,pure:!0})};var wt=n=>[n];function gn(n,i){n&1&&(o(0,"th",23),c(1,"#"),s())}function vn(n,i){if(n&1&&(o(0,"td",24),c(1),s()),n&2){let t=i.$implicit;l(),y(t.incident_id)}}function yn(n,i){n&1&&(o(0,"th",23),c(1,"Tipo"),s())}function Cn(n,i){if(n&1&&(o(0,"td",24),c(1),s()),n&2){let t=i.$implicit;l(),y(t.incident_type)}}function Tn(n,i){n&1&&(o(0,"th",23),c(1,"Prioridad"),s())}function xn(n,i){if(n&1&&(o(0,"td",24),u(1,"app-priority-chip",25),s()),n&2){let t=i.$implicit;l(),b("label",t.priority||"\u2014")}}function kn(n,i){n&1&&(o(0,"th",23),c(1,"Ubicaci\xF3n"),s())}function In(n,i){if(n&1&&(o(0,"td",24),c(1),pt(2,"distanceKm"),s()),n&2){let t=i.$implicit;l(),qt("",t.address," (",ht(2,2,t.distance_km),")")}}function wn(n,i){n&1&&(o(0,"th",23),c(1,"Creado"),s())}function Dn(n,i){if(n&1&&(o(0,"td",24),c(1),pt(2,"timeAgo"),s()),n&2){let t=i.$implicit;l(),y(ht(2,1,t.created_at))}}function Pn(n,i){n&1&&u(0,"th",23)}function Mn(n,i){if(n&1){let t=j();o(0,"td",26)(1,"a",27),c(2,"Detalle"),s(),o(3,"button",28),x("click",function(){let a=D(t).$implicit,r=v();return P(r.reject(a))}),c(4,"Rechazar"),s()()}if(n&2){let t=i.$implicit;l(),b("routerLink",tt(1,wt,t.incident_id))}}function Ln(n,i){n&1&&u(0,"tr",29)}function En(n,i){n&1&&u(0,"tr",30)}function Rn(n,i){n&1&&(o(0,"th",23),c(1,"#"),s())}function Sn(n,i){if(n&1&&(o(0,"td",24),c(1),s()),n&2){let t=i.$implicit;l(),y(t.incident_id)}}function Bn(n,i){n&1&&(o(0,"th",23),c(1,"Estado asignaci\xF3n"),s())}function An(n,i){if(n&1&&(o(0,"td",24),c(1),s()),n&2){let t=i.$implicit;l(),y(t.status)}}function Fn(n,i){n&1&&u(0,"th",23)}function Hn(n,i){if(n&1&&(o(0,"td",24)(1,"a",27),c(2,"Detalle"),s()()),n&2){let t=i.$implicit;l(),b("routerLink",tt(1,wt,t.incident_id))}}function Nn(n,i){n&1&&u(0,"tr",29)}function On(n,i){n&1&&u(0,"tr",30)}function zn(n,i){n&1&&(o(0,"th",23),c(1,"#"),s())}function Qn(n,i){if(n&1&&(o(0,"td",24),c(1),s()),n&2){let t=i.$implicit;l(),y(t.incident_id)}}function jn(n,i){n&1&&(o(0,"th",23),c(1,"Estado"),s())}function Wn(n,i){if(n&1&&(o(0,"td",24),c(1),s()),n&2){let t=i.$implicit;l(),y(t.status)}}function Vn(n,i){n&1&&(o(0,"th",23),c(1,"Costo"),s())}function $n(n,i){if(n&1&&(o(0,"td",24),c(1),s()),n&2){let t=i.$implicit;l(),y(t.service_cost??"\u2014")}}function Gn(n,i){n&1&&(o(0,"th",23),c(1,"Valoraci\xF3n"),s())}function qn(n,i){if(n&1&&(o(0,"span",31),c(1),s(),o(2,"span",32),c(3),s()),n&2){let t=v().$implicit,e=v();l(),y(e.ratingStars(t.rating_score)),l(2),Gt("",t.rating_score,"/5")}}function Kn(n,i){n&1&&c(0," \u2014 ")}function Zn(n,i){if(n&1&&(o(0,"td",24),z(1,qn,4,2)(2,Kn,1,0),s()),n&2){let t=i.$implicit;l(),Q(t.rating_score?1:2)}}function Yn(n,i){n&1&&u(0,"th",23)}function Un(n,i){if(n&1&&(o(0,"td",24)(1,"a",27),c(2,"Ver"),s()()),n&2){let t=i.$implicit;l(),b("routerLink",tt(1,wt,t.incident_id))}}function Xn(n,i){n&1&&u(0,"tr",29)}function Jn(n,i){n&1&&u(0,"tr",30)}var ze=class n{api=d(_e);dialog=d(De);realtime=d(he);platformId=d(Ot);rtSub;tab=0;available=N([]);inProgress=N([]);historyDone=N([]);colsA=["id","type","pri","addr","when","act"];colsP=["id","st","act"];colsH=["id","st","cost","rating","act"];static ACTIVE=new Set(["accepted","in_route","arrived","in_service"]);ngOnInit(){Ut(this.platformId)&&(this.reload(),this.rtSub=this.realtime.userEvent$.subscribe(()=>this.reload()))}ngOnDestroy(){this.rtSub?.unsubscribe()}reload(){this.api.getAvailableIncidents().subscribe(i=>this.available.set(i)),this.api.getHistory().subscribe(i=>{this.inProgress.set(i.filter(t=>n.ACTIVE.has(t.assignment_status))),this.historyDone.set(i.filter(t=>t.assignment_status==="completed"||t.assignment_status==="rejected"))})}reject(i){this.dialog.open(Ee,{data:{id:i.incident_id}}).afterClosed().subscribe(e=>e&&this.reload())}ratingStars(i){if(i==null||Number.isNaN(+i))return"";let t=Math.min(5,Math.max(0,Math.floor(+i)));return"\u2605".repeat(t)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["app-incident-list"]],decls:63,vars:10,consts:[[1,"app-page-head"],[1,"app-page-title"],[1,"app-page-sub"],[1,"incident-tabs",3,"selectedIndexChange","selectedIndex"],["label","Disponibles"],[1,"app-table-wrap"],["mat-table","",1,"full",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","type"],["matColumnDef","pri"],["matColumnDef","addr"],["matColumnDef","when"],["matColumnDef","act"],["mat-cell","","class","cell-actions",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["label","En proceso"],["matColumnDef","st"],["label","Historial"],["matColumnDef","cost"],["matColumnDef","rating"],["mat-header-cell",""],["mat-cell",""],[3,"label"],["mat-cell","",1,"cell-actions"],["mat-button","",3,"routerLink"],["mat-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""],[1,"stars"],[1,"sr-only"]],template:function(t,e){t&1&&(o(0,"header",0)(1,"h1",1),c(2,"Incidentes"),s(),o(3,"p",2),c(4,"Ofertas nuevas, trabajo en curso e historial en un solo lugar."),s()(),o(5,"mat-tab-group",3),Yt("selectedIndexChange",function(r){return Zt(e.tab,r)||(e.tab=r),r}),o(6,"mat-tab",4)(7,"div",5)(8,"table",6),f(9,7),p(10,gn,2,0,"th",8)(11,vn,2,1,"td",9),g(),f(12,10),p(13,yn,2,0,"th",8)(14,Cn,2,1,"td",9),g(),f(15,11),p(16,Tn,2,0,"th",8)(17,xn,2,1,"td",9),g(),f(18,12),p(19,kn,2,0,"th",8)(20,In,3,4,"td",9),g(),f(21,13),p(22,wn,2,0,"th",8)(23,Dn,3,3,"td",9),g(),f(24,14),p(25,Pn,1,0,"th",8)(26,Mn,5,3,"td",15),g(),p(27,Ln,1,0,"tr",16)(28,En,1,0,"tr",17),s()()(),o(29,"mat-tab",18)(30,"div",5)(31,"table",6),f(32,7),p(33,Rn,2,0,"th",8)(34,Sn,2,1,"td",9),g(),f(35,19),p(36,Bn,2,0,"th",8)(37,An,2,1,"td",9),g(),f(38,14),p(39,Fn,1,0,"th",8)(40,Hn,3,3,"td",9),g(),p(41,Nn,1,0,"tr",16)(42,On,1,0,"tr",17),s()()(),o(43,"mat-tab",20)(44,"div",5)(45,"table",6),f(46,7),p(47,zn,2,0,"th",8)(48,Qn,2,1,"td",9),g(),f(49,19),p(50,jn,2,0,"th",8)(51,Wn,2,1,"td",9),g(),f(52,21),p(53,Vn,2,0,"th",8)(54,$n,2,1,"td",9),g(),f(55,22),p(56,Gn,2,0,"th",8)(57,Zn,3,1,"td",9),g(),f(58,14),p(59,Yn,1,0,"th",8)(60,Un,3,3,"td",9),g(),p(61,Xn,1,0,"tr",16)(62,Jn,1,0,"tr",17),s()()()()),t&2&&(l(5),Kt("selectedIndex",e.tab),l(3),b("dataSource",e.available()),l(19),b("matHeaderRowDef",e.colsA),l(),b("matRowDefColumns",e.colsA),l(3),b("dataSource",e.inProgress()),l(10),b("matHeaderRowDef",e.colsP),l(),b("matRowDefColumns",e.colsP),l(3),b("dataSource",e.historyDone()),l(16),b("matHeaderRowDef",e.colsH),l(),b("matRowDefColumns",e.colsH))},dependencies:[Oe,It,Ne,de,le,we,ue,ge,Te,ve,fe,xe,ye,Ce,ke,Ie,Pe,Xt,it,rt,Le],styles:[".stars[_ngcontent-%COMP%]{color:#f59e0b;letter-spacing:1px}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.full[_ngcontent-%COMP%]{width:100%}@media(max-width:700px){.cell-actions[_ngcontent-%COMP%]{white-space:normal}}"]})};export{ze as IncidentListPage};
