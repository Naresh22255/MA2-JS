
//Javascript MA2

//1. Create a function that displays prototypal inheritance.

	
	function bike() {
    	this.brand = "Suzuki"
	}

	bike.prototype.model = function() {
    	console.log("This is a classic bike from "+ this.brand + " who is the actual brand owner");
	};
    
	var maruthi = new bike();
	maruthi.model();


	//2. Create an array of numbers from 1 – 10; slice the 5th number in the array.

	var numbers = [1,2,3,4,5,6,7,8,9,10];

	console.log(numbers.slice(5,6));



	//3. Delete the last number in the array that you created above.

	console.log(numbers.pop());

	console.log(numbers);




	//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: “Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.”

    
    function frukt123() {
    	var fruit = document.getElementById("frukt").innerHTML; 
    	var nyfruit = fruit.replace(/strawberry/g, "banana").replace(/Strawberries/g, "Bananas").replace(/strawberries/g, "bananas");
    	document.getElementById("frukt").innerHTML = nyfruit;
    	document.write(nyfruit);
    }

    
	//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

	
	var foot = ["Atlético de Madrid ", "Tottenham Hotspur ", "AS Roma ", "Leicester City"];

	document.getElementById("car123").innerHTML = foot;

	function car(){
		foot.splice(4,0, "Audi ", "BMW ", "Toyota ", "Honda");
		document.getElementById("car123").innerHTML = foot;
		console.log(foot);
	}

	

	//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

    
	/* var _ = require("lodash");

    var people = [
    	{name: "Naresh "},
    	{name: "Sam"},
    	{name: "Samiksha "}
    	];

    var name = _.filter(people, function(name123){
    	return people.name == "Sam";
    }) 

    console.log(name);

    */

    var names = ["Naresh ", "Sam", "Samiksha"];

    var name = names.filter(){
    	return names == "Sam";
    }

    console.log(name);

    
    /*function align(names) {
    	return names == "Sam";
    }

    console.log(names.filter(align));

    */




	//7. Create a simple function that logs the date.

	function ndag(){
		var dag = new Date();
		console.log(dag);
	}
	ndag();



