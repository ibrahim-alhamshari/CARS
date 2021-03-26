

var UserName = prompt('Enter your name !');

var Q = prompt('How many cars do you have ?')

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