const data = [
    {
        id: 1,
        name: "Invicta Men's Pro Diver",
        img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price: 74,
        cat: "Dress",
    },
    {
        id: 11,
        name: "Invicta Men's Pro Diver 2",
        img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price: 74,
        cat: "Dress",
    },
    {
        id: 2,
        name: "Timex Men's Expedition Scout ",
        img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
        price: 40,
        cat: "Sport",
    },
    {
        id: 3,
        name: "Breitling Superocean Heritage",
        img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
        price: 100,
        cat: "Luxury",
    },
    {
        id: 4,
        name: "Casio Classic Resin Strap ",
        img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
        price: 16,
        cat: "Sport",
    },
    {
        id: 5,
        name: "Garmin Venu Smartwatch ",
        img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
        price: 74,
        cat: "Casual",
    },
];
//   consts//
const products = document.querySelector(".products")
const searchIn = document.querySelector(".search")
const Categoies = document.querySelector(".cats")
const pricerange = document.querySelector(".pricerange")
const priceValue = document.querySelector(".priceValue")

////////////
const dispalyProducts = (fillteredProducts) => {
    products.innerHTML = fillteredProducts.map(
        (product) =>
            ` <div class="product">
        <img src=${product.img}>
        <span class="name">${product.name}</span>
        <span class="pricetext">$ ${product.price}</span>
    </div>`
    ).join("");
}
dispalyProducts(data)


searchIn.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
    if (value) {
        dispalyProducts(data.filter(item => item.name.toLowerCase().indexOf(value) !== -1))
    }
    else {
        dispalyProducts(data)
    }
})


const setCat = () => {
    const allCats = data.map((item) => item.cat)
    const categoies = ["All"
        , ...allCats.filter((item, i) => {
            return allCats.indexOf(item) === i;
        }),];

    Categoies.innerHTML = categoies.map((cat) =>
        ` <span class="cat">${cat}</span>`
    ).join("")

    Categoies.addEventListener("click", (e) => {
        const selectCategory = e.target.textContent;

        selectCategory === "All" ? dispalyProducts(data) 
        : dispalyProducts(data.filter((item) =>   item.cat === selectCategory))
          
        
    })
}
const setPric=()=>{
    const priceList=data.map((item) =>item.price)
    const mimPrice=Math.min(...priceList)
    const maxPrice=Math.max(...priceList)
    pricerange.min=mimPrice
    pricerange.value=maxPrice
    priceValue.textContent="$" + maxPrice
    pricerange.addEventListener("input",(e)=>{
        priceValue.textContent="$" +e.target.value 
        dispalyProducts(data.filter((item)=>item.price<=e.target.value))
    })
}
setCat()
setPric()