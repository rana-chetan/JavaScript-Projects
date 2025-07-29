// // adding multiple html element through JS
// let main = document.getElementById("main");
// let s = "";
// for(let i=1; i<=10; i++){
//     s += "<h1>Hello World!</h1>";
// }
// main.innerHTML = s;


// Main Project
let main = document.getElementById("main");
let s = "";

let arr = ["https://i.ebayimg.com/images/g/BXMAAOSwvApZ5nq7/s-l1200.jpg",
    "https://img.pokemondb.net/artwork/large/raichu.jpg",
    "https://img.pokemondb.net/artwork/large/slowpoke.jpg",
    "https://i.pinimg.com/736x/e2/c3/6f/e2c36ffb644bbfe83ee9beef08e53729.jpg",
    "https://media.cnn.com/api/v1/images/stellar/prod/210226041421-02-pokemon-anniversary-design.jpg?q=w_1110,c_fill",
    "https://media.cnn.com/api/v1/images/stellar/prod/210226040722-01-pokemon-anniversary-design.jpg?q=w_1920,h_1080,x_0,y_0,c_fill",
]

for (let i = 1; i <= 65; i++) {
    let r = Math.floor(Math.random() * arr.length);
    s += `<div class="card"><img src=${arr[r]}></div>`;
}

main.innerHTML = s;