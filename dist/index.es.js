import e,{useState as t,useEffect as n}from"react";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".modal{display:block;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4)}.modal-content{background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;width:80%}.close{color:#aaa;float:right;font-size:28px;font-weight:700}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer}.questionContainer{padding-top:16px}.questionItem{margin-bottom:16px}");const o=1,a=({values:t,question:n,onChange:o})=>{const a=n.questionId;return e.createElement("div",{className:"questionItem"},e.createElement("p",null,n.questionText),e.createElement("textarea",{name:a,value:t[a],onChange:o}))},s=({values:t,question:n,onChange:o})=>{const a=n.questionId,s=n.options;return e.createElement("div",{className:"questionItem"},e.createElement("p",null,n.questionText),e.createElement("select",{name:a,value:t[a],onChange:o},s.map((t=>e.createElement("option",{value:t.value},t.key)))))},l=({questions:l,onSubmit:i})=>{const[c,r]=t(null);n((()=>{const e=l.map((e=>({[e.questionId]:""}))).reduce(((e,t)=>Object.assign(e,t)),{});r(e)}),[]);const u=e=>{const{name:t,value:n}=e.target;r((e=>({...e,[t]:n})))};return e.createElement("div",null,e.createElement("form",null,c&&l.map((t=>e.createElement("div",{className:"questionContainer"},t.type===o?e.createElement(a,{values:c,question:t,onChange:u}):e.createElement(s,{values:c,question:t,onChange:u})))),e.createElement("button",{onClick:()=>i(c)},"Submit")))},i=({configuration:n})=>{const{surveyId:a,questions:s}=n,[i,c]=t(!0),r=()=>{c(!1)};return e.createElement("div",{id:"container"},i&&a&&s&&e.createElement("div",{id:"myModal",className:"modal"},e.createElement("div",{className:"modal-content"},e.createElement("span",{onClick:r,className:"close"},"×"),e.createElement("h4",null,"Simple Survey"),e.createElement(l,{questions:s,onSubmit:e=>{const t=(e=>s.map((t=>{if(t.type===o)return{questionId:t.questionId,type:t.type,answer:e[t.questionId]};const n=t.options.find((n=>n.value===e[t.questionId]));return{questionId:t.questionId,type:t.type,selectedOption:n}})))(e);(e=>{const t={result:e};let n={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)};fetch(`http://localhost:3001/api/v1/surveys/${a}/results/`,n).then((()=>{console.log("Success")})).catch((e=>Promise.reject(e)))})(t),r()}}))))};export{i as Survey};
