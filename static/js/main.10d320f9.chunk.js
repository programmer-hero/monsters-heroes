(this["webpackJsonpmonsters-heroes"]=this["webpackJsonpmonsters-heroes"]||[]).push([[0],{24:function(e,t,r){},44:function(e,t,r){},45:function(e,t,r){},47:function(e,t,r){},48:function(e,t,r){},49:function(e,t,r){"use strict";r.r(t);var n=r(2),s=r(19),a=r.n(s),o=(r(24),r(3)),c=r(4),i=r(6),u=r(5),h=r(7),p=r.n(h),l=r(9),j=r(8),d=r.n(j),b=function(){var e=Object(l.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://jsonplaceholder.typicode.com/users");case 3:(t=e.sent).statusText="",t.ok=!0,t.data.monsters=t.data,e.next=15;break;case 9:e.prev=9,e.t0=e.catch(0),(t=e.t0.response).statusText="Lista de monstros indispon\xedvel.",t.ok=!1,t.data.monsters=[];case 15:return e.abrupt("return",t);case 16:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),m=(r(44),r(45),r(0)),f=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"card-container",children:[Object(m.jsx)("img",{src:"https://robohash.org/".concat(this.props.monster.id,"?set=set2&size=180x180"),alt:"Monster"}),Object(m.jsx)("h2",{children:this.props.monster.name},this.props.monster.id),Object(m.jsx)("p",{children:this.props.monster.email})]})}}]),r}(n.Component),O=(r(47),function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"card-list",children:this.props.monsters.map((function(e){return Object(m.jsx)(f,{monster:e},e.id)}))})}}]),r}(n.Component)),v=(r(48),function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return Object(m.jsx)("input",{className:"search-field",type:"search",placeholder:this.props.placeholder,onChange:this.props.handleChange})}}]),r}(n.Component)),x=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.call(this)).componentDidMount=function(){b().then((function(t){return e.setState({isError:t.ok,errorMessage:t.statusText,monsters:t.data.monsters})}))},e.state={monsters:[],isError:!1,errorMessage:"",searchField:""},e}return Object(c.a)(r,[{key:"render",value:function(){var e=this,t=this.state,r=t.searchField,n=t.monsters.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Monsters Heroes"}),Object(m.jsx)(v,{handleChange:function(t){return e.setState({searchField:t.target.value})},placeholder:"busca de monstros"}),this.state.isError?"":Object(m.jsx)("h1",{children:this.state.errorMessage}),Object(m.jsx)(O,{monsters:n})]})}}]),r}(n.Component);a.a.render(Object(m.jsx)(x,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.10d320f9.chunk.js.map