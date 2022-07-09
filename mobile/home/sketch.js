
let imagenumber = 1;
let dec = false;
let inc = false;

function imginc() {
    imagenumber += 1;
    inc = true;
    dec = false;
}

function imgdec() {
    imagenumber -= 1;
    inc = false;
    dec = true;
}

function update() {
    if (imagenumber === 1) {
        document.getElementById("img-div-desk").innerHTML = `<img src="img1.jpg" width="300px">`;
    }
    else if (imagenumber === 2) {
        document.getElementById("img-div-desk").innerHTML = `<img src="img2.jpg" height="400px">`;
    }
    else if (imagenumber === 3) {
        document.getElementById("img-div-desk").innerHTML = `<img src="img3.jpg" height="400px">`
    }
    else if (imagenumber === 4) {
        document.getElementById("img-div-desk").innerHTML = `<img src="img4.jpg" height="400px">`
    }
    else if (imagenumber === 5) {
        document.getElementById("img-div-desk").innerHTML = `<img src="img5.jpg" height="400px">`
    }
    else if (imagenumber === 6) {
        document.getElementById("img-div-desk").innerHTML = `<img src="img6.jpg" height="400px">`
    }
    else if (imagenumber === 7) {
        document.getElementById("img-div-desk").innerHTML = `<img src="img7.jpg" height="400px">`
    }
    else if (imagenumber === 8) {
        document.getElementById("img-div-desk").innerHTML = `<img src="img8.jpg" height="400px">`
    }
    else if (imagenumber === 9) {
        document.getElementById("img-div-desk").innerHTML = `<img src="img9.jpg" height="400px">`
    }
    else if (imagenumber === 10) {
        document.getElementById("img-div-desk").innerHTML = `<img src="img10.jpg" height="400px">`
    }
    else if (imagenumber === 11) {
        document.getElementById("img-div-desk").innerHTML = `<img src="img11.jpg" height="400px">`
    }else {
        if (dec) {
            imagenumber = 11;
        }
        else if (inc) {
            imagenumber = 1;
        }
        else {
            console.log("myau");
        }
        update();
    }
    console.log(imagenumber);
}

setInterval(update,1);
