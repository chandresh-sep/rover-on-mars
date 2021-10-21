canvas =document.getElementById("myCanvas");
ctx =canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_img ="mars.jpg";
rover_img ="rover.png";

rover_x = 10;
rover_y = 10;

function add()

{
img_bg = new Image();
img_bg.onload = uploadbg;
img_bg.src = background_img;

img_rover = new Image();
img_rover.onload = uploadrover;
img_rover.src = rover_img;
}

function uploadbg()

{
ctx.drawImage(img_bg, 0, 0, canvas.width, canvas.height);
}

function uploadrover()

{
ctx.drawImage(img_rover, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed);

if(keyPressed =="38")
{
up();
console.log("up key is pressed")
}

if(keyPressed=="40")
{
down();
console.log("down key is pressed")
}

if(keyPressed =="37")
{
left();
console.log("left key is pressed")
}

if(keyPressed =="39")
{
right();
console.log("right key is pressed")
}

}


function up()
{
    if(rover_y>=0)
    {
        rover_y = rover_y - 10;
        console.log("we are pressing the up key, x =" + rover_x + "y =" + rover_y);
        uploadbg();
         uploadrover();
    }
    

   
}

function down()
{
    if(rover_y<=500)
    {
        rover_y = rover_y + 10;
        console.log("we are pressing the down key, x =" + rover_x + "y =" + rover_y);
        uploadbg();
        uploadrover();
    }
    

   
}

function left()
{
    if(rover_x>=0)
    {
        rover_x = rover_x - 10;
        console.log("we are pressing the left key, x =" + rover_x + "y =" + rover_y);
        uploadbg();
        uploadrover();
    }
    

   
}

function right()
{
    if(rover_x<=700)
    {
        rover_x = rover_x + 10;
        console.log("we are pressing the right key, x =" + rover_x + "y =" + rover_y);
        uploadbg();
        uploadrover();
    }
    

   
}