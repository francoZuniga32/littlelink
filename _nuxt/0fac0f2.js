(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{265:function(t,n,e){"use strict";e.r(n);e(207);var l={props:{id:Number,title:String,img:String,presentation:String,text:String,link:String},data:function(){return{modalid:null}},mounted:function(){this.modalid="proyecto-".concat(this.id)},methods:{ver:function(){this.$bvModal.show(this.modalid)}}},o=e(67),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:t.title,"img-src":t.img,"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v("\n      "+t._s(t.presentation)+"\n    ")]),t._v(" "),e("b-button",{on:{click:t.ver}},[t._v("Ver mas")])],1),t._v(" "),e("b-modal",{attrs:{id:t.modalid,title:t.title}},[e("p",{staticClass:"my-4"},[t._v("Hello from modal!")])])],1)}),[],!1,null,null,null);n.default=component.exports}}]);