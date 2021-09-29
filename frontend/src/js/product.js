const getProducts = async () =>{
    const res = await fetch("product.json");
    const data = await res.json();
    const products = data.products
    return products;
    
};

// Display Product
const displayProducts = (products, center)=>{
    let display = products.map(
    ({title,image,price})=>`
       <div class="product">
           <div class="product-header">
             <img src=${image} alt="">
           </div>
           <div class="product-footer">
             <h3>${title}</h3>
             <div class="rating">
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
             </div>
             <div class="product-price">
               <h4>$${price}</h4>
             </div>
             <ul>
               <li>
                 <a href="#">
                   <i class="far fa-eye"></i>
                 </a>
               </li>
               <li>
                <a href="#">
                  <i class="far fa-heart"></i>
                </a>
              </li>
               <li>
                <a href="#">
                  <i class="fas fa-sync"></i>
                </a>
              </li>
             </ul>
           </div>
         </div>
         `);
         display = display.join("");
         center.innerHTML = display;
};

//Filterating
const catContainer = document.querySelector(".sort-category");
const productCenter = document.querySelector(".product-center");
const filterBtns = [...document.querySelectorAll(".filter-btn")];

if(catContainer)
catContainer.addEventListener("click", async e =>{
  const target = e.target.closest(".section-title");
 if(!target) return;

 const id = target.dataset.id;
 const products = await getProducts();

 if(id)
 filterBtns.forEach(btn => {
   btn.classList.remove("active");
 });
 target.classList.add("active");
 const menuCat = products.filter(product => product.category === id);
 productCenter.classList.add('animate_animated', 'animate_backInUp');
 
 setTimeout(()=>{
  productCenter.classList.remove("animate_animated", "animate_backInUp");
 },1000);
 
 displayProducts(menuCat, productCenter);
});

const filterArray = async type =>{
  const products = await getProducts();
  return products.filter(product => product.category === type);
};

const shopCenter = document.querySelector(".shop-center");
const latestCenter = document.querySelector(".latest-center");
const recentCenter = document.querySelector(".recent-center");

window.addEventListener("DOMContentLoaded", async () => {

  const products = await getProducts();
  const defaultProducts = await filterArray("trend");
  const latestProducts = await filterArray("latest");
  const recentProducts = await filterArray("recent");
  displayProducts(defaultProducts, productCenter);
  displayProducts(latestProducts, latestCenter);
  displayProducts(recentProducts, recentCenter);
  displayProducts(products, shopCenter);
});

//Blog Sliding

let slides = document.querySelectorAll('.slide-container');
let index = 0;

//next function
function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}
//previous function
function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}
//Autoplay
setInterval(next, 6000);