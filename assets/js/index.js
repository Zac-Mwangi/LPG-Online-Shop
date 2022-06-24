// GET NAV BAR

window.addEventListener("DOMContentLoaded", (event) => {
  //   console.log("DOM fully loaded and parsed");

  getProduct_type();

  getProduct("6kg");
});

// const url = "http://localhost:3000/";
const url = "https://zac-mwangi.github.io/LPG-Online-Shop/db.json/";
let amount = 0;

let cartAmount = document.createElement("button");
let links = document.getElementById("links");

cartAmount.addEventListener("click", () => {
  // heading
  alert("You are about to clear the Cart ");
  amount = 0;
  cartAmount.innerText = "Cart : " + amount;
  links.appendChild(cartAmount);
});

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

          //   li.style.color = "#EC4067"
          //   li.style.fontSize = "25px"

          let head = document.getElementById("product_heading");
          head.innerText = data[i].type + " Available";
          getProduct(data[i].type);
        });

        // list
        li.addEventListener("mouseover", () => {
          // h.style.color = "#EDD927";
          li.style.color = "#EC4067";
          li.style.fontSize = "25px";
        });
        li.addEventListener("mouseout", () => {
          // h.style.color = "white";
          li.style.color = "#fff";
          li.style.fontSize = "20px";
        });
      }
      let cartLi = document.createElement("li");
      cartAmount.innerText = "Cart : " + amount;
      cartLi.appendChild(cartAmount);
      links.appendChild(cartLi);
    });
}

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
          let productDiv = document.createElement("div");
          productDiv.className = "product";

          let img_divvv = document.createElement("div");
          img_divvv.className = "img_divvv";

          let img = document.createElement("img");
          img.src = data[i].image;
          //   img_divvv.appendChild(img)

          let p1 = document.createElement("p");
          p1.innerText = data[i].product_name;

          let p2 = document.createElement("p");
          p2.innerText = data[i].product_name;

          let p3 = document.createElement("p");
          p3.innerText = "Ksh. " + data[i].retail_price;

          let btn = document.createElement("button");
          btn.innerText = "Add to Cart   ";
          btn.className = "add_to_cart";
          btn.id = "add_to_cart";

          let br = document.createElement("br");
          let br2 = document.createElement("br");

          let img_cart = document.createElement("img");
          img_cart.src =
            "https://cdn-icons-png.flaticon.com/512/3737/3737151.png";

          btn.appendChild(img_cart);

          productDiv.appendChild(img);
          productDiv.appendChild(br);
          productDiv.appendChild(p1);
          productDiv.appendChild(p2);
          productDiv.appendChild(p3);
          productDiv.appendChild(br2);
          productDiv.appendChild(btn);

          content.appendChild(productDiv);

          btn.addEventListener("click", () => {
            let btnValue = btn.innerHTML;

            amount = parseInt(amount) + parseInt(data[i].retail_price);

            cartAmount.innerText = "Cart : " + amount;
            links.appendChild(cartAmount);
          });

          btn.addEventListener("mouseover", () => {
            btn.style.color = "#000";
          });
          btn.addEventListener("mouseout", () => {
            btn.style.color = "white";
          });
        }
      }
      //   console.log(arr)
    });
}
