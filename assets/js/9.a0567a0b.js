(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{626:function(e,a,o){"use strict";o.r(a);var n={name:"JsonSchemaManyRadio",components:{VueForm:o(565).a},data:function(){return{jsonSchemaValue:{index:["1","2"]},jsonSchema:{type:"object",required:[],properties:{index:{type:"array",uniqueItems:!0,items:{type:"string",enum:["1","2","3"],enumNames:["一","二","三"]},title:"多选(Checkbox)","ui:widget":"CheckboxesWidget"}}},formFooter:{show:!1}}}},t=o(83),r=Object(t.a)(n,(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticStyle:{border:"1px solid #aaaaaa",padding:"30px"}},[o("vue-form",{attrs:{schema:e.jsonSchema,formFooter:e.formFooter},model:{value:e.jsonSchemaValue,callback:function(a){e.jsonSchemaValue=a},expression:"jsonSchemaValue"}})],1)}),[],!1,null,null,null);a.default=r.exports}}]);