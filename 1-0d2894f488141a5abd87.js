webpackJsonp([1],{567:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=r(1),l=n(s),u=r(2),c=n(u),f=r(9),p=n(f),d=r(45),m=n(d),h=function(e){var t,r;return{share:(t={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"1em 0 0"},t["@media (min-width: "+e.mediaQueryTresholds.M+"px)"]={flexDirection:"row"},t),links:{display:"flex",flexDirection:"row","& .SocialMediaShareButton":{margin:"0 .8em",cursor:"pointer"}},label:(r={fontSize:"1.2em",margin:"0 1em 1em"},r["@media (min-width: "+e.mediaQueryTresholds.M+"px)"]={margin:"0 1em"},r)}},y=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.post,r=e.classes,n=e.slug,o=(t.excerpt,t.frontmatter),i=(o.title,m.default.siteUrl+n);return l.default.createElement("div",{className:r.share},l.default.createElement("span",{className:r.label},l.default.createElement("a",{href:i},"SHARE ")," "))},t}(l.default.Component);y.propTypes={post:c.default.object.isRequired,classes:c.default.object.isRequired,slug:c.default.string.isRequired},t.default=(0,p.default)(h)(y),e.exports=t.default}});
//# sourceMappingURL=1-0d2894f488141a5abd87.js.map