var Dog , HungryDogImage , ContentDogImage;
var FoodObject;
var FeedDogButton , AddFoodStockButton;
function preload(){
	ContentDogImage = loadImage("Sprites/ContentDog.png");
	HungryDogImage = loadImage("Sprites/HungryDog.png");
}
function setup(){
	createCanvas(1000,500);

	Dog = createSprite(750,250,200,200);
	Dog.addImage(HungryDogImage);
	Dog.scale = 0.25;

	FeedDogButton = createButton('Feed Dog');
	FeedDogButton.position(525,25);
	FeedDogButton.mousePressed(() => {
		var FoodStock = FoodObject.getFoodStock();
		if(FoodStock > 0){
			FoodObject.deductFood();
			Dog.addImage(ContentDogImage);
		}
	})

	AddFoodStockButton = createButton('Add Food');
	AddFoodStockButton.position(600,25);
	AddFoodStockButton.mousePressed(() => {
		FoodObject.updateFoodStock();
	})

	FoodObject = new Food();
}
function draw(){
	background(46,139,87);
	drawSprites();
	noStroke();
	textSize(25);
	fill("BLACK");
	drawLastFed();
	FoodObject.display();
}
function drawLastFed(){
	var LastFed = FoodObject.getLastFed();
	if(LastFed < 12 && LastFed > 0){
		text("Last Feed: "+LastFed+"AM",320,40);
	}
	if(LastFed > 12 && LastFed < 24){
		text("Last Feed: "+(LastFed-12)+"PM",320,40);
	}
	if(LastFed == 0){
		text("Last Feed: 12 AM",320,40);
	}
	if(LastFed == 12){
		text("Last Feed: 12 PM",320,40);
	}
}