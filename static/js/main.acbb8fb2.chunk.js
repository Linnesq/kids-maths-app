(this["webpackJsonpreact-playground"]=this["webpackJsonpreact-playground"]||[]).push([[0],[,,,,,,,,,,function(t,e,a){t.exports=a(24)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e),a.d(e,"getSimpleAddition",(function(){return r})),a.d(e,"getSimpleMultiplication",(function(){return i})),a.d(e,"getSimpleDivision",(function(){return s})),a.d(e,"getSimpleSubtraction",(function(){return l})),a.d(e,"getTimesTable",(function(){return u})),a.d(e,"getDivision",(function(){return o}));var n=function(t,e){return Math.floor(Math.random()*e)+t},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"right",e=n(1,12),a=n(1,12),r=e+a,i="+";return{left:e,right:a,answer:r,operator:i,userFills:t="random"===t?c():t}},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"right",e=n(1,12),a=n(1,12),r=e*a,i="\xd7";return{left:e,right:a,answer:r,operator:i,userFills:t="random"===t?c():t}},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"right",e=[n(1,10),n(1,10)],a=e.reduce((function(t,e){return t*e})),r=Math.max.apply(Math,e),i=Math.min.apply(Math,e),s="\xf7";return{left:a,right:r,answer:i,operator:s,userFills:t="random"===t?c():t}},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"answer",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=n(1,e),i=["left","answer"][n(0,2)];return{left:a*r,right:a,answer:r,operator:"\xf7",userFills:"random"===t?i:t}},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"right",e=[n(1,20),n(1,20)],a=Math.max.apply(Math,e),r=Math.min.apply(Math,e),i=a-r,s="\u2212";return{left:a,right:i,answer:r,operator:s,userFills:t="random"===t?c():t}},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"answer",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=n(1,e),i=["right","answer"][n(0,2)];return{left:a,right:r,answer:a*r,operator:"\xd7",userFills:"random"===t?i:t}},c=function(){return["left","right","answer"][n(1,3)-1]}},function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=(a(15),a(2)),l=(a(16),a(5)),u=a(6),c=a(1),p=a(9),d=a(8),m=(a(17),function(t){return r.a.createElement("div",{className:"DisplayBox"},r.a.createElement("span",null,t.value))}),k=(a(18),function(t){var e=t.onValueChangeHandler,a=t.intValue,n=t.onSubmit;return r.a.createElement("input",{autoFocus:!0,className:"InputBox",type:"number",value:isNaN(a)?"":a,onChange:function(t){return e(parseInt(t.target.value,10))},onKeyUp:function(t){13===t.keyCode&&n()}})}),f=(a(19),function(t){return r.a.createElement("div",{className:"SubmitButton"},r.a.createElement("button",{"data-testid":"submitButton",type:"submit",onClick:t.onClickHandler},t.buttonText))}),g=(a(20),function(t){var e=t.controlInfo.map((function(e){var a=e.displayText===t.displayText?"TaskOptionsPanel TaskOptionsPanel-selected":"TaskOptionsPanel";return r.a.createElement("button",{className:a,key:e.displayText,type:"button",onClick:function(){return t.onClickHandler(e.displayText)}},e.displayText)}));return r.a.createElement("div",null,e)}),y=(a(21),0),h=1,v=2,T=function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(t){var n;Object(l.a)(this,a),(n=e.call(this,t)).onSubmitHandler=function(){if(n.state.result===v)n.onNewTask();else{var t=n.state.value===n.state.task[n.state.task.userFills],e=n.props.streakHandler;n.setState((function(e){return{result:t?v:h,value:t?e.value:""}})),e(t?1:0)}},n.getTaskCreator=function(){return n.props.taskData.taskFunctions[n.state.taskType]},n.getTaskCreatorArgs=function(){return[n.props.taskData.display.userFills,n.state.range,n.state.factor]},n.onNewTask=function(){n.setState({task:n.getTaskCreator().apply(Object(c.a)(n),n.getTaskCreatorArgs()),value:"",result:y})},n.onTaskTypeChange=function(t){var e=n.props.taskData.controls.filter((function(e){return e.displayText===t}))[0],a=n.props.taskData.taskFunctions[e.taskType],r=e.range,i=e.factor,s=[n.props.taskData.display.userFills,r,i];n.setState({taskType:e.taskType,displayText:e.displayText,value:"",result:null,task:a.apply(Object(c.a)(n),s),range:r,factor:i})},n.onInputValueChange=function(t){n.setState({value:t})};var r=t.taskData,i=r.controls,s=r.taskFunctions,o=t.taskData.display.userFills,u=i[0],p=u.range,d=u.factor;return n.state={result:y,value:"",displayText:i[0].displayText,taskType:i[0].taskType,task:s[i[0].taskType].apply(Object(c.a)(n),[o,p,d]),range:p,factor:d},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){console.debug("component mounted")}},{key:"componentWillUnmount",value:function(){console.debug("component unmounting")}},{key:"render",value:function(){var t=r.a.createElement(k,{intValue:this.state.value,onSubmit:this.onSubmitHandler,onValueChangeHandler:this.onInputValueChange}),e=this.props.taskData.controls,a=this.state.task,n=a.left,i=a.right,s=a.answer,o="Do your best!";this.state.result===v?o="Correct, well done!":this.state.result===h&&(o="Unlucky, keep trying!");var l=this.state.result===v?"Next":"Submit";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"MathView"},"left"===this.state.task.userFills?t:r.a.createElement(m,{value:n}),r.a.createElement("span",{className:"MathView-sign"},this.state.task.operator),"right"===this.state.task.userFills?t:r.a.createElement(m,{value:i}),r.a.createElement("span",{className:"MathView-sign"},"="),"answer"===this.state.task.userFills?t:r.a.createElement(m,{value:s})),r.a.createElement(f,{buttonText:l,onClickHandler:this.onSubmitHandler}),r.a.createElement("div",null,r.a.createElement("h3",null,o)),r.a.createElement(g,{controlInfo:e,displayText:this.state.displayText,onClickHandler:this.onTaskTypeChange}))}}]),a}(r.a.Component),b=(a(22),function(t){var e=t.streak,a=function(){return parseInt(window.localStorage.getItem("kidsmaths.hiscore"),10)||0},n="";e>0&&e>=a()&&(window.localStorage.setItem("kidsmaths.hiscore",e),n="StreakBox-on-roll");var i="Current Streak: ".concat(e),s="Best Streak: ".concat(a());return r.a.createElement("div",{className:"StreakBox"},r.a.createElement("span",{className:n},i),r.a.createElement("br",null),r.a.createElement("span",{className:n},s))}),x=a(7),E=a(23),w=E.getSimpleAddition,S=E.getSimpleMultiplication,C=E.getSimpleDivision,F=E.getSimpleSubtraction,M=E.getTimesTable,N=E.getDivision,D="+",O="\u2212",j="\xd7",H="\xf7",I="random",B=function(){return{description:"Multi-choice arithemetic",controls:[{displayText:D,taskType:"addition"},{displayText:j,taskType:"multiplication"},{displayText:H,taskType:"division"},{displayText:O,taskType:"subtraction"}],taskFunctions:{addition:w,multiplication:S,division:C,subtraction:F},display:{userFills:I}}},V=function(){return{description:"times tables",controls:[{displayText:"2X",taskType:"multiplication",range:12,factor:2},{displayText:"3X",taskType:"multiplication",range:12,factor:3},{displayText:"4X",taskType:"multiplication",range:12,factor:4},{displayText:"5X",taskType:"multiplication",range:12,factor:5},{displayText:"10X",taskType:"multiplication",range:12,factor:10}],taskFunctions:{multiplication:M},display:{userFills:I}}},A=function(){return{description:"division",controls:[{displayText:"\xf72",taskType:"division",range:12,factor:2},{displayText:"\xf73",taskType:"division",range:12,factor:3},{displayText:"\xf74",taskType:"division",range:12,factor:4},{displayText:"\xf75",taskType:"division",range:12,factor:5}],taskFunctions:Object(x.a)({},"division",N),display:{userFills:I}}},X=function(){var t=[B,V,A],e=Object(n.useState)(0),a=Object(o.a)(e,2),i=a[0],s=a[1],l=Object(n.useState)(0),u=Object(o.a)(l,2),c=u[0],p=u[1],d=t[i].call();return r.a.createElement("div",{className:"App-container"},r.a.createElement("div",{className:"App"},r.a.createElement(T,{key:d.description,streakHandler:function(t){p(0===t?0:c+1)},taskData:d}),r.a.createElement(b,{streak:c}),r.a.createElement("div",{className:"App-switcher"},r.a.createElement("span",null,"Other tasks..."),0!==i&&r.a.createElement("button",{type:"button",onClick:function(){return s(0)}},"Mixed Tasks"),1!==i&&r.a.createElement("button",{type:"button",onClick:function(){return s(1)}},"Times Tables"),2!==i&&r.a.createElement("button",{type:"button",onClick:function(){return s(2)}},"Division"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.acbb8fb2.chunk.js.map