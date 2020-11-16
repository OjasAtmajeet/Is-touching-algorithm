var obj1, obj2;

function setup() {
  createCanvas(1200,800);
    obj1 = createSprite(250, 400, 100, 250);
    obj2 = createSprite(1050, 400, 250, 100);
}

function draw() {
    background("yellow");
    obj2.x = World.mouseX;
    obj2.y = World.mouseY;
    if (obj2.x - obj1.x < obj1.width / 2 + obj2.width / 2 &&
        obj1.x - obj2.x < obj1.width / 2 + obj2.width / 2 &&
        obj2.y - obj1.y < obj1.height / 2 + obj2.height / 2 &&
        obj1.y - obj2.y < obj1.height / 2 + obj2.height / 2) {
        obj1.shapeColor = "green";
        obj2.shapeColor = "green";
    }
    else {
        obj1.shapeColor = "red";
        obj2.shapeColor = "red";
    }
    drawSprites();
}