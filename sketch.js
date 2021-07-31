var marks = [40,35,45,38,40];
var weight=[50,65,70,81];
function setup() 
{
  createCanvas(400,400);
  score_average();
  weight_avg();
}

function draw() 
{
background(51);

}

function score_average(){
  var sum =marks[0] + marks[1] + marks[2] + marks[3]+marks[4];
  var avg =sum/marks.length;
  console.log(avg);
}

function weight_avg(){
  var sum=weight[0]+weight[1] + weight[2] + weight[3];
 var avg=sum/weight.length;
 console.log(avg);
}