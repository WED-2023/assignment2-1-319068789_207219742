(()=>{"use strict";var e={4719:(e,a,t)=>{t.d(a,{Z:()=>m});var i=function(){var e=this,a=e._self._c;return a("div",{staticClass:"recipe-preview-container"},[a("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}}},[a("div",{staticClass:"recipe-body"},[e.image_load?a("img",{staticClass:"main-recipe-image",attrs:{src:e.recipe.image}}):e._e()]),a("div",{staticClass:"recipe-footer"},[a("div",{staticClass:"recipe-title"},[e._v(" "+e._s(e.recipe.title)+" ")]),a("ul",{staticClass:"recipe-overview"},[a("li",[a("span",[a("i",{staticClass:"fas fa-clock"}),e._v(" "+e._s(e.recipe.readyInMinutes)+" minutes ")])]),a("li",[e._v(" "+e._s(e.recipe.aggregateLikes)+" "),a("i",{staticClass:"fas fa-heart",staticStyle:{color:"orange"}})]),a("li",[e.recipe.vegan?a("img",{staticClass:"icon",attrs:{src:e.vegan_img}}):e._e()]),a("li",[e.recipe.vegetarian?a("img",{staticClass:"icon",attrs:{src:e.vegeterian_img}}):e._e()]),a("li",[e.recipe.glutenFree?a("img",{staticClass:"icon",attrs:{src:e.gluten_free_img}}):e._e()])])])]),a("button",{staticClass:"favorite-button",class:{favorited:e.isFavorited},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.toggleFavorite.apply(null,arguments)}}},[a("i",{class:[e.isFavorited?"bi bi-heart-fill":"bi bi-heart"]})])],1)},n=[],s=t(6835),r=t(8534),o=t(1458);const l={data:function(){return{image_load:!0,vegan_img:"https://github.com/WED-2023/assignment2-1-319068789_207219742/blob/main/src/assets/vegen%20friendly.png?raw=true",gluten_free_img:"https://cdn-icons-png.flaticon.com/256/4876/4876700.png",vegeterian_img:"https://github.com/WED-2023/assignment2-1-319068789_207219742/blob/main/src/assets/vegetarian-icon.png?raw=true",isFavorited:!1}},props:{recipe:{type:Object,required:!0}},mounted:function(){var e=this;return(0,r.Z)((0,s.Z)().mark((function a(){return(0,s.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.checkIfFavorite(),a.next=3,e.loadImage();case 3:case"end":return a.stop()}}),a)})))()},methods:{checkIfFavorite:function(){var e=this;return(0,r.Z)((0,s.Z)().mark((function a(){var t;return(0,s.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,(0,o.n_)(e.recipe.id);case 3:t=a.sent,console.log("Favorite check response:",t.data),e.isFavorited=t.data.isFavorite,a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()},loadImage:function(){var e=this;return(0,r.Z)((0,s.Z)().mark((function a(){return(0,s.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.axios.get(e.recipe.image);case 3:e.image_load=!0,a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](0),console.log("Image load error:",a.t0);case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))()},toggleFavorite:function(){this.isFavorited=!this.isFavorited,this.isFavorited?(0,o.K4)(this.recipe.id):(0,o.rr)(this.recipe.id)}}},u=l;var c=t(1001),p=(0,c.Z)(u,i,n,!1,null,"661c3cf6",null);const m=p.exports},2591:(e,a,t)=>{t(6992),t(8674),t(9601),t(7727),t(9554),t(1539),t(4747);var i=t(144),n=function(){var e=this,a=e._self._c;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("div",{staticClass:"nav-left"},[a("router-link",{attrs:{to:{name:"main"}}},[e._v("Vue Recipes")]),e._v("| "),a("router-link",{attrs:{to:{name:"search"}}},[e._v("Search")]),e._v("| "),e.$root.store.username?a("span",[a("div",{staticClass:"dropdown"},[a("button",{staticClass:"dropbtn"},[e._v("Personal")]),a("div",{staticClass:"dropdown-content"},[a("router-link",{attrs:{to:{name:"favorites"}}},[e._v("Favorites Recipes")]),a("router-link",{attrs:{to:{name:"myRecipes"}}},[e._v("My Recipes")]),a("router-link",{attrs:{to:{name:"familyRecipes"}}},[e._v("Family Recipes")])],1)])]):a("span",[e._v(" Hello Guest: "),a("router-link",{attrs:{to:{name:"register"}}},[e._v("Register")]),e._v("| "),a("router-link",{attrs:{to:{name:"login"}}},[e._v("Login")])],1)],1),a("div",{staticClass:"nav-right"},[a("div",{staticClass:"dropdown right"},[a("button",{staticClass:"dropbtn"},[e._v(e._s(e.$root.store.username))]),a("div",{staticClass:"dropdown-content"},[a("button",{on:{click:e.Logout}},[e._v("Logout")])])])])]),a("main",[a("router-view")],1)])},s=[];t(7658);const r={name:"App",methods:{Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))}}},o=r;var l=t(1001),u=(0,l.Z)(o,n,s,!1,null,null,null);const c=u.exports;var p=t(1939),m=t.n(p),g=t(9669),d=t.n(g),h=(t(8783),t(3948),function(){var e=this,a=e._self._c;return a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[e._v("Main Page")]),a("div",{staticClass:"main-content"},[a("div",{staticClass:"left-section"},[a("RecipePreviewList",{staticClass:"center",attrs:{title:"Random Recipes"}})],1),a("div",{staticClass:"right-section"},[e.$root.store.username?e._e():a("router-link",{attrs:{to:"/login",tag:"button"}},[e._v("You need to Login to view this")]),a("RecipePreviewList",{class:{RandomRecipes:!0,blur:!e.$root.store.username,center:!0},attrs:{title:"Last Viewed Recipes",disabled:""}})],1)])])}),b=[],f=function(){var e=this,a=e._self._c;return a("b-container",[a("h3",{staticClass:"list-title"},[e._v(" "+e._s(e.title)+": "),e._t("default")],2),e._l(e.recipes,(function(e){return a("b-row",{key:e.id},[a("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)}))],2)},v=[],w=t(6835),y=t(5957),S=t(8534),L=t(4719),k=t(1458);const C={name:"RecipePreviewList",components:{RecipePreview:L.Z},props:{title:{type:String,required:!0}},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return(0,S.Z)((0,w.Z)().mark((function a(){var t,i,n,s;return(0,w.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:try{i=3,n=(0,k.ij)(i),console.log(n),s=n.data.recipes,console.log(s),e.recipes=[],(t=e.recipes).push.apply(t,(0,y.Z)(s))}catch(r){console.log(r)}case 1:case"end":return a.stop()}}),a)})))()}}},I=C;var _=(0,l.Z)(I,f,v,!1,null,"30dc9013",null);const T=_.exports,P={components:{RecipePreviewList:T}},O=P;var j=(0,l.Z)(O,h,b,!1,null,"bf0c9b70",null);const x=j.exports;var D=function(){var e=this,a=e._self._c;return a("div",{staticClass:"container"},[a("h1",[e._v("Four Oh Four you didn't")]),a("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},N=[],F={},B=(0,l.Z)(F,D,N,!1,null,null,null);const G=B.exports;var R=[{path:"/",name:"main",component:x},{path:"/register",name:"register",component:function(){return t.e(105).then(t.bind(t,1105))}},{path:"/login",name:"login",component:function(){return t.e(139).then(t.bind(t,4139))}},{path:"/search",name:"search",component:function(){return t.e(903).then(t.bind(t,4903))}},{path:"   ",name:"recipe",component:function(){return t.e(106).then(t.bind(t,9106))}},{path:"*",name:"notFound",component:G},{path:"/favorites",name:"favorites",component:function(){return t.e(775).then(t.bind(t,1775))}}];const z=R;var Z=t(8345),A=t(8620),E=(t(7024),t(9301)),$=t(7563),M=t(5053),q=t(1869),U=t(8672),Y=t(4500),Q=t(8348),V=t(4063),H=t(4167),K=t(8824);i["default"].use(Z.ZP);var J=new Z.ZP({routes:z});[E.E,$.w6,M.g,q.SY,U.xL,Y.u3,Q.v5,V.F,H.m$,K.A6].forEach((function(e){return i["default"].use(e)})),i["default"].use(A.ZP),d().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),d().interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),i["default"].use(m(),d()),i["default"].config.productionTip=!1;var W={server_domain:"http://localhost:3000",username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(W),new i["default"]({router:J,data:function(){return{store:W}},methods:{toast:function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(a),{title:"".concat(e),toaster:"b-toaster-top-center",variant:t,solid:!0,appendToast:i,autoHideDelay:3e3})}},render:function(e){return e(c)}}).$mount("#app")},1458:(e,a,t)=>{t.d(a,{K4:()=>l,n_:()=>p,pr:()=>c,iG:()=>o,ij:()=>r,rr:()=>u});t(7658);const i=JSON.parse('{"11111":{"id":11111,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":11,"aggregateLikes":209,"vegetarian":false,"vegan":false,"glutenFree":false,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>.","analyzedInstructions":[],"instructions":"","extendedIngredients":[{"id":1001,"aisle":"Milk, Eggs, Other Dairy","image":"butter-sliced.jpg","consistency":"SOLID","name":"butter","nameClean":"butter","original":"1 tbsp butter","originalName":"butter","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":10011135,"aisle":"Produce","image":"cauliflower.jpg","consistency":"SOLID","name":"cauliflower florets","nameClean":"cauliflower florets","original":"about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces","originalName":"about frozen cauliflower florets, thawed, cut into bite-sized pieces","amount":2,"unit":"cups","meta":["frozen","thawed","cut into bite-sized pieces"],"measures":{"us":{"amount":2,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":200,"unitShort":"g","unitLong":"grams"}}},{"id":1038,"aisle":"Cheese","image":"parmesan.jpg","consistency":"SOLID","name":"cheese","nameClean":"pecorino romano","original":"2 tbsp grated cheese (I used romano)","originalName":"grated cheese (I used romano)","amount":2,"unit":"tbsp","meta":["grated","(I used romano)"],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":1034053,"aisle":"Oil, Vinegar, Salad Dressing","image":"olive-oil.jpg","consistency":"LIQUID","name":"extra virgin olive oil","nameClean":"extra virgin olive oil","original":"1-2 tbsp extra virgin olive oil","originalName":"extra virgin olive oil","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":11215,"aisle":"Produce","image":"garlic.png","consistency":"SOLID","name":"garlic","nameClean":"garlic","original":"5-6 cloves garlic","originalName":"garlic","amount":5,"unit":"cloves","meta":[],"measures":{"us":{"amount":5,"unitShort":"cloves","unitLong":"cloves"},"metric":{"amount":5,"unitShort":"cloves","unitLong":"cloves"}}},{"id":10720420,"aisle":"Pasta and Rice","image":"spaghetti.jpg","consistency":"SOLID","name":"pasta","nameClean":"linguine","original":"6-8 ounces pasta (I used linguine)","originalName":"pasta (I used linguine)","amount":6,"unit":"ounces","meta":["(I used linguine)"],"measures":{"us":{"amount":6,"unitShort":"oz","unitLong":"ounces"},"metric":{"amount":170.097,"unitShort":"g","unitLong":"grams"}}},{"id":1032009,"aisle":"Spices and Seasonings","image":"red-pepper-flakes.jpg","consistency":"SOLID","name":"couple of pepper flakes","nameClean":"red pepper flakes","original":"couple of pinches red pepper flakes, optional","originalName":"couple of red pepper flakes, optional","amount":2,"unit":"pinches","meta":["red"],"measures":{"us":{"amount":2,"unitShort":"pinches","unitLong":"pinches"},"metric":{"amount":2,"unitShort":"pinches","unitLong":"pinches"}}},{"id":1102047,"aisle":"Spices and Seasonings","image":"salt-and-pepper.jpg","consistency":"SOLID","name":"salt and pepper","nameClean":"salt and pepper","original":"salt and pepper, to taste","originalName":"salt and pepper, to taste","amount":2,"unit":"servings","meta":["to taste"],"measures":{"us":{"amount":2,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":2,"unitShort":"servings","unitLong":"servings"}}},{"id":11291,"aisle":"Produce","image":"spring-onions.jpg","consistency":"SOLID","name":"scallions","nameClean":"spring onions","original":"3 scallions, chopped, white and green parts separated","originalName":"scallions, chopped, white and green parts separated","amount":3,"unit":"","meta":["white","green","separated","chopped"],"measures":{"us":{"amount":3,"unitShort":"","unitLong":""},"metric":{"amount":3,"unitShort":"","unitLong":""}}},{"id":14106,"aisle":"Alcoholic Beverages","image":"white-wine.jpg","consistency":"LIQUID","name":"white wine","nameClean":"dry white wine","original":"2-3 tbsp white wine","originalName":"white wine","amount":2,"unit":"tbsp","meta":[],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":99025,"aisle":"Pasta and Rice","image":"breadcrumbs.jpg","consistency":"SOLID","name":"bread crumbs","nameClean":"whole wheat breadcrumbs","original":"1/4 cup whole wheat bread crumbs (I used panko)","originalName":"whole wheat bread crumbs (I used panko)","amount":0.25,"unit":"cup","meta":["whole wheat","(I used panko)"],"measures":{"us":{"amount":0.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":27,"unitShort":"g","unitLong":"grams"}}}],"servings":2},"22222":{"id":22222,"image":"https://mistermeatball.files.wordpress.com/2020/11/dsc_0060.jpeg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":22,"aggregateLikes":209,"vegetarian":false,"vegan":false,"glutenFree":false,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>.","analyzedInstructions":[],"instructions":"","extendedIngredients":[{"id":1001,"aisle":"Milk, Eggs, Other Dairy","image":"butter-sliced.jpg","consistency":"SOLID","name":"butter","nameClean":"butter","original":"1 tbsp butter","originalName":"butter","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":10011135,"aisle":"Produce","image":"cauliflower.jpg","consistency":"SOLID","name":"cauliflower florets","nameClean":"cauliflower florets","original":"about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces","originalName":"about frozen cauliflower florets, thawed, cut into bite-sized pieces","amount":2,"unit":"cups","meta":["frozen","thawed","cut into bite-sized pieces"],"measures":{"us":{"amount":2,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":200,"unitShort":"g","unitLong":"grams"}}},{"id":1038,"aisle":"Cheese","image":"parmesan.jpg","consistency":"SOLID","name":"cheese","nameClean":"pecorino romano","original":"2 tbsp grated cheese (I used romano)","originalName":"grated cheese (I used romano)","amount":2,"unit":"tbsp","meta":["grated","(I used romano)"],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":1034053,"aisle":"Oil, Vinegar, Salad Dressing","image":"olive-oil.jpg","consistency":"LIQUID","name":"extra virgin olive oil","nameClean":"extra virgin olive oil","original":"1-2 tbsp extra virgin olive oil","originalName":"extra virgin olive oil","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":11215,"aisle":"Produce","image":"garlic.png","consistency":"SOLID","name":"garlic","nameClean":"garlic","original":"5-6 cloves garlic","originalName":"garlic","amount":5,"unit":"cloves","meta":[],"measures":{"us":{"amount":5,"unitShort":"cloves","unitLong":"cloves"},"metric":{"amount":5,"unitShort":"cloves","unitLong":"cloves"}}},{"id":10720420,"aisle":"Pasta and Rice","image":"spaghetti.jpg","consistency":"SOLID","name":"pasta","nameClean":"linguine","original":"6-8 ounces pasta (I used linguine)","originalName":"pasta (I used linguine)","amount":6,"unit":"ounces","meta":["(I used linguine)"],"measures":{"us":{"amount":6,"unitShort":"oz","unitLong":"ounces"},"metric":{"amount":170.097,"unitShort":"g","unitLong":"grams"}}},{"id":1032009,"aisle":"Spices and Seasonings","image":"red-pepper-flakes.jpg","consistency":"SOLID","name":"couple of pepper flakes","nameClean":"red pepper flakes","original":"couple of pinches red pepper flakes, optional","originalName":"couple of red pepper flakes, optional","amount":2,"unit":"pinches","meta":["red"],"measures":{"us":{"amount":2,"unitShort":"pinches","unitLong":"pinches"},"metric":{"amount":2,"unitShort":"pinches","unitLong":"pinches"}}},{"id":1102047,"aisle":"Spices and Seasonings","image":"salt-and-pepper.jpg","consistency":"SOLID","name":"salt and pepper","nameClean":"salt and pepper","original":"salt and pepper, to taste","originalName":"salt and pepper, to taste","amount":2,"unit":"servings","meta":["to taste"],"measures":{"us":{"amount":2,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":2,"unitShort":"servings","unitLong":"servings"}}},{"id":11291,"aisle":"Produce","image":"spring-onions.jpg","consistency":"SOLID","name":"scallions","nameClean":"spring onions","original":"3 scallions, chopped, white and green parts separated","originalName":"scallions, chopped, white and green parts separated","amount":3,"unit":"","meta":["white","green","separated","chopped"],"measures":{"us":{"amount":3,"unitShort":"","unitLong":""},"metric":{"amount":3,"unitShort":"","unitLong":""}}},{"id":14106,"aisle":"Alcoholic Beverages","image":"white-wine.jpg","consistency":"LIQUID","name":"white wine","nameClean":"dry white wine","original":"2-3 tbsp white wine","originalName":"white wine","amount":2,"unit":"tbsp","meta":[],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":99025,"aisle":"Pasta and Rice","image":"breadcrumbs.jpg","consistency":"SOLID","name":"bread crumbs","nameClean":"whole wheat breadcrumbs","original":"1/4 cup whole wheat bread crumbs (I used panko)","originalName":"whole wheat bread crumbs (I used panko)","amount":0.25,"unit":"cup","meta":["whole wheat","(I used panko)"],"measures":{"us":{"amount":0.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":27,"unitShort":"g","unitLong":"grams"}}}],"servings":2},"33333":{"id":33333,"image":"https://cloudinary-cdn.whisk.com/image/upload/g_auto,c_fill,q_60,f_auto,h_600,w_1200/v1685740933/recipe/b620c194fc0b988b7b0934b1dff9f1e0.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":33,"aggregateLikes":209,"vegetarian":false,"vegan":false,"glutenFree":false,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>.","analyzedInstructions":[],"instructions":"","extendedIngredients":[{"id":1001,"aisle":"Milk, Eggs, Other Dairy","image":"butter-sliced.jpg","consistency":"SOLID","name":"butter","nameClean":"butter","original":"1 tbsp butter","originalName":"butter","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":10011135,"aisle":"Produce","image":"cauliflower.jpg","consistency":"SOLID","name":"cauliflower florets","nameClean":"cauliflower florets","original":"about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces","originalName":"about frozen cauliflower florets, thawed, cut into bite-sized pieces","amount":2,"unit":"cups","meta":["frozen","thawed","cut into bite-sized pieces"],"measures":{"us":{"amount":2,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":200,"unitShort":"g","unitLong":"grams"}}},{"id":1038,"aisle":"Cheese","image":"parmesan.jpg","consistency":"SOLID","name":"cheese","nameClean":"pecorino romano","original":"2 tbsp grated cheese (I used romano)","originalName":"grated cheese (I used romano)","amount":2,"unit":"tbsp","meta":["grated","(I used romano)"],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":1034053,"aisle":"Oil, Vinegar, Salad Dressing","image":"olive-oil.jpg","consistency":"LIQUID","name":"extra virgin olive oil","nameClean":"extra virgin olive oil","original":"1-2 tbsp extra virgin olive oil","originalName":"extra virgin olive oil","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":11215,"aisle":"Produce","image":"garlic.png","consistency":"SOLID","name":"garlic","nameClean":"garlic","original":"5-6 cloves garlic","originalName":"garlic","amount":5,"unit":"cloves","meta":[],"measures":{"us":{"amount":5,"unitShort":"cloves","unitLong":"cloves"},"metric":{"amount":5,"unitShort":"cloves","unitLong":"cloves"}}},{"id":10720420,"aisle":"Pasta and Rice","image":"spaghetti.jpg","consistency":"SOLID","name":"pasta","nameClean":"linguine","original":"6-8 ounces pasta (I used linguine)","originalName":"pasta (I used linguine)","amount":6,"unit":"ounces","meta":["(I used linguine)"],"measures":{"us":{"amount":6,"unitShort":"oz","unitLong":"ounces"},"metric":{"amount":170.097,"unitShort":"g","unitLong":"grams"}}},{"id":1032009,"aisle":"Spices and Seasonings","image":"red-pepper-flakes.jpg","consistency":"SOLID","name":"couple of pepper flakes","nameClean":"red pepper flakes","original":"couple of pinches red pepper flakes, optional","originalName":"couple of red pepper flakes, optional","amount":2,"unit":"pinches","meta":["red"],"measures":{"us":{"amount":2,"unitShort":"pinches","unitLong":"pinches"},"metric":{"amount":2,"unitShort":"pinches","unitLong":"pinches"}}},{"id":1102047,"aisle":"Spices and Seasonings","image":"salt-and-pepper.jpg","consistency":"SOLID","name":"salt and pepper","nameClean":"salt and pepper","original":"salt and pepper, to taste","originalName":"salt and pepper, to taste","amount":2,"unit":"servings","meta":["to taste"],"measures":{"us":{"amount":2,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":2,"unitShort":"servings","unitLong":"servings"}}},{"id":11291,"aisle":"Produce","image":"spring-onions.jpg","consistency":"SOLID","name":"scallions","nameClean":"spring onions","original":"3 scallions, chopped, white and green parts separated","originalName":"scallions, chopped, white and green parts separated","amount":3,"unit":"","meta":["white","green","separated","chopped"],"measures":{"us":{"amount":3,"unitShort":"","unitLong":""},"metric":{"amount":3,"unitShort":"","unitLong":""}}},{"id":14106,"aisle":"Alcoholic Beverages","image":"white-wine.jpg","consistency":"LIQUID","name":"white wine","nameClean":"dry white wine","original":"2-3 tbsp white wine","originalName":"white wine","amount":2,"unit":"tbsp","meta":[],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":99025,"aisle":"Pasta and Rice","image":"breadcrumbs.jpg","consistency":"SOLID","name":"bread crumbs","nameClean":"whole wheat breadcrumbs","original":"1/4 cup whole wheat bread crumbs (I used panko)","originalName":"whole wheat bread crumbs (I used panko)","amount":0.25,"unit":"cup","meta":["whole wheat","(I used panko)"],"measures":{"us":{"amount":0.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":27,"unitShort":"g","unitLong":"grams"}}}],"servings":2}}'),n=JSON.parse('{"11111":{"id":11111,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":11,"aggregateLikes":209,"vegetarian":true,"vegan":true,"glutenFree":false,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>."},"22222":{"id":22222,"image":"https://mistermeatball.files.wordpress.com/2020/11/dsc_0060.jpeg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":22,"aggregateLikes":209,"vegetarian":false,"vegan":false,"glutenFree":true,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>."},"33333":{"id":33333,"image":"https://cloudinary-cdn.whisk.com/image/upload/g_auto,c_fill,q_60,f_auto,h_600,w_1200/v1685740933/recipe/b620c194fc0b988b7b0934b1dff9f1e0.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":33,"aggregateLikes":209,"vegetarian":true,"vegan":true,"glutenFree":true,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>."}}');var s={};function r(){var e=[];return e.push(n[11111]),e.push(n[22222]),e.push(n[33333]),{data:{recipes:e}}}function o(e){return{data:{recipe:i[e]}}}function l(e){s[e]=n[e]}function u(e){delete s[e]}function c(){var e=[];for(var a in s)e.push(s[a]);return{data:{recipes:e}}}function p(e){return{data:{isFavorite:e in s}}}}},a={};function t(i){var n=a[i];if(void 0!==n)return n.exports;var s=a[i]={exports:{}};return e[i](s,s.exports,t),s.exports}t.m=e,(()=>{var e=[];t.O=(a,i,n,s)=>{if(!i){var r=1/0;for(c=0;c<e.length;c++){for(var[i,n,s]=e[c],o=!0,l=0;l<i.length;l++)(!1&s||r>=s)&&Object.keys(t.O).every((e=>t.O[e](i[l])))?i.splice(l--,1):(o=!1,s<r&&(r=s));if(o){e.splice(c--,1);var u=n();void 0!==u&&(a=u)}}return a}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[i,n,s]}})(),(()=>{t.n=e=>{var a=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(a,{a}),a}})(),(()=>{t.d=(e,a)=>{for(var i in a)t.o(a,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:a[i]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,i)=>(t.f[i](e,a),a)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{105:"608474b0",106:"f7dd8da6",139:"c3ab0c07",775:"9048932e",903:"bf638e8d"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+e+"."+{105:"257d0112",106:"0269885a",139:"cca8a643"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a)})(),(()=>{var e={},a="assignment-2-1:";t.l=(i,n,s,r)=>{if(e[i])e[i].push(n);else{var o,l;if(void 0!==s)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var p=u[c];if(p.getAttribute("src")==i||p.getAttribute("data-webpack")==a+s){o=p;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,t.nc&&o.setAttribute("nonce",t.nc),o.setAttribute("data-webpack",a+s),o.src=i),e[i]=[n];var m=(a,t)=>{o.onerror=o.onload=null,clearTimeout(g);var n=e[i];if(delete e[i],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(t))),a)return a(t)},g=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),l&&document.head.appendChild(o)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,a,t,i,n)=>{var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var r=t=>{if(s.onerror=s.onload=null,"load"===t.type)i();else{var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.href||a,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=o,s.parentNode&&s.parentNode.removeChild(s),n(l)}};return s.onerror=s.onload=r,s.href=a,t?t.parentNode.insertBefore(s,t.nextSibling):document.head.appendChild(s),s},a=(e,a)=>{for(var t=document.getElementsByTagName("link"),i=0;i<t.length;i++){var n=t[i],s=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(s===e||s===a))return n}var r=document.getElementsByTagName("style");for(i=0;i<r.length;i++){n=r[i],s=n.getAttribute("data-href");if(s===e||s===a)return n}},i=i=>new Promise(((n,s)=>{var r=t.miniCssF(i),o=t.p+r;if(a(r,o))return n();e(i,o,null,n,s)})),n={143:0};t.f.miniCss=(e,a)=>{var t={105:1,106:1,139:1};n[e]?a.push(n[e]):0!==n[e]&&t[e]&&a.push(n[e]=i(e).then((()=>{n[e]=0}),(a=>{throw delete n[e],a})))}}})(),(()=>{var e={143:0};t.f.j=(a,i)=>{var n=t.o(e,a)?e[a]:void 0;if(0!==n)if(n)i.push(n[2]);else{var s=new Promise(((t,i)=>n=e[a]=[t,i]));i.push(n[2]=s);var r=t.p+t.u(a),o=new Error,l=i=>{if(t.o(e,a)&&(n=e[a],0!==n&&(e[a]=void 0),n)){var s=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;o.message="Loading chunk "+a+" failed.\n("+s+": "+r+")",o.name="ChunkLoadError",o.type=s,o.request=r,n[1](o)}};t.l(r,l,"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,i)=>{var n,s,[r,o,l]=i,u=0;if(r.some((a=>0!==e[a]))){for(n in o)t.o(o,n)&&(t.m[n]=o[n]);if(l)var c=l(t)}for(a&&a(i);u<r.length;u++)s=r[u],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(c)},i=self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))})();var i=t.O(void 0,[998],(()=>t(2591)));i=t.O(i)})();
//# sourceMappingURL=app.3bb39cd8.js.map