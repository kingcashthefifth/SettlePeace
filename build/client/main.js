!function(e){function t(t){for(var a,l,c=t[0],i=t[1],s=t[2],m=0,p=[];m<c.length;m++)l=c[m],r[l]&&p.push(r[l][0]),r[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={0:0},o=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=i;o.push([243,1]),n()}({243:function(e,t,n){e.exports=n(688)},688:function(e,t,n){"use strict";n.r(t),n(244),n(446),n(721);var a=n(0),r=n.n(a),o=n(41),l=n.n(o),c=n(2),i=n.n(c),s=n(726),u=n.n(s);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(728),(function(e){function t(){var e,n;return function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this,(e=!(n=f(t).call(this))||"object"!==m(n)&&"function"!=typeof n?h(this):n).state={banana:"sneakers",counters:[],searchResult:[]},e.handleClick=e.handleClick.bind(h(e)),e}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r.a.Component),n=t,(a=[{key:"handleClick",value:function(){var e=this;fetch("/query").then(function(e){return console.log(e),e.json()}).then(function(t){e.setState({searchResult:t}),console.log(e.state.searchResult)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleClick},"click me"),r.a.createElement("p",{className:u.a.desc},this.props.message," : ",this.state.banana),this.state.counters.map(function(e){return r.a.createElement("p",null,e)}))}}])&&p(n.prototype,a),t}()).propTypes={message:i.a.string.isRequired},n(730),n(541);var b=n(692);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(){var e,n;return function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this,(e=!(n=v(t).call(this))||"object"!==y(n)&&"function"!=typeof n?E(this):n).state={quotetitle:[]},e.wordChecker=e.wordChecker.bind(E(e)),e}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,r.a.Component),n=t,(a=[{key:"componentDidMount",value:function(){var e=this;fetch("/quotelist").then(function(e){return console.log("results: ",e),e.json()}).then(function(t){console.log("data: ",t);for(var n=[],a=0;a<t.length;a++)n.push(t[a]);e.setState({quotetitle:n})})}},{key:"wordChecker",value:function(e){var t=e.target.value;this.setState({monkey:t})}},{key:"render",value:function(){var e=this.state.quotetitle.map(function(e,t){return r.a.createElement(b.a,{key:t,to:"#",className:"list-group-item list-group-item-action flex-column align-items-start"},r.a.createElement("div",{className:"d-flex w-100 justify-content-between"},r.a.createElement("h5",{className:"mb-1"},"To: ",e.attention),r.a.createElement("small",null,e.quote_ref)),r.a.createElement("p",{className:"mb-1"},"Job Title: ",e.title),r.a.createElement("small",null,"Quoted price will show here."))});return console.log("this.state.quotelist: ",this.state.quotetitle[0]),r.a.createElement("div",null,r.a.createElement("div",{className:"list-group my-3"},r.a.createElement("span",{className:"list-group-item list-group-item-action flex-column align-items-start"},r.a.createElement("div",{className:"d-flex w-100 justify-content-between"},r.a.createElement("h5",{className:"mb-1"}),r.a.createElement("small",null)),r.a.createElement("div",{className:"mb-1"},r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))),r.a.createElement("small",null,"Search by Quote Refs, Customer Names, Job Titles.")),e))}}])&&g(n.prototype,a),t}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,N(t).call(this))}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"masthead d-flex my-3",style:{backgroundImage:"url('https://res.cloudinary.com/cashcloudinary/image/upload/v1551319995/bg-masthead.jpg')",backgroundSize:"cover",borderRadius:"5px",fontFamily:"'Source Sans Pro', sans-serif",height:"700px",backgroundPositionY:"-120px"}},r.a.createElement("div",{class:"container text-center my-auto"},r.a.createElement("h1",{class:"mb-1 font-weight-bold display-2"},"Welcome to Settle Peace"),r.a.createElement("h3",{class:"mb-5"},r.a.createElement("em",{className:"font-weight-bold"},"A Free Quotation Application, developed by Cash.")),r.a.createElement(b.a,{class:"btn btn-xl js-scroll-trigger d-flex align-items-center justify-content-center m-auto",style:{backgroundColor:"#1E809F",color:"white",width:"180px",height:"70px",fontSize:"18px"},to:"/new"},r.a.createElement("span",null,"Create Quote"))),r.a.createElement("div",{class:"overlay"})),r.a.createElement("div",null,r.a.createElement("footer",{class:"footer text-center p-3",style:{backgroundColor:"#F8F9FA"}},r.a.createElement("div",{class:"container"},r.a.createElement("ul",{class:"list-inline mb-3"},r.a.createElement("li",{class:"list-inline-item"},r.a.createElement("a",{class:"social-link rounded-circle text-white mr-3",href:"https://github.com/kingcashthefifth"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",alt:"",width:"30px"}))),r.a.createElement("li",{class:"list-inline-item"},r.a.createElement("a",{class:"social-link rounded-circle text-white mr-3",href:"mailto:cash.tsk@gmail.com"},r.a.createElement("img",{src:"http://cdn.onlinewebfonts.com/svg/img_352556.png",alt:"",width:"30px"}))),r.a.createElement("li",{class:"list-inline-item"},r.a.createElement("a",{class:"social-link rounded-circle text-white",href:"https://www.linkedin.com/in/cashtsk/"},r.a.createElement("img",{src:"http://cdn.onlinewebfonts.com/svg/img_408253.png",alt:"",width:"30px"})))),r.a.createElement("p",{class:"text-muted small mb-0"},"Copyright © 2019")))))}}])&&C(n.prototype,a),t}();function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F=function(e){function t(){var e,n;return function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this,(e=!(n=P(t).call(this))||"object"!==S(n)&&"function"!=typeof n?q(this):n).state={name:"",company_name:"",company_addr1:"",company_addr2:"",company_postal:"",company_gst:"",company_logo:null,customer_com_name:"",customer_com_addr1:"",customer_com_postal:"",customer_attention:"",customer_email:"",customer_number:"",quote_ref:"",quote_date:"",job_title:"",part_no:[],description:[],quantity:0,price:0,total_price:0,sub_total:0,discount:0,grand_total:0},e.tempFunc=e.tempFunc.bind(q(e)),e.deleteIt=e.deleteIt.bind(q(e)),e}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,r.a.Component),n=t,(a=[{key:"tempFunc",value:function(e){this.props.handleChange(e),console.log("this.props.quantity: ",this.props.quantity),console.log("this.props.price: ",this.props.price)}},{key:"deleteIt",value:function(e){e.preventDefault();var t=this.props.id;this.props.delLines(t)}},{key:"render",value:function(){return r.a.createElement("tr",{id:this.props.id},r.a.createElement("td",null,r.a.createElement("input",{name:"part_no",value:this.props.part_no,placeholder:"1",style:{width:"20%",border:"0"},onChange:this.props.handleChange})),r.a.createElement("td",null,r.a.createElement("input",{name:"description",value:this.props.description,placeholder:"Support",style:{width:"100%",border:"0"},onChange:this.props.handleChange})),r.a.createElement("td",null,r.a.createElement("input",{name:"quantity",value:this.props.quantity,placeholder:"234",style:{width:"40%",border:"0"},onChange:this.tempFunc})),r.a.createElement("td",null,"$",r.a.createElement("input",{name:"price",value:this.props.price,placeholder:"6356",style:{width:"50%",border:"0"},onChange:this.tempFunc})),r.a.createElement("td",null,"$",this.state.total_price),r.a.createElement("td",null,r.a.createElement("button",{className:"hidePrint",onClick:this.deleteIt},"X")))}}])&&k(n.prototype,a),t}();function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function D(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Q=function(e){function t(){var e,n;return function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this,(e=!(n=A(t).call(this))||"object"!==R(n)&&"function"!=typeof n?M(this):n).state={name:"",company_name:"",company_addr1:"",company_addr2:"",company_postal:"",company_gst:"",company_logo:null,customer_com_name:"",customer_com_addr1:"",customer_com_postal:"",customer_attention:"",customer_email:"",customer_number:"",quote_ref:"",quote_date:"",job_title:"",part_no:[],description:[],quantity:[],price:[],total_price:[],sub_total:0,discount:0,grand_total:0,newlines:["","",""],linecount:[0,1,2],linecounter:2},e.handleChange=e.handleChange.bind(M(e)),e.addLine=e.addLine.bind(M(e)),e.delLines=e.delLines.bind(M(e)),e}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,r.a.Component),n=t,(a=[{key:"handleChange",value:function(e,t){var n,a,r;console.log("event.target.id: ",[e.target.name]),console.log("event.target.value: ",e.target.value),console.log("onChange activated!!!"),this.setState((n={},a=e.target.name,r=e.target.value,a in n?Object.defineProperty(n,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[a]=r,n))}},{key:"printPDF",value:function(e){e.preventDefault(),window.print()}},{key:"addLine",value:function(e){e.preventDefault(),console.log("addline function activated"),console.log("current linecounter: ",this.state.linecounter);var t=this.state.linecounter+1;this.setState({linecount:[].concat(L(this.state.linecount),[t])})}},{key:"delLines",value:function(e){console.log("id: ",e);var t=L(this.state.linecount);t.splice(t.indexOf(e),1),this.setState({linecount:t})}},{key:"render",value:function(){var e,t=this;return e=null==this.state.company_logo?r.a.createElement("img",{src:"https://res.cloudinary.com/cashcloudinary/image/upload/v1551104842/imageedit_3_3603235945.png",width:"300px"}):r.a.createElement("img",{src:this.state.company_logo,width:"300px"}),this.props.doclines?this.props.doclines.map(function(e,n){return r.a.createElement(F,{key:n,id:n,part_no:e.part_no,description:e.description,quantity:e.quantity,price:e.price,handleChange:t.props.handleChange})}):0<this.state.newlines.length?this.state.newlines.map(function(e,n){return r.a.createElement(F,{key:n,id:n,part_no:e.part_no,description:e.description,quantity:e.quantity,price:e.price,handleChange:t.props.handleChange})}):this.state.linecount.map(function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null))}),r.a.createElement("form",{action:"/quotelist",method:"post"},r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body p-0"},r.a.createElement("div",{className:"row px-5 pt-5 pb-1"},r.a.createElement("div",{className:"col-md-6"},e),r.a.createElement("div",{className:"col-md-6 text-right"},r.a.createElement("input",{name:"company_name",className:"font-weight-bold mb-1 text-right",value:this.state.company_name,placeholder:"Above Minimal Tech Pte. Ltd.",style:{width:"100%",border:"0"},onChange:this.handleChange}),r.a.createElement("input",{name:"company_addr1",className:"mb-1 text-right",value:this.state.company_addr1,placeholder:"Midview City",style:{width:"100%",border:"0"},onChange:this.handleChange}),r.a.createElement("input",{name:"company_addr2",className:"mb-1 text-right",value:this.state.company_addr2,placeholder:"Blk 28 Sin Ming Lane #03-135",style:{width:"100%",border:"0"},onChange:this.handleChange}),r.a.createElement("input",{name:"company_postal",className:"mb-1 text-right",value:this.state.company_postal,placeholder:"Singapore, 573974",style:{width:"100%",border:"0"},onChange:this.handleChange}),r.a.createElement("div",{className:"d-inline mb-1"},r.a.createElement("span",{className:"text-muted"},"GST Registration:"),r.a.createElement("input",{name:"company_gst",className:"text-right",value:this.state.company_gst,placeholder:"M2-1025364-K",style:{width:"120px",border:"0"},onChange:this.handleChange})))),r.a.createElement("hr",{className:"my-5"}),r.a.createElement("div",{className:"row pb-5 px-5"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("input",{name:"customer_com_name",className:"font-weight-bold mb-4 h4",value:this.state.customer_com_name,placeholder:"Wild Tree Camp Tools Pte. Ltd.",style:{width:"100%",border:"0"},onChange:this.handleChange}),r.a.createElement("input",{name:"customer_com_addr1",className:"mb-1",value:this.state.customer_com_addr1,placeholder:"51 Waterloo St, #01-01",style:{width:"100%",border:"0"},onChange:this.handleChange}),r.a.createElement("input",{name:"customer_com_postal",className:"mb-1",value:this.state.customer_com_postal,placeholder:"Singapore, 187969",style:{width:"100%",border:"0"},onChange:this.handleChange}),r.a.createElement("div",{className:"mb-1 d-inline-block",style:{width:"100%"}},r.a.createElement("strong",null,"Attention : "),r.a.createElement("input",{name:"customer_attention",value:this.state.customer_attention,placeholder:"Mr. Phua Liang Jun",style:{width:"75%",border:"0"},onChange:this.handleChange})),r.a.createElement("div",{className:"mb-1 d-inline-block",style:{width:"100%"}},r.a.createElement("strong",null,"E-mail : "),r.a.createElement("input",{name:"customer_email",value:this.state.customer_email,placeholder:"phualiangjun@gmail.com",style:{width:"250px",border:"0"},onChange:this.handleChange})),r.a.createElement("div",{className:"mb-1 d-inline-block",style:{width:"100%"}},r.a.createElement("strong",null,"Tel : "),r.a.createElement("input",{name:"customer_number",value:this.state.customer_number,placeholder:"+65 8888 1688",style:{width:"200px",border:"0"},onChange:this.handleChange}))),r.a.createElement("div",{className:"col-md-6 text-right"},r.a.createElement("div",{className:"font-weight-bold mb-2"},"Quote Reference: #",r.a.createElement("input",{name:"quote_ref",value:this.state.quote_ref,placeholder:"001",style:{width:"30px",border:"0",fontWeight:"bold"},onChange:this.handleChange})),r.a.createElement("div",{className:"mb-1"},r.a.createElement("span",{className:"mb-1"},"Date: ")," ",r.a.createElement("input",{name:"quote_date",className:"text-right",value:this.state.quote_date,placeholder:"4 Mar, 2019",style:{width:"90px",border:"0"},onChange:this.handleChange})))),r.a.createElement("div",{className:"row px-5"},r.a.createElement("div",{className:"col"},r.a.createElement("h5",{className:"mb-2"},r.a.createElement("strong",null,"Job title :")),r.a.createElement("input",{name:"job_title",className:"mb-1 text-center",value:this.state.job_title,placeholder:"Supply of Software Development Consultancy Services",style:{width:"100%",border:"0"},onChange:this.handleChange}))),r.a.createElement("div",{className:"row p-5"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"border-0 text-uppercase small font-weight-bold"},"ID"),r.a.createElement("th",{className:"border-0 text-uppercase small font-weight-bold"},"Description"),r.a.createElement("th",{className:"border-0 text-uppercase small font-weight-bold"},"Quantity"),r.a.createElement("th",{className:"border-0 text-uppercase small font-weight-bold"},"Unit Cost"),r.a.createElement("th",{className:"border-0 text-uppercase small font-weight-bold"},"Total"))),r.a.createElement("tbody",null,this.state.linecount.map(function(e,n){return console.log("this is obj: ",e),r.a.createElement(F,{key:e,id:e,delLines:t.delLines})}))))),r.a.createElement("div",{className:"d-flex flex-row-reverse bg-dark text-white p-4 specialPrint"},r.a.createElement("div",{className:"py-3 px-5 text-right"},r.a.createElement("div",{className:"mb-2"},"Grand Total"),r.a.createElement("div",{className:"h2 font-weight-light",contentEditable:!0,suppressContentEditableWarning:!0},"$234,234")),r.a.createElement("div",{className:"py-3 px-5 text-right"},r.a.createElement("div",{className:"mb-2"},"Discount"),r.a.createElement("div",{className:"h2 font-weight-light",contentEditable:!0,suppressContentEditableWarning:!0},"10%")),r.a.createElement("div",{className:"py-3 px-5 text-right"},r.a.createElement("div",{className:"mb-2"},"Sub - Total amount"),r.a.createElement("div",{className:"h2 font-weight-light"},"$",r.a.createElement("span",{contentEditable:!0,suppressContentEditableWarning:!0},"32,432")))))))),r.a.createElement("div",{className:"container mt-3 px-5 py-3 text-right hidePrint",style:{backgroundColor:"lightgrey"}},r.a.createElement("button",{onClick:this.addLine,className:"btn btn-light mr-3",style:{color:"black"}},"Add Row"),r.a.createElement("button",{type:"submit",className:"btn btn-light mr-3",style:{color:"black"}},"Create quote"),r.a.createElement("button",{className:"btn btn-success",onClick:this.printPDF},"PDF"))))}}])&&D(n.prototype,a),t}();function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(240);var B=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==W(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,$(t).call(this))}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement(b.a,{className:"navbar-brand",to:"/"},r.a.createElement("img",{src:"https://res.cloudinary.com/cashcloudinary/image/upload/v1551108316/imageedit_6_8476813960.png",height:"30",alt:"",className:"mr-2"}),r.a.createElement("span",{className:"align-middle"},"Settle Peace")),r.a.createElement("ul",{className:"nav justify-content-end"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{className:"btn btn-outline-success mr-2",to:"/quotes"},"View Quotes")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{className:"btn btn-outline-success",to:"/new"},"New Quote")))))}}])&&J(n.prototype,a),t}(),G=n(691),K=n(693),U=n(242);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Z=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=function(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,Y(t).call(this))).state={message:"hello"},e}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){return r.a.createElement(G.a,null,r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(K.a,null,r.a.createElement(U.a,{path:"/",component:j,exact:!0}),r.a.createElement(U.a,{path:"/new",component:Q}),r.a.createElement(U.a,{path:"/quotes",component:w}))))}}])&&X(n.prototype,a),t}();l.a.render(r.a.createElement(Z,null),document.getElementById("app"))},726:function(e,t){e.exports={desc:"style_desc_ae22f"}},728:function(e,t){e.exports={desc:"style_desc_4aff1"}},730:function(e,t){e.exports={name:"style_name_24bcf"}}});