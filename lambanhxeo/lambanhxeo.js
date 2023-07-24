
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let wait = async function (second) {
    let wait = new Promise(async (resolover, reject) => {
      setTimeout(() => {
        resolover();
      }, second * 1000);
    });
    return wait;
  };
  
async function askUser() {
    let temp = new Promise((resolve, reject) => {
        rl.question("Nhập tên đi fen: ", (name) => {
            rl.question("Nhập tuổi luôn fen: ", (age) => {
                    console.log({name,age});
                    resolve({ name, age});
            });
        });
    });
    return temp;
}

async function xinTien() {
    console.log("Má ơiii, cho con tiềnnn");
    let temp = new Promise((res, rej) => {
      rl.on("line", (input) => {
        res(input);
      });
    });
    return temp;
}

async function chonSize() {
    console.log("Chọn size bánh:");
    console.log("S - 121,000 VND");
    console.log("M - 237,000 VND");
    console.log("L - 1,810,000 VND");
  
    let temp = new Promise((resolve, reject) => {
      rl.question("Nhập size (S/M/L): ", (input) => {
        const size = input.toUpperCase();
        switch (size) {
          case "S":
            console.log("Bạn đã chọn size S - Giá: 121,000 VND");
            resolve(121000);
            break;
          case "M":
            console.log("Bạn đã chọn size M - Giá: 237,000 VND");
            resolve(237000);
            break;
          case "L":
            console.log("Bạn đã chọn size L - Giá: 1,810,000 VND");
            resolve(1810000);
            break;
          default:
            console.log("Size không hợp lệ. Vui lòng chọn lại!");
            chonSize().then(resolve);
        }
      });
    });
    return temp;
}

async function diCho() {
    console.log("Ra chợ mua nguyên liệu");
    await wait(5);
    let temp = new Promise((resolover, reject) => {
        console.log("Đi mua nguyên liệu done");
        resolover();
    });
}

async function tachTrung(){
    console.log("Sơ chế");
    console.log("Tách trứng");
    await wait(2);
    let temp = new Promise((res,rej)=>{
        console.log("Tách trứng done");
        res();
    })
    return temp;
}

async function rayBot(){
    console.log("Ray bột");
    await wait(2);
    let temp = new Promise((res,rej)=>{
        console.log("Ray bột done");
        res();
    });
    return temp;
}

async function giaVi(){
    console.log("Chuẩn bị gia vị");
    await wait(5);
    let temp = new Promise((res,rej)=>{
        console.log("Chuẩn bị gia vị done");
        res();
    });
    return temp;
}

async function vayRau(){
    console.log("Vẩy rau để làm sạch rau");
    await wait(2);
    console.log("Vẩy đi luôn cả rổ");
    await wait(3);
    console.log("Gôm lại rồi rửa xong thì vẩy tiếp");
    await wait(5);
    let temp = new Promise((res,rej)=>{
        console.log("Vẩy rau done");
        res();
    });
    return temp;
} 

async function chuanBi(){
    async function lamBotBanh(){
        console.log("Làm bột bánh");
        await wait(10);
        let temp = new Promise((res,rej)=>{
            console.log("Làm bột done");
            res();
        });
        return temp;
    }
    async function luocTom(){
        console.log("Luộc tôm");
        await wait(7);
        let temp = new Promise((res,rej)=>{
            console.log("Luộc tôm done");
            res();
        });
        return temp;

    }
    async function xaoThitBam(){
        console.log("Xào thịt bằm");
        await wait(5);
        let temp = new Promise((res,rej)=>{
            console.log("Xào thịt bằm done");
            res();
        });
        return temp;
    }
    async function lamDau(){
        console.log("Làm đậu");
        await wait(5);
        let temp = new Promise((res,rej)=>{
            console.log("Làm đậu done");
            res();
        });
        return temp;
    }
    await Promise.all([lamBotBanh(),luocTom(),xaoThitBam(),lamDau()]);
}

async function doBanh(){
    console.log("Đổ bánh vô chảo");
    await wait(3);
    let temp = new Promise((res,rej)=>{
        console.log("Đổ bánh vô chảo done");
        res();
    });
    return temp;
}

async function chien(){
    console.log("Lên lửa đê");
    await wait(5);
    let temp = new Promise((res,rej)=>{
        console.log("Chiên done");
        res();
    });
    return temp;
}

async function phaNuocMam(){
    console.log("Pha nước mắm");
    await wait(3);
    let temp = new Promise((res,rej)=>{
        console.log("Pha nước mắm done");
        res();
    });
    return temp;
}

async function donDoAn(){
    async function radia(){
        console.log("Dọn ra dĩa");
        await wait(3);
        let temp = new Promise((res,rej)=>{
            console.log("Dọn ra dĩa done");
            res();
        });
        return temp;
    }
    async function donRau(){
        console.log("Dọn Rau");
        await wait(3);
        let temp = new Promise((res,rej)=>{
            console.log("Dọn rau done");
            res();
        });
        return temp;
    }
    await Promise.all([radia(),donRau()]);
}

async function main()
{
    await askUser();
    const tienXinMa = await xinTien();
    const tienBanh = await chonSize();

    if (tienXinMa < tienBanh) {
        console.log("Không đủ tiền ròi, Sủiiiii đi nấu ăn thoiiii");
        return;
      } else {
        const tienThua = tienXinMa - tienBanh;
        console.log("Bạn đã mua bánh thành công!");
        console.log("Tiền thối lại:", tienThua, "VND");
    }
    
    await diCho();
    await tachTrung();
    await rayBot();
    await giaVi();
    await vayRau();
    await chuanBi();
    await doBanh();
    await chien();
    await phaNuocMam();
    await donDoAn();
    console.log("Quất !!!!!!!!!!!!!!!!!!!!!!!");
}

main();