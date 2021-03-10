// Example of creating a Class in JS, giving it some simple attributes, and basic methods.



class Ninja {
    constructor(name) { // I removed "health" as one of the parameters because i kept getting a "NaN" error message as I ran showstats(). 
        this.name = name;
        this.health = 10;
        this.speed = 3;
        this.strength = 3;
    }
    drinkSake(){
        this.health += 10;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(this.name);
        console.log(this.health);
        console.log(this.speed);
        console.log(this.strength);
    }
    
}

const ninja1 = new Ninja("Hyabusa");
ninja1.drinkSake();
ninja1.showStats();



// Super Ninja Assignment

class Sensei extends Ninja{
    constructor(wisdom){
        super("Master Splinter");
        this.wisdom = wisdom;
        this.strength = 20;
        this.speed = 20;
    }

    drinkSake(){
        this.health += 100;
    }

    speakWisdom(){
        this.wisdom = console.log("'What one programmer can do in one month, two progammers can do in two months'");
    }
}

const superSensei = new Sensei("Master Splinter")
superSensei.drinkSake();
superSensei.showStats();
superSensei.speakWisdom();