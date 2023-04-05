/* BEGIN EXTERNAL SOURCE */


    const pepsiMax = { Name: "Pepsi Max", Energi: 1, Color: "Black" };
    const cokaCola = { Name: "Coka Cola", Energi: 1, Color: "Black" };
    const tuborg = { Name: "Tuborg Classic", Energi: 1, Color: "Black" };
    const Uran = { Name: "Uran-234", Energi: 1, Color: "Black" };

    var mySlider = new CanvasSlider({
        canvas: "myCanvas",
        range: { min: 0, max: 100, count: 5 },
        start: [50],
        snapToTicks: true,
        showLabels: true,
        showMajorTicks: true,
        showMinorTicks: false,
        showToolTip: true,
        showValueBox: false,
        format: { decimals: 0, prefix: "€ ", suffix: "" },
        handle: { shape: "ellipse", w: 20, h: 20, hue: 240 },
        baseColor: { h: 207, s: 60, v: 100 }
    });




var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
    const img = new Image();
    img.src = './bottle.png';


    fill(50);
    rect(500, 500, 50, 50);
    img.onload = () => { ctx.drawImage(img, 100, 100,259,300); };

/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */


const Pepsi = {Name:"Pepsi",Energi:1,Color:"Black"}





var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("");
ctx.drawImage(img, 100, 100);

/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */


const Pepsi = {Name:"Pepsi",Energi:1,Color:"Black"}





var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("");
ctx.drawImage(img, 100, 100);

/* END EXTERNAL SOURCE */
