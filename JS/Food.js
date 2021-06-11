var database;
var FoodStock;
var LastFed;
var MilkImage;
class Food{
    constructor(){
        database = firebase.database();

        MilkImage = loadImage("Sprites/Milk.png");

        FoodStock = database.ref('Food');
        FoodStock.on("value",this.readFoodStock);

        LastFed = database.ref('LastFed');
	    LastFed.on("value",this.readLastFed);
    }
    readFoodStock(data){
        FoodStock = data.val();
    }
    readLastFed(data){
        LastFed = data.val();
    }
    getLastFed(){
        return LastFed;
    }
    getFoodStock(){
        return FoodStock;
    }
    updateFoodStock(){
        FoodStock = FoodStock+1;
        database.ref('/').update({
            'Food': FoodStock
        })
    }
    deductFood(){
        FoodStock = FoodStock-1;
        LastFed = hour();
        database.ref('/').update({
            'LastFed': LastFed
        })
        database.ref('/').update({
            'Food': FoodStock
        })
    }
    display(){
        imageMode(CENTER);
        var x = 0;
        var y = 100;
        for(var i = 0;i < FoodStock;i++){
            x = x+60;
            image(MilkImage,x,y,60,60);
            if(x >= 600){
                y = y+60;
                x = 0;
            }
        }
    }
}