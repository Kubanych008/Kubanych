let laptops = [
    { marka: "ThinkPad", brand: "Lenovo", price: 90000, ram: 16, img: "https://m.media-amazon.com/images/I/61fit0iz1ML._AC_UF894,1000_QL80_.jpg", id: 1, favorite:false },
    { marka: "Aspire", brand: "Lenovo", price: 70000, ram: 8, img: "https://i.rtings.com/assets/products/Ye3gsgX1/acer-aspire-5-15-2020/design-medium.jpg?format=auto", id: 2, favorite:false },
    { marka: "UltraLight", brand: "Asus", price: 80000, ram: 8, img: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20240122024229.png", id: 3, favorite:false },
    { marka: "Macbook Pro", brand: "Apple", price: 93000, ram: 16, img: "https://www.letemsvetemapplem.eu/bazar/wp-content/uploads/2019/12/IMG_0742-4.jpeg", id: 4, favorite:false }
];

const laptopsContainer = document.getElementById("laptops-container");
const laptopForm = document.getElementById("laptop-form");
const btnAll = document.getElementById("all");
const btnLenovo = document.getElementById("lenovo");
const btnApple = document.getElementById("apple");
const btnAsus = document.getElementById("asus");
const btnIzbr = document.getElementById("izbr")

function allLaptops(filteredLaptops = laptops) {
    laptopsContainer.innerHTML = ""; 
    filteredLaptops.forEach(laptop => {
        const laptopCard = document.createElement("div");
        laptopCard.classList.add("laptop-card");

        laptopCard.innerHTML = `
            <img src="${laptop.img}" >
            <h3>${laptop.marka}</h3>
            <p>Бренд: ${laptop.brand}</p>
            <p>Цена: ${laptop.price} сом</p>
            <p>ОЗУ: ${laptop.ram} ГБ</p>
            <button onclick='deleteLaptop(${laptop.id})'>Delete</button>
            <i onclick='favorite(${laptop.id})' class="bi bi-heart-fill"></i>
        `;

        laptopsContainer.appendChild(laptopCard);
    });
}
//кнопка для удаления
function deleteLaptop(id){
    laptops =laptops.filter(lp=>lp.id !==id);
    allLaptops(laptops)
}
//кнопка избранное
function favorite(id){
    console.log(id);
    let fav=laptops.find(lp=>lp.id == id)
    fav.favorite = !fav.favorite
    console.log(fav.favorite);
    let iconka = document.querySelector(`[onclick='favorite(${id})']`);

    if (iconka) {
        if (fav.favorite) {
            iconka.style.color = "red"; 
        } else {
            iconka.style.color = ""; 
        }
    }
}
btnIzbr.onclick=(e)=>{
    e.preventDefault()
    laptops=laptops.filter(lp=>lp.favorite ==true)
    allLaptops(laptops)
}


laptopForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const marka = document.getElementById("marka").value;
    const brand = document.getElementById("brand").value;
    const price = parseInt(document.getElementById("price").value);
    const ram = parseInt(document.getElementById("ram").value);
    const img = document.getElementById("img").value;

    const newLaptop = {
        marka,
        brand,
        price,
        ram, 
        img,
        id: laptops.length + 1 };

    laptops.push(newLaptop); 
    allLaptops(); 
    laptopForm.reset();
});

//filter
btnAll.onclick = () => {
    allLaptops(laptops); 
};

btnLenovo.onclick = () => {
    const LaptopLenovo = laptops.filter(lp => lp.brand == "Lenovo");
    allLaptops(LaptopLenovo); 
};

btnApple.onclick = () => {
    const LaptopApple = laptops.filter(lp => lp.brand == "Apple");
    allLaptops(LaptopApple);
};

btnAsus.onclick = () => {
    const LaptopAsus = laptops.filter(lp => lp.brand == "Asus");
    allLaptops(LaptopAsus); 
};
allLaptops(laptops);