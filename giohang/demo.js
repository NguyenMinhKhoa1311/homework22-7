

let clothlist = [
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/1-5.jpg?v=1686560543000",
    name: "DC x LW Love Varsity Jacket",
    quantity: 10,
    price: "1.590.000₫",
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/1-7329d9a4-8c70-482a-b945-63c862b5239f.jpg?v=1686415995000",
    name: "DC x OP Ace T-shirt - Cream",
    quantity: 10,
    price: "450.000₫",
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/1-f2d92232-daac-44a6-b8f1-4d11b9055c2e.jpg?v=1682153227000",
    name: "DC x OP Sanji Chibi T-shirt - White",
    quantity: 10,
    price: "450.000₫",
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/1-201abb96-56c5-42c0-a3e8-0d2b7466761f.jpg?v=1682663055000",
    name: "DC x OP Luffy Dream T-shirt",
    quantity: 10,
    price: "450.000₫",
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/artboard-1-1.jpg?v=1678256256000",
    name: "DC x OPF:R Tote Bag - Cream",
    quantity: 10,
    price: "250.000₫",
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/1-1aa78a18-350b-4cc8-b04f-b751f191a202.jpg?v=1678335048000",
    name: "DC x OPF:R The Crew T-shirt",
    quantity: 10,
    price: "450.000₫",
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/1-8adba28c-786a-49e7-9e32-7cbb93166f31.jpg?v=1678260141000",
    name: "DC x OPF:R Luffy T-shirt - Cream",
    quantity: 10,
    price: "420.000₫",
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/1-3b9cd100-dd59-43e0-9ed5-9a5285383290.jpg?v=1678260728000",
    name: "DC x OPF:R Shanks T-shirt - Cream",
    quantity: 10,
    price: "450.000₫",
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/1-68dffd52-f0fd-44fd-afe0-bc08033c93d9.jpg?v=1678260406000",
    name: "DC x OPF:R Zoro T-shirt - Black",
    quantity: 10,
    price: "420.000₫",
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/1-5-cee20adb-bbae-4ee9-97a6-4715582897b0.jpg?v=1678260171000",
    name: "DC x OPF:R Nami T-shirt - White",
    quantity: 10,
    price: "420.000₫",
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/23-bfa57181-d541-44ae-96cc-ae4377c7ea33.jpg?v=1678346493000",
    name: "DC x OP Luffy Raglan Hoodie - White",
    quantity: 10,
    price: "699.000₫",
  },
  {
    status: "còn hàng",
    img: "https://bizweb.dktcdn.net/100/369/010/products/artboard-1-a1cd5e2c-253e-4287-99bc-f571f8bec050.jpg?v=1678346490000",
    name: "DC x OP Luffy Raglan Hoodie - Multicolor",
    quantity: 10,
    price: "720.000₫",
  },
];

const header = document.getElementsByClassName("header");
header[0].innerHTML = `<div class="logo">
<img
  src="https://bizweb.dktcdn.net/100/369/010/themes/914385/assets/logo.png?1689564929901"
  alt=""
  />
</div>
<div class="menu">
  <p>SHOP</p>
  <p>COLLAB'S</p>
  <p>ITHINKIDO</p>
  <p>NEWS</p>
  <p>CONTACT</p>
  <p>ABOUT</p>
</div>

<div class="search">
  <div class="borderinput">
    <input placeholder="Tìm kiếm" />
    <span class="material-symbols-outlined"> search </span>
  </div>
  <div class="icon">
    <span class="material-symbols-outlined"> person </span>
    <span class="material-symbols-outlined"> local_mall </span>
    <a>Vi</a>
    <a>En</a>
  </div>
</div>`;
console.log(header);

let row1 = document.getElementsByClassName("row1");

console.log(row1);

function buildProductCard(cloth) {
  let card = document.createElement("div");
  card.className = "product-item";
  card.innerHTML = `<div class="status">
  ${cloth.status}
</div>
<div class="imageproduct">
  <img
   
    src= "${cloth.img}"/>
</div>
<div class="name">
  <p>${cloth.name}</p>
</div>
<div class="price">
  <p>${cloth.price}</p>
  
</div>
<div class="item-desc">Số lượng ${cloth.quantity}</div>`;
  let btnBox = document.createElement("div");
  btnBox.className = "bot-card";
  let btnAdd = document.createElement("button");
  let boldText = document.createElement("b");
  boldText.innerText = "Thêm";
  btnAdd.appendChild(boldText);
  btnBox.appendChild(btnAdd);
  card.appendChild(btnBox);
  btnBox.addEventListener("click", () => {
    if (cloth.quantity > 0) {
      cloth.quantity--;
      addToCart(cloth);
      card.innerHTML = `
        <div class="status">
        ${cloth.status}
      </div>
      <div class="imageproduct">
        <img

          src= "${cloth.img}"/>
      </div>
      <div class="name">
        <p>${cloth.name}</p>
      </div>
      <div class="price">
        <p>${cloth.price}</p>

      </div>
      <div class="item-desc">Số lượng ${cloth.quantity}</div>
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

function addToCart(cloth) {
  let isExist = false;
  if (cartList.length == 0) {
    cartList.push({
      ...cloth,
      stock: 1,
      quantity: cloth.quantity,
    });
    console.log(cartList);
    return;
  }
  for (let i = 0; i < cartList.length; i++) {
    if (cartList[i].name == cloth.name) {
      cartList[i].quantity = cloth.quantity;
      cartList[i].stock += 1;
      console.log(cartList);
      isExist = true;
      return;
    }
  }
  if (!isExist) {
    cartList.push({
      ...cloth,
      quantity: cloth.quantity,
      stock: 1,
    });
    console.log(cartList);
  }
}

for (let i = 0; i < row1.length; i++) {
  for (let j = 0; j < clothlist.length; j++) {
    row1[i].appendChild(buildProductCard(clothlist[j]));
  }
}
