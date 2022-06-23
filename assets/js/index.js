// GET NAV BAR

window.addEventListener("DOMContentLoaded", (event) => {
    //   console.log("DOM fully loaded and parsed");
    
      getProduct_type();
    
      getProduct("6kg");
    });
    
    const url = "http://localhost:3000/";
    let amount = 0;
    

    let cartAmount = document.createElement("button")
    let links = document.getElementById("links");

    



    function getProduct_type() {
      fetch(url + "product_type/")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          for (let i = 0; i < data.length; i++) {
            let li = document.createElement("li");
            li.innerText = data[i].type;
            links.appendChild(li);
    
            li.addEventListener("click", () => {
              // heading
              let head = document.getElementById("product_heading");
              head.innerText = data[i].type + " Available";
              getProduct(data[i].type);
            });
          }

          cartAmount.innerText = "Cart : "+amount
          links.appendChild(cartAmount)

        });
    }
    
    let ar = [];
    function getProduct(type) {
      fetch(url + "product/")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          let content = document.getElementById("content_id");
    
          content.innerHTML = "";
          for (let i = 0; i < data.length; i++) {
            let prd_type = data[i].product_type;
            let prd_name = data[i].product_name;
            if (prd_type.toLowerCase() === type.toLowerCase()) {
              ar.push(prd_name);
              let productDiv = document.createElement("div");
              productDiv.className = "product";
    
              let img = document.createElement("img");
              img.src = data[i].image;
    
              let p1 = document.createElement("p");
              p1.innerText = data[i].product_name;
    
              let p2 = document.createElement("p");
              p2.innerText = data[i].product_name;
    
              let p3 = document.createElement("p");
              p3.innerText = "Ksh. " + data[i].retail_price;
    
              let btn = document.createElement("button");
              btn.innerText = "Add to Cart";
              btn.className = "add_to_cart";
              btn.id = "add_to_cart";
    
              let img_cart = document.createElement("img");
    
              productDiv.appendChild(img);
              productDiv.appendChild(p1);
              productDiv.appendChild(p2);
              productDiv.appendChild(p3);
              productDiv.appendChild(btn);
    
              content.appendChild(productDiv);
    
              btn.addEventListener("click", () => {
                let btnValue = btn.innerHTML;

                amount = parseInt(amount) + parseInt(data[i].retail_price);

                cartAmount.innerText = "Cart : "+amount
                links.appendChild(cartAmount)
    
                // if (btnValue === "Add to Cart") {
                //   btn.innerText = "Ksh. " + data[i].retail_price;
                // } else {
                //   btn.innerText = "Add to Cart";
                // }
              });
            }
          }
          //   console.log(ar)
        });
    }
