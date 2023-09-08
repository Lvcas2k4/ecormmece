let containerCards;
// const products = [
//     {
//         image:'llave-inglesa.png',
//         name:'Stillson',
//         price: '999',
//         priceDescount:'699',
//         description:'Lorem Ipsum Dolor Sit Amet Consectetur'
//     },
//     {
//         image:'llave-inglesa.png',
//         name:'Stillson',
//         price: '999',
//         priceDescount:'699',
//         description: 'Lorem Ipsum Dolor Sit Amet Consectetur'
//     },
//     {
//         image:'llave-inglesa.png',
//         name:'Stillson',
//         price: '999',
//         priceDescount:'699',
//         description: 'Lorem Ipsum Dolor Sit Amet Consectetur'
//     },
//     {
//         image:'llave-inglesa.png',
//         name:'Stillson',
//         price: '999',
//         priceDescount:"699",
//         description: 'Lorem Ipsum Dolor Sit Amet Consectetur'
//     }
// ]


// async function init() {
//     console.log("Init");
  
//     const apiURL = "https://64  f659ae2b07270f705e6753.mockapi.io/api/products";
//     const apiResponse = await fetch(apiURL)
//     const jsonData = await apiResponse.json();
//     console.log(apiResponse.status); // 200
  
//     console.log(jsonData);
//     return jsonData;
//   }
//   init();
  

// window.addEventListener("load", () => {

//     containerCards = document.querySelector(".container-cards");
//     .forEach((producto) => {
//         const tarjetaProducto = document.createElement("div");
//         tarjetaProducto.classList.add("productCard");
//         tarjetaProducto.innerHTML = `
//             < <div class="productCard">
//             <div class="part1">
//               <img id="stillson" src="${producto.image}" alt="" />
//               <div class="product-data">
//                 <h3 class="name-of-products">
//                   ${producto.title}
//                 </h3>
//                 <p class="identifier-number ${producto.id}">Identifier number</p>
//               </div>
//               <p class="previous-price">${producto.previousPrice}</p>
//             </div>
//             <div class="cart-part2">
//               <div class="button-cart">
//                 <img id="shopping-bag" src="shopping-bag.png" alt="" />
//                 <img id="plus" src="plus.png" alt="" />
//               </div>
//               <div class="part-card-2">
//                 <p class="actual-price">$${producto.price}</p>
//               </div>
//             </div>
//           </div> `;
//         containerCards.appendChild(tarjetaProducto);
//     });
// });



// window.addEventListener("load", async (event) => {
//     console.log("page is fully loaded");
//     const products = await fetchProducts();
//     cardContainer = document.getElementById('products');
//     for (const data of products) {
//         const card = createCard(data);
//         cardContainer.appendChild(card);
//       }
// });
async function getData(){;
    const apiResponse = await fetch("https://64f659ae2b07270f705e6753.mockapi.io/api/products")
    const jsonData = await apiResponse.json();
    console.log(apiResponse.status);
    return jsonData;
  }

console.log(getData())

function documentLoaded(object) {
      const producto = object;
      const containerCards = document.querySelector(".container-cards");
      const tarjetaProducto = document.createElement("div");
      tarjetaProducto.classList.add("productCard");
      tarjetaProducto.innerHTML = `
        <div class="productCard">
          <div class="part1">
            <img id="stillson" src="${producto.image}" alt="" />
            <div class="product-data">
              <h3 class="name-of-products">
                ${producto.title}
              </h3>
              <p class="identifier-number">Identifier number  ${producto.id}
              </p>
            </div>
            <p class="previous-price">${producto.previousPrice}</p>
          </div>
          <div class="cart-part2">
            <div class="button-cart">
              <img id="shopping-bag" src="shopping-bag.png" alt="" />
              <img id="plus" src="plus.png" alt="" />
            </div>
            <div class="part-card-2">
              <p class="actual-price">$${producto.price}</p>
            </div>
          </div>
        </div> `;
      containerCards.appendChild(tarjetaProducto);
    };



function documentLoaded2 (object){
          const producto = object;
          const containerCards = document.querySelector(".container-cards2");
          const tarjetaProducto = document.createElement("div");
          tarjetaProducto.classList.add("productCard");
          tarjetaProducto.innerHTML = `
            <div class="productCard">
              <div class="part1">
                <img id="stillson" src="${producto.image}" alt="" />
                <div class="product-data">
                  <h3 class="name-of-products">
                    ${producto.title}
                  </h3>
                  <p class="identifier-number">Identifier number  ${producto.id}
                  </p>
                </div>
                <p class="previous-price">${producto.previousPrice}</p>
              </div>
              <div class="cart-part2">
                <div class="button-cart">
                  <img id="shopping-bag" src="shopping-bag.png" alt="" />
                  <img id="plus" src="plus.png" alt="" />
                </div>
                <div class="part-card-2">
                  <p class="actual-price">$${producto.price}</p>
                </div>
              </div>
            </div> `;
          containerCards.appendChild(tarjetaProducto);
        };
async function main() {
    const datos = await getData();
    datos.forEach(object => {
    if(!object.onSale && object.featured){
        documentLoaded(object);
    }
    else if(!object.featured && object.onSale){
        documentLoaded2(object);
    }else if(object.featured && object.onSale){
        documentLoaded(object);
        documentLoaded2(object);
    }})};
main()