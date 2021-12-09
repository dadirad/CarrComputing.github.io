// PartA

function FConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
}




function CConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFahrenheit").innerHTML=(valNum*1.8)+32;
}



// PartB

var Lucas_Weight= 195;
var Lucas_Height=71;

var John_Weight=200;
var John_Height=71;

var BMI_Lucas= (Lucas_Weight/Lucas_Height/Lucas_Height)*703;

var BMI_John= (John_Weight/John_Height/John_Height)*703;

// var lucasHigherBMI = Boolean(BMI_Lucas>BMI_John);

if(BMI_Lucas>BMI_John) {
  console.log(`Lucas' BMI (${BMI_Lucas}) is higher than John's (${BMI_John})!`);
} else {
 console.log(`John's BMI (${BMI_John}) is higher than Lucas' (${BMI_Lucas})!`);
}


// PartC

var Nets_1 = parseInt(prompt('Enter the 1st Nets Score '));
var Nets_2 = parseInt(prompt('Enter the 2nd Nets Score '));
var Nets_3 = parseInt(prompt('Enter the 3rd Nets Score '));

var Knicks_1 = parseInt(prompt('Enter the 1st Knicks Score '));
var Knicks_2 = parseInt(prompt('Enter the 2nd Knicks Score '));
var Knicks_3 = parseInt(prompt('Enter the 3rd Knicks Score '));

var Nets_Team_Avg= (Nets_1+Nets_2+Nets_3)/3;

var Knicks_Team_Avg= (Knicks_1+Knicks_2+Knicks_3)/3;

if(Nets_Team_Avg >Knicks_Team_Avg) {
document.getElementById("OutputWin").innerHTML ="Nets Win";

}else if (Nets_Team_Avg <Knicks_Team_Avg){
document.getElementById("OutputWin").innerHTML ="Knicks Win";
}
else{
document.getElementById("OutputWin").innerHTML ="Tied";
}



var Nets_Team_Total= Nets_1+Nets_2+Nets_3;
var Knicks_Team_Total=Knicks_1+Knicks_2+Knicks_3;

if(Nets_Team_Total >=100 && Knicks_Team_Total>=100 ){
document.write("\n");

}if (Nets_Team_Total>Knicks_Team_Total){
document.getElementById("OutputHigh").innerHTML ="Nets Win";

}else if (Nets_Team_Total<Knicks_Team_Total) {
document.getElementById("OutputHigh").innerHTML ="Knicks Win";
}
else{
document.getElementById("OutputHigh").innerHTML ="Tied"

}




// PartD
var Input_1 = parseInt(prompt('Please enter a number! '));

if(Input_1 =10){
  console.log(`The number matches!`);
} else if (Input_1=8) {
  console.log(`Number 8 also matches!`);
}
else {
console.log(`NOT MATCHED!`);
}
