(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{1:function(e,t,s){e.exports={main:"main_main__1n3v0",wrapper:"main_wrapper__1m4cW",header:"main_header__3CmJb",field:"main_field__36Tvu",playingField:"main_playingField__3Ada7",squareItem:"main_squareItem__3q4oF",setting:"main_setting__2cgNk",sound:"main_sound__2E5JM",color:"main_color__1pjP2",span:"main_span__3Qy3D",inputSound:"main_inputSound__3ggXZ",inputMusic:"main_inputMusic__303QM",newGameButton:"main_newGameButton__jwpZI",footer:"main_footer__1ve_l",logo:"main_logo__3qQju"}},14:function(e,t,s){},15:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var a=s(2),i=s.n(a),n=s(5),c=s.n(n),l=(s(14),s(15),s(6)),r=s(7),o=s(3),d=s(9),u=s(8),m=s(1),j=s.n(m),h=s.p+"static/media/sound.9e1d6196.mp3",b=s.p+"static/media/win.864231e3.mp3",p=s.p+"static/media/fon.b6fdab07.mp3",O=s.p+"static/media/logo.df6cd9cf.png",f=s(0),_=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).isWinner=function(){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]],t=new Audio(b),s=(new Audio(p),a.state.count%2===0?"X":"O"),i=0;i<e.length;i++){var n=e[i];if(!a.state.squares.includes(null)){setTimeout((function(){alert("\u0418\u0433\u0440\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0430\u0441\u044c \u043d\u0438\u0447\u044c\u0435\u0439!")}),100),setTimeout((function(){a.setState({squares:Array(9).fill(null)}),a.setState({count:0})}),2e3);break}if(a.state.squares[n[0]]===s&&a.state.squares[n[1]]===s&&a.state.squares[n[2]]===s){0!=a.state.onOf&&t.play(),setTimeout((function(){alert(s+" Win!!!")}),100),setTimeout((function(){a.setState({squares:Array(9).fill(null)}),a.setState({count:0})}),2e3);break}}},a.isMute=function(){var e=document.getElementById("sound").value;a.setState((function(t){return{onOf:e}}))},a.isMusic=function(){var e=document.getElementById("music").value;a.setState((function(t){return{music:e}})),document.getElementById("music").value=a.state.music},a.clickHandler=function(e){var t=e.target.getAttribute("data"),s=new Audio(h),i=a.state.squares;null===i[t]?(a.state.count%2===0?(i[t]="X",0!=a.state.onOf&&s.play()):(i[t]="O",0!=a.state.onOf&&s.play()),a.setState({count:a.state.count+1}),a.setState({squares:i})):alert("\u043e\u0448\u0438\u0431\u043a\u0430"),a.isWinner()},a.isChange=function(){var e=document.getElementById("color").value;a.setState({color:e}),console.log(a.state.color),document.getElementById("main").style.backgroundColor=a.state.color,document.getElementById("sound").style.backgroundColor=a.state.color,document.getElementById("newGameButton").style.backgroundColor=a.state.color,document.getElementById("music").style.backgroundColor=a.state.color},a.isNewGame=function(){setTimeout((function(){a.setState({squares:Array(9).fill(null)}),a.setState({count:0})}),100)},a.state={squares:Array(9).fill(null),count:1,style:j.a.squareItem,onOf:1,color:"",music:5},a.isMute=a.isMute.bind(Object(o.a)(a)),a.isMusic=a.isMusic.bind(Object(o.a)(a)),a}return Object(r.a)(s,[{key:"render",value:function(){return Object(f.jsx)("div",{className:j.a.main,id:"main",children:Object(f.jsxs)("div",{className:j.a.wrapper,children:[Object(f.jsx)("div",{className:j.a.header,children:Object(f.jsx)("h1",{children:"tic tac toe"})}),Object(f.jsx)("div",{className:j.a.field,children:Object(f.jsxs)("div",{className:j.a.playingField,children:[Object(f.jsx)("div",{className:this.state.style,data:"0",id:"1",onClick:this.clickHandler,children:this.state.squares[0]}),Object(f.jsx)("div",{className:this.state.style,data:"1",id:"2",onClick:this.clickHandler,children:this.state.squares[1]}),Object(f.jsx)("div",{className:this.state.style,data:"2",id:"3",onClick:this.clickHandler,children:this.state.squares[2]}),Object(f.jsx)("div",{className:this.state.style,data:"3",id:"4",onClick:this.clickHandler,children:this.state.squares[3]}),Object(f.jsx)("div",{className:this.state.style,data:"4",id:"5",onClick:this.clickHandler,children:this.state.squares[4]}),Object(f.jsx)("div",{className:this.state.style,data:"5",id:"6",onClick:this.clickHandler,children:this.state.squares[5]}),Object(f.jsx)("div",{className:this.state.style,data:"6",id:"7",onClick:this.clickHandler,children:this.state.squares[6]}),Object(f.jsx)("div",{className:this.state.style,data:"7",id:"8",onClick:this.clickHandler,children:this.state.squares[7]}),Object(f.jsx)("div",{className:this.state.style,data:"8",id:"9",onClick:this.clickHandler,children:this.state.squares[8]}),Object(f.jsxs)("div",{className:j.a.setting,children:[Object(f.jsxs)("div",{className:j.a.sound,children:[Object(f.jsx)("span",{className:j.a.span,children:"Sound"}),Object(f.jsx)("i",{children:"off"}),Object(f.jsx)("input",{type:"range",className:j.a.inputSound,id:"sound",onChange:this.isMute,min:"0",max:"1",step:"1"}),Object(f.jsx)("i",{children:"on"})]}),Object(f.jsxs)("div",{className:j.a.sound,children:[Object(f.jsx)("span",{className:j.a.span,children:"Music"}),Object(f.jsx)("i",{children:"min"}),Object(f.jsx)("input",{type:"range",className:j.a.inputMusic,id:"music",onChange:this.isMusic,min:"0",max:"5",step:"1"}),Object(f.jsx)("i",{children:"max"})]}),Object(f.jsxs)("div",{className:j.a.color,children:[Object(f.jsx)("span",{className:j.a.span,children:"Color"}),Object(f.jsx)("input",{type:"color",id:"color",onChange:this.isChange,defaultValue:"#bfa479"})]}),Object(f.jsx)("div",{className:j.a.newGameButton,onClick:this.isNewGame,id:"newGameButton",children:Object(f.jsx)("span",{children:"Start new game"})})]})]})}),Object(f.jsxs)("div",{className:j.a.footer,children:[Object(f.jsx)("div",{children:Object(f.jsx)("a",{href:"https://github.com/seha1/react-game",target:"_blank",children:"github"})}),Object(f.jsx)("div",{children:Object(f.jsx)("a",{href:"https://rs.school/js/",target:"_blank",children:Object(f.jsx)("img",{className:j.a.logo,src:O})})})]})]})})}}]),s}(i.a.Component);var g=function(){return Object(f.jsx)(_,{})};c.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4527b218.chunk.js.map