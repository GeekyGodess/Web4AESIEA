(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cdba64b0"],{"5c54":function(e,t,r){e.exports=r.p+"img/teddyGryffondor.f3fddb3b.jpeg"},a040:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticStyle:{"background-color":"#FFFFFF"}},[a("v-layout",{attrs:{"text-center":"",wrap:"","align-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{src:r("d482"),contain:"",height:"200"}}),a("v-row",{attrs:{align:"center",justify:"space-around"}},[a("v-text-field",{attrs:{label:"Recherche"}}),a("v-icon",[e._v("mdi-magnify")])],1)],1),a("v-flex",{attrs:{xs12:""}},[a("h1",{attrs:{align:"left"}},[a("v-icon",[e._v("mdi-heart")]),a("FONT",{attrs:{face:"impact"}},[e._v("Coups de coeur")])],1),a("v-container",{attrs:{fluid:""}},[a("v-data-iterator",{attrs:{items:e.items,"items-per-page":e.itemsPerPage,"footer-props":{itemsPerPageOptions:e.itemsPerPageOptions}},on:{"update:itemsPerPage":function(t){e.itemsPerPage=t},"update:items-per-page":function(t){e.itemsPerPage=t}},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.items,(function(t){return a("v-row",{key:t.name,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[a("v-col",[a("v-card",[a("v-card-title",[a("h4",[e._v("Collier Retourneur de temps")])]),a("v-divider"),a("v-list",{attrs:{dense:""}},[a("v-list-item",[a("v-list-item-content",[a("v-img",{staticClass:"my-3",attrs:{src:r("a621"),contain:"",height:"200",width:"200"}})],1),a("v-list-item-content",{staticClass:"align-end"},[a("center",[e._v(" Matière: plaqué or"),a("br"),e._v(" Taille: le pendentif mesure environ 3cmx3cm avec une chaîne en maille serpent de 40cm de longueur"),a("br")]),a("b",[e._v("prix: 20€")]),a("div",[a("v-btn",{attrs:{rounded:"",color:"primary",dark:""},on:{click:function(t){return e.addElement(e.bijHer)}}},[e._v(e._s(t.bouton))])],1)],1)],1)],1)],1)],1),a("v-col",[a("v-card",[a("v-card-title",[a("h4",[e._v("Baguette Hermione Granger")])]),a("v-divider"),a("v-list",{attrs:{dense:""}},[a("v-list-item",[a("v-list-item-content",[a("v-img",{staticClass:"my-3",attrs:{src:r("32f1"),contain:"",height:"200",width:"200"}})],1),a("v-list-item-content",{staticClass:"align-end"},[a("center",[e._v(" Bois: Vigne "),a("br"),e._v(" Coeur: Ventricule de Dragon"),a("br"),e._v(" Longeur: 27,30 centimètres"),a("br")]),a("b",[e._v("prix: 40€")]),a("div",[a("v-btn",{attrs:{rounded:"",color:"primary",dark:""},on:{click:function(t){return e.addElement(e.bagHer)}}},[e._v(e._s(t.bouton))])],1)],1)],1)],1)],1)],1),a("v-col",[a("v-card",[a("v-card-title",[a("h4",[e._v("Teddy Gryffondor Quidditch bordeaux")])]),a("v-divider"),a("v-list",{attrs:{dense:""}},[a("v-list-item",[a("v-list-item-content",[a("v-img",{staticClass:"my-3",attrs:{src:r("5c54"),contain:"",height:"200",width:"200"}})],1),a("v-list-item-content",{staticClass:"align-end"},[a("centre",[e._v(" Description: Teddy Harry Potter - Gryffindor Blazon Col, poignets et ceinture en tricot à rayures décoratives Manches longues contrastées Poches passepoilées contrastées Boutons-pressions contrastés Sérigraphie recto-verso "),a("br"),e._v(" Matière: 70% coton, 30% polyester "),a("br"),e._v(" Tailles Européennes: S, M, L, XL, XXL"),a("br")]),a("b",[e._v("prix: 40€")]),a("div",[a("v-btn",{attrs:{rounded:"",color:"primary",dark:""},on:{click:function(t){return e.addElement(e.tedGry)}}},[e._v(e._s(t.bouton))])],1)],1)],1)],1)],1)],1)],1)}))}}])}),a("v-snackbar",{model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.text)+" "),a("v-btn",{attrs:{color:"pink",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v(" Close ")])],1)],1)],1)],1)],1)},n=[],i=(r("96cf"),r("89ba")),s={data:function(){return{valid:!1,url:"",bagHer:"Hermione",bijHer:"Hermione2",tedGry:"Gryfondor",itemsPerPageOptions:[4,8,12],itemsPerPage:4,items:[{bouton:"Ajouter au panier"}],snackbar:!1,text:""}},methods:{addElement:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t!==this.bijHer){e.next=5;break}return e.next=3,this.axios.post(this.url+"/api/panier",{name:"Collier Retourneur de temps",image:"../assets/bijouxHermione.jpeg",description:"Matière: plaqué or\nTaille: le pendentif mesure environ 3cmx3cm avec une chaîne en maille serpent de 40cm de longueur",prix:"prix: 20€"});case 3:r=e.sent,200===r.status&&(this.snackbar=!0,this.text=r.data.message);case 5:if(t!==this.bagHer){e.next=10;break}return e.next=8,this.axios.post(this.url+"/api/panier",{name:"Baguette Hermione Granger",image:"../assets/baguetteHermione.jpeg",description:"Bois: Vigne\nCoeur: Ventricule de Dragon\nLongeur: 27,30 centimètres",prix:"prix: 40€"});case 8:a=e.sent,200===a.status&&(this.snackbar=!0,this.text=a.data.message);case 10:if(t!==this.tedGry){e.next=15;break}return e.next=13,this.axios.post(this.url+"/api/panier",{name:"Teddy Gryffondor Quidditch bordeaux",image:"../assets/teddyGryffondor.jpeg",description:"Description: Teddy Harry Potter - Gryffindor Blazon Col, poignets et ceinture en tricot à rayures décoratives Manches longues contrastées Poches passepoilées contrastées Boutons-pressions contrastés Sérigraphie recto-verso\nMatière: 70% coton, 30% polyester\nTailles Européennes: S, M, L, XL, XXL",prix:"prix: 40€"});case 13:n=e.sent,200===n.status&&(this.snackbar=!0,this.text=n.data.message);case 15:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},o=s,c=r("2877"),d=r("6544"),l=r.n(d),u=r("8336"),v=r("b0af"),p=r("99d9"),m=r("62ad"),g=r("a523"),b=r("c377"),f=r("ce7e"),h=r("0e8f"),x=r("132d"),y=r("adda"),_=r("a722"),k=r("8860"),V=r("da13"),C=r("5d23"),P=r("0fd9"),w=r("2db4"),H=r("8654"),j=Object(c["a"])(o,a,n,!1,null,null,null);t["default"]=j.exports;l()(j,{VBtn:u["a"],VCard:v["a"],VCardTitle:p["d"],VCol:m["a"],VContainer:g["a"],VDataIterator:b["a"],VDivider:f["a"],VFlex:h["a"],VIcon:x["a"],VImg:y["a"],VLayout:_["a"],VList:k["a"],VListItem:V["a"],VListItemContent:C["a"],VRow:P["a"],VSnackbar:w["a"],VTextField:H["a"]})},a621:function(e,t,r){e.exports=r.p+"img/bijouxHermione.36d09632.jpeg"}}]);
//# sourceMappingURL=chunk-cdba64b0.4ad65cad.js.map