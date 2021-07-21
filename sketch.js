const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var hour, time, date;

var bg = "sunrise1.png";

function preload() {
    getBgImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
    if (backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    noStroke();
    textSize(25);
    if (bg === "sunset10.png" || bg === "sunset11.png" || bg === "sunset12.png"){
        fill("white");
    } else {
        fill("black");
    }
    text("DATE: "+date, 50, 50)
    text("TIME: "+time+ " A.M.", 50,100);
}

async function getBgImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json();

    var dateTime = responseJSON.datetime;

    date = dateTime.slice(0,10);
    console.log(date);

    time = dateTime.slice(11,16);
    console.log(time);

    hour = dateTime.slice(11,13);
    console.log(hour);

    if (hour>=05 && hour<=06){
       bg = "sunrise1.png";
    } else if (hour>=06 && hour<=08){
       bg = "sunrise2.png";
    } else if (hour>=09 && hour<=10){
       bg = "sunrise3.png";
    } else if (hour>=11 && hour<=12){
       bg = "sunrise4.png";
    } else if (hour>=13 && hour<=14){
       bg = "sunrise5.png";
    } else if (hour>=15 && hour<=16){
       bg = "sunrise6.png";
    } else if (hour>=17 && hour<=18){
       bg = "sunset7.png";
    } else if (hour>=19 && hour<=20){
       bg = "sunset8.png";
    } else if (hour>=21 && hour<=22){
       bg = "sunset9.png";
    } else if (hour>=23 && hour<=24){
       bg = "sunset10.png";
    } else if (hour>=01 && hour<=02){
       bg = "sunset11.png";
    } else if (hour>=03 && hour<=04){
       bg = "sunset12.png";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here
