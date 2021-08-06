const img=[
    "1.jpg",
    "2.jpg",
    "3.jpg"
]

const randomImg = img[Math.floor(Math.random() * img.length)];

const bgimg = document.createElement("img")

bgimg.src = `./img/${randomImg}`;

document.body.appendChild(bgimg);