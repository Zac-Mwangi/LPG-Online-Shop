

// GET NAV BAR

const url = "http://localhost:3000/"

getProduct_type()
function getProduct_type() {
    fetch(url+"product_type/")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data[1])
        let links = document.getElementById("links")
        for(let i = 0 ; i<data.length;i++){
            let li = document.createElement("li")
            li.innerText = data[i].type;
            links.appendChild(li)
        }
      });
  }

  
