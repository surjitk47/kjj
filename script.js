fetch("https://kabutarjindjaan.in/backend/api/homecustomers")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // console.log(data.customers);
    let homeCustomers = data.customers;

    homeCustomers.forEach((customer) => {
      // console.log(customer.customer_name)

      document.querySelector("#customerData").innerHTML = `

<div class="col-lg-3">
  <div class="card" style="width: 18rem;">
    <div class="cardImg" style="background-image: url(${customer.kabutar_photo});">
      <div class="btmImg">
        <img src="${customer.photo}" class="roundImg" alt="...">
      </div>
    </div>

    <div class="card-body   text-center">
      <h5 class="card-title">${customer.customer_name}</h5>
      <p class="card-text">${customer.breed}</p>
      <hr>
      <div class="icons mt-2">
        <a href="${customer.wt}"><img src="assets/whatsapp.png" alt=""></a>
        <a href="${customer.fb}"><img src="assets/facebook.png" alt=""></a>
        <a href="${customer.yt}"><img src="assets/youtube.png" alt=""></a>
        <a href="${customer.insta}"><img src="assets/instagram.png" alt=""></a>
      </div>
      <div class="btn mt-2">
        <a href="#"><img src="assets/next.png" alt=""></a>
      </div>

    </div>
  </div>
</div>

`;
    });
  });

// ==================viewCustomers==============

fetch("https://kabutarjindjaan.in/backend/api/getcustomers")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // console.log(data.customers);
    let viewCustomers = data.customers;

    viewCustomers.forEach((customer) => {
      // console.log(customer.customer_name)

      document.querySelector("#viewCustomers").innerHTML = `


    <div class="col-lg-6">
                
    <div class="card2">
        
        <div class="row">
            <div class="col-lg-3 col-md-3 text-center">
                <img src="${customer.photo}" class="card2Img" alt="...">
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="custoDetail paddT">
                    <p><span>Name:</span> ${customer.customer_name}</p>
                    <p><span>S/O Name :</span>${customer.father_name}</p>
                    <p><span>Mobile No :</span> ${customer.contact_number}</p>
                    <p><span>DOB :</span> ${customer.dob}</p>
                    <p><span>Address :</span> ${customer.address}</p>


                </div>
                <div class="icons mt-2">
                    <a href="${customer.wt}"><img src="assets/whatsapp.png" alt=""></a>
                    <a href="${customer.fb}"><img src="assets/facebook.png" alt=""></a>
                    <a href="${customer.yt}"><img src="assets/youtube.png" alt=""></a>
                    <a href="${customer.insta}"><img src="assets/instagram.png" alt=""></a>
                </div>

            </div>
            <div class="col-lg-3 col-md-3 text-center">
                <img src="${customer.qr}" class="card2Barcode" alt="...">
            </div>
        </div>
        <hr>
        <p><b> Description :</b></p>
        <p>${customer.about}</p>
    </div>
</div>

`;
    });
  });

// ==========Customer Details===========

fetch("https://kabutarjindjaan.in/backend/api/getkabutar/23")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.customers);
    let customerDetails = data.customers;

    customerDetails.forEach((customer) => {
      // console.log(customer.customer_name)

      document.querySelector("#viewCustomers").innerHTML = `


    <div class="col-lg-6">
                
    <div class="card2">
        
        <div class="row">
            <div class="col-lg-3 col-md-3 text-center">
                <img src="${customer.photo}" class="card2Img" alt="...">
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="custoDetail paddT">
                    <p><span>Name:</span> ${customer.customer_name}</p>
                    <p><span>S/O Name :</span>${customer.father_name}</p>
                    <p><span>Mobile No :</span> ${customer.contact_number}</p>
                    <p><span>DOB :</span> ${customer.dob}</p>
                    <p><span>Address :</span> ${customer.address}</p>


                </div>
                <div class="icons mt-2">
                    <a href="${customer.wt}"><img src="assets/whatsapp.png" alt=""></a>
                    <a href="${customer.fb}"><img src="assets/facebook.png" alt=""></a>
                    <a href="${customer.yt}"><img src="assets/youtube.png" alt=""></a>
                    <a href="${customer.insta}"><img src="assets/instagram.png" alt=""></a>
                </div>

            </div>
            <div class="col-lg-3 col-md-3 text-center">
                <img src="${customer.qr}" class="card2Barcode" alt="...">
            </div>
        </div>
        <hr>
        <p><b> Description :</b></p>
        <p>${customer.about}</p>
    </div>
</div>

`;
    });
  });

// ========gallery Images=====

const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);

document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
  if (n > galleryItem.length) {
    index = 1;
  } else if (n < 1) {
    index = galleryItem.length;
  }
  let imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
  lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
  lightBoxContainer.style.display = "block";

  let imageIndex = parseInt(this.getAttribute("data-index"));
  showLightBox((index = imageIndex));
}
for (let i = 0; i < galleryItem.length; i++) {
  galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
  showLightBox((index += n));
}
function prevImage() {
  slideImage(-1);
}
function nextImage() {
  slideImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
  if (this === event.target) {
    lightBoxContainer.style.display = "none";
  }
}
lightBoxContainer.addEventListener("click", closeLightBox);
