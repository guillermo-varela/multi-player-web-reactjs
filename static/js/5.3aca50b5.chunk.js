(this["webpackJsonpmulti-player-web-reactjs"]=this["webpackJsonpmulti-player-web-reactjs"]||[]).push([[5],{101:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(89),o=a(66);t.a=function(e){var t=e.variant;return r.a.createElement(i.a,{animation:"border",variant:t,role:"status"},r.a.createElement("span",{className:"sr-only"},r.a.createElement(o.a,{id:"root.loading"})))}},102:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(154),o=a(66);t.a=function(e){var t=e.message;return r.a.createElement(i.a,{variant:"danger"},t||r.a.createElement("span",null,r.a.createElement(o.a,{id:"component.error.message"})))}},120:function(e,t,a){"use strict";var n=a(77),r=a(0),i=a.n(r),o=a(114),l=a(113),c=a(80),s=a(89),u=a(81),m=a(183),p=a(184),f=a(26),d=a(66),b=a(39),g=a(86),h=a(17);t.a=function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),E=a[0],v=a[1],y=Object(b.a)((function(e){return e.authentication})),O=Object(f.b)(),C=Object(r.useRef)(null),_=e.match;return Object(r.useEffect)((function(){v(y.isErrorSignOut),y.isErrorSignOut&&setTimeout((function(){return v(!1)}),5e3)}),[y.isErrorSignOut]),i.a.createElement(o.a,null,y.user?i.a.createElement(l.a.Text,null,i.a.createElement("span",{className:"align-middle"},y.user.username.substr(0,y.user.username.indexOf("@")),":\xa0"),y.isPendingSignOut?i.a.createElement(s.a,{animation:"border",size:"sm",variant:"light"}):i.a.createElement(u.a,{variant:"link",className:"menu-link",ref:C,onClick:function(){O(Object(g.d)())}},i.a.createElement(d.a,{id:"menu.signOut"}))):i.a.createElement(c.LinkContainer,{to:"".concat(_.url).concat(h.f)},i.a.createElement(o.a.Link,{active:!1},i.a.createElement(d.a,{id:"menu.signIn"}))),C.current&&i.a.createElement(m.a,{placement:"bottom",show:E,target:C.current},i.a.createElement(p.a,{id:"popover-sign-out"},i.a.createElement(p.a.Title,{as:"h3"},i.a.createElement(d.a,{id:"menu.signOut.error.title"})),i.a.createElement(p.a.Content,null,i.a.createElement(d.a,{id:"menu.signOut.error.message"})))))}},126:function(e,t,a){"use strict";var n=a(0),r=a(26),i=a(39),o=a(86);t.a=function(){var e=Object(i.a)((function(e){return e.authentication})),t=Object(r.b)();Object(n.useEffect)((function(){t(Object(o.a)()),setTimeout((function(){t(Object(o.b)())}),3e3)}),[]),Object(n.useEffect)((function(){e.user&&!e.isPendingSignOut&&!e.isErrorSignOut&&new Date>=e.user.sessionExpirationDate&&t(Object(o.e)())}))}},127:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(128);t.a=function(){return r.a.createElement("footer",{className:"footer mt-auto py-3"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"text-muted"},(new Date).getFullYear())))}},128:function(e,t,a){},130:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(129),o=a(66);t.a=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,r.a.createElement(o.a,{id:"component.about.hello"})),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement(o.a,{id:"component.about.introduction"})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://reactjs.org/docs/hooks-intro.html",target:"_blank",rel:"noopener noreferrer"},"Hooks")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://reacttraining.com/react-router/web/",target:"_blank",rel:"noopener noreferrer"},"React Router")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://react-bootstrap.github.io/",target:"_blank",rel:"noopener noreferrer"},"React Bootstrap")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/react-bootstrap/react-router-bootstrap",target:"_blank",rel:"noopener noreferrer"},"react-router-bootstrap")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"},"SASS")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://reactjs.org/docs/code-splitting.html#route-based-code-splitting",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{id:"component.about.codeSplit"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://redux.js.org/recipes/usage-with-typescript/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{id:"component.about.redux.typescript"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://jaredpalmer.com/formik",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{id:"component.about.forms.formik"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/formatjs/react-intl",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{id:"component.about.internationalization"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{id:"component.about.rest.webflux"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://connect2id.com/products/nimbus-jose-jwt",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{id:"component.about.jwt"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#use-of-custom-request-headers",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{id:"component.about.csrf"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://swagger.io/resources/open-api/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{id:"component.about.openAPI"})))),r.a.createElement("p",null,r.a.createElement(o.a,{id:"component.about.code"})),r.a.createElement("ul",null,r.a.createElement("li",null,"Backend:\xa0",r.a.createElement("a",{href:"https://github.com/guillermo-varela/multi-player-auth",target:"_blank",rel:"noopener noreferrer"},"https://github.com/guillermo-varela/multi-player-auth")),r.a.createElement("li",null,"Frontend:\xa0",r.a.createElement("a",{href:"https://github.com/guillermo-varela/multi-player-web-reactjs",target:"_blank",rel:"noopener noreferrer"},"https://github.com/guillermo-varela/multi-player-web-reactjs"))),r.a.createElement("p",null,r.a.createElement(o.a,{id:"component.about.pixabay",values:{link:r.a.createElement("a",{href:"https://pixabay.com/api/docs",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{id:"component.about.pixabay.name"}))}})))}},131:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(75);a(132);t.a=function(e){var t=e.item;e.index;return t.type===i.a.IMAGE?r.a.createElement("div",null,r.a.createElement("h1",null,t.title),r.a.createElement("div",{className:"container-resource"},r.a.createElement("img",{alt:t.title,src:t.downloadUrl}))):r.a.createElement("div",null,r.a.createElement("h1",null,t.title),r.a.createElement("div",{className:"container-resource"},r.a.createElement("video",{src:t.downloadUrl,poster:t.previewUrl,controls:!0,preload:"none"})))}},132:function(e,t,a){},133:function(e,t,a){"use strict";var n=a(190),r=a(0),i=a.n(r),o=a(14),l=a(17),c=a(39);t.a=function(e){var t=e.component,a=Object(n.a)(e,["component"]),r=Object(c.a)((function(e){return e.authentication}));return i.a.createElement(o.d,Object.assign({},a,{render:function(e){return r.user?i.a.createElement(t,e):i.a.createElement(o.c,{to:{pathname:a.path.substring(0,a.path.lastIndexOf("/"))+l.f,state:{referrer:e.location}}})}}))}},134:function(e,t,a){"use strict";var n=a(87),r=a.n(n),i=a(77),o=a(88),l=a(0),c=a.n(l),s=a(14),u=a(179),m=a(81),p=a(89),f=a(181),d=a(177),b=a(26),g=a(220),h=a(66),E=a(102),v=a(86),y=a(39);a(147);t.a=function(e){var t=e.variant,a=Object(y.a)((function(e){return e.authentication})),n=Object(g.a)(),l=Object(b.b)(),O=Object(s.l)(),C=(O.state||{referrer:{pathname:O.pathname.substring(0,O.pathname.lastIndexOf("/"))}}).referrer;return a.user?c.a.createElement(s.c,{to:C}):c.a.createElement(f.a,{initialValues:{username:"user@test.com",password:"user@test.com"},validationSchema:d.a({username:d.b().email(n.formatMessage({id:"component.signin.invalid.email"})).required(n.formatMessage({id:"component.signin.empty.email"})),password:d.b().required(n.formatMessage({id:"component.signin.invalid.password"}))}),onSubmit:function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new FormData,Object.entries(t).forEach((function(e){var t=Object(i.a)(e,2),n=t[0],r=t[1];return a.append(n,r)})),e.abrupt("return",l(Object(v.c)(a)));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},(function(e){return c.a.createElement(u.a,{noValidate:!0,onSubmit:e.handleSubmit,className:"loginForm"},c.a.createElement(u.a.Group,{controlId:"formUsername"},c.a.createElement(u.a.Label,null,c.a.createElement(h.a,{id:"component.signin.label.email"})),c.a.createElement(u.a.Control,Object.assign({type:"email",name:"username",autoFocus:!0,isValid:e.touched.username&&!e.errors.username,isInvalid:e.touched.username&&!!e.errors.username},e.getFieldProps("username"))),c.a.createElement(u.a.Control.Feedback,{type:"invalid"},e.errors.username),c.a.createElement(u.a.Text,{className:"text-muted"},c.a.createElement(h.a,{id:"component.signin.credentials.hint"}))),c.a.createElement(u.a.Group,{controlId:"formPassword"},c.a.createElement(u.a.Label,null,c.a.createElement(h.a,{id:"component.signin.label.password"})),c.a.createElement(u.a.Control,Object.assign({type:"password",name:"password",isValid:e.touched.password&&!e.errors.password,isInvalid:e.touched.password&&!!e.errors.password},e.getFieldProps("password"))),c.a.createElement(u.a.Control.Feedback,{type:"invalid"},e.errors.password)),c.a.createElement(m.a,{variant:t,type:"submit",size:"lg",disabled:e.isSubmitting||a.isPendingSignIn,block:!0},e.isSubmitting||a.isPendingSignIn?c.a.createElement("div",null,c.a.createElement(p.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),"\xa0",c.a.createElement(h.a,{id:"component.signin.button.sending"})):c.a.createElement(h.a,{id:"component.signin.button.submit"})),a.isErrorSignIn&&c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement(E.a,{message:a.isBadCredentials?n.formatMessage({id:"component.signin.incorrect.credentials"}):""})))}))}},147:function(e,t,a){},152:function(e,t,a){"use strict";var n=a(11),r=a(77),i=a(0),o=a(75),l=a(87),c=a.n(l),s=a(88),u=a(43),m=a(44),p=a(41),f=a(18),d=function e(t,a,n,r){Object(f.a)(this,e),this.title=void 0,this.previewUrl=void 0,this.downloadUrl=void 0,this.type=void 0,this.title=t,this.previewUrl=a,this.downloadUrl=n,this.type=r},b={en:u,es:m},g=Object({NODE_ENV:"production",PUBLIC_URL:"/multi-player-web-reactjs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_AUTHENTICATION_API_HOST:"https://multi-player-auth.herokuapp.com",REACT_APP_BASENAME:"/multi-player-web-reactjs/"}).REACT_APP_PIXABAY_API_KEY,h="&key=".concat(g,"&safesearch=true&page="),E=function(){var e=Object(s.a)(c.a.mark((function e(){var t,a,n,r,i,l,s,u,m=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.length>0&&void 0!==m[0]?m[0]:"",a=m.length>1&&void 0!==m[1]?m[1]:"",n=m.length>2?m[2]:void 0,r=m.length>3?m[3]:void 0,e.next=6,fetch("".concat("https://pixabay.com/api/","?image_type=photo").concat(h).concat(n,"&q=").concat(t,"&category=").concat(a,"&per_page=").concat(r));case 6:return i=e.sent,e.next=9,i.json();case 9:return l=e.sent,s=b[Object(p.a)()]["multimedia.type.image"],u=l.hits.map((function(e,t){return new d("".concat(s," ").concat(y(n,r,t)),e.previewURL,e.webformatURL,o.a.IMAGE)})),e.abrupt("return",Promise.resolve({items:u,totalItems:l.totalHits}));case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(s.a)(c.a.mark((function e(){var t,a,n,r,i,l,s,u,m=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.length>0&&void 0!==m[0]?m[0]:"",a=m.length>1&&void 0!==m[1]?m[1]:"",n=m.length>2?m[2]:void 0,r=m.length>3?m[3]:void 0,e.next=6,fetch("".concat("https://pixabay.com/api/","videos/?video_type=film").concat(h).concat(n,"&q=").concat(t,"&category=").concat(a,"&per_page=").concat(r));case 6:return i=e.sent,e.next=9,i.json();case 9:return l=e.sent,s=b[Object(p.a)()]["multimedia.type.video"],u=l.hits.map((function(e,t){var a=e.videos.large&&e.videos.large.url?e.videos.large.url:e.videos.medium.url;return new d("".concat(s," ").concat(y(n,r,t)),"https://dummyimage.com/1280x720&text=".concat(s,"+").concat(y(n,r,t)),a,o.a.VIDEO)})),e.abrupt("return",Promise.resolve({items:u,totalItems:l.totalHits}));case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(e,t,a){return e*t-(t-a)+1},O={isPending:!1,isError:!1,items:[],totalItems:0,currentPage:1,hasMoreItems:!0};t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],s=Object(i.useState)(O),u=Object(r.a)(s,2),m=u[0],p=u[1];return Object(i.useEffect)((function(){var r=!0;return 1===m.currentPage&&p(Object(n.a)({},m,{isPending:!0})),(e===o.a.IMAGE?E(a,l,m.currentPage,t):v(a,l,m.currentPage,t)).then((function(e){r&&p(Object(n.a)({},m,{isPending:!1,items:c?m.items.concat(e.items):e.items,totalItems:e.totalItems,hasMoreItems:m.items.length+e.items.length<e.totalItems}))})).catch((function(){r&&p(Object(n.a)({},m,{isError:!0,isPending:!1}))})),function(){r=!1}}),[e,m.currentPage]),[m,p]}},153:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(111),o=a(26),l=a(220),c=a(39),s=a(8),u=a(41),m=function(e){return{type:s.a.CHANGE_LOCALE,payload:Object(u.b)(e)}};t.a=function(){var e=Object(c.a)((function(e){return e.locale})),t=Object(o.b)(),a=Object(l.a)();return r.a.createElement(i.a,{id:"dropdownLocale",className:"menu-link",title:"".concat(a.formatMessage({id:"root.locale.label"}),": ").concat(e)},r.a.createElement(i.a.Item,{as:"button",onClick:function(){return t(m("en"))}},"English"),r.a.createElement(i.a.Item,{as:"button",onClick:function(){return t(m("es"))}},"Espa\xf1ol"))}},212:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=n?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}a.default=e,t&&t.set(e,a);return a}(a(0)),r=c(a(16)),i=c(a(213)),o=c(a(214)),l=c(a(68));function c(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h=function(e){function t(){return m(this,t),f(this,d(t).apply(this,arguments))}var a,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),a=t,(r=[{key:"isFirstPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"isPrevPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isNextPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isLastPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"buildPages",value:function(){for(var e=[],t=this.props,a=t.itemsCountPerPage,r=t.pageRangeDisplayed,c=t.activePage,s=t.prevPageText,u=t.nextPageText,m=t.firstPageText,p=t.lastPageText,f=t.totalItemsCount,d=t.onChange,b=t.activeClass,g=t.itemClass,h=t.itemClassFirst,E=t.itemClassPrev,v=t.itemClassNext,y=t.itemClassLast,O=t.activeLinkClass,C=t.disabledClass,_=(t.hideDisabled,t.hideNavigation,t.linkClass),j=t.linkClassFirst,k=t.linkClassPrev,P=t.linkClassNext,x=t.linkClassLast,w=(t.hideFirstLastPages,t.getPageUrl),N=new i.default(a,r).build(f,c),I=N.first_page;I<=N.last_page;I++)e.push(n.default.createElement(o.default,{isActive:I===c,key:I,href:w(I),pageNumber:I,pageText:I+"",onClick:d,itemClass:g,linkClass:_,activeClass:b,activeLinkClass:O,ariaLabel:"Go to page number ".concat(I)}));return this.isPrevPageVisible(N.has_previous_page)&&e.unshift(n.default.createElement(o.default,{key:"prev"+N.previous_page,href:w(N.previous_page),pageNumber:N.previous_page,onClick:d,pageText:s,isDisabled:!N.has_previous_page,itemClass:(0,l.default)(g,E),linkClass:(0,l.default)(_,k),disabledClass:C,ariaLabel:"Go to previous page"})),this.isFirstPageVisible(N.has_previous_page)&&e.unshift(n.default.createElement(o.default,{key:"first",href:w(1),pageNumber:1,onClick:d,pageText:m,isDisabled:!N.has_previous_page,itemClass:(0,l.default)(g,h),linkClass:(0,l.default)(_,j),disabledClass:C,ariaLabel:"Go to first page"})),this.isNextPageVisible(N.has_next_page)&&e.push(n.default.createElement(o.default,{key:"next"+N.next_page,href:w(N.next_page),pageNumber:N.next_page,onClick:d,pageText:u,isDisabled:!N.has_next_page,itemClass:(0,l.default)(g,v),linkClass:(0,l.default)(_,P),disabledClass:C,ariaLabel:"Go to next page"})),this.isLastPageVisible(N.has_next_page)&&e.push(n.default.createElement(o.default,{key:"last",href:w(N.total_pages),pageNumber:N.total_pages,onClick:d,pageText:p,isDisabled:N.current_page===N.total_pages,itemClass:(0,l.default)(g,y),linkClass:(0,l.default)(_,x),disabledClass:C,ariaLabel:"Go to last page"})),e}},{key:"render",value:function(){var e=this.buildPages();return n.default.createElement("ul",{className:this.props.innerClass},e)}}])&&p(a.prototype,r),c&&p(a,c),t}(n.default.Component);t.default=h,g(h,"propTypes",{totalItemsCount:r.default.number.isRequired,onChange:r.default.func.isRequired,activePage:r.default.number,itemsCountPerPage:r.default.number,pageRangeDisplayed:r.default.number,prevPageText:r.default.oneOfType([r.default.string,r.default.element]),nextPageText:r.default.oneOfType([r.default.string,r.default.element]),lastPageText:r.default.oneOfType([r.default.string,r.default.element]),firstPageText:r.default.oneOfType([r.default.string,r.default.element]),disabledClass:r.default.string,hideDisabled:r.default.bool,hideNavigation:r.default.bool,innerClass:r.default.string,itemClass:r.default.string,itemClassFirst:r.default.string,itemClassPrev:r.default.string,itemClassNext:r.default.string,itemClassLast:r.default.string,linkClass:r.default.string,activeClass:r.default.string,activeLinkClass:r.default.string,linkClassFirst:r.default.string,linkClassPrev:r.default.string,linkClassNext:r.default.string,linkClassLast:r.default.string,hideFirstLastPages:r.default.bool,getPageUrl:r.default.func}),g(h,"defaultProps",{itemsCountPerPage:10,pageRangeDisplayed:5,activePage:1,prevPageText:"\u27e8",firstPageText:"\xab",nextPageText:"\u27e9",lastPageText:"\xbb",innerClass:"pagination",itemClass:void 0,linkClass:void 0,activeLinkClass:void 0,hideFirstLastPages:!1,getPageUrl:function(e){return"#"}})},213:function(e,t){function a(e,t){if(!(this instanceof a))return new a(e,t);this.per_page=e||25,this.length=t||10}e.exports=a,a.prototype.build=function(e,t){var a=Math.ceil(e/this.per_page);e=parseInt(e,10),(t=parseInt(t,10)||1)<1&&(t=1),t>a&&(t=a);var n=Math.max(1,t-Math.floor(this.length/2)),r=Math.min(a,t+Math.floor(this.length/2));r-n+1<this.length&&(t<a/2?r=Math.min(a,r+(this.length-(r-n))):n=Math.max(1,n-(this.length-(r-n)))),r-n+1>this.length&&(t>a/2?n++:r--);var i=this.per_page*(t-1);i<0&&(i=0);var o=this.per_page*t-1;return o<0&&(o=0),o>Math.max(e-1,0)&&(o=Math.max(e-1,0)),{total_pages:a,pages:Math.min(r-n+1,a),current_page:t,first_page:n,last_page:r,previous_page:t-1,next_page:t+1,has_previous_page:t>1,has_next_page:t<a,total_results:e,results:Math.min(o-i+1,e),first_result:i,last_result:o}}},214:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==c(e)&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=n?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}a.default=e,t&&t.set(e,a);return a}(a(0)),r=o(a(16)),i=o(a(68));function o(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var b=function(e){function t(){return s(this,t),m(this,p(t).apply(this,arguments))}var a,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),a=t,(r=[{key:"handleClick",value:function(e){var t=this.props,a=t.isDisabled,n=t.pageNumber;e.preventDefault(),a||this.props.onClick(n)}},{key:"render",value:function(){var e,t=this.props,a=t.pageText,r=(t.pageNumber,t.activeClass),o=t.itemClass,l=t.linkClass,c=t.activeLinkClass,s=t.disabledClass,u=t.isActive,m=t.isDisabled,p=t.href,f=t.ariaLabel,b=(0,i.default)(o,(d(e={},r,u),d(e,s,m),e)),g=(0,i.default)(l,d({},c,u));return n.default.createElement("li",{className:b,onClick:this.handleClick.bind(this)},n.default.createElement("a",{className:g,href:p,"aria-label":f},a))}}])&&u(a.prototype,r),o&&u(a,o),t}(n.Component);t.default=b,d(b,"propTypes",{pageText:r.default.oneOfType([r.default.string,r.default.element]),pageNumber:r.default.number.isRequired,onClick:r.default.func.isRequired,isActive:r.default.bool.isRequired,isDisabled:r.default.bool,activeClass:r.default.string,activeLinkClass:r.default.string,itemClass:r.default.string,linkClass:r.default.string,disabledClass:r.default.string,href:r.default.string}),d(b,"defaultProps",{activeClass:"active",disabledClass:"disabled",itemClass:void 0,linkClass:void 0,activeLinkCLass:void 0,isActive:!1,isDisabled:!1,href:"#"})},215:function(e,t,a){},223:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(108),o=a(220),l=a(66),c=a(113),s=a(114),u=a(111),m=a(80),p=a(17),f=a(120),d=a(153),b=function(e){var t=e.match,a=Object(o.a)();return r.a.createElement("header",null,r.a.createElement(c.a,{collapseOnSelect:!0,expand:"lg",bg:"primary",variant:"dark"},r.a.createElement(c.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(m.LinkContainer,{to:"".concat(t.url),exact:!0},r.a.createElement(c.a.Brand,null,r.a.createElement(l.a,{id:"space.menu.title"}))),r.a.createElement(c.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(s.a,{className:"mr-auto"},r.a.createElement(m.LinkContainer,{to:"".concat(t.url),exact:!0},r.a.createElement(s.a.Link,{active:!1},r.a.createElement(l.a,{id:"menu.home"}))),r.a.createElement(u.a,{id:"collasible-nav-dropdown",title:a.formatMessage({id:"menu.sections"})},r.a.createElement(m.LinkContainer,{to:"".concat(t.url).concat(p.c)},r.a.createElement(u.a.Item,{active:!1},r.a.createElement(l.a,{id:"menu.images"}))),r.a.createElement(m.LinkContainer,{to:"".concat(t.url).concat(p.h)},r.a.createElement(u.a.Item,{active:!1},r.a.createElement(l.a,{id:"menu.videos"}))),r.a.createElement(u.a.Divider,null),r.a.createElement(u.a.Item,{target:"_blank",href:"https://pixabay.com/photos/search/outer%20space/",rel:"noopener noreferrer",active:!1},r.a.createElement(l.a,{id:"menu.more"})))),r.a.createElement(s.a,null,r.a.createElement(m.LinkContainer,{to:"".concat(t.url).concat(p.a)},r.a.createElement(s.a.Link,{active:!1},r.a.createElement(l.a,{id:"menu.about"}))))),r.a.createElement(d.a,null),r.a.createElement(f.a,{match:t})))},g=a(39),h=a(126),E=a(101),v=a(127),y=a(14),O=a(154),C=a(79),_=Object(C.a)("card-group"),j=a(1),k=a(4),P=a(68),x=a.n(P),w=a(69),N=a(166),I=a(160),T=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.variant,o=e.as,l=void 0===o?"img":o,c=Object(k.a)(e,["bsPrefix","className","variant","as"]),s=Object(w.a)(a,"card-img");return r.a.createElement(l,Object(j.a)({ref:t,className:x()(i?s+"-"+i:s,n)},c))}));T.displayName="CardImg",T.defaultProps={variant:null};var S=T,L=Object(N.a)("h5"),D=Object(N.a)("h6"),A=Object(C.a)("card-body"),M=r.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,o=e.bg,l=e.text,c=e.border,s=e.body,u=e.children,m=e.as,p=void 0===m?"div":m,f=Object(k.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),d=Object(w.a)(a,"card"),b=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:d+"-header"}}),[d]);return r.a.createElement(I.a.Provider,{value:b},r.a.createElement(p,Object(j.a)({ref:t},f,{className:x()(i,d,o&&"bg-"+o,l&&"text-"+l,c&&"border-"+c)}),s?r.a.createElement(A,null,u):u))}));M.displayName="Card",M.defaultProps={body:!1},M.Img=S,M.Title=Object(C.a)("card-title",{Component:L}),M.Subtitle=Object(C.a)("card-subtitle",{Component:D}),M.Body=A,M.Link=Object(C.a)("card-link",{Component:"a"}),M.Text=Object(C.a)("card-text",{Component:"p"}),M.Header=Object(C.a)("card-header"),M.Footer=Object(C.a)("card-footer"),M.ImgOverlay=Object(C.a)("card-img-overlay");var R=M,U=a(81),G=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement(O.a,{variant:"info"},r.a.createElement("h1",null,r.a.createElement(l.a,{id:"space.hello"})),r.a.createElement("p",null,r.a.createElement(l.a,{id:"space.introduction"}))),r.a.createElement(_,null,r.a.createElement(R,null,r.a.createElement(m.LinkContainer,{to:"".concat(t.url).concat(p.c)},r.a.createElement(R.Img,{variant:"top",src:"https://i.imgur.com/1eReaGn.jpg"})),r.a.createElement(R.Body,null,r.a.createElement(R.Title,null,r.a.createElement(l.a,{id:"menu.images"})),r.a.createElement(R.Text,null,r.a.createElement(l.a,{id:"space.images.introduction"})),r.a.createElement(m.LinkContainer,{to:"".concat(t.url).concat(p.c)},r.a.createElement(U.a,{variant:"primary"},r.a.createElement(l.a,{id:"menu.images"}))))),r.a.createElement(R,null,r.a.createElement(m.LinkContainer,{to:"".concat(t.url).concat(p.h)},r.a.createElement(R.Img,{variant:"top",src:"https://i.imgur.com/nGh7PTJ.png"})),r.a.createElement(R.Body,null,r.a.createElement(R.Title,null,r.a.createElement(l.a,{id:"menu.videos"})),r.a.createElement(R.Text,null,r.a.createElement(l.a,{id:"space.videos.introduction"})),r.a.createElement(m.LinkContainer,{to:"".concat(t.url).concat(p.h)},r.a.createElement(U.a,{variant:"primary"},r.a.createElement(l.a,{id:"menu.videos"})))))))},F=a(130),V=a(11),H=a(77),q=a(212),B=a.n(q),W=a(102),K=a(131),z=a(152),Y=function(e){var t=e.type,a=Object(z.a)(t,5,"outer%space","",!1),n=Object(H.a)(a,2),i=n[0],o=n[1],c=i.currentPage,s=i.items,u=i.totalItems,m=i.isPending,p=i.isError,f=function(){return r.a.createElement(B.a,{activePage:c,itemsCountPerPage:5,totalItemsCount:u,itemClass:"page-item",linkClass:"page-link",innerClass:"pagination justify-content-center",onChange:d})},d=function(e){o(Object(V.a)({},i,{currentPage:e})),window.scrollTo({top:0,behavior:"smooth"})};return r.a.createElement("div",{className:"text-center"},r.a.createElement("p",null,r.a.createElement(l.a,{id:"multimedia.source"}),r.a.createElement("a",{href:"https://pixabay.com/",target:"_blank",rel:"noopener noreferrer"},"Pixabay")),m&&r.a.createElement(E.a,{variant:"primary"}),p&&r.a.createElement(W.a,null),s.length>0&&r.a.createElement("div",null,f(),s.map((function(e,t){return r.a.createElement(K.a,{key:t,item:e,index:t})})),r.a.createElement("br",null),f()))},J=a(75),X=a(133),Q=a(134),Z=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.d,{exact:!0,path:"".concat(t.path,"/"),component:G}),r.a.createElement(y.d,{path:"".concat(t.path).concat(p.a),component:F.a}),r.a.createElement(y.d,{path:"".concat(t.path).concat(p.c),component:function(){return r.a.createElement(Y,{type:J.a.IMAGE})}}),r.a.createElement(X.a,{path:"".concat(t.path).concat(p.h),component:function(){return r.a.createElement(Y,{type:J.a.VIDEO})}}),r.a.createElement(y.d,{path:"".concat(t.path).concat(p.f),component:function(){return r.a.createElement(Q.a,{variant:"primary"})}}))};a(215),t.default=function(e){var t=Object(g.a)((function(e){return e.authentication}));Object(h.a)();var a=Object(o.a)(),c=document.querySelector('link[rel="shortcut icon"]');return null===c||void 0===c||c.setAttribute("href","".concat("/multi-player-web-reactjs/","sites/space/favicon.ico")),Object(n.useEffect)((function(){document.title=a.formatMessage({id:"space.title"})}),[a.formatMessage({id:"space.title"})]),t.isPendingCheckAuthentication?r.a.createElement("div",{className:"mx-auto text-center mt-3"},r.a.createElement(E.a,{variant:"primary"}),r.a.createElement(i.a,{in:t.isPendingCheckAuthenticationTooLong},r.a.createElement("div",{id:"checkAuthenticationTooLong"},r.a.createElement(l.a,{id:"root.checkAuthentication.tooLong"})))):r.a.createElement("div",{className:"d-flex flex-column h-100"},r.a.createElement(b,{match:e.match}),r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement(Z,{match:e.match}))),r.a.createElement(v.a,null))}},75:function(e,t,a){"use strict";var n;!function(e){e[e.AUDIO=0]="AUDIO",e[e.IMAGE=1]="IMAGE",e[e.VIDEO=2]="VIDEO"}(n||(n={})),t.a=n},86:function(e,t,a){"use strict";a.d(t,"c",(function(){return d})),a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return g})),a.d(t,"d",(function(){return h})),a.d(t,"e",(function(){return E}));var n=a(8),r=a(87),i=a.n(r),o=a(28),l=a(23),c=a(88),s=a(225),u="MULTI-PLAYER-AUTH-CSRF",m=function(){var e=Object(c.a)(i.a.mark((function e(t){var a,n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(l.a)(t.entries()).map((function(e){return encodeURIComponent(e[0])+"="+encodeURIComponent(e[1].toString())})),n=Object(s.a)(),e.next=4,fetch("".concat("https://multi-player-auth.herokuapp.com","/signIn"),{method:"post",headers:Object(o.a)({"Content-Type":"application/x-www-form-urlencoded"},u,n),credentials:"include",body:a.join("&")});case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:return(c=e.sent).sessionExpirationDate=new Date(c.sessionExpirationDate),e.abrupt("return",c);case 11:return e.abrupt("return",Promise.reject(r.status));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(s.a)(),e.next=3,fetch("".concat("https://multi-player-auth.herokuapp.com","/signOut"),{method:"post",headers:Object(o.a)({},u,t),credentials:"include"});case 3:if(!e.sent.ok){e.next=6;break}return e.abrupt("return",Promise.resolve());case 6:return e.abrupt("return",Promise.reject());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(s.a)(),e.next=3,fetch("".concat("https://multi-player-auth.herokuapp.com","/checkAuthentication"),{method:"post",headers:Object(o.a)({},u,t),credentials:"include"});case 3:if(!(a=e.sent).ok){e.next=10;break}return e.next=7,a.json();case 7:return(n=e.sent).sessionExpirationDate=new Date(n.sessionExpirationDate),e.abrupt("return",n);case 10:return e.abrupt("return",Promise.reject(a.status));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(e){return function(t){return t({type:n.a.SIGN_IN_PENDING}),m(e).then((function(e){return t({type:n.a.SIGN_IN_SUCCESS,payload:e})})).catch((function(e){return t({type:n.a.SIGN_IN_ERROR,payload:e})}))}},b=function(){return function(e){return e({type:n.a.CHECK_AUTHENTICATION_PENDING}),f().then((function(t){return e({type:n.a.SIGN_IN_SUCCESS,payload:t})})).catch((function(){return e({type:n.a.SIGN_OUT_SUCCESS})}))}},g=function(){return{type:n.a.CHECK_AUTHENTICATION_PENDING_TOO_LONG}},h=function(){return function(e){return e({type:n.a.SIGN_OUT_PENDING}),p().then((function(){return e({type:n.a.SIGN_OUT_SUCCESS})})).catch((function(){return e({type:n.a.SIGN_OUT_ERROR})}))}},E=function(){return{type:n.a.SIGN_OUT_SUCCESS}}}}]);
//# sourceMappingURL=5.3aca50b5.chunk.js.map