

var UserName = prompt('Enter your name !');

var Q = prompt('How many cars do you have ?')

document.write("Your name is:");

document.write('<h4>' + UserName + '</h4>');

if (Q >= 2 ) {
   alert("In our company there are many modern cars wich work by the electric engine , Welcome to our compny ");
}else if( Q == '1' ){
    alert("In our company you can find alot of vehicles ; ancient and modern , Welcome to our compny ");
}else {
    alert("Welcome to our compny ");
}
