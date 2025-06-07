// // var productName = document.getElementById("productName");
// // var productPrice = document.getElementById("productPrice");
// // var productCategory = document.getElementById("productCategory");
// // var productDescription = document.getElementById("productDescription");
// // var addBtn = document.getElementById("addProduct");
// // var updateBtn = document.getElementById("updateProduct");
// // var searchInput = document.getElementById("searchInput");
// // var productsContainer = document.getElementById("products");
// // var productList = [];
// // var currentIndex;

// // if (localStorage.getItem("products") != null) {
// //     productList = JSON.parse(localStorage.getItem("products"));
// //     displayProducts();
// // }

// // function clearInputs() {
// //     productName.value = "";
// //     productPrice.value = "";
// //     productCategory.value = "";
// //     productDescription.value = "";
// //     productImage.value = "";  
// // }

// // function displayProducts() {
// //     var cartona = "";
    
// //     for (var i = 0; i < productList.length; i++) {
// //         cartona += `
// //             <div class="product-card">
// //                 <h3>${productList[i].name}</h3>
// //                 <p><span>Price:</span> ${productList[i].price}</p>
// //                 <p><span>Category:</span> ${productList[i].category}</p>
// //                 <p><span>Description:</span> ${productList[i].description}</p>
// //                 <button onclick="deleteProduct(${i})">Delete</button>
// //                 <button onclick="setFormForUpdate(${i})">Update</button>
// //             </div>
// //         `;
// //     }
    
// //     productsContainer.innerHTML = cartona;
// // }

// // function addProduct() {



// // if (validatePrice()=== true){
// //     var product = {
// //         name: productName.value,
// //         price: productPrice.value,
// //         category: productCategory.value,
// //         description: productDescription.value,
// //     };
// //     productList.push(product);
// //     localStorage.setItem("products", JSON.stringify(productList));
// //     clearInputs();
// //     displayProducts();

// // }

// // }

// // function deleteProduct(index) {
// //     productList.splice(index, 1);
// //     localStorage.setItem("products", JSON.stringify(productList));
// //     displayProducts();
// // }

// // function setFormForUpdate(index) {
// //     currentIndex = index;
    
// //     var product = productList[index];
// //     productName.value = product.name;
// //     productPrice.value = product.price;
// //     productCategory.value = product.category;
// //     productDescription.value = product.description;
    
// //     addBtn.style.display = "none";
// //     updateBtn.style.display = "block";
// // }

// // function updateProduct() {
// //     productList[currentIndex] = {
// //         name: productName.value,
// //         price: productPrice.value,
// //         category: productCategory.value,
// //         description: productDescription.value,
// //         image: productImage.files && productImage.files[0] ? 
// //             URL.createObjectURL(productImage.files[0]) : 
// //             productList[currentIndex].image 
// //     };
    
// //     localStorage.setItem("products", JSON.stringify(productList));
// //     clearInputs();
    
// //     addBtn.style.display = "block";
// //     updateBtn.style.display = "none";
    
// //     displayProducts();
// // }

// // function searchProducts() {
// //     var searchTerm = searchInput.value.toLowerCase();
// //     var cartona = "";

// //     for (var i = 0; i < productList.length; i++) {
// //         if (productList[i].name.toLowerCase().includes(searchTerm)) {
// //             var highlightedName = productList[i].name.toLowerCase().replace(searchTerm, 
// //                 `<span style="background-color: #ffeb3b; color: #000; padding: 0 2px; border-radius: 2px;">${searchTerm}</span>`
// //             );

// //             cartona += `
// //                 <div class="product-card">
// //                     <h3>${highlightedName}</h3>
// //                     <p><span>Price:</span> ${productList[i].price}</p>
// //                     <p><span>Category:</span> ${productList[i].category}</p>
// //                     <p><span>Description:</span> ${productList[i].description}</p>
// //                     <button onclick="deleteProduct(${i})">Delete</button>
// //                     <button onclick="setFormForUpdate(${i})">Update</button>
// //                 </div>
// //             `;
// //         }
// //     }
// //     if (cartona === "") {
// //         cartona = `
// //             <div style="
// //                 text-align: center; 
// //                 padding: 20px; 
// //                 color: #721c24; 
// //                 background-color: #f8d7da; 
// //                 border: 1px solid #f5c6cb; 
// //                 border-radius: 4px; 
// //                 margin: 50px auto;
// //                 position: absolute;
// //                 left: 50%;
// //                 top: 50%;
// //                 transform: translate(-50%, -50%);
// //                 width: 80%;
// //                 max-width: 500px;
// //                 box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
// //                 <h4 style="margin: 0;">No products found matching "${searchTerm}"</h4>
// //                 <p style="margin: 10px 0 0 0;">Try searching with a different term.</p>
// //             </div>
// //         `;
// //     }
    
// //     productsContainer.innerHTML = cartona;
// // }

// // function validatePrice(){
// //     var Regex= /^[0-9]{4,8}$/
// //     Regex.test(productPrice.value)
// //     if (Regex.test(productPrice.value) === true){
// //         productPrice.classList.add("isvalid")
// //         productPrice.classList.remove("isinvalid")
// //      console.log(productPrice.value);
// //      return true
// //        }
        

// //         else{
// //         productPrice.classList.remove("isvalid");
// //         productPrice.classList.add("isinvalid");
// //         return false
// //         }
// //     }



// var btns = document.querySelectorAll("button")
// btns.addEventListener = "click" 

// addEventListener, function()




// function sayhello(){
//     console.log("hello");
    
// }


let sliderImgs= document.querySelectorAll(".sliderImgs img")
let lightCont= document.getElementById(".lightCont")
let prev= document.getElementById("prev")
let next= document.getElementById("next")
let close= document.getElementById("close")


for(i=0,i>sliderImgs.length,i++){

    sliderImgs.addEventListener= "click"

}
