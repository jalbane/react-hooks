(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(5),l=n.n(c),r=(n(12),n(6)),i=n(2);n(13),n(14);function s(e){var t=Object(a.useState)(Date()),n=Object(i.a)(t,1)[0];return o.a.createElement("div",{style:{backgroundColor:"#fff",fontSize:12}},e.completed?o.a.createElement("div",{className:"btn"},o.a.createElement("button",{onClick:function(){return e.handleDelete(e.index)}}," Delete Task")):o.a.createElement("div",{className:"btn"},o.a.createElement("button",{onClick:function(){return e.handleComplete(e.index)}}," Complete Task")),o.a.createElement("div",{className:"time-stamp"},(n=n.split("GMT"))[0]),o.a.createElement("br",null),o.a.createElement("div",{className:"todo-text"},e.text))}var m=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],l=function(e){var t=n.slice(),a=t[e].completed;t.splice(e,1,{text:t[e].text,completed:!a}),c(t)},m=function(e){if(n[e].completed){var t=n.slice();t.splice(e,1),c(t)}};function d(e){var t=e.addTodo,n=Object(a.useState)([{text:" ",completed:!1}]),c=Object(i.a)(n,2),l=c[0],r=c[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l&&(t(l),r(""))}},o.a.createElement("input",{style:{width:"99%",padding:0,height:45,fontSize:24},placeholder:"Enter in an item or message...",value:l.text,onChange:function(e){return r([e.target.value])},method:"post"}))}return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"banner"},o.a.createElement("h1",{className:"header"}," To-do list / chat log ")),o.a.createElement("div",{className:"todo-list"},n.map((function(e,t){return o.a.createElement(s,{text:e.text,completed:e.completed,index:t,key:e.text,handleComplete:l,handleDelete:m})})),o.a.createElement(d,{addTodo:function(e){var t=[].concat(Object(r.a)(n),[{text:e,completed:!1}]);c(t)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.ed4ec868.chunk.js.map