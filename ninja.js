// Example of creating a Class in JS, giving it some simple attributes, and basic methods.



class Ninja {
    constructor(name, health) { // I removed "health" as one of the parameters because i kept getting a "NaN" error message as I ran showstats(). 
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