

/*
if (Q >= 2 ) {
   alert("In our company there are many modern cars wich work by the electric engine , Welcome to our compny ");
  document.write('<img src="https://th.bing.com/th/id/OIP.HU_m38GjUAXd72PJklQ5IAHaEc?w=301&h=181&c=7&o=5&dpr=1.25&pid=1.7" alt="Hybrid car"></img>');
   document.write('<img src="https://th.bing.com/th/id/OIP.I_Q35jUaJINRSCz_h_13iwHaEK?pid=ImgDet&rs=1" alt=" Hybrid car "></img>');
}else if( Q == '1' ){
    alert("In our company you can find alot of vehicles ; ancient and modern , Welcome to our compny ");
    document.write('<img src="https://opensooqui2.os-cdn.com/carsspecs/236x155/129_1511_2353_main_1532524190.jpg"></img>');

    document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/2006-2007_Kia_Sedona_LX.jpg/220px-2006-2007_Kia_Sedona_LX.jpg"></img>');
}else {
    alert("Welcome to our compny ");
    document.write('<img src="https://th.bing.com/th/id/OIP.HU_m38GjUAXd72PJklQ5IAHaEc?w=301&h=181&c=7&o=5&dpr=1.25&pid=1.7" alt="Hybrid car"></img>');
    document.write('<img src="https://opensooqui2.os-cdn.com/carsspecs/236x155/129_1511_2353_main_1532524190.jpg"></img>');
}

document.write('<h4>' + UserName + '</h4>');
*/
var pass = '60';
function gradePer(){
var yourgrade = prompt('Enter your degree in the exam !');
if (yourgrade>= pass){
  console.log(yourgrade)
  alert('Congrajulation, you are passed the exam .')
}else if (yourgrade< pass){
  console.log(yourgrade)
 alert('Unfortuanetly, you did not pass the exam .')
}else {
  alert('welcome to the website')
}}
gradePer();

/*
var UserName = prompt('Enter your name !');

var carNum = prompt('How many cars do you have ?', '1, 2, 3 ');

 while (carNum != '1' && carNum != '2' && carNum != '3' ){
 carNum = prompt ('please re-enter the number of cars that do you have ! ');
 }


var carType = prompt (' what type of cars do you preffer :' , 'Diesel, Gasoline');


 while( carType !=='Diesel' && carType !=='Gasoline'){
 
    carType = prompt (' please retry again either Diesel or Gasoline ! ');
 }
var cars = 1 ;
  cars = prompt ('How many cars do you want to show !');


    
for (var i=1 ; i<=cars ;i++) {
    console.log (carType);
if  (carType == 'Diesel')
{
     document.write('<img src="https://spirotours.com/wp-content/uploads/2019/08/2020-BMW-Pickup-Truck-m3for-sale-how-much-is-inside.jpg"></img>');
 }else {
    document.write('<img src= "https://namastecar.com/wp-content/uploads/2020/06/2021-BMW-7-Series-new-straight-six-cylinder-diesel-17.jpg"></img>');
} }
*/