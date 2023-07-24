let itemList = [
  {
    name: "HYS RACING TEE",
    price: 168000,
    img: "https://product.hstatic.net/200000031420/product/hys_racing_5_mau_246bcc5d516d4dd1817700927647d6d9_grande.png",
    quantity: 10,
    idProduct: 1,
  },
  {
    name: "HYS SKYHOLE BLACK TEE",
    price: 108000,
    img: "https://product.hstatic.net/200000031420/product/37_11ed326ab71a4a978ff4181b7393996e_grande.jpg",
    quantity: 10,
    idProduct: 2,
  },
  {
    name: "HYS SKYHOLE WHITE TEE",
    price: 108000,
    img: "https://product.hstatic.net/200000031420/product/35_30db4926615c49c1a6cbcf2194efbdf9_grande.jpg",
    quantity: 10,
    idProduct: 3,
  },
  {
    name: "HEYYOU GRAFFITI CREAM BOXY SHIRT",
    price: 168000,
    img: "https://product.hstatic.net/200000031420/product/1_04edad1de4dd4fc58fe11e71e9ae2736_grande.jpg",
    quantity: 10,
    idProduct: 4,
  },
  {
    name: "HYS LIGHT BLACK TEE",
    price: 108000,
    img: "https://product.hstatic.net/200000031420/product/hys_lights_boxy_90168d0ccd33433781920554cf730da4_grande.png",
    quantity: 10,
    idProduct: 5,
  },
  {
    name: "HEYYOU GRAFFITI BLACK BOXY SHIRT",
    price: 168000,
    img: "https://product.hstatic.net/200000031420/product/3_9941690eaff94dda8d973b5fd0c68ae8_grande.jpg",
    quantity: 10,
    idProduct: 6,
  },
  {
    name: "HEYYOU FADEFLAME BLACK TEE",
    price: 108000,
    img: "https://product.hstatic.net/200000031420/product/125_5c678ab874bd49458b39db1a15559d74_grande.jpg",
    quantity: 10,
    idProduct: 7,
  },
  {
    name: "HEYYOU FADEFLAME WHITE TEE",
    price: 108000,
    img: "https://product.hstatic.net/200000031420/product/117_909c200f1c6e4891b4778e2c850657c4_grande.jpg",
    quantity: 10,
    idProduct: 8,
  },
  {
    name: "HEYYOU SPRAYPAINT BLACK TEE",
    price: 168000,
    img: "https://product.hstatic.net/200000031420/product/53_74aaaa993ded41df8cc7fe038a1e721e_grande.jpg",
    quantity: 10,
    idProduct: 9,
  },
  {
    name: "HEYYOU SPRAYPAINT WHITE TEE",
    price: 168000,
    img: "https://product.hstatic.net/200000031420/product/65_62e5af38c8ec4209b2da4387067bcfde_grande.jpg",
    quantity: 10,
    idProduct: 10,
  },
  {
    name: "HEYYOU OVERPRINTED BLACK TEE",
    price: 168000,
    img: "https://product.hstatic.net/200000031420/product/45_5c8d89123de343cc996ed99e67d0c06c_grande.jpg",
    quantity: 10,
    idProduct: 11,
  },
  {
    name: "HEYYOU OVERPRINTED GRAY TEE",
    price: 168000,
    img: "https://product.hstatic.net/200000031420/product/21_9cdb50955b5c4b50949b1aa6560eca1e_grande.jpg",
    quantity: 10,
    idProduct: 12,
  },
];

let container = document.getElementsByClassName("container");

function buildProductCard(item) {
  let card = document.createElement("div");
  card.className = "item";
  card.innerHTML = `<img class="sp" src="${item.img}"
    alt="">
<div class="infolv1">${item.name}</div>
<div class="infolv2">${item.price}đ</div>
<div class="infolv2" id="sp${item.idProduct}">${item.quantity}</div>
</div>`;
  let btnBox = document.createElement("div");
  btnBox.className = "bot-card";
  let btnAdd = document.createElement("button");
  let boldText = document.createElement("b");
  boldText.innerText = "Thêm";
  btnAdd.appendChild(boldText);
  btnBox.appendChild(btnAdd);
  card.appendChild(btnBox);
  btnBox.addEventListener("click", () => {
    if (item.quantity > 0) {
      item.quantity--;
      addToCart(item);
      card.innerHTML = `
        <img class="sp" src="${item.img}"
        alt="">
    <div class="infolv1">${item.name}</div>
    <div class="infolv2">${item.price}đ</div>
    <div class="infolv2" id="sp${item.idProduct}">${item.quantity}</div>
    </div>
            `;
      btnAdd.appendChild(boldText);
      btnBox.appendChild(btnAdd);
      card.appendChild(btnBox);
    } else {
      alert("Hết sản phẩm rồi rồi !!!!");
      return;
    }
  });
  return card;
}

let cartList = [];
let idCart = 0;

function addToCart(item) {
  let isExist = false;
  if (cartList.length == 0) {
    cartList.push({
      ...item,
      stock: 1,
      quantity: item.quantity + 1,
      id: idCart,
    });
    idCart++;
    console.log(cartList);
    return;
  }
  for (let i = 0; i < cartList.length; i++) {
    if (cartList[i].name == item.name) {
      // cartList[i].quantity = item.quantity;
      cartList[i].stock += 1;
      console.log(cartList);
      isExist = true;
      return;
    }
  }
  if (!isExist) {
    cartList.push({
      ...item,
      quantity: item.quantity + 1,
      stock: 1,
      id: idCart,
    });
    idCart++;
    console.log(cartList);
  }
}

for (let i = 0; i < container.length; i++) {
  for (let j = 0; j < itemList.length; j++) {
    container[i].appendChild(buildProductCard(itemList[j]));
  }
}

function opendialog() {
  var dialogElement = document.getElementById("dialogcart");
  dialogElement.open = true; // Mở dialog bằng cách gán open thành true
  rendercartlist();
  console.log("hello");
  document.getElementById("overlay").style.display = "block";
}
function rendercart(item) {
  let cart = document.createElement("div");
  cart.className = "itemcart";
  cart.innerHTML = `
<div class="name">${item.name}</div>
<div class="quantity">
số lượng 
 <input id="quantityupdate${
   item.id
 }" class="inputquantity" type="number" placeholder="${item.stock}">
</div>
<div class="price">price: ${item.price * item.stock}đ</div>
</div>`;
  let containerupde = document.createElement("div");
  containerupde.className = "containerupde";
  containerupde.id = `containerupde${item.id}`;

  let btnudapte = document.createElement("div");
  btnudapte.className = "update";
  btnudapte.innerHTML = "update";

  let btndelete = document.createElement("div");
  btndelete.className = "delete";
  btndelete.innerHTML = "delete";

  containerupde.appendChild(btnudapte);
  containerupde.appendChild(btndelete);
  cart.appendChild(containerupde);
  console.log(item);
  btnudapte.addEventListener("click", () => {
    updateCart(item);
  });
  // let event = document.getElementById(`update${item.name}`);
  // event.addEventListener("click",(item)=>{
  // update
  // })
  btndelete.addEventListener("click", () => {
    deleteCart(item);
  });
  return cart;
}
let totalPrice = 0;
function renderTotalPrice(totalPrice) {
  let totalPricediv = document.createElement("div");
  totalPricediv.className = "totalprice";
  totalPricediv.innerHTML = `
<div>total price: ${totalPrice}đ</div>`;
  return totalPricediv;
}
function rendercartlist() {
  let cartdialog = document.getElementById("maindialog");
  cartList.forEach((element) => {
    cartdialog.appendChild(rendercart(element));
    totalPrice += element.price * element.stock;
  });
  cartdialog.appendChild(renderTotalPrice(totalPrice));
}
function oder() {
  var dialogElement = document.getElementById("dialogcart");
  dialogElement.open = false;
  removeItems();
  removeTotalPrice();
  totalPrice = 0;
  cartList=[];
  document.getElementById("overlay").style.display = "none";
  alert("bạn đã đặt hàng thành công");
}
function closedialog() {
  var dialogElement = document.getElementById("dialogcart");
  dialogElement.open = false;
  removeItems();
  removeTotalPrice();
  totalPrice = 0;
  document.getElementById("overlay").style.display = "none";
}

function removeItems() {
  var dialogElement = document.getElementById("maindialog");
  var items = dialogElement.getElementsByClassName("itemcart");
  while (items.length > 0) {
    items[0].remove();
  }
}
function removeTotalPrice() {
  var dialogElement = document.getElementById("maindialog");
  var items = dialogElement.getElementsByClassName("totalprice");
  while (items.length > 0) {
    items[0].remove();
  }
}
function updateCart(cart) {
  let idquantityupdate = "quantityupdate" + cart.id;
  console.log(idquantityupdate);

  var newStock = parseInt(document.getElementById(idquantityupdate).value);
  if (newStock <= cart.quantity) {
    cartList.forEach((item) => {
      if (item.id === cart.id) {
        item.stock = newStock;
      }
    });
    itemList.forEach((item) => {
      if (item.idProduct === cart.idProduct) {
        item.quantity = cart.quantity - newStock;
      }
    });
    console.log(itemList);
    let updateItem = itemList.find((item) => item.idProduct == cart.idProduct);
    let numOfProduct = document.getElementById(`sp${cart.idProduct}`);
    numOfProduct.innerHTML = updateItem.quantity;
  } else {
    alert("hết sp rồi bạn ey !!!");
  }
  totalPrice = 0;
  removeItems();
  removeTotalPrice();
  rendercartlist();
}
function deleteCart(cart) {
  removeItemById(cart.idProduct);
  totalPrice = 0;
  removeItems();
  removeTotalPrice();
  rendercartlist();
  console.log(cart.idProduct);
  let numOfProduct = document.getElementById(`sp${cart.idProduct}`);
  numOfProduct.innerHTML = cart.quantity;
  itemList.forEach((item) => {
    if (item.name === cart.name) {
      item.quantity = cart.quantity;
    }
  });
}
function removeItemById(idProduct) {
  cartList = cartList.filter((item) => item.idProduct !== idProduct);
}
