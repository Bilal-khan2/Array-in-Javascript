// Q1
var array=[];
// Q2
var array= new Array();
// Q3
document.write("<hr/>Question3<br/><br/>");
var array= ["Bilal","Saim","Huzefa","Anas"];
document.write(array+"<br/>");
// Q4
document.write("<hr/>Question4<br/><br/>");
var array =[1,2,3,4,5,6,7,8,9]
document.write(array+"<br/>");
//Q5
document.write("<hr/>Question5<br/><br/>");
var array =[true,false,true,true,false];
document.write(array+"<br/>");
// Q6
document.write("<hr/>Question6<br/><br/>");
var array =[true,0,5,"Karachi",false];
document.write(array+"<br/>");
// Q7
document.write("<hr/>Question7<br/><br/>");
var array =["Ufone","Zong","Jazz","Telenor"];
document.write(array+"<br/>");
//Q8
document.write("<hr/>Question8<br/><br/>");
var array =["SSC", "HSC", "BCS", "BS", "BCOM", "MS","M. Phil", "PhD"];
document.write("<ol><li>"+array[0]+"</li><li>"+array[1]+"</li><li>"+array[2]+"</li><li>"+array[3]+"</li><li>"+array[4]+"</li><li>"+array[5]+"</li><li>"+array[6]+"</li><li>"+array[7]+"</li><ol/>");
// Q9
document.write("<hr/>Question9<br/><br/>");
var array=[];
array[0]="Avengers:Age Of Ultron";
array[1]="Spectre";
array[2]="Jurassic World";
array[3]="Inside Out";
document.write("<ol><li>"+array[0]+"</li><li>"+array[1]+"</li><li>"+array[2]+"</li><li>"+array[3]+"</li><li>"+array[4]+"</li><ol/>");
// Q10
document.write("<hr/>Question10<br/><br/>");
var array =["Corvette","Audi E-tron","Mercedes S-class","Kali Vigo"];
document.write(array+"<br/>");
document.write("First index of array "+0+"<br/>");
document.write(array[0]+"<br/>");
document.write(array[3]+"<br/>");
document.write("Last index of array "+3+"<br/>");
// Q11
document.write("<hr/>Question11<br/><br/>");
var nam=["Bilal","Saim","Huzefa"];
var num=[401,398,450];
var t1= num[0]/500*100;
var t2= num[1]/500*100;
var t3= num[2]/500*100;
document.write("Name of Student1: - "+nam[0]+" ,Percentage of Student1: -"+t1+"<br/>");
document.write("Name of Student2: - "+nam[1]+" ,Percentage of Student2: -"+t2+"<br/>");
document.write("Name of Student3: - "+nam[2]+" ,Percentage of Student3: -"+t3+"<br/>");
// Q12
document.write("<hr/>Question12<br/><br/>");
var color=["red","green","Blue"];
document.write(color+"<br/><br/>");
 var start = prompt("what color would you like to add on starting : ");
 color.unshift(start);
 var col = prompt("what color would you like to add on end : ");
color.push(col);
document.write(color+"<br/>");
color.unshift("Purple","lightblue")
document.write(color+"<br/>");
color.shift(color[0]);
document.write(color+"<br/>");
var del = prompt("what color would you like to delete  : ");
color.pop(del);
document.write(color+"<br/>");
// Q13
document.write("<hr/>Question13<br/><br/>");
var numbers =[320,230,480,120];
document.write("Before Sorting: -"+numbers+"<br/>");
numbers.sort();
document.write("After Sorting: -"+numbers+"<br/>");
// Q14
document.write("<hr/>Question14<br/><br/>");
var numbers =["strawberry","apple","orange","banana"];
document.write("Before Sorting: -"+numbers+"<br/>");
numbers.sort();
document.write("After Sorting: -"+numbers+"<br/>");
// Q15
document.write("<hr/>Question15<br/><br/>");
var cities =["Karachi", "Islamabad", "Quetta", "Lahore", "Peshawer"];
var selected_cities=[];
selected_cities.push(cities[0],cities[1],cities[3]);
document.write("cities: -"+cities+"<br/>");
document.write("Selected cities: -"+selected_cities+"<br/>");
// Q16
document.write("<hr/>Question16<br/><br/>");
var pet =["This", " is", " My", " cat"];
document.write(pet+"<br/>");
document.write(pet[0]+pet[1]+pet[2]+pet[3]+"<br/>");
// Q17
document.write("<hr/>Question17<br/><br/>");
var pet =["Keyboard", " mouse", "Printer"];
document.write("out: -<br/>"+pet[0]+"<br/>"+"out: -<br/>"+pet[1]+"<br/>"+"out: -<br/>"+pet[2]+"<br/>");
// Q18
document.write("<hr/>Question18<br/><br/>");
var pet =["Keyboard", " mouse", "Printer"];
document.write("out: -<br/>"+pet[2]+"<br/>"+"out: -<br/>"+pet[1]+"<br/>"+"out: -<br/>"+pet[0]+"<br/>");
//Q19
document.write("<hr/>Question19<br/><br/>");
var array =["Apple","Samsung","Mi","motorolla"];
document.write("<select><option>"+array[0]+"</option><option>"+array[1]+"</option><option>"+array[2]+"</option><option>"+array[3]+"</option></select>"+"<br/>");
// Q20
document.write("<hr/>Questio20<br/><br/>");
var array =[["Apple","Samsung","Mi","motorolla"],
 ["iphone","S22","Poco X3","Razor"]]; 
 //Q21
 document.write("<hr/>Questio21<br/><br/>");
 var array =[[0,1,2,3],
  [1,0,1,2],[2,1,0,1]];



