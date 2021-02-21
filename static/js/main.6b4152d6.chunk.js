(this["webpackJsonpcss-color-selector"]=this["webpackJsonpcss-color-selector"]||[]).push([[0],{15:function(e,r,o){},16:function(e,r,o){"use strict";o.r(r);var t=o(0),a=o(2),l=o.n(a),s=o(7),n=o.n(s),i=(o(14),o(15),o(8)),c=o(6),d=o(1),u=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgrey ","lightgreen","lightpink ","lightsalmon","lightseagreen","lightskyblue ","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise ","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],b=function(e,r){switch(r.type){case"INIT":return Object(d.a)(Object(d.a)({},e),{},{boxColorsList:u});case"CHANGE_BOX_COLOR":var o="";return u.includes(r.payload.toLocaleLowerCase())&&(o=r.payload),Object(d.a)(Object(d.a)({},e),{},{typedColor:r.payload,boxColor:o,results:r.payload&&!o?u.filter((function(e){return e.startsWith(r.payload.toLowerCase())})):[],error:""});case"SAVE_COLOR":return e.boxColor?e.savedColors.includes(e.boxColor)?Object(d.a)(Object(d.a)({},e),{},{error:"This color is already saved."}):(e.savedColors.length<10||e.savedColors.pop(),t=[e.boxColor].concat(Object(c.a)(e.savedColors)),Object(d.a)(Object(d.a)({},e),{},{savedColors:t})):Object(d.a)(Object(d.a)({},e),{},{error:"Chose color"});var t;case"CHOSE_COLOR":return Object(d.a)(Object(d.a)({},e),{},{typedColor:r.payload,boxColor:r.payload,results:[]})}},h={typedColor:"",boxColor:"",boxColorsList:[],savedColors:[],results:[],error:""},g=function(e){var r=e.boxColor,o=e.typedColor;return Object(t.jsxs)("div",{className:"box color-box",style:{backgroundColor:r||"transparent"},children:[r&&Object(t.jsx)("div",{className:"notification has-text-centered",children:Object(t.jsx)("strong",{children:r.toLowerCase()})}),""!==o&&!r&&Object(t.jsx)("div",{className:"notification has-text-centered",children:Object(t.jsx)("strong",{children:"Invalid color"})})]})},p=function(e){var r=e.typedColor,o=e.results,a=e.dispatch;return Object(t.jsxs)("div",{className:"field",children:[Object(t.jsx)("div",{className:"control",children:Object(t.jsx)("input",{className:"input",type:"text",placeholder:"type color",value:r,onChange:function(e){return r=e.target.value,void a({type:"CHANGE_BOX_COLOR",payload:r});var r}})}),Object(t.jsx)("div",{className:"autocomplete-list",children:o.map((function(e){return Object(t.jsx)("div",{className:"notification mb-0 list-item",style:{backgroundColor:e},onClick:function(e){a({type:"CHOSE_COLOR",payload:e.target.innerHTML})},children:e},e)}))})]})},j=function(e){var r=e.dispatch;return Object(t.jsx)("button",{className:"button is-primary ml-4",onClick:function(){return r({type:"SAVE_COLOR"})},children:"Save color"})},m=function(e){var r=e.savedColors,o=e.dispatch;return r.length?Object(t.jsx)("div",{className:"box is-flex saved-colors-list",children:r.map((function(e,r){return Object(t.jsx)("button",{className:"button",style:{background:e},onClick:function(){o({type:"CHOSE_COLOR",payload:e})},children:e},"".concat(e,"-").concat(r))}))}):null},y=function(){var e=Object(a.useReducer)(b,h),r=Object(i.a)(e,2),o=r[0],l=r[1],s=o.boxColor,n=o.typedColor,c=o.results,d=o.savedColors,u=o.error;return Object(a.useEffect)((function(){l({type:"INIT"})}),[]),Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)("h1",{className:"title is-1",children:"CSS COLOR SELECTOR"}),u&&Object(t.jsx)("div",{className:"notification is-danger is-light",children:u}),Object(t.jsx)(g,{boxColor:s,typedColor:n}),Object(t.jsxs)("div",{className:"is-flex",children:[Object(t.jsx)(p,{typedColor:n,results:c,dispatch:l}),Object(t.jsx)(j,{dispatch:l})]}),Object(t.jsx)(m,{savedColors:d,dispatch:l})]})};var O=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("div",{className:"notification is-warning has-text-centered",children:["Type CSS color name into input field and chose color from autocomplete list with click. Clicking on the save button enables to save up to 10 colors. ",Object(t.jsx)("br",{}),"Project is ongoing and new features are continuously implemented. Arrow keys and enter ",Object(t.jsx)("strong",{children:"are not"})," supported for chosing color at the moment."]}),Object(t.jsx)(y,{})]})};n.a.render(Object(t.jsx)(l.a.StrictMode,{children:Object(t.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6b4152d6.chunk.js.map