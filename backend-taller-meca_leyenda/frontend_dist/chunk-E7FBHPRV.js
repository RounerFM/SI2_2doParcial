import{a as w}from"./chunk-GAJWJ7U4.js";import{a as W}from"./chunk-WX73MHNX.js";import{a as $e}from"./chunk-FSGWJCWX.js";import{a as Ze}from"./chunk-WFFCA4D4.js";import{a as P,b as R}from"./chunk-V77ZVHZW.js";import"./chunk-NYZ6Z67J.js";import{a as S,b as x,c as M,d as E}from"./chunk-6CLMYIGB.js";import{a as $}from"./chunk-KR4BU27S.js";import"./chunk-5AVPOCWO.js";import{b as H,d as Ve,e as Be,h as Z}from"./chunk-OH5YLOS2.js";import{b as He}from"./chunk-44NAOAQY.js";import"./chunk-A5SM4APU.js";import{b as I}from"./chunk-M7VMCU4Z.js";import{b as Qe}from"./chunk-JILZNYYL.js";import"./chunk-XUXOVJYY.js";import{b as Ge,d as Ne,e as C}from"./chunk-7AYH7UZR.js";import{e as Ue,f as je}from"./chunk-TVZOXZVL.js";import{b as D}from"./chunk-NMQHVFGJ.js";import{E as ze,G as Ae,U as oe,_ as Le,g as Oe,h as z,j as m,l as A,m as L,q as V,u as B,v as U,w as j,y as Q}from"./chunk-DCLDOQZW.js";import{i as Fe,n as Te,v as qe}from"./chunk-K2A264FN.js";import{$ as se,$b as Ce,Ac as Re,Eb as F,Ec as we,Fb as g,Ga as ae,Gb as v,Ib as ve,Jb as ye,Kb as u,La as he,Lb as i,Mb as t,Mc as De,Nb as l,Ub as ke,Uc as re,Xc as h,Yb as p,Yc as ne,_b as k,ab as s,ac as Se,ba as le,bc as xe,cc as Me,da as te,dc as O,ec as q,fa as c,fb as N,ib as _e,kc as T,la as me,ma as ue,mc as r,nc as G,oc as Ee,pa as pe,pb as f,pc as Ie,qb as fe,rb as ge,ta as ie,ua as be,xc as Pe,ya as _}from"./chunk-MWS6LDTZ.js";import"./chunk-C6Q5SG76.js";function et(n,d){n&1&&r(0," Entrando\u2026 ")}function tt(n,d){n&1&&r(0," Entrar ")}var Y=class n{fb=c(j);auth=c(w);messages=c(D);hidePassword=_(!0);busy=!1;form=this.fb.nonNullable.group({username:["",m.required],password:["",m.required]});submit(){this.messages.showFormValidationWarning(this.form)||(this.busy=!0,this.auth.login(this.form.getRawValue()).subscribe({next:()=>{this.busy=!1,this.messages.success("Sesi\xF3n iniciada")},error:d=>{this.busy=!1,d?.status===401&&this.messages.warning("Usuario o contrase\xF1a incorrectos")}}))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=f({type:n,selectors:[["app-login-page"]],decls:45,vars:6,consts:[[1,"app-auth-page"],["aria-hidden","true",1,"app-auth-bg"],[1,"app-auth-orb","app-auth-orb--1"],[1,"app-auth-orb","app-auth-orb--2"],[1,"app-auth-orb","app-auth-orb--3"],[1,"app-auth-shell","app-auth-split"],[1,"app-auth-brand"],[1,"app-auth-logo"],["aria-hidden","true"],[1,"app-auth-brand-name"],[1,"app-auth-brand-tag"],[1,"app-auth-card"],[1,"auth-card-sub"],[3,"ngSubmit","formGroup"],["appearance","outline",1,"full"],["matPrefix","","aria-hidden","true"],["matInput","","formControlName","username","autocomplete","username"],["matInput","","formControlName","password","autocomplete","current-password",3,"type"],["mat-icon-button","","matSuffix","","type","button",3,"click"],[1,"auth-actions"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],[1,"auth-footer"],["routerLink","/auth/register"]],template:function(e,a){e&1&&(i(0,"div",0)(1,"div",1),l(2,"span",2)(3,"span",3)(4,"span",4),t(),i(5,"div",5)(6,"header",6)(7,"div",7)(8,"mat-icon",8),r(9,"build_circle"),t()(),i(10,"h1",9),r(11,"Mecanica"),t(),i(12,"p",10),r(13,"Plataforma de gesti\xF3n"),t()(),i(14,"mat-card",11)(15,"mat-card-header")(16,"mat-card-title"),r(17,"Iniciar sesi\xF3n"),t(),i(18,"span",12),r(19,"Accede con tu cuenta"),t()(),i(20,"mat-card-content")(21,"form",13),p("ngSubmit",function(){return a.submit()}),i(22,"mat-form-field",14)(23,"mat-label"),r(24,"Usuario"),t(),i(25,"mat-icon",15),r(26,"person_outline"),t(),l(27,"input",16),t(),i(28,"mat-form-field",14)(29,"mat-label"),r(30,"Contrase\xF1a"),t(),i(31,"mat-icon",15),r(32,"lock_outline"),t(),l(33,"input",17),i(34,"button",18),p("click",function(){return a.hidePassword.set(!a.hidePassword())}),i(35,"mat-icon"),r(36),t()()(),i(37,"div",19)(38,"button",20),g(39,et,1,0)(40,tt,1,0),t()()(),i(41,"p",21),r(42," \xBFNo tienes cuenta? "),i(43,"a",22),r(44,"Crear cuenta"),t()()()()()()),e&2&&(s(21),u("formGroup",a.form),s(12),u("type",a.hidePassword()?"password":"text"),s(),F("aria-label",a.hidePassword()?"Mostrar contrase\xF1a":"Ocultar contrase\xF1a"),s(2),G(a.hidePassword()?"visibility":"visibility_off"),s(2),u("disabled",a.busy),s(),v(a.busy?39:40))},dependencies:[Q,V,z,A,L,U,B,C,S,E,x,M,Z,H,Ve,Be,$,I,R,P],styles:[".full[_ngcontent-%COMP%]{width:100%;display:block;margin-bottom:4px}"]})};var it=["input"],at=["formField"],rt=["*"],J=class{source;value;constructor(d,e){this.source=d,this.value=e}},nt={provide:Oe,useExisting:se(()=>ce),multi:!0},Je=new te("MatRadioGroup"),ot=new te("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})}),ce=(()=>{class n{_changeDetector=c(re);_value=null;_name=c(oe).getId("mat-radio-group-");_selected=null;_isInitialized=!1;_labelPosition="after";_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new ie;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;constructor(){}ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(a=>{a.checked=this.value===a.value,a.checked&&(this._selected=a)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new J(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static \u0275fac=function(a){return new(a||n)};static \u0275dir=ge({type:n,selectors:[["mat-radio-group"]],contentQueries:function(a,o,b){if(a&1&&xe(b,K,5),a&2){let y;O(y=q())&&(o._radios=y)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",h],required:[2,"required","required",h],disabledInteractive:[2,"disabledInteractive","disabledInteractive",h]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[Pe([nt,{provide:Je,useExisting:n}])]})}return n})(),K=(()=>{class n{_elementRef=c(ae);_changeDetector=c(re);_focusMonitor=c(ze);_radioDispatcher=c(He);_defaultOptions=c(ot,{optional:!0});_ngZone=c(be);_renderer=c(_e);_uniqueId=c(oe).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new ie;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=Le();_injector=c(pe);constructor(){c(Ae).load(je);let e=c(Je,{optional:!0}),a=c(new De("tabindex"),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,a&&(this.tabIndex=ne(a,0))}focus(e,a){a?this._focusMonitor.focusVia(this._inputElement,a,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,a)=>{e!==this.id&&a===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new J(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let a=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),a&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus()}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,a;if(!e||!e.selected||this.disabled?a=this.tabIndex:a=e.selected===this?this.tabIndex:-1,a!==this._previousTabIndex){let o=this._inputElement?.nativeElement;o&&(o.setAttribute("tabindex",a+""),this._previousTabIndex=a,N(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===o&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===o&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=f({type:n,selectors:[["mat-radio-button"]],viewQuery:function(a,o){if(a&1&&Me(it,5)(at,7,ae),a&2){let b;O(b=q())&&(o._inputElement=b.first),O(b=q())&&(o._rippleTrigger=b.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(a,o){a&1&&p("focus",function(){return o._inputElement.nativeElement.focus()}),a&2&&(F("id",o.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),T("mat-primary",o.color==="primary")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("mat-mdc-radio-checked",o.checked)("mat-mdc-radio-disabled",o.disabled)("mat-mdc-radio-disabled-interactive",o.disabledInteractive)("_mat-animation-noopable",o._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",h],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ne(e)],checked:[2,"checked","checked",h],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",h],required:[2,"required","required",h],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",h]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:rt,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(a,o){a&1&&(Ce(),i(0,"div",2,0)(2,"div",3)(3,"div",4),p("click",function(y){return o._onTouchTargetClick(y)}),t(),i(4,"input",5,1),p("change",function(y){return o._onInputInteraction(y)}),t(),i(6,"div",6),l(7,"div",7)(8,"div",8),t(),i(9,"div",9),l(10,"div",10),t()(),i(11,"label",11),Se(12),t()()),a&2&&(u("labelPosition",o.labelPosition),s(2),T("mdc-radio--disabled",o.disabled),s(2),u("id",o.inputId)("checked",o.checked)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),F("name",o.name)("value",o.value)("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby)("aria-describedby",o.ariaDescribedby)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),s(5),u("matRippleTrigger",o._rippleTrigger.nativeElement)("matRippleDisabled",o._isRippleDisabled())("matRippleCentered",!0),s(2),u("for",o.inputId))},dependencies:[Ue,Ze],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button label {
  cursor: pointer;
}
.mat-mdc-radio-button label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-radio-button .mdc-radio--disabled + label {
  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-radio-touch-target-size, 48px);
  width: var(--mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return n})(),Ke=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=le({imports:[Qe,K,qe]})}return n})();var ct=(n,d)=>d.id;function st(n,d){n&1&&r(0," Procesando\u2026 ")}function lt(n,d){n&1&&r(0," Crear cuenta y pagar con Stripe ")}function mt(n,d){n&1&&(i(0,"p",31)(1,"mat-icon",8),r(2,"info"),t(),r(3," No hay planes disponibles. Contacta al administrador. "),t())}function ut(n,d){if(n&1&&(i(0,"label",34),l(1,"mat-radio-button",35),i(2,"div",36)(3,"div",37)(4,"strong"),r(5),t(),i(6,"span",38),r(7),Re(8,"currency"),t()(),i(9,"p",39),r(10),t()()()),n&2){let e=d.$implicit,a=k(2);T("selected",a.form.value.subscription_plan_id===e.id),s(),u("value",e.id),s(4),G(e.name),s(2),Ie("",we(8,7,e.price_amount,"USD","symbol","1.2-2"),"/",a.intervalLabel(e)),s(3),G(e.description||"Acceso al panel")}}function pt(n,d){if(n&1&&(i(0,"mat-radio-group",32),ve(1,ut,11,12,"label",33,ct),t()),n&2){let e=k();s(),ye(e.plans())}}var X=class n{fb=c(j);auth=c(w);messages=c(D);subs=c(W);platformId=c(he);plans=_([]);busy=!1;form=this.fb.nonNullable.group({username:["",m.required],email:["",[m.required,m.email]],first_name:["",m.required],last_name:["",m.required],phone:["",m.required],national_id:["",m.required],password:["",[m.required,m.minLength(6)]],password_confirm:["",m.required],subscription_plan_id:[0,m.required]});ngOnInit(){Te(this.platformId)&&this.subs.listPublicPlans().subscribe({next:d=>{this.plans.set(d),d.length&&this.form.patchValue({subscription_plan_id:d[0].id})}})}intervalLabel(d){return d.billing_interval==="year"?"a\xF1o":"mes"}submit(){if(this.messages.showFormValidationWarning(this.form))return;let d=this.form.getRawValue();if(d.password!==d.password_confirm){this.messages.warning("Las contrase\xF1as no coinciden");return}if(!d.subscription_plan_id){this.messages.warning("Selecciona un plan de suscripci\xF3n");return}this.busy=!0,this.auth.register(d).subscribe({next:()=>{this.busy=!1,this.messages.success("Redirigiendo a Stripe para completar el pago\u2026")},error:()=>this.busy=!1})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=f({type:n,selectors:[["app-register-page"]],decls:80,vars:4,consts:[[1,"app-auth-page","app-auth-page--scroll"],["aria-hidden","true",1,"app-auth-bg"],[1,"app-auth-orb","app-auth-orb--1"],[1,"app-auth-orb","app-auth-orb--2"],[1,"app-auth-orb","app-auth-orb--3"],[1,"app-auth-shell","app-auth-shell--wide"],[1,"app-auth-brand"],[1,"app-auth-logo"],["aria-hidden","true"],[1,"app-auth-brand-name"],[1,"app-auth-brand-tag"],[3,"ngSubmit","formGroup"],[1,"app-auth-grid","app-auth-grid--reverse"],[1,"app-auth-card"],[1,"auth-card-sub"],[1,"section-label"],["appearance","outline",1,"full"],["matInput","","formControlName","username","autocomplete","username"],["matInput","","type","email","formControlName","email","autocomplete","email"],[1,"app-form-grid-2"],["matInput","","formControlName","first_name","autocomplete","given-name"],["matInput","","formControlName","last_name","autocomplete","family-name"],["matInput","","formControlName","phone","autocomplete","tel"],["matInput","","formControlName","national_id"],["matInput","","type","password","formControlName","password","autocomplete","new-password"],["matInput","","type","password","formControlName","password_confirm","autocomplete","new-password"],[1,"register-actions"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],[1,"register-footer"],["routerLink","/auth/login"],[1,"app-auth-card","app-auth-plans-card"],[1,"warn"],["formControlName","subscription_plan_id",1,"plans"],[1,"plan-card",3,"selected"],[1,"plan-card"],[3,"value"],[1,"plan-body"],[1,"plan-head"],[1,"price"],[1,"plan-desc"]],template:function(e,a){e&1&&(i(0,"div",0)(1,"div",1),l(2,"span",2)(3,"span",3)(4,"span",4),t(),i(5,"div",5)(6,"header",6)(7,"div",7)(8,"mat-icon",8),r(9,"build_circle"),t()(),i(10,"h1",9),r(11,"Mecanica"),t(),i(12,"p",10),r(13,"Crea tu cuenta"),t()(),i(14,"form",11),p("ngSubmit",function(){return a.submit()}),i(15,"div",12)(16,"mat-card",13)(17,"mat-card-header")(18,"mat-card-title"),r(19,"Crear cuenta"),t(),i(20,"span",14),r(21,"Completa tus datos para empezar"),t()(),i(22,"mat-card-content")(23,"p",15)(24,"mat-icon",8),r(25,"badge"),t(),r(26," Datos de cuenta "),t(),i(27,"mat-form-field",16)(28,"mat-label"),r(29,"Usuario (login)"),t(),l(30,"input",17),t(),i(31,"mat-form-field",16)(32,"mat-label"),r(33,"Email"),t(),l(34,"input",18),t(),i(35,"div",19)(36,"mat-form-field",16)(37,"mat-label"),r(38,"Nombre"),t(),l(39,"input",20),t(),i(40,"mat-form-field",16)(41,"mat-label"),r(42,"Apellido"),t(),l(43,"input",21),t()(),i(44,"div",19)(45,"mat-form-field",16)(46,"mat-label"),r(47,"Tel\xE9fono"),t(),l(48,"input",22),t(),i(49,"mat-form-field",16)(50,"mat-label"),r(51,"Documento de identidad"),t(),l(52,"input",23),t()(),i(53,"div",19)(54,"mat-form-field",16)(55,"mat-label"),r(56,"Contrase\xF1a"),t(),l(57,"input",24),t(),i(58,"mat-form-field",16)(59,"mat-label"),r(60,"Confirmar contrase\xF1a"),t(),l(61,"input",25),t()(),i(62,"div",26)(63,"button",27),g(64,st,1,0)(65,lt,1,0),t()(),i(66,"p",28)(67,"a",29),r(68,"\u2190 Volver al inicio de sesi\xF3n"),t()()()(),i(69,"mat-card",30)(70,"mat-card-header")(71,"mat-card-title")(72,"mat-icon",8),r(73,"payments"),t(),r(74," Plan de suscripci\xF3n "),t(),i(75,"span",14),r(76,"Elige tu plan. Pago seguro con Stripe."),t()(),i(77,"mat-card-content"),g(78,mt,4,0,"p",31)(79,pt,3,0,"mat-radio-group",32),t()()()()()()),e&2&&(s(14),u("formGroup",a.form),s(49),u("disabled",a.busy||a.plans().length===0),s(),v(a.busy?64:65),s(14),v(a.plans().length===0?78:79))},dependencies:[Q,V,z,A,L,U,B,C,S,E,x,M,Z,H,$,I,Ke,ce,K,R,P,Fe],styles:[".full[_ngcontent-%COMP%]{width:100%;display:block;margin-bottom:4px}.plan-body[_ngcontent-%COMP%]{flex:1;min-width:0}.plan-head[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.plan-head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]{font-size:.9375rem}.plan-desc[_ngcontent-%COMP%]{font-size:.8125rem;color:var(--app-text-muted);margin:6px 0 0;line-height:1.4}.warn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.35rem;color:#b45309;font-size:.875rem;padding:.75rem .875rem;border-radius:var(--app-radius-sm);background:var(--app-warn-bg);border:1px solid rgb(251 191 36 / 35%)}.warn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{width:18px;height:18px;font-size:18px}"]})};function bt(n,d){n&1&&(i(0,"div",11),l(1,"mat-spinner",12),i(2,"p"),r(3,"Confirmando pago con Stripe\u2026"),t()())}function ht(n,d){if(n&1){let e=ke();i(0,"p",13)(1,"mat-icon",8),r(2,"check_circle"),t(),r(3," \xA1Suscripci\xF3n activada! Ya puedes acceder al panel. "),t(),i(4,"button",14),p("click",function(){me(e);let o=k();return ue(o.goDashboard())}),r(5,"Ir al panel"),t()}}function _t(n,d){if(n&1&&(i(0,"p",15)(1,"mat-icon",8),r(2,"error_outline"),t(),r(3),t(),i(4,"a",16),r(5,"Reintentar pago"),t()),n&2){let e=k();s(3),Ee(" ",e.errorMsg()," ")}}var ee=class n{route=c(Ge);router=c(Ne);subs=c(W);messages=c(D);auth=c(w);loading=_(!0);ok=_(!1);errorMsg=_("");constructor(){N(()=>this.verifyPayment())}verifyPayment(){let d=this.route.snapshot.queryParamMap.get("session_id")??"";if(!d){this.loading.set(!1),this.errorMsg.set("Falta el identificador de sesi\xF3n de Stripe");return}this.subs.verifySession(d).subscribe({next:e=>{e.active&&e.subscription?(this.auth.patchSubscription(e.subscription),this.ok.set(!0),setTimeout(()=>this.messages.success("Pago confirmado"),0)):this.errorMsg.set("El pago a\xFAn no est\xE1 activo"),this.loading.set(!1)},error:e=>{this.loading.set(!1),this.errorMsg.set(e?.error?.error??"No se pudo verificar el pago")}})}goDashboard(){this.router.navigate(["/taller/dashboard"])}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=f({type:n,selectors:[["app-subscription-success-page"]],decls:20,vars:1,consts:[[1,"app-auth-page"],["aria-hidden","true",1,"app-auth-bg"],[1,"app-auth-orb","app-auth-orb--1"],[1,"app-auth-orb","app-auth-orb--2"],[1,"app-auth-orb","app-auth-orb--3"],[1,"app-auth-shell"],[1,"app-auth-brand"],[1,"app-auth-logo"],["aria-hidden","true"],[1,"app-auth-brand-name"],[1,"app-auth-card"],[1,"center"],["diameter","40"],[1,"ok"],["mat-flat-button","","color","primary",3,"click"],[1,"err"],["mat-button","","routerLink","/taller/suscripcion"]],template:function(e,a){e&1&&(i(0,"div",0)(1,"div",1),l(2,"span",2)(3,"span",3)(4,"span",4),t(),i(5,"div",5)(6,"header",6)(7,"div",7)(8,"mat-icon",8),r(9,"build_circle"),t()(),i(10,"h1",9),r(11,"Mecanica"),t()(),i(12,"mat-card",10)(13,"mat-card-header")(14,"mat-card-title"),r(15,"Suscripci\xF3n"),t()(),i(16,"mat-card-content"),g(17,bt,4,0,"div",11)(18,ht,6,0)(19,_t,6,1),t()()()()),e&2&&(s(17),v(a.loading()?17:a.ok()?18:19))},dependencies:[S,E,x,M,I,$e,R,P,C],styles:[".center[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:12px;padding:1rem 0;color:var(--app-text-muted)}.ok[_ngcontent-%COMP%], .err[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:.5rem;margin-bottom:1rem;line-height:1.45}.ok[_ngcontent-%COMP%]{color:#047857}.err[_ngcontent-%COMP%]{color:#dc2626}.ok[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .err[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{flex-shrink:0;width:22px;height:22px;font-size:22px}"]})};var Ei=[{path:"login",component:Y},{path:"register",component:X},{path:"subscription-success",component:ee},{path:"",pathMatch:"full",redirectTo:"login"}];export{Ei as AUTH_ROUTES};
