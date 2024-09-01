// Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
// Use at least one array.
// Use at least two classes.
// Your menu should have the options to create, view, and delete elements


//
class Candy{
    constructor(name ,flavor,size) {
        this.name = name;
        this.flavor = flavor;
        this.size = size;
    }
}


//
class Menu {
    constructor(){
        this.Candy = []; // the array
    }

    addCandy(){
        let candyName = prompt("Enter the name of the candy:");
        let candyFlavor = prompt("Enter the flavor of the candy:");
        let candySize = prompt("Enter the size of the candy:");
        this.Candy.push(new Candy(candyName,candyFlavor,candySize));
    }

    viewCandy(){
        let displayCandies = "";
        for( let i=0; i <this.Candy.length; i++){

            displayCandies = `${this.Candy[i].name} ${this.Candy[i].flavor} ${this.Candy[i].size}`
        }
        alert(displayCandies);

        alert (`All of the candies: ${displayCandies}`);
    }
}

// 
let candy1 = new Candy ("Hersheys", "Cookies 'N' Cream", "Fullsize");
console.log(candy1);

let menu = new Menu();
menu.addCandy();

menu.addCandy


 
