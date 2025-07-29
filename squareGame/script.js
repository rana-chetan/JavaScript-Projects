let sq1 = document.getElementById("sq1");
let sq2 = document.getElementById("sq2");
let sq3 = document.getElementById("sq3");
let sq4 = document.getElementById("sq4");

// 1st Square
sq1.addEventListener("mouseenter", function () {
    let r = Math.floor(Math.random() * 100);
    sq1.innerHTML = `<h1>${r}</h1>`;
})

sq1.addEventListener("mouseleave", function () {
    sq1.innerHTML = `<h1>1</h1>`;
})

// 2nd Square
// let color = "green";
let flag = 1;

sq2.addEventListener("mouseenter", function () {
    // // using 2 colors (red, green)
    // if (color == "green") {
    //     sq2.style.backgroundColor = color;
    //     color = "red";
    // } else {
    //     sq2.style.backgroundColor = color;
    //     color = "green";
    // }

    // using 3 colors (red, green, blue)
    if (flag == 1) {
        sq2.style.backgroundColor = "red";
        flag = 2;
    } else if (flag == 2) {
        sq2.style.backgroundColor = "green";
        flag = 3;
    } else {
        sq2.style.backgroundColor = "blue";
        flag = 1;
    }
})

sq2.addEventListener("mouseleave", function () {
    sq2.style.backgroundColor = "white";
})

// 3rd Square - rgb(a, b, c) where a,b,c lies between 0 to 255
sq3.addEventListener("mouseenter", function () {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);

    sq3.style.backgroundColor = `rgb(${a},${b},${c})`;
})

sq3.addEventListener("mouseleave", function () {
    sq3.style.backgroundColor = "white";
})

// 4th Square
sq4.addEventListener("click", function () {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);

    sq1.style.backgroundColor = `rgb(${a},255,255)`;
    sq2.style.backgroundColor = `rgb(255,${b},255)`;
    sq3.style.backgroundColor = `rgb(255,255,${c})`;
})

sq4.addEventListener("mouseleave", function () {
    sq1.style.backgroundColor = "white";
    sq2.style.backgroundColor = "white";
    sq3.style.backgroundColor = "white";
})