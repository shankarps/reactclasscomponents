(this.webpackJsonpclasscomponents=this.webpackJsonpclasscomponents||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n(3),l=n(6),s=n(4),r=n(7),c=n(0),i=n.n(c),u=n(5),m=n.n(u),g=(n(13),function(e){return console.log(e),i.a.createElement("div",{className:"global-display"},i.a.createElement("div",null,"Latitude: ",e.lat),i.a.createElement("div",null,"Longitude: ",e.long),i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement("i",{className:"icon-style huge icon globe"})," Hemisphere:",e.lat>0?"Northern Hemisphere":"Southern Hemisphere")))}),d=function(e){return i.a.createElement("div",{class:"ui active dimmer"},i.a.createElement("div",{class:"ui big text loader"},e.message))};d.defaultProps={message:"Loading page...."};var h=d,p=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={lat:null},n.state={lat:null,long:null,errorMsg:null},n}return Object(r.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("component mount method called"),window.navigator.geolocation.getCurrentPosition((function(t){console.log(t),e.setState({lat:t.coords.latitude,long:t.coords.longitude})}),(function(t){console.log(t),e.setState({errorMsg:t.message})}))}},{key:"componentDidUpdate",value:function(){console.log("component update method called")}},{key:"render",value:function(){return this.state.errorMsg&&!this.state.lat?i.a.createElement("div",null,i.a.createElement("div",null,"Error message: ",this.state.errorMsg)):!this.state.errorMsg&&this.state.lat?i.a.createElement(g,{lat:this.state.lat,long:this.state.long}):i.a.createElement(h,{message:"Waiting for loacation"})}}]),t}(i.a.Component);m.a.render(i.a.createElement(p,null),document.querySelector("#root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.593d7bc4.chunk.js.map