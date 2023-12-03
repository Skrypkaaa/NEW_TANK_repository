import{i as r,a as d,S as nt,F as ct}from"./assets/footer-6b91f614.js";import{d as yt}from"./assets/vendor-5ef907e7.js";function St(t){return t.length?t.map(({category:e,img:s,is10PercentOff:n,name:o,popularity:i,price:u,size:p,_id:h})=>n?`<li class="products-card-item js-card-item" data-id="${h}">

                  <div class="prod-list-discount-label">
                    <svg class="prod-list-discount-label-svg">
                        <use href="${r}#icon-discount"></use>
                    </svg>
                  </div>

                <a class="products-card-link" href="#"><img class="product-image" src="${s}" alt="${o}" loading="lazy"/></a>
                <a class="products-card-link" href="#"><h3 class="product-name">${o}</h3></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${p}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${i}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${u}</p>
                    <button type="button" class="btn btn-shopping-cart js-add-btn" aria-label="Add to Cart">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${r}#icon-shopping-cart" class="products-desc-basket"></use>

                            <use
                              href="${r}#icon-check"
                              class="products-desc-added"
                            ></use>
                        </svg>
                        
                    </button>
                </div>
            </li>`:`<li class="products-card-item js-card-item" data-id="${h}">
                <a class="products-card-link" href="#"><img class="product-image" src="${s}" alt="${o}" /></a>
                <a class="products-card-link" href="#"><h3 class="product-name">${o}</h3></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${p}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${i}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${u}</p>
                    <button type="button" class="btn btn-shopping-cart js-add-btn" aria-label="Add to Cart">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${r}#icon-shopping-cart" class="products-desc-basket"></use>

                            <use
                              href="${r}#icon-check"
                              class="products-desc-added"
                            ></use>
                        </svg>
                        
                    </button>
                </div>
            </li>`).join(""):`<div class="wrap-noting-found">
  <p class="title-noting-found">
    Nothing was found for the selected
    <span class="acent-noting-found"> filters...</span>
  </p>
  <p class="paragraf-noting-found">
    Try adjusting your search parameters or browse our range by other criteria
    to find the perfect product for you.
  </p>
</div>`}function ht(t,e){t.innerHTML=St(e)}function Lt(t,e){t.innerHTML=kt(e)}function wt(t,e){t.innerHTML=Tt(e)}function kt(t){return t.map(e=>{const{_id:s,name:n,img:o,category:i,size:u,popularity:p}=e;return`<li class="popular-item js-card-item" data-id="${s}">
        <div class="popular-img-wrapper">
         <a class="products-card-link" href="#"> 
          <img
            src="${o}"
            alt="${n}"
            class="popular-img"
            loading="lazy"
          />
          </a>
        </div>
        <div class="popular-desc-wrapper">
          <a class="products-card-link" href="#">
          <h3 class="popular-desc-name">${n}</h3>
          </a>
          <p class="popular-desc-text">
            Category: <span class="popular-desc-span">${i}</span>
          </p>
          <div class="popular-desc-inner">
            <p class="popular-desc-text">
              Size: <span class="popular-desc-span">${u}</span>
            </p>
            <p class="popular-desc-text">
              Popularity: <span class="popular-desc-span">${p}</span>
            </p>
          </div>
        </div>
        <button
          type="button"
          class="popular-btn btn js-add-btn"
          aria-label="add the product to the basket"
        >
          <svg class="popular-desc-svg">
            <use
              href="${r}#icon-shopping-cart"
              class="popular-desc-basket"
            ></use>
            <use
              href="${r}#icon-check"
              class="popular-desc-added"
            ></use>
          </svg>
        </button>
      </li>`}).join("")}function Tt(t){return t.slice(0,2).map(s=>{const{_id:n,name:o,img:i,price:u}=s;return`<li class="discount-item js-card-item" data-id="${n}">
        <a class="products-card-link" href="#">
        <div class="discount-img-wrapper">
          <img
            src="${i}"
            alt="${o}"
            class="discount-img"
            loading="lazy"
          />   
        </div>
        </a>
        <div class="discount-desc-wrapper">    
        <a class="products-card-link" href="#">      
            <p class="discount-desc-text text-overflow">${o}</p> 
            </a> 
          <div class="discount-box">    
            <p class="discount-desc-text">$${u}</p>
            <button
              type="button"
              class="discount-btn btn js-add-btn"
              aria-label="add the product to the basket"
            >
              <svg class="discount-desc-svg">
                <use
                  href="${r}#icon-shopping-cart"
                  class="discount-desc-basket "
                ></use>
                <use
                  href="${r}#icon-check"
                  class="discount-desc-added"
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="discount-box-label">
          <svg class="discount-label-svg">
            <use href="${r}#icon-discount"></use>
          </svg>
        </div>
      </li>`}).join("")}class Ct{constructor(){}numBtnCreateMarkUp(e){return`<li class="buttons-item">
            <button class="pagin-btn num-btn" type="button" data-button-id="${e}">${e}</button>
        </li>`}numBtnSetActive(e){}numBtnSetInactive(e){}numBtnChangeNum(){}intervalBtnCreateMarkUp(){return`<li class="buttons-item">
            <button class="pagin-btn interval-btn" type="button" data-button-id="interval">...</button>
        </li>`}intervalBtnShow(){}intervalBtnHide(){}prevBtnCreateMarkUp(){return`<li class="buttons-item">
            <button class="pagin-btn prev-btn" type="button" data-button-id="prev-btn" aria-label="Previous">
                <svg class="icon-shopping-cart" width="24" height="24">
                    <use href="${r}#icon-left-side" class="pagination-arrows" />
                </svg>
            </button>
        </li>`}nextBtnCreateMarkUp(){return`<li class="buttons-item">
            <button class="pagin-btn next-btn" type="button" data-button-id="next-btn" aria-label="Next">
                <svg class="icon-shopping-cart" width="24" height="24">
                    <use href="${r}#icon-right-side" class="pagination-arrows" />
                </svg>
            </button>
        </li>`}prevBtnSetActive(e){}prevBtnSetInactive(e){}nextBtnSetActive(e){}nextBtnSetInactive(e){}}const rt="variant1",it="variant2",lt="variant3",$t="active-pagin-btn",Z="prev-btn",Q="next-btn",xt=5,Vt="product-storage",At="filter-storage",g=new d(At),j=new d(Vt),Et=new Ct,l=document.querySelector(".btn-list");l.addEventListener("click",S);let c=null,f=1,v=f;function T(){j.getValue()?(v=+j.getValue().totalPages,c=+j.getValue().page,I(f,v,c)):l.innerHTML=""}function I(t,e,s){if(e===t||!e){l.innerHTML="";return}l.innerHTML=Rt(t,e,s),R(s),s===t&&k(Z),s===e&&k(Q)}function R(t){l.querySelector(`[data-button-id='${t}']`).classList.add($t)}function k(t){const e=l.querySelector(`[data-button-id='${t}']`);e.setAttribute("disabled",""),e.classList.add("disabled")}function Pt(t){document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}async function S(t){const{target:e}=t;e.classList.contains("pagin-btn")&&(Pt("filters"),e.classList.contains("num-btn")&&(Ot(+e.dataset.buttonId),g.setValue({...g.getValue(),page:+e.dataset.buttonId}),l.removeEventListener("click",S),await m(g.getValue()),l.addEventListener("click",S)),e.classList.contains("prev-btn")&&(_t(),g.setValue({...g.getValue(),page:c}),l.removeEventListener("click",S),await m(g.getValue()),l.addEventListener("click",S)),e.classList.contains("next-btn")&&(Bt(),g.setValue({...g.getValue(),page:c}),l.removeEventListener("click",S),await m(g.getValue()),l.addEventListener("click",S)))}function Ot(t){c=t,I(f,v,c),R(c),c===f&&k(Z),c===v&&k(Q)}function _t(){c!==f&&(c-=1,I(f,v,c),R(c),c===f&&k(Z))}function Bt(){c!==v&&(c+=1,I(f,v,c),R(c),c===v&&k(Q))}function It(t,e,s){return e<=xt?rt:s>=t+2&s<=e-2?it:lt}function Rt(t,e,s=1){const{prevBtnCreateMarkUp:n,numBtnCreateMarkUp:o,intervalBtnCreateMarkUp:i,nextBtnCreateMarkUp:u}=Et;let p="";const h=It(t,e,s);if(h===rt){let st="";for(let q=t;q<=e;q+=1)st+=o(q);p=n()+st+u()}return h===it&&(p=n()+o(t)+i()+o(s)+i()+o(e)+u()),h===lt&&(p=n()+o(t)+o(t+1)+i()+o(e-1)+o(e)+u()),p}const Nt="filter-storage",Mt="category-storage",qt="product-storage",a=new d(Nt),at=new d(Mt);new d(qt);const G="byABC",D="byPrice",H="byPopularity",ut=[G,D,H],J=[{textName:"A to Z",paramName:G,paramValue:!0},{textName:"Z to A",paramName:G,paramValue:!1},{textName:"Cheap",paramName:D,paramValue:!0},{textName:"Expensive",paramName:D,paramValue:!1},{textName:"Popular",paramName:H,paramValue:!1},{textName:"Not popular",paramName:H,paramValue:!0}],jt=document.querySelector(".js-search-form"),ot=document.querySelector(".js-search-input");document.querySelector(".js-category");const C=document.querySelector(".custom-select-ctg"),Ut=document.querySelector(".js-ctg-select-options"),Ft=C.querySelector(".categories-btn"),dt=C.querySelector(".selected-option-ctgr"),$=document.querySelector(".custom-select-sort"),Gt=$.querySelector(".sort-btn"),pt=$.querySelector(".selected-option-sort"),Dt=document.querySelector(".js-sort-select-options"),gt="Show all";Ft.addEventListener("click",()=>{C.classList.toggle("active")});Gt.addEventListener("click",()=>{$.classList.toggle("active")});let V=null,A=null;function Ht(){a.getValue()&&(ot.addEventListener("input",zt),jt.addEventListener("submit",Yt),ot.value=a.getValue().keyword)}async function zt(t){if(a.getValue()){if(!t.target.value){a.setValue({...a.getValue(),keyword:null}),await m(a.getValue()),T();return}a.setValue({...a.getValue(),keyword:t.target.value})}}async function Yt(t){t.preventDefault(),a.setValue({...a.getValue(),keyword:t.currentTarget.elements.search.value,page:1}),await m(a.getValue()),T()}function Wt(){if(!at.getValue())return;Ut.innerHTML=Zt(at.getValue()),C.querySelectorAll(".text-options").forEach(e=>{e.addEventListener("click",Kt)})}async function Kt(t){let e=t.currentTarget.innerText;V&&(V.style.color="rgba(1, 1, 1, 0.5)"),dt.value=e,t.currentTarget.style.color="var(--black-color)",C.classList.remove("active"),V=t.currentTarget,e===gt?a.setValue({...a.getValue(),category:null,page:1}):a.setValue({...a.getValue(),category:e,page:1}),await m(a.getValue()),T()}function Xt(){if(!a.getValue().category)return;dt.value=a.getValue().category,C.querySelectorAll(".text-options").forEach(e=>{e.style.color="rgba(1, 1, 1, 0.5)",e.innerText===a.getValue().category&&(e.style.color="var(--black-color)",V=e)})}function Zt(t){return t.map(e=>`<div class="text-options" tabindex="0">${e}</div>`).join("").concat(`<div class="text-options" tabindex="0">${gt}</div>`)}function Qt(){Dt.innerHTML=ae(J),$.querySelectorAll(".text-options-sort").forEach(e=>{e.addEventListener("click",te)})}function Jt(){if(!ut.some(s=>a.getValue().hasOwnProperty(s)))return;const t=J.find(s=>a.getValue().hasOwnProperty(s.paramName)?a.getValue()[s.paramName]===s.paramValue:!1);pt.value=t.textName,$.querySelectorAll(".text-options-sort").forEach(s=>{s.style.color="rgba(1, 1, 1, 0.5)",s.innerText===t.textName&&(s.style.color="var(--black-color)",A=s)})}async function te(t){let e=t.currentTarget.innerText;A&&(A.style.color="rgba(1, 1, 1, 0.5)"),pt.value=e,t.currentTarget.style.color="var(--black-color)",$.classList.remove("active"),A=t.currentTarget,ee(),se(e),await m(a.getValue()),T()}function ee(){const t=a.getValue();ut.forEach(e=>{t.hasOwnProperty(e)&&delete t[e]}),a.setValue(t)}function se(t){const e=J.find(s=>s.textName===t);a.setValue({...a.getValue(),[e.paramName]:e.paramValue,page:1})}function ae(t){return t.map(e=>`<div class="text-options-sort" tabindex="0">${e.textName}</div>`).join("")}const oe="filter-storage",ne="category-storage",ce="product-storage",re="popularity-storage",ie="discount-storage",le="shop-storage",ue={keyword:null,category:null,byABC:!0,page:1,limit:M()},E=document.querySelector(".product-card-list"),P=document.querySelector(".popular-list"),O=document.querySelector(".discount-list"),de=document.querySelector(".content-wrapper"),pe=document.querySelector("#number-of-products"),N=new ct,b=new d(oe),ge=new d(ne),z=new d(ce),Y=new d(re),W=new d(ie),w=new nt(le);de.addEventListener("click",xe);window.addEventListener("resize",yt(fe,250));b.getValue()?b.getValue().limit!==M()&&mt():b.setValue(ue);const me=b.getValue();ve(me);async function fe(){b.getValue().limit!==M()&&(mt(),await m(b.getValue()),T())}function M(){if(window.matchMedia("(max-width: 767px)").matches)return 6;if(window.matchMedia("(max-width: 1439px)").matches)return 8;if(window.matchMedia("(min-width: 1440px)").matches)return 9}function mt(){b.setValue({...b.getValue(),page:1,limit:M()})}async function ve(t){await Promise.allSettled([be(),m(t),ye(),Se()]),Ht(),Wt(),Xt(),Qt(),Jt(),T(),ft()}B(w.getAllProducts());async function be(){try{const t=await N.getProductCategories();ge.setValue(t)}catch(t){console.log(t)}finally{}}async function m(t){try{E.classList.add("js-loader");const e=await N.getProducts(t);z.setValue(e),ht(E,z.getValue().results),ft()}catch(e){console.log(e)}finally{E.classList.remove("js-loader")}}async function ye(){try{P.classList.add("js-loader");const t=await N.getPopularProducts();Y.setValue(t),Lt(P,Y.getValue())}catch(t){console.log(t)}finally{P.classList.remove("js-loader")}}async function Se(){try{O.classList.add("js-loader");const t=await N.getDiscountedProducts();W.setValue(t),wt(O,W.getValue())}catch(t){console.log(t)}finally{O.classList.remove("js-loader")}}const he=[E,P,O],Le="product",we="popular",ke="discount",tt=!0,x="is-added",U="js-add-btn",Te="js-card-item";function ft(){!w||!w.getAllProducts().length||w.getAllProducts().map(({_id:t})=>_(t,tt))}function _(t,e){const s=he.map(n=>Ce(n,t));$e(s,e)}function Ce(t,e){return t.querySelector(`[data-id="${e}"]`)?t.querySelector(`[data-id="${e}"]`).querySelector(".js-add-btn"):null}function $e(t,e){t.map(s=>{if(s){if(e===tt){s.classList.add(x);return}if(!e){s.classList.remove(x);return}}})}function xe(t){const{target:e}=t;if(!(e.classList.contains(U)||e.parentNode.classList.contains(U)||e.closest(`.${U}`))||e.classList.contains(x)||e.parentNode.classList.contains(x)||e.closest(`.${x}`))return;const s=e.closest(`.${Te}`).dataset.id,n=e.closest("ul").dataset.lsName;_(s,tt),Ve(n,s)}function F(t,e){return t.find(n=>n._id===e)}function Ve(t,e){let s={};switch(t){case Le:{s=F(z.getValue().results,e);break}case we:{s=F(Y.getValue(),e);break}case ke:{s=F(W.getValue(),e);break}default:s={}}w.setProduct(s),B(w.getAllProducts())}function B(t){let e=t.length;pe.textContent=e}const K=document.querySelector(".custom-select-ctg"),X=document.querySelector(".custom-select-sort");document.addEventListener("click",function(t){const e=K.contains(t.target),s=X.contains(t.target);e||K.classList.remove("active"),s||X.classList.remove("active")});document.addEventListener("keydown",function(t){t.code==="Escape"&&(K.classList.remove("active"),X.classList.remove("active"))});const Ae=document.querySelector(".content-wrapper");Ae.addEventListener("click",Ee);function Ee(t){t.preventDefault();const e=t.target;if(e.closest("a")&&e.closest(".products-card-link")){const s=e.closest("li").dataset.id;_e(s)}else return}const y=document.querySelector(".modal-prod-wrapper"),Pe="shop-storage",L=new nt(Pe),Oe=new ct;async function _e(t){try{y.classList.add("modal-active"),y.classList.add("js-loader");const e=await Oe.getProductDetails(t);y.classList.remove("js-loader"),Ie(e),Be(e)}catch{}finally{}}function Be(t){const e=document.querySelector(".modal-prod-add-text"),s=t._id;L.getAllProducts().some(o=>o._id===s)?e.textContent="Remove from":e.textContent="Add to"}async function Ie(t){try{y.classList.add("modal-active"),document.body.classList.add("stop-scroll"),y.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${r}#icon-close"></use>
    </svg>
  </button>
  <div class="modal-prod-information-wrap">
  <div class="modal-prod-img-wrap">   
      <img class="modal-prod-img" src="${t.img}" alt="${t.name}" />
  </div> 
  <div class="modal-prod-name-wrap">
  <p class="modal-prod-name">${t.name}</p>
  <ul class="modal-prod-list">
    <li class="modal-prod-item">
      <p class="modal-prod-text">Category: <span>${t.category}</span></p>
    </li>
    <li class="modal-prod-item">
      <p class="modal-prod-text">Size: <span>${t.size}</span></p>
    </li>
    <li class="modal-prod-item">
      <p class="modal-prod-text">Popularity: <span>${t.popularity}</span></p>
    </li>
  </ul>
  <p class="modal-prod-desc">${t.desc}</p>
  </div>
  </div>
  <div class="modal-prod-price-elem">
  <p class="modal-prod-price">&#36;${t.price}</p>
  <button class="modal-prod-add-btn">
      <p class="modal-prod-add-text">Add to</p>
      <svg class="modal-prod-basket-icon" >
        <use href="${r}#icon-shopping-cart"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>Re(t)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>et()),window.addEventListener("click",vt),window.addEventListener("keydown",bt)}catch(e){console.error(e)}}function Re(t){const e=t._id,n=L.getAllProducts().some(i=>i._id===e),o=document.querySelector(".modal-prod-add-text");n?(o.textContent="Add to",L.removeProduct(e),_(e,!1),B(L.getAllProducts())):(o.textContent="Remove from",L.setProduct(t),_(e,!0),B(L.getAllProducts()))}function et(){document.body.classList.remove("stop-scroll"),y.classList.remove("modal-active"),y.innerHTML="",window.removeEventListener("click",vt),window.removeEventListener("keydown",bt)}function vt(t){t.target===y&&et()}function bt(t){t.keyCode===27&&et()}
//# sourceMappingURL=commonHelpers2.js.map
