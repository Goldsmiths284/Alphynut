/*

The Game Project 4 - Side scrolling

Week 6

*/



// VARIABLES

var gameChar_x;
var gameChar_y;
var isLeft;
var isRight;
var scrollPos;
var clouds;
var mountains;
var trees_x;



function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = 432;
    
// BOOLEAN VARIABLES TO CONTROL THE MOVEMENT OF THE GAME CHARACTER
    
	isLeft = false;
	isRight = false;

 // VARIABLES TO CONTROL THE BACKGROUND SCROLLING   
	scrollPos = 0;

	
    
///////////   INITIALIZING ARRAYS OF SCENERY OBJECTS   ///////////
    
// PART 4 TASK #3: AN ARRAY OF TREE POSITIONS

    trees_x = [100, 150, 300, 450, 500, 700, 770, 850, 1000, 2000, 3000, 1500, 1550, -700, -770, -850, -1000, -2000, -3000, -1500, -1550, 3000, 5000, -5000, 11000, -11000];

// PART 4 TASK #5: AN ARRAY OF CLOUD POSITIONS
    
    clouds =
        [
            {pos_x: -20, pos_y: -50, weight: 20, height: 10},
            {pos_x: 200, pos_y: -20, weight: 0, height: 0},
            {pos_x: -10, pos_y: 10, weight: 0, height: 0},
            {pos_x: -200, pos_y: -80, weight: 0, height: 20},
            {pos_x: 300, pos_y: 10, weight: 100, height: 0},
            {pos_x: -300, pos_y: 10, weight: 0, height: 0},
            {pos_x: -1100, pos_y: 10, weight: 0, height: 0},
            {pos_x: 1200, pos_y: 50, weight: 0, height: 20},
            {pos_x: 600, pos_y: 10, weight: 100, height: 0},
            {pos_x: -800, pos_y: 10, weight: 0, height: 0},
            {pos_x: 1300, pos_y: 10, weight: 0, height: 0},
            {pos_x: 2110, pos_y: 10, weight: 0, height: 0},
            {pos_x: 3200, pos_y: 50, weight: 0, height: 20},
            {pos_x: 5000, pos_y: 10, weight: 100, height: 0},
            {pos_x: 8000, pos_y: 10, weight: 0, height: 0},
            {pos_x: -1300, pos_y: 10, weight: 0, height: 0},
            {pos_x: -2110, pos_y: 10, weight: 0, height: 0},
            {pos_x: -3200, pos_y: 50, weight: 0, height: 20},
            {pos_x: -5000, pos_y: 10, weight: 100, height: 0},
            {pos_x: -8000, pos_y: 10, weight: 0, height: 0},
            {pos_x: 5020, pos_y: -50, weight: 20, height: 10},
            {pos_x: 5200, pos_y: -20, weight: 0, height: 0},
            {pos_x: 5110, pos_y: 10, weight: 0, height: 0},
            {pos_x: 5200, pos_y: 50, weight: 0, height: 20},
            {pos_x: 5300, pos_y: 10, weight: 100, height: 0},
            {pos_x: 5390, pos_y: 10, weight: 0, height: 0},
            {pos_x: 3020, pos_y: -50, weight: 20, height: 10},
            {pos_x: 2200, pos_y: -20, weight: 0, height: 0},
            {pos_x: 3110, pos_y: 10, weight: 0, height: 0},
            {pos_x: 3200, pos_y: 50, weight: 0, height: 20},
            {pos_x: 4300, pos_y: 10, weight: 100, height: 0},
            {pos_x: 9390, pos_y: 10, weight: 0, height: 0}
        ];
    
// PART 4 TASK #7: AN ARRAY OF MOUNTAIN POSITIONS
    
    mountains =
        [
            {pos_x: 1000, pos_y: 0},
            {pos_x: 7800, pos_y: 0},
            {pos_x: 500, pos_y: 0},
            {pos_x: -8500, pos_y: 0},
            {pos_x: -4800, pos_y: 0},
            {pos_x: 3500, pos_y: 0},
            {pos_x: 8000, pos_y: 0},
            {pos_x: 15200, pos_y: 0},
            {pos_x: 0, pos_y: 0},
            {pos_x: -9000, pos_y: 0},
            {pos_x: -5200, pos_y: 0},
            {pos_x: -11000, pos_y: 0},
            {pos_x: -7800, pos_y: 0},
            {pos_x: -15000, pos_y: 0},
            {pos_x: -1100, pos_y: 0},
            {pos_x: 830, pos_y: 0}
        ];
    
//PART 4 TASK #8A: AN ARRAY OF CANYON POSITIONS
    
    canyons =
        [
            {pos_x: 0, pos_y: 0},
            {pos_x: -1000, pos_y: 0},
            {pos_x: 3000, pos_y: 0},
            {pos_x: 6000, pos_y: 0},
            {pos_x: 9000, pos_y: 0},
            {pos_x: 11000, pos_y: 0},
            {pos_x: -3000, pos_y: 0},
            {pos_x: -6000, pos_y: 0},
            {pos_x: -9000, pos_y: 0},
            {pos_x: -11000, pos_y: 0},
            {pos_x: -13000, pos_y: 0}
        
        ];
    
//PART 4 TASK #8B: AN ARRAY OF COLLECTABLES POSITIONS
    
    collectables=
        [
            {pos_x: 100, pos_y: 100, size: 50},
            {pos_x: 2300, pos_y: -100, size: 50},
            {pos_x: 400, pos_y: -300, size: 50},
            {pos_x: 1200, pos_y: 50, size: 50},
            {pos_x: 2000, pos_y: 80, size: 50},
            {pos_x: 2500, pos_y: -100, size: 50},
            {pos_x: -100, pos_y: -100, size: 50},
            {pos_x: -2300, pos_y: -100, size: 50},
            {pos_x: -400, pos_y: 50, size: 50},
            {pos_x: -1200, pos_y: -100, size: 50},
            {pos_x: -2000, pos_y: 70, size: 50},
            {pos_x: -2500, pos_y: -100, size: 50}
        ];
}



function draw()
{
    
    
    
///////////  DRAWING CODE  ///////////
        
// FILLING THE SKY BLUE
    
    background(0, 206, 209);
    noStroke();
	fill(0, 155, 0);

// ADDING GREEN GROUND

	fill(0, 155, 0);
    rect(0, floorPos_y - 20, width, height/4 + 20);
  
        
    
// PART 4 TASK #6: DRAWING THE CLOUDS      

    push();
    translate(scrollPos, 0);
    
    for(var i = 0; i < clouds.length; i++)
    {
            fill(224, 255, 255);
            ellipse(clouds[i].pos_x + 320, clouds[i].pos_y + 140, clouds[i].weight + 100, clouds[i].height + 60);
            ellipse(clouds[i].pos_x + 250, clouds[i].pos_y + 160, clouds[i].weight + 100, clouds[i].height + 60);
            ellipse(clouds[i].pos_x + 390, clouds[i].pos_y + 160, clouds[i].weight + 100, clouds[i].height + 60);
            ellipse(clouds[i].pos_x + 320, clouds[i].pos_y + 180, clouds[i].weight + 100, clouds[i].height + 60);
            ellipse(clouds[i].pos_x + 500, clouds[i].pos_y + 80, clouds[i].weight + 50, clouds[i].height + 30);
            ellipse(clouds[i].pos_x + 470, clouds[i].pos_y + 90, clouds[i].weight + 50, clouds[i].height + 30);
            ellipse(clouds[i].pos_x + 530, clouds[i].pos_y + 90, clouds[i].weight + 50, clouds[i].height + 30);
            ellipse(clouds[i].pos_x + 500, clouds[i].pos_y + 100, clouds[i].weight + 50, clouds[i].height + 30); // White Clouds


            fill(175, 238, 238);
            ellipse(clouds[i].pos_x + 310, clouds[i].pos_y + 150, clouds[i].weight + 100, clouds[i].height + 60);
            ellipse(clouds[i].pos_x + 240, clouds[i].pos_y + 170, clouds[i].weight + 100, clouds[i].height + 60);
            ellipse(clouds[i].pos_x + 380, clouds[i].pos_y + 170, clouds[i].weight + 100, clouds[i].height + 60);
            ellipse(clouds[i].pos_x + 310, clouds[i].pos_y + 190, clouds[i].weight + 100, clouds[i].height + 60);
            ellipse(clouds[i].pos_x + 495, clouds[i].pos_y + 85, clouds[i].weight + 50, clouds[i].height + 30);
            ellipse(clouds[i].pos_x + 465, clouds[i].pos_y + 95, clouds[i].weight + 50, clouds[i].height + 30);
            ellipse(clouds[i].pos_x + 525, clouds[i].pos_y + 95, clouds[i].weight + 50, clouds[i].height + 30);
            ellipse(clouds[i].pos_x + 495, clouds[i].pos_y + 105, clouds[i].weight + 50, clouds[i].height + 30); // Blue Clouds
}
    
    
    
// PART 4 TASK #6: DRAWING THE MOUNTAINS     

// SUN
    
    noStroke();
    fill(255, 215, 0);
    ellipse(1000, 20, 50, 50);
 
// MOUNTAINS    
   
    for(var i = 0; i < mountains.length; i++)
        {
            fill(205, 133, 63);
            triangle(mountains[i].pos_x + 950, mountains[i].pos_y + 150, mountains[i].pos_x + 1100, mountains[i].pos_y + 412, mountains[i].pos_x + 800, mountains[i].pos_y + 412);
            fill(244, 164, 96);
            triangle(mountains[i].pos_x + 950, mountains[i].pos_y + 150, mountains[i].pos_x + 1100, mountains[i].pos_y + 412, mountains[i].pos_x + 1150, mountains[i].pos_y + 412); // Mountain #1

            fill(205, 133, 63);
            triangle(mountains[i].pos_x + 800, mountains[i].pos_y + 100, mountains[i].pos_x + 950, mountains[i].pos_y + 412, mountains[i].pos_x + 650, mountains[i].pos_y + 412);
            fill(244, 164, 96);
            triangle(mountains[i].pos_x + 800, mountains[i].pos_y + 100, mountains[i].pos_x + 950, mountains[i].pos_y + 412, mountains[i].pos_x + 1000, mountains[i].pos_y + 412); // Mountain #2

            fill(205, 133, 63);
            triangle(mountains[i].pos_x + 650, mountains[i].pos_y + 50, mountains[i].pos_x + 800, mountains[i].pos_y + 412, mountains[i].pos_x + 500, mountains[i].pos_y + 412);
            fill(244, 164, 96);
            triangle(mountains[i].pos_x + 650, mountains[i].pos_y + 50, mountains[i].pos_x + 800, mountains[i].pos_y + 412, mountains[i].pos_x + 850, mountains[i].pos_y + 412); // Mountain #3
         }

    
        
// PART 4 TASK #8A: DRAWING THE CANYONS  
    
    for(var i = 0; i < canyons.length; i++)
        {
            fill(0, 206, 209);
            quad(canyons[i].pos_x + 150, canyons[i].pos_y + 412, canyons[i].pos_x + 350, canyons[i].pos_y + 412, canyons[i].pos_x + 500, canyons[i].pos_y + 576, canyons[i].pos_x + 50, canyons[i].pos_y + 576);
        }
    
    
    
// PART 4 TASK #4: DRAWING THE TREES 
    
    for(var i = 0; i < trees_x.length; i++)
        {
            fill(104, 59, 15);
            rect(trees_x[i] + 368, floorPos_y - 70, 30, 50)

            fill(173, 255, 47);
            triangle(trees_x[i] + 383, floorPos_y - 100, trees_x[i] + 438, floorPos_y - 55, trees_x[i] + 433, floorPos_y - 50);
            triangle(trees_x[i] + 383, floorPos_y - 130, trees_x[i] + 438, floorPos_y - 85, trees_x[i] + 433, floorPos_y - 80);
            triangle(trees_x[i] + 383, floorPos_y - 160, trees_x[i] + 438, floorPos_y - 115, trees_x[i] + 433, floorPos_y - 110);
            fill(0, 95, 0);
            triangle(trees_x[i] + 383, floorPos_y - 100, trees_x[i] + 333, floorPos_y - 50, trees_x[i] + 433, floorPos_y - 50);
            triangle(trees_x[i] + 383, floorPos_y - 130, trees_x[i] + 333, floorPos_y - 80, trees_x[i] + 433, floorPos_y - 80);
            triangle(trees_x[i] + 383, floorPos_y - 160, trees_x[i] + 333, floorPos_y - 110, trees_x[i] + 433, floorPos_y - 110);

            strokeWeight(20);
            stroke(255, 99, 71);
            point(trees_x[i] + 383, floorPos_y - 160);
            strokeWeight(0);
        }
    
    
    
 // PART 4 TASK #8B: DRAWING THE COLLECTABLES 
       
    for(var i = 0; i < collectables.length; i++)
        {    
            strokeWeight(1);
            stroke(128);
            fill(255);
            ellipse(collectables[i].pos_x + 149, collectables[i].pos_y + 373.5, collectables[i].size - 30, collectables[i].size - 30);
            ellipse(collectables[i].pos_x + 149, collectables[i].pos_y + 391, collectables[i].size - 30, collectables[i].size - 30);
            ellipse(collectables[i].pos_x + 158, collectables[i].pos_y + 382, collectables[i].size - 30, collectables[i].size - 30);
            ellipse(collectables[i].pos_x + 131, collectables[i].pos_y + 391, collectables[i].size - 30, collectables[i].size - 30);
            ellipse(collectables[i].pos_x + 131, collectables[i].pos_y + 373.5, collectables[i].size - 30, collectables[i].size - 30);
            ellipse(collectables[i].pos_x + 140, collectables[i].pos_y + 365, collectables[i].size - 30, collectables[i].size - 30);
            ellipse(collectables[i].pos_x + 140, collectables[i].pos_y + 400, collectables[i].size - 30, collectables[i].size - 30);
            ellipse(collectables[i].pos_x + 122, collectables[i].pos_y + 382, collectables[i].size - 30, collectables[i].size - 30);
            fill(255, 255, 0);
            ellipse(collectables[i].pos_x + 140, collectables[i].pos_y + 382, collectables[i].size - 30, collectables[i].size - 30);
            strokeWeight(0);
        }
    
    
    
pop();
    
  
    
// PART #4 TASK #2: ADDING THE GAME CHARACTER
    
// WALKING, TURNED LEFT, CODE

	if(isLeft)
	{
            fill(255, 255, 0); // Face and Body
            ellipse(gameChar_x, gameChar_y - 50, 25, 25);
            fill(0); // Eye
            ellipse(gameChar_x - 5 , gameChar_y - 55, 5, 10);
            fill(255); // Eye - white
            ellipse(gameChar_x - 5, gameChar_y - 53, 2, 3);
            fill(255, 99, 71); // Nose
            ellipse(gameChar_x - 10, gameChar_y - 50, 10, 8);
            fill(255, 255, 0); // Legs
            rect(gameChar_x + 3, gameChar_y - 40, 3, 15);
            rect(gameChar_x - 6, gameChar_y - 40, 3, 15);
            fill(0);
            ellipse(gameChar_x - 8, gameChar_y - 20, 15, 10); // Feet
            ellipse(gameChar_x + 1, gameChar_y - 20, 15, 10);
            rect(gameChar_x + 1.5, gameChar_y - 28, 6, 6); // Legs
            rect(gameChar_x - 7.5, gameChar_y - 28, 6, 6);
            fill(255, 255, 0); // Arms
            triangle(gameChar_x + 17, gameChar_y - 33, gameChar_x, gameChar_y - 50, gameChar_x + 15, gameChar_y - 30);
            triangle(gameChar_x - 17, gameChar_y - 33, gameChar_x, gameChar_y - 50, gameChar_x - 15, gameChar_y - 30);
            fill(0);
            ellipse(gameChar_x + 17, gameChar_y - 32, 8, 5); // Hands
            ellipse(gameChar_x - 17, gameChar_y - 32, 8, 5);
            ellipse(gameChar_x + 14.5, gameChar_y - 33.5, 4, 6); // Thumbs
            ellipse(gameChar_x - 14.5, gameChar_y - 33.5, 4, 6);
            fill(255, 0, 0); // Mouth
            ellipse(gameChar_x - 6, gameChar_y - 43, 10, 4);
	}
  
// WALKING, TURNED RIGHT, CODE
    
	else if(isRight)
	{
            fill(255, 255, 0); // Face and Body
            ellipse(gameChar_x, gameChar_y - 50, 25, 25);
            fill(0); // Eye
            ellipse(gameChar_x + 5, gameChar_y - 55, 5, 10);
            fill(255); // Eye - white
            ellipse(gameChar_x + 5, gameChar_y - 53, 2, 3);
            fill(255, 99, 71); // Nose
            ellipse(gameChar_x + 10, gameChar_y - 50, 10, 8);
            fill(255, 255, 0); // Legs
            rect(gameChar_x + 3, gameChar_y - 40, 3, 15);
            rect(gameChar_x - 6, gameChar_y - 40, 3, 15);
            fill(0);
            ellipse(gameChar_x + 8, gameChar_y - 20, 15, 10); // Feet
            ellipse(gameChar_x - 1, gameChar_y - 20, 15, 10);
            rect(gameChar_x + 1.5, gameChar_y - 28, 6, 6); // Legs
            rect(gameChar_x - 7.5, gameChar_y - 28, 6, 6);
            fill(255, 255, 0); // Arms
            triangle(gameChar_x + 17, gameChar_y - 33, gameChar_x, gameChar_y - 50, gameChar_x + 15, gameChar_y - 30);
            triangle(gameChar_x - 17, gameChar_y - 33, gameChar_x, gameChar_y - 50, gameChar_x - 15, gameChar_y - 30);
            fill(0);
            ellipse(gameChar_x + 17, gameChar_y - 32, 8, 5); // Hands
            ellipse(gameChar_x - 17, gameChar_y - 32, 8, 5);
            ellipse(gameChar_x + 14.5, gameChar_y - 33.5, 4, 6); // Thumbs
            ellipse(gameChar_x - 14.5, gameChar_y - 33.5, 4, 6);
            fill(255, 0, 0); // Mouth
            ellipse(gameChar_x + 6, gameChar_y - 43, 10, 4);
	}
    
// STANDING, FACING FRONTWARDS, CODE 

	else
	{       
            fill(255, 255, 0); // Face and Body
            ellipse(gameChar_x, gameChar_y - 50, 25, 25);
            fill(0); // Eyes 
            ellipse(gameChar_x + 5, gameChar_y - 55, 5, 10); 
            ellipse(gameChar_x - 5, gameChar_y - 55, 5, 10); 
            fill(255); // Eyes - white 
            ellipse(gameChar_x + 5, gameChar_y - 53, 2, 3);
            ellipse(gameChar_x - 5, gameChar_y - 53, 2, 3);
            fill(255, 99, 71); // Nose 
            ellipse(gameChar_x, gameChar_y - 50, 10, 8);
            fill(255, 255, 0); // Legs
            rect(gameChar_x + 3, gameChar_y - 40, 3, 15);
            rect(gameChar_x - 6, gameChar_y - 40, 3, 15);
            fill(255, 0, 0); // Mouth
            ellipse(gameChar_x, gameChar_y - 43, 10, 4);
            fill(0);
            ellipse(gameChar_x + 8, gameChar_y - 20, 15, 10); // Feet
            ellipse(gameChar_x - 8, gameChar_y - 20, 15, 10);
            rect(gameChar_x + 1.5, gameChar_y - 28, 6, 6); // Legs
            rect(gameChar_x - 7.5, gameChar_y - 28, 6, 6);
            fill(255, 255, 0); // Arms
            rect(gameChar_x + 10, gameChar_y - 48, 10, 3);
            rect(gameChar_x - 20, gameChar_y - 48, 10, 3);
            fill(0);
            ellipse(gameChar_x + 20, gameChar_y - 46.5, 8, 5); // Hands
            ellipse(gameChar_x - 20, gameChar_y - 46.5, 8, 5);
            ellipse(gameChar_x + 17.5, gameChar_y - 48, 4, 6); // Thumbs
            ellipse(gameChar_x - 17.5, gameChar_y - 48, 4, 6);
	}  

 
 
 //////// GAME CHARACTER LOGIC///////
    
// LOGIC TO MOVE

	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}

	}
}

function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 68)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 68)
	{
		isRight = false;
	}
}




