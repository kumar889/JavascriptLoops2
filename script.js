var number = prompt('Enter a number :'); // this statement asks for a number
var i=1;

do{
    document.write(number); // this statement prints the taken number and loops it the same number of times
    i++;
}
while(i<=number);

document.write('<br>'); // this statement breaks a line

var word = prompt('Type any text :'); // this statement asks for a text
i=1;

do {
    document.write(word + '<br>' ); //this statement asks for the text and loops it the same number of time as above
    i++;
}

while(i<=number);