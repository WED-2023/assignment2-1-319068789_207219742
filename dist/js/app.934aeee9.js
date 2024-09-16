(()=>{"use strict";var e={5531:(e,t,r)=>{r.d(t,{Z:()=>d});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"recipe-preview-container"},[t("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}}},[t("div",{staticClass:"recipe-body"},[e.image_load?t("img",{staticClass:"main-recipe-image",attrs:{src:e.recipe.image}}):e._e()]),t("div",{staticClass:"recipe-footer"},[t("div",{staticClass:"recipe-title"},[e._v(" "+e._s(e.recipe.title)+" ")]),t("ul",{staticClass:"recipe-overview"},[t("li",[t("span",[t("i",{staticClass:"fas fa-clock"}),e._v(" "+e._s(e.recipe.readyInMinutes)+" minutes ")])]),t("li",[e._v(" "+e._s(e.recipe.aggregateLikes)+" "),t("i",{staticClass:"fas fa-heart",staticStyle:{color:"red"}})]),t("li",[e.recipe.vegan?t("img",{staticClass:"icon",attrs:{src:e.vegan_img}}):e._e()]),t("li",[e.recipe.vegetarian?t("img",{staticClass:"icon",attrs:{src:e.vegeterian_img}}):e._e()]),t("li",[e.recipe.glutenFree?t("img",{staticClass:"icon",attrs:{src:e.gluten_free_img}}):e._e()])])])]),e.$root.store.username?t("div",[t("button",{staticClass:"favorite-button",class:{favorited:e.isFavorited},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.toggleFavorite.apply(null,arguments)}}},[t("i",{class:[e.isFavorited?"fas fa-star":"far fa-star"]})])]):e._e(),e.isWatched?t("div",{staticClass:"watched-indicator"},[t("i",{staticClass:"fas fa-eye"}),e._v(" Watched ")]):e._e()],1)},a=[],s=r(6835),i=r(8534),o=(r(2222),r(6067));const c={data:function(){return{image_load:!0,vegan_img:"https://github.com/WED-2023/assignment2-1-319068789_207219742/blob/main/src/assets/vegen%20friendly.png?raw=true",gluten_free_img:"https://cdn-icons-png.flaticon.com/256/4876/4876700.png",vegeterian_img:"https://github.com/WED-2023/assignment2-1-319068789_207219742/blob/main/src/assets/vegetarian-icon.png?raw=true",isFavorited:!1,isWatched:!1}},props:{recipe:{type:Object,required:!0}},mounted:function(){var e=this;return(0,i.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.checkIfFavoriteRecipe();case 2:return t.next=4,e.checkIfWatched();case 4:return t.next=6,e.loadImage();case 6:case"end":return t.stop()}}),t)})))()},methods:{checkIfFavoriteRecipe:function(){var e=this;return(0,i.Z)((0,s.Z)().mark((function t(){var r;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.B0)(localStorage.username,e.recipe.id);case 3:r=t.sent,console.log("Favorite check response:",r.data),e.isFavorited=r.data.isFavorite,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},checkIfWatched:function(){var e=this;return(0,i.Z)((0,s.Z)().mark((function t(){var r;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.mT)(localStorage.username,e.recipe.id);case 3:r=t.sent,console.log("Watched check response:",r.data),e.isWatched=r.data.isWatched,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},loadImage:function(){var e=this;return(0,i.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.recipe.image);case 3:e.image_load=!0,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log("Image load error:",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},toggleFavorite:function(){var e=this;return(0,i.Z)((0,s.Z)().mark((function t(){var r;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!localStorage.username){t.next=13;break}if(e.isFavorited=!e.isFavorited,r={username:localStorage.username,recipe_id:e.recipe.id},console.log("Toggling favorite status: Username: ".concat(r.username,", Recipe ID: ").concat(r.recipe_id)),!e.isFavorited){t.next=9;break}return t.next=7,(0,o._p)(r);case 7:t.next=11;break;case 9:return t.next=11,(0,o.zm)(r);case 11:t.next=14;break;case 13:console.error("localStorage.username is not defined.");case 14:case"end":return t.stop()}}),t)})))()}}},u=c;var l=r(1001),p=(0,l.Z)(u,n,a,!1,null,"58897ab5",null);const d=p.exports},4268:(e,t,r)=>{r.d(t,{Z:()=>k});var n=function(){var e=this,t=e._self._c;return t("b-container",[t("h3",{staticClass:"list-title"},[e._v(" "+e._s(e.title)+" "),e._t("default")],2),e.isTwoPerRow?[t("b-row",{staticClass:"custom-row"},e._l(e.recipes,(function(e){return t("b-col",{key:e.id,attrs:{cols:"6"}},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)]:e._l(e.recipes,(function(e){return t("b-row",{key:e.id,staticClass:"custom-row2"},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),"randomRecipes"===e.listType?t("div",{staticClass:"button-container"},[t("button",{on:{click:e.updateRecipes}},[e._v("Show Me Another 3 Random Recipes")])]):e._e()],2)},a=[],s=r(6835),i=r(9584),o=r(8534),c=(r(6699),r(1703),r(6647),r(7658),r(5531)),u=r(4293),l=r(9669),p=r.n(l),d="https://alonandyoni.cs.bgu.ac.il";function m(e){return v.apply(this,arguments)}function v(){return v=(0,o.Z)((0,s.Z)().mark((function e(t){var r;return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p().get("".concat(d,"/myRecipes"),{params:{username:t}});case 3:return r=e.sent,console.log("Response:",r.data),e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e["catch"](0),console.error("Error fetching my recipes:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),v.apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return h=(0,o.Z)((0,s.Z)().mark((function e(t){var r;return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p().get("".concat(d,"/favorites"),{params:{username:t}});case 3:return r=e.sent,console.log("Response:",r.data),e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e["catch"](0),console.error("Error fetching favorite recipes:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),h.apply(this,arguments)}function g(e){return w.apply(this,arguments)}function w(){return w=(0,o.Z)((0,s.Z)().mark((function e(t){var r;return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p().get("".concat(d,"/watched"),{params:{username:t}});case 3:return r=e.sent,console.log("Response:",r.data),e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e["catch"](0),console.error("Error fetching watched recipes:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),w.apply(this,arguments)}const y={name:"RecipePreviewList",components:{RecipePreview:c.Z},props:{title:{type:String,required:!0},listType:{type:String,required:!0,validator:function(e){return["randomRecipes","lastRecipes","myRecipes","familyRecipes","favorites"].includes(e)}}},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},computed:{isTwoPerRow:function(){return["favorites","myRecipes","familyRecipes"].includes(this.listType)}},methods:{updateRecipes:function(){var e=this;return(0,o.Z)((0,s.Z)().mark((function t(){var r,n,a,o,c;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,n={randomRecipes:function(){return(0,u.qL)()},lastRecipes:function(){return g(localStorage.username)},familyRecipes:function(){return(0,u.zV)()},myRecipes:function(){return m(localStorage.username)},favorites:function(){return f(localStorage.username)}},a=n[e.listType],a){t.next=5;break}throw new Error("Invalid list type");case 5:return t.next=7,a();case 7:o=t.sent,console.log(o),c=o.data.recipes,console.log(c),e.recipes=[],(r=e.recipes).push.apply(r,(0,i.Z)(c)),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))()}}},b=y;var x=r(1001),_=(0,x.Z)(b,n,a,!1,null,"1ce1afbf",null);const k=_.exports},5446:(e,t,r)=>{r.d(t,{m:()=>ae});r(6992),r(8674),r(9601),r(7727),r(9554),r(1539),r(4747);var n=r(144),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("div",{staticClass:"nav-left"},[t("router-link",{staticClass:"brand",attrs:{to:{name:"main"}}},[e._v("Vue Recipes")]),t("router-link",{attrs:{to:{name:"about"}}},[e._v("About")]),t("router-link",{attrs:{to:{name:"search"}}},[e._v("🔍 Search Recipe")]),e.$root.store.username?t("span",[t("div",{staticClass:"dropdown"},[t("button",{staticClass:"dropbtn"},[e._v("Personal")]),t("div",{staticClass:"dropdown-content"},[t("router-link",{attrs:{to:{name:"favorites"}}},[e._v("Favorites Recipes")]),t("router-link",{attrs:{to:{name:"myRecipes"}}},[e._v("My Recipes")]),t("router-link",{attrs:{to:{name:"familyRecipes"}}},[e._v("Family Recipes")]),t("button",{on:{click:function(t){e.showModal=!0}}},[e._v("Upload Recipe")])],1)])]):t("span",[e._v(" Hello Guest: "),t("router-link",{attrs:{to:{name:"register"}}},[e._v("Register")]),t("router-link",{attrs:{to:{name:"login"}}},[e._v("Login")])],1)],1),t("div",{staticClass:"nav-right"},[e.$root.store.username?t("div",{staticClass:"dropdown right"},[t("button",{staticClass:"dropbtn"},[e._v("👤 "+e._s(e.$root.store.username))]),t("div",{staticClass:"dropdown-content"},[t("button",{on:{click:e.Logout}},[e._v("Logout")])])]):e._e()])]),t("main",[t("router-view")],1),t("Modal",{attrs:{show:e.showModal},on:{close:function(t){e.showModal=!1}}},[t("UploadRecipe",{on:{"upload-success":function(t){e.showModal=!1}}})],1)],1)},s=[],i=r(6835),o=r(8534),c=(r(7658),function(){var e=this,t=e._self._c;return e.show?t("div",{staticClass:"modal"},[t("div",{staticClass:"modal-overlay",on:{click:e.close}}),t("div",{staticClass:"modal-content"},[t("button",{staticClass:"close-button",on:{click:e.close}},[e._v("×")]),e._t("default")],2)]):e._e()}),u=[];const l={name:"Modal",props:{show:{type:Boolean,required:!0}},methods:{close:function(){this.$emit("close")}}},p=l;var d=r(1001),m=(0,d.Z)(p,c,u,!1,null,"59ef2c5a",null);const v=m.exports;r(8309),r(9753),r(2222),r(7042);var f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"upload-recipe-container"},[t("h1",{staticClass:"title"},[e._v("Upload Your Recipe")]),t("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("div",{staticClass:"form-content"},[t("div",{staticClass:"left-section"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"title"}},[e._v("Recipe Title:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text",id:"title",required:""},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"image"}},[e._v("Recipe Image:")]),t("input",{ref:"image",attrs:{type:"file",id:"image",required:""},on:{change:e.handleImageUpload}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"summary"}},[e._v("Short summary:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.summary,expression:"summary"}],attrs:{type:"text",id:"summary",required:""},domProps:{value:e.summary},on:{input:function(t){t.target.composing||(e.summary=t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"time"}},[e._v("Time to Make (minutes):")]),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.time,expression:"time",modifiers:{number:!0}}],attrs:{type:"number",id:"time",required:"",min:"1"},domProps:{value:e.time},on:{input:function(t){t.target.composing||(e.time=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"servings"}},[e._v("Number of Servings:")]),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.servings,expression:"servings",modifiers:{number:!0}}],attrs:{type:"number",id:"servings",required:"",min:"1"},domProps:{value:e.servings},on:{input:function(t){t.target.composing||(e.servings=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])]),t("div",{staticClass:"mid-section"},[t("div",{staticClass:"form-group"},[t("label",[e._v("Ingredients:")]),e._l(e.ingredients,(function(r,n){return t("div",{key:n,staticClass:"ingredient-item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:r.amount,expression:"ingredient.amount"}],staticClass:"ingredient-field amount",attrs:{type:"text",placeholder:"Amount"},domProps:{value:r.amount},on:{input:function(t){t.target.composing||e.$set(r,"amount",t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:r.unit,expression:"ingredient.unit"}],staticClass:"ingredient-field unit",attrs:{type:"text",placeholder:"Unit"},domProps:{value:r.unit},on:{input:function(t){t.target.composing||e.$set(r,"unit",t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:r.name,expression:"ingredient.name"}],staticClass:"ingredient-field name",attrs:{type:"text",placeholder:"Ingredient Name"},domProps:{value:r.name},on:{input:function(t){t.target.composing||e.$set(r,"name",t.target.value)}}})])})),t("button",{staticClass:"addRemove-button",attrs:{type:"button"},on:{click:function(t){return e.removeIngredient(e.index)}}},[e._v(" - ")]),t("button",{staticClass:"addRemove-button",attrs:{type:"button"},on:{click:e.addIngredient}},[e._v(" + ")])],2),t("div",{staticClass:"form-group"},[t("label",[e._v("Instructions:")]),e._l(e.instructions,(function(r,n){return t("div",{key:n,staticClass:"instruction-item"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:r.text,expression:"instruction.text"}],attrs:{placeholder:"Step "+(n+1)},domProps:{value:r.text},on:{input:function(t){t.target.composing||e.$set(r,"text",t.target.value)}}}),t("button",{staticClass:"addRemove-button",attrs:{type:"button"},on:{click:function(t){return e.removeInstruction(n)}}},[e._v(" - ")])])})),t("button",{staticClass:"addRemove-button",attrs:{type:"button"},on:{click:e.addInstruction}},[e._v(" + ")])],2)]),t("div",{staticClass:"right-section"},[t("div",{staticClass:"filters"},[t("div",{staticClass:"filter-column"},[t("div",{staticClass:"filter-category"},[t("h4",[e._v("Cuisine")]),e._l(e.cuisines,(function(r,n){return t("div",{key:n,staticClass:"filter-option"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedCuisines,expression:"selectedCuisines"}],attrs:{type:"checkbox",id:"cuisine-"+r},domProps:{value:r,checked:Array.isArray(e.selectedCuisines)?e._i(e.selectedCuisines,r)>-1:e.selectedCuisines},on:{change:function(t){var n=e.selectedCuisines,a=t.target,s=!!a.checked;if(Array.isArray(n)){var i=r,o=e._i(n,i);a.checked?o<0&&(e.selectedCuisines=n.concat([i])):o>-1&&(e.selectedCuisines=n.slice(0,o).concat(n.slice(o+1)))}else e.selectedCuisines=s}}}),t("label",{attrs:{for:"cuisine-"+r}},[e._v(e._s(r))])])}))],2)]),t("div",{staticClass:"filter-column"},[t("div",{staticClass:"filter-category"},[t("h4",[e._v("Diet")]),e._l(e.diets,(function(r,n){return t("div",{key:n,staticClass:"filter-option"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedDiets,expression:"selectedDiets"}],attrs:{type:"checkbox",id:"diet-"+r},domProps:{value:r,checked:Array.isArray(e.selectedDiets)?e._i(e.selectedDiets,r)>-1:e.selectedDiets},on:{change:function(t){var n=e.selectedDiets,a=t.target,s=!!a.checked;if(Array.isArray(n)){var i=r,o=e._i(n,i);a.checked?o<0&&(e.selectedDiets=n.concat([i])):o>-1&&(e.selectedDiets=n.slice(0,o).concat(n.slice(o+1)))}else e.selectedDiets=s}}}),t("label",{attrs:{for:"diet-"+r}},[e._v(e._s(r))])])}))],2)]),t("div",{staticClass:"filter-column"},[t("div",{staticClass:"filter-category"},[t("h4",[e._v("Intolerances")]),e._l(e.intolerances,(function(r,n){return t("div",{key:n,staticClass:"filter-option"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedIntolerances,expression:"selectedIntolerances"}],attrs:{type:"checkbox",id:"intolerance-"+r},domProps:{value:r,checked:Array.isArray(e.selectedIntolerances)?e._i(e.selectedIntolerances,r)>-1:e.selectedIntolerances},on:{change:function(t){var n=e.selectedIntolerances,a=t.target,s=!!a.checked;if(Array.isArray(n)){var i=r,o=e._i(n,i);a.checked?o<0&&(e.selectedIntolerances=n.concat([i])):o>-1&&(e.selectedIntolerances=n.slice(0,o).concat(n.slice(o+1)))}else e.selectedIntolerances=s}}}),t("label",{attrs:{for:"intolerance-"+r}},[e._v(e._s(r))])])}))],2)])])])]),t("button",{attrs:{type:"submit"}},[e._v("Upload Recipe")])])])},h=[],g=(r(1703),r(6647),r(561),r(1249),r(3161),r(9653),r(4293));const w={name:"UploadRecipe",data:function(){return{title:"",image:null,summary:"",time:"",servings:"",ingredients:[{text:""}],instructions:[{text:""}],selectedCuisines:[],selectedDiets:[],selectedIntolerances:[],cuisines:["Mexican","Italian","Chinese","Indian","Greek","Latine"],diets:["Ketogenic","Vegetarian","Lacto-Vegetarian","Ovo-Vegetarian","Vegan","Pescetarian","Paleo","Primal","Low FODMAP","Whole30"],intolerances:["Dairy","Egg","Gluten","Grain","Peanut","Seafood","Sesame","Shellfish","Soy","Sulfite","Tree Nut","Wheat"]}},methods:{handleImageUpload:function(e){var t=this;return(0,o.Z)((0,i.Z)().mark((function r(){var n,a,s;return(0,i.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.target.files[0],n){r.next=3;break}return r.abrupt("return");case 3:return r.prev=3,a=new FormData,a.append("image",n),r.next=8,(0,g.Ix)(a);case 8:if(s=r.sent,200!==s.status){r.next=13;break}t.image=s.data.imagePath,r.next=14;break;case 13:throw new Error("Failed to upload image");case 14:r.next=20;break;case 16:r.prev=16,r.t0=r["catch"](3),console.error("Error uploading image:",r.t0),alert("There was an error uploading your image. Please try again.");case 20:case"end":return r.stop()}}),r,null,[[3,16]])})))()},addInstruction:function(){this.instructions.push({text:""})},removeInstruction:function(e){this.instructions.splice(e,1)},addIngredient:function(){this.ingredients.push({amount:"",unit:"",name:""})},removeIngredient:function(e){this.ingredients.splice(e,1)},handleSubmit:function(){var e=this;return(0,o.Z)((0,i.Z)().mark((function t(){var r,n;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.validateInputs()){t.next=3;break}return alert("Time to make and Number of Servings must be greater than 1."),t.abrupt("return");case 3:return t.prev=3,r={title:e.title,image:e.image,summary:e.summary,readyInMinutes:e.time,servings:e.servings,cuisines:e.selectedCuisines,diets:e.selectedDiets,intolerances:e.selectedIntolerances,username:localStorage.username,ingredients:e.ingredients.map((function(e){return{amount:e.amount,unit:e.unit,name:e.name}})),instructions:e.instructions.map((function(e,t){return{stepNumber:t+1,description:e.text}}))},t.next=7,(0,g.nm)(r);case 7:if(n=t.sent,201==n.status){t.next=10;break}throw new Error("Failed to upload recipe");case 10:alert("Recipe uploaded successfully!"),e.resetForm(),e.$emit("upload-success"),t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](3),console.error("Error uploading recipe:",t.t0),alert("There was an error uploading your recipe. Please try again.");case 19:case"end":return t.stop()}}),t,null,[[3,15]])})))()},validateInputs:function(){return Number.isInteger(this.time)&&this.time>1&&Number.isInteger(this.servings)&&this.servings>1},resetForm:function(){this.title="",this.image=null,this.summary="",this.time="",this.servings="",this.ingredients=[{text:""}],this.instructions=[{text:""}];var e=this.$refs.image;e&&(e.value=null)}}},y=w;var b=(0,d.Z)(y,f,h,!1,null,"f5a773b6",null);const x=b.exports;var _=r(9239);const k={name:"App",components:{Modal:v,UploadRecipe:x},data:function(){return{showModal:!1}},methods:{Logout:function(){var e=this;return(0,o.Z)((0,i.Z)().mark((function t(){var r;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,_.kS)();case 3:t.sent,e.$root.store.logout(),e.$root.toast("Logout","User logged out successfully","success"),e.$router.push("/")["catch"]((function(){e.$forceUpdate()})),t.next=14;break;case 9:t.prev=9,t.t0=t["catch"](0),r="An error occurred. Please try again.",t.t0.response&&t.t0.response.data&&t.t0.response.data.message?r=t.t0.response.data.message:t.t0.message&&(r=t.t0.message),alert(r);case 14:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},Z=k;var C=(0,d.Z)(Z,a,s,!1,null,"68ed2432",null);const R=C.exports;var I=r(1939),P=r.n(I),S=r(9669),F=r.n(S),E=(r(8783),r(3948),function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",{staticClass:"title"},[e._v("Main Page")]),t("div",{staticClass:"main-content"},[t("div",{staticClass:"section left-section"},[t("RecipePreviewList",{staticClass:"center",attrs:{title:"Explore this recipes",listType:"randomRecipes"}})],1),t("div",{staticClass:"section right-section"},[e.$root.store.username?e._e():t("router-link",{attrs:{to:"/login",tag:"button"}},[e._v(" You need to Login to view this ")]),t("RecipePreviewList",{class:{blur:!e.$root.store.username,center:!0},attrs:{title:"Last Viewed Recipes",listType:"lastRecipes"}})],1)])])}),T=[],A=r(4268);const N={components:{RecipePreviewList:A.Z}},L=N;var D=(0,d.Z)(L,E,T,!1,null,"95de29e6",null);const $=D.exports;var M=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",[e._v("Four Oh Four you didn't")]),t("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},O=[],j={},U=(0,d.Z)(j,M,O,!1,null,null,null);const q=U.exports;var W=[{path:"/",name:"main",component:$},{path:"/register",name:"register",component:function(){return r.e(456).then(r.bind(r,6456))}},{path:"/login",name:"login",component:function(){return r.e(962).then(r.bind(r,9962))}},{path:"/search",name:"search",component:function(){return r.e(231).then(r.bind(r,9231))}},{path:"   ",name:"recipe",component:function(){return r.e(730).then(r.bind(r,8730))}},{path:"*",name:"notFound",component:q},{path:"/favorites",name:"favorites",component:function(){return r.e(886).then(r.bind(r,4886))}},{path:"/myRecipes",name:"myRecipes",component:function(){return r.e(229).then(r.bind(r,1229))}},{path:"/familyRecipes",name:"familyRecipes",component:function(){return r.e(86).then(r.bind(r,5086))}},{path:"/About",name:"about",component:function(){return r.e(737).then(r.bind(r,7737))}}];const V=W;var B=r(8345),z=r(8620),G=(r(7024),r(9301)),H=r(7563),Y=r(5053),K=r(1869),Q=r(8672),J=r(4500),X=r(8348),ee=r(4063),te=r(4167),re=r(8824);n["default"].use(B.ZP);var ne=new B.ZP({routes:V});[G.E,H.w6,Y.g,K.SY,Q.xL,J.u3,X.v5,ee.F,te.m$,re.A6].forEach((function(e){return n["default"].use(e)})),n["default"].use(z.ZP),F().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),F().interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),n["default"].use(P(),F()),n["default"].config.productionTip=!1;var ae={server_domain:"https://AlonAndYoni.cs.bgu.ac.il",username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0,localStorage.removeItem("lastSearchQuery")}};console.log(ae),new n["default"]({router:ne,data:function(){return{store:ae}},methods:{toast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:r,solid:!0,appendToast:n,autoHideDelay:3e3})}},render:function(e){return e(R)}}).$mount("#app")},9239:(e,t,r)=>{r.d(t,{kS:()=>d,x4:()=>l,z2:()=>c});var n=r(6835),a=r(8534),s=r(9669),i=r.n(s),o="https://alonandyoni.cs.bgu.ac.il";function c(e){return u.apply(this,arguments)}function u(){return u=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i().post("".concat(o,"/auth/Register"),t);case 2:return r=e.sent,console.log("Response:",r.data),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return p=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i().post("".concat(o,"/auth/Login"),t);case 2:return r=e.sent,console.log("Response:",r.data),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function d(){return m.apply(this,arguments)}function m(){return m=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i().post("".concat(o,"/auth/Logout"));case 2:return t=e.sent,console.log("Response:",t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}},6067:(e,t,r)=>{r.d(t,{$m:()=>v,B0:()=>d,FF:()=>b,M1:()=>w,Qw:()=>h,_p:()=>c,mT:()=>_,zm:()=>l});var n=r(6835),a=r(8534),s=r(9669),i=r.n(s),o="https://alonandyoni.cs.bgu.ac.il";function c(e){return u.apply(this,arguments)}function u(){return u=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i().post("".concat(o,"/favorites"),t);case 2:return r=e.sent,console.log("Response:",r.data),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return p=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()["delete"]("".concat(o,"/favorites"),{data:t});case 3:return r=e.sent,console.log("Response:",r.data),e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e["catch"](0),console.error("Error removing from favorites:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),p.apply(this,arguments)}function d(e,t){return m.apply(this,arguments)}function m(){return m=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("".concat(o,"/isFavorite"),{params:{username:t,recipe_id:r}});case 3:return a=e.sent,console.log("Response:",a.data),e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e["catch"](0),console.error("Error checking if favorite:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),m.apply(this,arguments)}function v(e){return f.apply(this,arguments)}function f(){return f=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i().post("".concat(o,"/likeRecipe"),t);case 2:return r=e.sent,console.log("Response:",r.data),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function h(e){return g.apply(this,arguments)}function g(){return g=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()["delete"]("".concat(o,"/likeRecipe"),{data:t});case 3:return r=e.sent,console.log("Response:",r.data),e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e["catch"](0),console.error("Error removing from liked recipes:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),g.apply(this,arguments)}function w(e,t){return y.apply(this,arguments)}function y(){return y=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("".concat(o,"/isLiked"),{params:{username:t,recipe_id:r}});case 3:return a=e.sent,console.log("Response:",a.data),e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e["catch"](0),console.error("Error checking if liked:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),y.apply(this,arguments)}function b(e){return x.apply(this,arguments)}function x(){return x=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i().post("".concat(o,"/watched"),t);case 2:return r=e.sent,console.log("Response:",r.data),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function _(e,t){return k.apply(this,arguments)}function k(){return k=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("".concat(o,"/isWatched"),{params:{username:t,recipe_id:r}});case 3:return a=e.sent,console.log("Response:",a.data),e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e["catch"](0),console.error("Error checking if watched:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),k.apply(this,arguments)}},4293:(e,t,r)=>{r.d(t,{zV:()=>c,JX:()=>d,qL:()=>l,s8:()=>h,Ix:()=>w,nm:()=>v});var n=r(6835),a=(r(6347),r(9584),r(8534)),s=(r(1539),r(189),r(8783),r(3948),r(7658),r(7941),r(1249),r(7042),r(9669)),i=r.n(s);var o="https://alonandyoni.cs.bgu.ac.il";function c(){return u.apply(this,arguments)}function u(){return u=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("".concat(o,"/familyRecipes"));case 3:return t=e.sent,console.log("Response:",t.data),e.abrupt("return",t);case 8:throw e.prev=8,e.t0=e["catch"](0),console.error("Error fetching family recipes:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),u.apply(this,arguments)}function l(){return p.apply(this,arguments)}function p(){return p=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"/randomRecipes"));case 2:return t=e.sent,console.log("Response:",t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return m=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"/getFullRecipe"),{params:{recipe_id:t}});case 2:return r=e.sent,console.log("Recipe details:",r.data),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function v(e){return f.apply(this,arguments)}function f(){return f=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i().post("".concat(o,"/uploadRecipe"),t,{headers:{"Content-Type":"application/json"}});case 2:return r=e.sent,console.log("Recipe uploaded successfully:",r.data),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function h(e){return g.apply(this,arguments)}function g(){return g=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"/searchRecipe"),{params:t,headers:{"Content-Type":"application/json"}});case 2:return r=e.sent,console.log("Recipe searched successfully:",r.data),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function w(e){return y.apply(this,arguments)}function y(){return y=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i().post("".concat(o,"/uploadImage"),t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}new Set}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.m=e,(()=>{var e=[];r.O=(t,n,a,s)=>{if(!n){var i=1/0;for(l=0;l<e.length;l++){for(var[n,a,s]=e[l],o=!0,c=0;c<n.length;c++)(!1&s||i>=s)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(o=!1,s<i&&(i=s));if(o){e.splice(l--,1);var u=a();void 0!==u&&(t=u)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[n,a,s]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{86:"f49d6e77",229:"f5848e89",231:"171b06a4",456:"7742eff4",730:"bf0f076d",737:"82cee413",886:"76bc8e1c",962:"abc04324"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{86:"fbce7e1a",229:"cdf9f94e",231:"ffa636dd",456:"90bbec2b",730:"77cfed5b",737:"7490049b",886:"cdf9f94e",962:"6e3000f7"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="assignment-2-1:";r.l=(n,a,s,i)=>{if(e[n])e[n].push(a);else{var o,c;if(void 0!==s)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var p=u[l];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==t+s){o=p;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.setAttribute("data-webpack",t+s),o.src=n),e[n]=[a];var d=(t,r)=>{o.onerror=o.onload=null,clearTimeout(m);var a=e[n];if(delete e[n],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((e=>e(r))),t)return t(r)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),c&&document.head.appendChild(o)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,n,a)=>{var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var i=r=>{if(s.onerror=s.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=o,s.parentNode&&s.parentNode.removeChild(s),a(c)}};return s.onerror=s.onload=i,s.href=t,r?r.parentNode.insertBefore(s,r.nextSibling):document.head.appendChild(s),s},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=r[n],s=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(s===e||s===t))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){a=i[n],s=a.getAttribute("data-href");if(s===e||s===t)return a}},n=n=>new Promise(((a,s)=>{var i=r.miniCssF(n),o=r.p+i;if(t(i,o))return a();e(n,o,null,a,s)})),a={143:0};r.f.miniCss=(e,t)=>{var r={86:1,229:1,231:1,456:1,730:1,737:1,886:1,962:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=n(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var s=new Promise(((r,n)=>a=e[t]=[r,n]));n.push(a[2]=s);var i=r.p+r.u(t),o=new Error,c=n=>{if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",o.name="ChunkLoadError",o.type=s,o.request=i,a[1](o)}};r.l(i,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var a,s,[i,o,c]=n,u=0;if(i.some((t=>0!==e[t]))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(c)var l=c(r)}for(t&&t(n);u<i.length;u++)s=i[u],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(l)},n=self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[998],(()=>r(5446)));n=r.O(n)})();
//# sourceMappingURL=app.934aeee9.js.map