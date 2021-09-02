webpackJsonpCoveo__temporary([27],{126:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(90),i=function(){function t(){}return t.shouldDrawFacetSlider=function(t,e){return n.ResponsiveDropdownContent.isTargetInsideOpenedDropdown(e)||!this.isSmallFacetActivated(t)},t.isSmallTabsActivated=function(t){return t.hasClass(this.smallTabsClassName)},t.isSmallFacetActivated=function(t){return t.hasClass(this.smallFacetClassName)},t.isSmallRecommendationActivated=function(t){return t.hasClass(this.smallRecommendationClassName)},t.activateSmallTabs=function(t){t.addClass(this.smallTabsClassName)},t.deactivateSmallTabs=function(t){t.removeClass(this.smallTabsClassName)},t.activateSmallFacet=function(t){t.addClass(this.smallFacetClassName)},t.deactivateSmallFacet=function(t){t.removeClass(this.smallFacetClassName)},t.activateSmallRecommendation=function(t){t.addClass(this.smallRecommendationClassName)},t.deactivateSmallRecommendation=function(t){t.removeClass(this.smallRecommendationClassName)},t.smallTabsClassName="coveo-small-tabs",t.smallFacetClassName="coveo-small-facets",t.smallRecommendationClassName="coveo-small-recommendation",t}();e.ResponsiveComponentsUtils=i},197:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0}),o(669);var i=o(0),s=o(17),a=o(11),r=o(3),l=o(5),d=o(18),p=o(13),c=o(51),h=o(16),u=o(1),m=o(4),f=o(10),b=o(7),v=o(8),C=o(2),S=o(670),w=function(t){function e(o,n,i){var r=t.call(this,o,e.ID,i)||this;return r.element=o,r.options=n,r.options=v.ComponentOptions.initComponentOptions(o,e,n),r.bind.onRootElement(a.QueryEvents.buildingQuery,function(t){return r.handleBuildingQuery(t)}),r.bind.onRootElement(s.InitializationEvents.afterInitialization,function(){return r.handleAfterInitialization()}),r.bind.onQueryState(d.MODEL_EVENTS.CHANGE_ONE,p.QUERY_STATE_ATTRIBUTES.T,function(t){return r.handleQueryStateChanged(t)}),(new h.AccessibleButton).withElement(o).withSelectAction(function(){return r.select()}).withTitle(r.options.caption).withOwner(r.bind).build(),r.render(),S.ResponsiveTabs.init(r.root,r,r.options),r}return n(e,t),e.prototype.select=function(){if(!this.disabled){var t={t:this.options.id,sort:this.options.sort||p.QueryStateModel.defaultAttributes.sort};this.options.layout&&(t.layout=this.options.layout),this.queryStateModel.setMultiple(t),this.usageAnalytics.logSearchEvent(f.analyticsActionCauseList.interfaceChange,{interfaceChangeTo:this.options.id}),this.queryController.executeQuery()}},e.prototype.isElementIncludedInTab=function(t){l.Assert.exists(t);var e=this.splitListOfTabs(t.getAttribute("data-tab")),o=this.splitListOfTabs(t.getAttribute("data-tab-not"));return l.Assert.check(!(0!=e.length&&0!=o.length),"You cannot both explicitly include and exclude an element from tabs."),0!=e.length&&-1!=i.indexOf(e,this.options.id)||0!=o.length&&-1==i.indexOf(o,this.options.id)||0==e.length&&0==o.length},e.prototype.render=function(){var t=this.options.icon;if(m.Utils.isNonEmptyString(t)){var e=u.$$("span").el;u.$$(e).addClass(["coveo-icon",t]),this.element.insertBefore(e,this.element.firstChild)}var o=this.options.caption;if(m.Utils.isNonEmptyString(o)){var n=document.createElement("p");u.$$(n).text(o),this.element.appendChild(n)}},e.prototype.handleBuildingQuery=function(t){l.Assert.exists(t),!this.disabled&&this.isSelected()&&(t.queryBuilder.tab=this.options.id,m.Utils.isNonEmptyString(this.options.expression)&&(this.options.constant?t.queryBuilder.constantExpression.add(this.options.expression):t.queryBuilder.advancedExpression.add(this.options.expression)),this.options.enableDuplicateFiltering&&(t.queryBuilder.enableDuplicateFiltering=!0),null!=this.options.pipeline&&(t.queryBuilder.pipeline=this.options.pipeline),null!=this.options.maximumAge&&(t.queryBuilder.maximumAge=this.options.maximumAge))},e.prototype.handleQueryStateChanged=function(t){l.Assert.exists(t),!this.disabled&&this.isSelected()?(u.$$(this.element).addClass("coveo-selected"),this.queryController.setEndpoint(this.options.endpoint),this.showAndHideAppropriateElements()):u.$$(this.element).removeClass("coveo-selected")},e.prototype.handleAfterInitialization=function(){this.isSelected()&&this.options.layout&&this.queryStateModel.set(p.QUERY_STATE_ATTRIBUTES.LAYOUT,this.options.layout)},e.prototype.isSelected=function(){return this.queryStateModel.get(p.QueryStateModel.attributesEnum.t)==this.options.id},e.prototype.showAndHideAppropriateElements=function(){var t=this,e=[],o=[];i.each(u.$$(this.root).findAll("[data-tab],[data-tab-not]"),function(n){t.isElementIncludedInTab(n)?(t.toggleAllComponentsUnder(n,!0),e.push(n)):(t.toggleAllComponentsUnder(n,!1),o.push(n))}),u.$$(this.root).one(a.QueryEvents.querySuccess,function(){i.each(e,function(t){return u.$$(t).removeClass("coveo-tab-disabled")}),i.each(o,function(t){return u.$$(t).addClass("coveo-tab-disabled")})})},e.prototype.splitListOfTabs=function(t){return m.Utils.exists(t)?i.map(t.split(","),function(t){return m.Utils.trim(t)}):[]},e.prototype.toggleAllComponentsUnder=function(t,e){l.Assert.exists(t);var o=function(t){var o=b.Component.get(t,void 0,!0);o&&(e?o.enable():o.disable())};o(t),i.each(u.$$(t).findAll("*"),function(t){o(t)})},e.prototype.enable=function(){t.prototype.enable.call(this),this.element.style.display=""},e.prototype.disable=function(){t.prototype.disable.call(this),this.element.style.display="none"},e.ID="Tab",e.doExport=function(){r.exportGlobally({Tab:e})},e.options={id:v.ComponentOptions.buildStringOption({required:!0,section:"Common Options"}),caption:v.ComponentOptions.buildLocalizedStringOption({required:!0,section:"Common Options"}),icon:v.ComponentOptions.buildStringOption(),expression:v.ComponentOptions.buildQueryExpressionOption({section:"Common Options"}),endpoint:v.ComponentOptions.buildCustomOption(function(t){return null!=t?c.SearchEndpoint.endpoints[t]:null}),sort:v.ComponentOptions.buildStringOption(),layout:v.ComponentOptions.buildStringOption(),constant:v.ComponentOptions.buildBooleanOption({defaultValue:!0,section:"Filtering"}),enableDuplicateFiltering:v.ComponentOptions.buildBooleanOption({defaultValue:!1}),pipeline:v.ComponentOptions.buildStringOption(),maximumAge:v.ComponentOptions.buildNumberOption(),enableResponsiveMode:v.ComponentOptions.buildBooleanOption({defaultValue:!0,section:"ResponsiveOptions"}),dropdownHeaderLabel:v.ComponentOptions.buildLocalizedStringOption({section:"ResponsiveOptions"})},e}(b.Component);e.Tab=w,C.Initialization.registerAutoCreateComponent(w)},669:function(t,e){},670:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o(671);var n=o(0),i=o(17),s=o(9),a=o(6),r=o(1),l=o(133),d=o(15),p=o(12),c=o(4),h=o(7),u=o(19),m=o(197),f=o(53),b=o(60),v=o(126),C=o(16),S=o(94),w=o(25),y=function(){function t(t,e){this.coveoRoot=t,this.ID=e,this.ignoreNextDocumentClick=!1,this.dropdownHeaderLabel=this.getDropdownHeaderLabel(),this.searchInterface=h.Component.get(this.coveoRoot.el,u.SearchInterface,!1),this.dropdownContent=this.buildDropdownContent(),this.dropdownHeader=this.buildDropdownHeader(),this.bindDropdownContentEvents(),this.bindDropdownHeaderEvents(),this.tabSection=r.$$(this.coveoRoot.find(".coveo-tab-section")),this.manageTabSwapping(),this.bindNukeEvents(),this.initialTabOrder=this.tabsInTabSection.slice()}return t.init=function(e,o,n){if(this.logger=new s.Logger("ResponsiveTabs"),!r.$$(e).find(".coveo-tab-section"))return void this.logger.info("No element with class coveo-tab-section. Responsive tabs cannot be enabled.");b.ResponsiveComponentsManager.register(t,r.$$(e),m.Tab.ID,o,n)},t.prototype.handleResizeEvent=function(){this.needSmallMode()&&!v.ResponsiveComponentsUtils.isSmallTabsActivated(this.coveoRoot)?this.changeToSmallMode():!this.needSmallMode()&&v.ResponsiveComponentsUtils.isSmallTabsActivated(this.coveoRoot)&&this.changeToLargeMode(),this.shouldAddTabsToDropdown()?this.addTabsToDropdown():this.shouldRemoveTabsFromDropdown()&&this.removeTabsFromDropdown(),this.isDropdownOpen()&&this.positionPopup()},t.prototype.needSmallMode=function(){if(!this.searchInterface)return this.shouldAutoModeResolveToSmall();switch(this.searchInterface.responsiveComponents.getResponsiveMode()){case"small":case"medium":return!0;case"auto":default:return this.shouldAutoModeResolveToSmall()}},t.prototype.shouldAutoModeResolveToSmall=function(){var t=this.searchInterface?this.searchInterface.responsiveComponents.getMediumScreenWidth():(new f.ResponsiveComponents).getMediumScreenWidth();return this.coveoRoot.width()<=t||(v.ResponsiveComponentsUtils.isSmallTabsActivated(this.coveoRoot)?this.isLargeFormatOverflowing():this.isOverflowing(this.tabSection.el))},t.prototype.changeToSmallMode=function(){v.ResponsiveComponentsUtils.activateSmallTabs(this.coveoRoot)},t.prototype.changeToLargeMode=function(){this.emptyDropdown(),this.cleanUpDropdown(),v.ResponsiveComponentsUtils.deactivateSmallTabs(this.coveoRoot)},t.prototype.shouldAddTabsToDropdown=function(){return(this.isOverflowing(this.tabSection.el)||0===this.tabSection.el.clientWidth)&&v.ResponsiveComponentsUtils.isSmallTabsActivated(this.coveoRoot)},t.prototype.addTabsToDropdown=function(){var e;if(!this.tabSection.find("."+t.TAB_IN_DROPDOWN_HEADER_CSS_CLASS)){var o=this.tabSection.find(".coveo-facet-dropdown-header");o?this.dropdownHeader.insertBefore(o):this.tabSection.el.appendChild(this.dropdownHeader.el)}for(var n=this.initialTabOrder.length-1;n>=0&&(e=this.initialTabOrder[n],this.tabIsSelected(e)&&n>0&&(e=this.initialTabOrder[--n]),this.addToDropdownIfNeeded(e),this.isOverflowing(this.tabSection.el));n--);},t.prototype.shouldRemoveTabsFromDropdown=function(){return!this.isOverflowing(this.tabSection.el)&&0!==this.tabSection.el.clientWidth&&v.ResponsiveComponentsUtils.isSmallTabsActivated(this.coveoRoot)&&!this.isDropdownEmpty()},t.prototype.removeTabsFromDropdown=function(){for(var t,e=this,o=this.tabsInTabDropdown;!this.isOverflowing(this.tabSection.el)&&!this.isDropdownEmpty();)t=o.shift(),this.removeFromDropdownIfNeeded(t),this.fromDropdownToTabSection(r.$$(t));if(this.isOverflowing(this.tabSection.el)){var i=n.filter(this.tabsInTabSection,function(t){return!e.tabIsSelected(t)});this.addToDropdownIfNeeded(i.pop())}this.isDropdownEmpty()&&this.cleanUpDropdown()},t.prototype.emptyDropdown=function(){var t=this;if(!this.isDropdownEmpty()){for(var e=this.tabsInTabDropdown;!this.isDropdownEmpty();){var o=e.shift();this.removeFromDropdownIfNeeded(o)}this.initialTabOrder.forEach(function(e){return t.tabSection.append(e)})}},t.prototype.isLargeFormatOverflowing=function(){var e=r.$$(this.tabSection.el.cloneNode(!0)),o=e.find("."+t.TAB_IN_DROPDOWN_HEADER_CSS_CLASS);o&&e.el.removeChild(o),e.el.style.position="absolute",e.el.style.visibility="hidden",this.isDropdownEmpty()||n.each(this.dropdownContent.findAll(".CoveoTab"),function(t){e.el.appendChild(t.cloneNode(!0))}),e.insertBefore(this.tabSection.el),v.ResponsiveComponentsUtils.deactivateSmallTabs(this.coveoRoot);var i=this.isOverflowing(this.tabSection.el)||this.isOverflowing(e.el);return v.ResponsiveComponentsUtils.activateSmallTabs(this.coveoRoot),e.detach(),i},t.prototype.isOverflowing=function(t){return t.clientWidth<t.scrollWidth},t.prototype.buildDropdownHeader=function(){var e=r.$$("a",{className:"coveo-dropdown-header "+t.TAB_IN_DROPDOWN_HEADER_CSS_CLASS}),o=r.$$("p");o.text(this.dropdownHeaderLabel);var n=r.$$("span",{className:"coveo-more-tabs"},p.SVGIcons.icons.arrowDown);return d.SVGDom.addClassToSVGInContainer(n.el,"coveo-more-tabs-svg"),o.el.appendChild(n.el),e.el.appendChild(o.el),e},t.prototype.bindDropdownHeaderEvents=function(){var t=this,e=function(e){t.isDropdownOpen()?t.closeDropdown():t.openDropdown(),"click"===e.type&&(t.ignoreNextDocumentClick=!0)};(new C.AccessibleButton).withElement(this.dropdownHeader).withSelectAction(e).withLabel(this.getDropdownHeaderLabel()).build()},t.prototype.buildDropdownContent=function(){var t=r.$$("div",{className:"coveo-tab-list-container "+u.SearchInterface.SMALL_INTERFACE_CLASS_NAME}),e=r.$$("ol",{className:"coveo-tab-list"});return t.el.appendChild(e.el),t},t.prototype.bindDropdownContentEvents=function(){var t=this;this.dropdownClickListener=function(){t.isDropdownOpen()&&(t.ignoreNextDocumentClick=!0)},this.documentClickListener=function(e){t.ignoreNextDocumentClick||t.closeDropdown(),t.ignoreNextDocumentClick=!1},r.$$(this.dropdownHeader).on("click",this.dropdownClickListener),r.$$(this.dropdownContent).on("click",this.dropdownClickListener)},t.prototype.isDropdownOpen=function(){return this.dropdownHeader.hasClass(t.ACTIVE_DROPDOWN_CSS_CLASS)},t.prototype.closeDropdown=function(){r.$$(document.documentElement).off("click",this.documentClickListener),this.dropdownContent.detach(),this.dropdownHeader.removeClass(t.ACTIVE_DROPDOWN_CSS_CLASS)},t.prototype.openDropdown=function(){r.$$(document.documentElement).on("click",this.documentClickListener),this.positionPopup(),this.dropdownHeader.addClass(t.ACTIVE_DROPDOWN_CSS_CLASS)},t.prototype.addToDropdownIfNeeded=function(e){if(this.canAddTabToDropdown(e)){r.$$(e).addClass(t.TAB_IN_DROPDOWN_CSS_CLASS);var o=r.$$(this.dropdownContent.find("ol")),n=r.$$("li",null,e);o.prepend(n.el)}},t.prototype.removeFromDropdownIfNeeded=function(e){this.canRemoveTabFromDropdown(e)&&(r.$$(e).removeClass(t.TAB_IN_DROPDOWN_CSS_CLASS),r.$$(e.parentElement).detach())},t.prototype.canAddTabToDropdown=function(t){return t&&!this.tabIsInDropdown(t)&&this.dropdownHeader},t.prototype.canRemoveTabFromDropdown=function(t){return t&&this.tabIsInDropdown(t)&&this.dropdownContent},t.prototype.cleanUpDropdown=function(){this.dropdownHeader.removeClass(t.ACTIVE_DROPDOWN_CSS_CLASS),this.dropdownHeader.detach(),this.dropdownContent.detach()},t.prototype.isDropdownEmpty=function(){if(this.dropdownContent){return 0==this.dropdownContent.findAll(".CoveoTab").length}return!1},t.prototype.manageTabSwapping=function(){var e=this;n.each(this.coveoRoot.findAll("."+h.Component.computeCssClassNameForType(this.ID)),function(o){var n=r.$$(o),i=function(o){var s=e.tabsInTabSection.pop();"opacity"==o.propertyName&&("0"==n.el.style.opacity?(r.$$(s).addClass(t.TAB_IN_DROPDOWN_CSS_CLASS),n.replaceWith(s),n.removeClass(t.TAB_IN_DROPDOWN_CSS_CLASS),e.fromDropdownToTabSection(n),window.getComputedStyle(n.el).opacity,window.getComputedStyle(s).opacity,n.el.style.opacity=s.style.opacity="1"):"1"==n.el.style.opacity&&(e.closeDropdown(),l.EventsUtils.removePrefixedEvent(n.el,"TransitionEnd",i),e.handleResizeEvent()))},s=function(){if(e.tabIsInDropdown(n)){var t=e.tabsInTabSection.pop();t&&(l.EventsUtils.addPrefixedEvent(n.el,"TransitionEnd",i),n.el.style.opacity=t.style.opacity="0")}};n.on("click",function(){return s()}),n.on("keyup",w.KeyboardUtils.keypressAction(w.KEYBOARD.ENTER,s)),n.on("blur",function(t){t.relatedTarget&&!e.tabIsInDropdown(t.relatedTarget)&&e.closeDropdown()})})},t.prototype.bindNukeEvents=function(){var t=this;r.$$(this.coveoRoot).on(i.InitializationEvents.nuke,function(){r.$$(document.documentElement).off("click",t.documentClickListener)})},t.prototype.positionPopup=function(){this.dropdownContent.insertAfter(this.dropdownHeader.el),new S.default(this.dropdownHeader.el,this.dropdownContent.el,{modifiers:{preventOverflow:{boundariesElement:this.coveoRoot.el}}})},t.prototype.fromDropdownToTabSection=function(t){var e=n.last(this.tabsInTabSection);if(!e)return void this.tabSection.prepend(t.el);this.initialTabOrder.indexOf(t.el)>this.initialTabOrder.indexOf(e)?t.insertAfter(e):t.insertBefore(e)},t.prototype.getDropdownHeaderLabel=function(){var e;return n.each(r.$$(this.coveoRoot.find(".coveo-tab-section")).findAll("."+h.Component.computeCssClassName(m.Tab)),function(t){var o=h.Component.get(t,m.Tab);!e&&o&&o.options.dropdownHeaderLabel&&(e=o.options.dropdownHeaderLabel)}),e||(e=a.l(t.DROPDOWN_HEADER_LABEL_DEFAULT_VALUE)),e},t.prototype.tabIsSelected=function(t){return r.$$(t).hasClass("coveo-selected")},t.prototype.tabIsInDropdown=function(e){return r.$$(e).hasClass(t.TAB_IN_DROPDOWN_CSS_CLASS)},Object.defineProperty(t.prototype,"tabsInTabSection",{get:function(){var t=this,e=[];return n.each(this.tabSection.children(),function(o){if(c.Utils.isHtmlElement(o)){var n=r.$$(o),i=n.hasClass(h.Component.computeCssClassNameForType(t.ID));!t.tabIsInDropdown(n)&&i&&e.push(n.el)}}),e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tabsInTabDropdown",{get:function(){return this.dropdownContent?this.dropdownContent.findAll("."+t.TAB_IN_DROPDOWN_CSS_CLASS):[]},enumerable:!0,configurable:!0}),t.DROPDOWN_HEADER_LABEL_DEFAULT_VALUE="More",t.TAB_IN_DROPDOWN_CSS_CLASS="coveo-tab-dropdown",t.TAB_IN_DROPDOWN_HEADER_CSS_CLASS=t.TAB_IN_DROPDOWN_CSS_CLASS+"-header",t.ACTIVE_DROPDOWN_CSS_CLASS="coveo-dropdown-header-active",t}();e.ResponsiveTabs=y},671:function(t,e){}});
//# sourceMappingURL=Tab.min__1b53ca9d63ffebcebf91.js.map