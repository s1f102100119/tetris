(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2562:function(e,n,t){"use strict";t.r(n);var i=t(2809),r=t(9008),o=t(7294),c=t(9163),a=t(5893);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s=["aqua","yellow","purple","blue","orange","green","red"],l=c.ZP.div.withConfig({displayName:"pages__Container",componentId:"sc-eccczk-0"})(["display:flex;align-items:center;justify-content:center;height:100vh;background-color:lightsteelblue;"]),u=c.ZP.div.withConfig({displayName:"pages__Board",componentId:"sc-eccczk-1"})(["display:flex;flex-direction:row;justify-content:space-around;background-color:lightgray;border:0.8vh solid;border-color:#ddd #666 #666 #ddd;@media screen and (max-width:860px){width:50vh;height:48vh;}@media screen and (min-width:861px){width:100vh;height:88vh;}"]),m=c.ZP.div.withConfig({displayName:"pages__GameBoard",componentId:"sc-eccczk-2"})(["margin-top:2vh;font-size:0;background-color:black;border:1vh solid;border-color:#666 #ddd #ddd #666;@media screen and (max-width:860px){width:22vh;height:42vh;}@media screen and (min-width:861px){width:42vh;height:82vh;}"]),g=c.ZP.div.withConfig({displayName:"pages__TetrominoBlock",componentId:"sc-eccczk-3"})(["display:inline-block;vertical-align:bottom;background-color:",";@media screen and (max-width:860px){width:2vh;height:2vh;",";}@media screen and (min-width:861px){width:4vh;height:4vh;",";}"],(function(e){return 1<=e.num&&e.num<=7?s[e.num-1]:"#111"}),(function(e){return 1<=e.num&&e.num<=7?"border: 0.2vh solid; border-color: #ddd #666 #666 #ddd;":""}),(function(e){return 1<=e.num&&e.num<=7?"border: 0.3vh solid; border-color: #ddd #666 #666 #ddd;":""})),f=c.ZP.div.withConfig({displayName:"pages__SideArea",componentId:"sc-eccczk-4"})(["display:flex;flex-direction:column;align-items:center;margin-top:2vh;font-size:0;"]),v=c.ZP.div.withConfig({displayName:"pages__NextTBoard",componentId:"sc-eccczk-5"})(["display:flex;flex-direction:column;align-items:center;font-size:0;background-color:powderblue;@media screen and (max-width:860px){width:13vh;height:14vh;margin-bottom:7vh;border:0.4vh solid #666;}@media screen and (min-width:861px){width:25vh;height:30vh;margin-bottom:11vh;border:0.5vh solid #666;}"]),b=c.ZP.div.withConfig({displayName:"pages__NextTBoardText",componentId:"sc-eccczk-6"})(["display:flex;text-align:left;@media screen and (max-width:860px){width:10vh;margin:0.3vh 0;font-size:1.5vh;}@media screen and (min-width:861px){width:20vh;margin:1vh 0;font-size:3.4vh;}"]),p=(0,c.ZP)(b).withConfig({displayName:"pages__ScoreTextArea",componentId:"sc-eccczk-7"})(["justify-content:center;background-color:powderblue;@media screen and (max-width:860px){width:10vh;padding:1vh;margin-bottom:2vh;border:0.4vh solid #666;}@media screen and (min-width:861px){width:24vh;padding:2vh;margin-bottom:3vh;border:0.5vh solid #666;}"]),w=(0,c.ZP)(p).withConfig({displayName:"pages__GameStateTextArea",componentId:"sc-eccczk-8"})(["font-weight:bold;"]),x=c.ZP.div.withConfig({displayName:"pages__NextTetrominoView",componentId:"sc-eccczk-9"})(["display:inline-block;background-color:black;@media screen and (max-width:860px){width:10vh;height:10vh;border:1vh solid black;}@media screen and (min-width:861px){width:20vh;height:20vh;border:2vh solid black;}"]),k=c.ZP.div.withConfig({displayName:"pages__ButtonTemplate",componentId:"sc-eccczk-10"})(["color:#111;text-align:center;@media screen and (max-width:860px){width:12vh;height:3vh;font-size:1.5vh;line-height:2vh;}@media screen and (min-width:861px){width:24vh;height:6vh;font-size:3.4vh;line-height:4.5vh;}"]),y=(0,c.ZP)(k).withConfig({displayName:"pages__PauseButton",componentId:"sc-eccczk-11"})(["background-color:#999;@media screen and (max-width:860px){margin-bottom:0.5vh;border:0.3vh solid;border-color:#bbb #666 #666 #bbb;}@media screen and (min-width:861px){margin-bottom:1vh;border:0.5vh solid;border-color:#bbb #666 #666 #bbb;}"]),_=(0,c.ZP)(k).withConfig({displayName:"pages__StartButton",componentId:"sc-eccczk-12"})([""," @media screen and (max-width:860px){height:5vh;margin:1.5vh 0;line-height:4vh;","}@media screen and (min-width:861px){height:10vh;margin:3vh 0;line-height:8.5vh;","}"],(function(e){return e.isGameStart?"":" background-color: #aaa;"}),(function(e){return e.isGameStart?"":"border: 0.5vh solid;border-color: #bbb #666 #666 #bbb;"}),(function(e){return e.isGameStart?"":"border: 0.5vh solid;border-color: #bbb #666 #666 #bbb;"})),S=c.ZP.div.withConfig({displayName:"pages__Controller",componentId:"sc-eccczk-13"})(["vertical-align:bottom;background-color:powderblue;@media screen and (max-width:860px){width:13vh;height:12.75vh;padding:0.1vh;border:0.4vh solid #666;}@media screen and (min-width:861px){width:26vh;height:25vh;padding:0.5vh;border:0.5vh solid #666;}"]),j=c.ZP.div.withConfig({displayName:"pages__ControllerButton",componentId:"sc-eccczk-14"})(["display:inline-block;color:black;text-align:center;vertical-align:top;"," @media screen and (max-width:860px){width:4vh;height:4vh;font-size:2.7vh;line-height:",";","}@media screen and (min-width:861px){width:8vh;height:8vh;font-size:6.5vh;line-height:",";","}"],(function(e){return""===e.c?"":"background-color: #999;"}),(function(e){return"\u2190"===e.c||"\u2192"===e.c?"2.75vh":"3vh"}),(function(e){return""===e.c?"":"border: 0.3vh solid; border-color: #bbb #666 #666 #bbb;"}),(function(e){return"\u2190"===e.c||"\u2192"===e.c?"6vh":"6.75vh"}),(function(e){return""===e.c?"":"border: 0.5vh solid; border-color: #bbb #666 #666 #bbb;"}));n.default=function(){var e=[[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,9,9,9,9,9,9,9,9,9,9,9]],n=e[0].length,t=e.length,i=Array.from(new Array(4),(function(){return new Array(4).fill(0)})),c=[[[[0,0,0,0],[1,1,1,1]],[[0,1],[0,1],[0,1],[0,1]],[[0,0,0,0],[1,1,1,1]],[[0,1],[0,1],[0,1],[0,1]]],[[[0,2,2],[0,2,2]],[[0,2,2],[0,2,2]],[[0,2,2],[0,2,2]],[[0,2,2],[0,2,2]]],[[[0,3,0],[3,3,3],[0,0,0]],[[0,3,0],[0,3,3],[0,3,0]],[[0,0,0],[3,3,3],[0,3,0]],[[0,3,0],[3,3,0],[0,3,0]]],[[[4,0,0],[4,4,4],[0,0,0]],[[0,4,4],[0,4,0],[0,4,0]],[[0,0,0],[4,4,4],[0,0,4]],[[0,0,4],[0,0,4],[0,4,4]]],[[[0,0,5],[5,5,5],[0,0,0]],[[0,5,0],[0,5,0],[0,5,5]],[[0,0,0],[5,5,5],[5,0,0]],[[5,5,0],[0,5,0],[0,5,0]]],[[[0,6,6],[6,6,0],[0,0,0]],[[6,0,0],[6,6,0],[0,6,0]],[[0,6,6],[6,6,0],[0,0,0]],[[6,0,0],[6,6,0],[0,6,0]]],[[[7,7,0],[0,7,7],[0,0,0]],[[0,7,0],[7,7,0],[7,0,0]],[[7,7,0],[0,7,7],[0,0,0]],[[0,7,0],[7,7,0],[7,0,0]]]],d=function(){return{block:c[Math.floor(Math.random()*c.length)],angle:0}},s=(0,o.useState)(e),k=s[0],P=s[1],N=(0,o.useState)(i),C=N[0],z=N[1],O=(0,o.useState)(d()),Z=O[0],I=O[1],E=(0,o.useState)(d()),A=E[0],T=E[1],B=(0,o.useState)(4),G=B[0],D=B[1],M=(0,o.useState)(2),J=M[0],L=M[1],X=(0,o.useState)(!1),R=X[0],U=X[1],V=(0,o.useState)(0),q=V[0],F=V[1],H=(0,o.useState)(!0),K=H[0],Q=H[1],W=(0,o.useState)(!1),Y=W[0],$=W[1],ee=(0,o.useState)(!1),ne=ee[0],te=ee[1],ie=(0,o.useState)(!1),re=ie[0],oe=ie[1],ce=(0,o.useState)(0),ae=ce[0],de=ce[1],he=function(){for(var e=JSON.parse(JSON.stringify(k)),n=Z.block[Z.angle],t=0;t<n.length;t++)for(var i=0;i<n[t].length;i++)n[t][i]&&(e[t+J][i+G]=n[t][i]);return e},se=(0,o.useMemo)((function(){return he().slice(4,t).map((function(e){return e.filter((function(e){return 9!==e}))}))}),[G,J,Z]),le=(0,o.useCallback)((function(){for(var e=i,n=A.block[A.angle],t=0;t<n.length;t++)for(var r=0;r<n[t].length;r++)e[t][r]=n[t][r];z(e)}),[A]),ue=function(e,i,r){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:k;if(o&&t<i+r.length)return!1;if(e<0||n<e+r[0].length)return!1;for(var a=JSON.parse(JSON.stringify(c)),d=0;d<r.length;d++)for(var h=0;h<r[d].length;h++)if(r[d][h]>0&&a[d+i][h+e]>0)return!1;return!0},me=function(){if(!(q>1)){var e,n=(e=Z.angle)<3?e+1:0;ue(G,J,Z.block[n],!0)&&I(h(h({},Z),{},{angle:n}))}},ge=function(){for(var e=J;ue(G,e+1,Z.block[Z.angle],!0);)e++;L(e)},fe=function(){D((function(e){return ue(e+1,J,Z.block[Z.angle])?e+1:e}))},ve=function(){D((function(e){return ue(e-1,J,Z.block[Z.angle])?e-1:e}))},be=(0,o.useCallback)((function(e){if("x"!==e.key){if(!re)switch(e.key){case"ArrowUp":me();break;case"ArrowDown":ge();break;case"ArrowRight":fe();break;case"ArrowLeft":ve()}}else we()}),[Z,G,J,re]);(0,o.useEffect)((function(){var e;if(K&&Y&&!ne)return document.addEventListener("keydown",be,!1),ue(G,J,Z.block[Z.angle])||I(h(h({},Z),{},{angle:(e=Z.angle,0<e?e-1:3)})),function(){document.removeEventListener("keydown",be,!1)}}),[Z,G,J,K,Y,ne,re]);var pe=function(){var e=Math.floor(ae/5)+1;return e<10?e:10};(0,o.useEffect)((function(){!Y||ne||re||(K?(le(),ue(G,J+1,Z.block[Z.angle],!0)?(L(J+1),F(0)):q>1?(F(0),Q(!1)):F((function(e){return e+1})),setTimeout((function(){U(!R)}),600-50*(pe()-1))):(Q(!0),function(){for(var e=he(),n=[],t=0;t<e.length;t++)e[t].every((function(e){return e>0}))&&!e[t].every((function(e){return 9===e}))?(de((function(e){return e+1})),n.unshift([9,0,0,0,0,0,0,0,0,0,0,9])):n.push(e[t]);!ue(4,2,A.block[0],!1,n)||J<3?te(!0):(I(A),D(4),L(2),T(d())),P(n)}(),U(!R)))}),[R,Y,re,ae]);var we=function(){Y&&oe(!re)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.default,{children:(0,a.jsx)("title",{children:"Pseudo-Tetris "})}),(0,a.jsx)(l,{children:(0,a.jsxs)(u,{children:[(0,a.jsxs)(f,{children:[(0,a.jsxs)(p,{children:["Score : ",ae]}),(0,a.jsxs)(p,{children:["Level : ",pe()]}),(0,a.jsx)(w,{children:ne?"GAMEOVER":re?"PAUSE":"Playing!"})]}),(0,a.jsx)(m,{children:se.map((function(e,n){return e.map((function(e,t){return(0,a.jsx)(g,{num:e},"".concat(t,"-").concat(n))}))}))}),(0,a.jsxs)(f,{children:[(0,a.jsxs)(v,{children:[(0,a.jsx)(b,{children:"Next :"}),(0,a.jsx)(x,{children:C.map((function(e,n){return e.map((function(e,t){return(0,a.jsx)(g,{num:e},"".concat(t,"-").concat(n))}))}))})]}),(0,a.jsx)(_,{isGameStart:Y,onClick:function(){$(!0)},children:Y?"":"Game Start"}),(0,a.jsxs)(S,{children:[(0,a.jsx)(y,{onClick:function(){return we()},children:re?"[X] : Resume":"[X] : Pause"}),[["","\u2935",""],["\u2190","\u2193","\u2192"]].map((function(e,n){return e.map((function(e,t){return(0,a.jsx)(j,{onClick:function(){return function(e,n){if(!re)switch([n,e].toString()){case[0,1].toString():me();break;case[1,1].toString():ge();break;case[1,2].toString():fe();break;case[1,0].toString():ve()}}(t,n)},c:e,children:e},"".concat(t,"-").concat(n))}))}))]})]})]})})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2562)}])}},function(e){e.O(0,[90,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);