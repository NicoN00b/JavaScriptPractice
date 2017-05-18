var myName = prompt("What is your name?");
alert("Hello " + myName + ".");

var saySomething = function(whatToSay) {alert(whatToSay);};
var subtract= function(number1, number2) {return number1 - number2;};
result= subtract(10,5);
var outputText= "The difference is " + result + ".";
saySomething(outputText);

var saySomething = function(whatToSay) {alert(whatToSay);};
var multiply = function (number1, number2)
	{return number1 * number2;
  };
 result= multiply(15,5);
 var outputText= "The product is " + result + ".";
 saySomething(outputText);

var saySomething = function(whatToSay) {alert(whatToSay);};
var multiply= function(number1, number2, number3) {return number1 * number2 * number3;
};
result= multiply(10,5,2);
var outputText= "The product is " + result + ".";
saySomething(outputText);

var saySomething = function(whatToSay) {alert(whatToSay);};
var divide= function(number1, number2) {return number1 / number2;};
result=divide(50, 2);
outputText= "The quotient is " + result + ".";
saySomething(outputText);

var age = prompt("What is your age?");
var name = prompt("What is your name?");
var food = prompt("What is your favorite food?");
var saySomething = function(whatToSay) {alert(whatToSay);};
var outputText = "My name is " + name + ", I am " + age + "years old and I love " + food + ".";
saySomething(outputText);

var add = function(number1, number2) {return number1 + number2;};
var number1 = parseInt(prompt("Enter a number"));
var number2 = parseInt(prompt("Enter another number"));
alert(add(number1, number2));
