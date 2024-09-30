// // var x = 10;
// // var y = 20;
// // if (x > y){
// //     document.write(x);
// //     console.log(x);
// // }
// // else {
// //     document.write(y);
// //     console.log(y);
// // }

// var a = [10,11,12];
// a.push(13); /* A-L */
// a.pop(); /* D-L */
// a.shift(); /* D-L */
// a.unshift(15); /* A-L */
// console.log(a);

// a.splice(2,0,18); /* (index,no of ddeletions,insertion values) */
// var k = a.slice(0,2); /*prining starting to end-1*/
// console.log(k)
// a.map(ele => {
//     console.log(ele);
// })


// function isPrime(k) {
//     var c=0;
//     for(var i=2;i<=Math.sqrt(k);i++){
//         if(k%i==0){
//             c+=1;
//         }
//     }
//     if(c>=1){
//         return false;
//     }
//     else {
//         return true;
//     }
// }
// var s=0;
// x = prompt("Enter first Num: ");
// y = prompt("Enter Second Num: ");
// for(var i=x;i<=y;i++){
//     let m = isPrime(i);
//     if(m){
//         s+=i;
//     }
// }
// console.log(s);


// var x = new Date();
// document.writeln(x.getFullYear());
// document.writeln(x.getMonth());
// document.writeln(x.getDate());
// document.writeln(x.getHours());
// document.writeln(x.getMinutes());
// document.writeln(x.getSeconds());
// document.writeln(x.getMilliseconds());
// document.writeln(x.getDate()+"-"+(x.getMonth()+1)+"-"+x.getFullYear())

// var i = Math.random()
// console.log(i);


// var a = parseInt(prompt("Enter first side:"));
// var b = parseInt(prompt("Enter second side:"));
// var c = parseInt(prompt("Enter third side:"));
// var s = (a+b+c)/2;
// var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
// console.log(area);



// var a = parseInt(prompt("Enter Marks: "));
// if(90 < a || a >= 100){
//     console.log("Grade A")
// }
// else if(80 < a || a >= 90){
//     console.log("Grade B")
// }
// else if(70 < a || a >= 80){
//     console.log("Grade C")
// }
// else if(60 < a || a >=50){
//     console.log("Grade D")
// }
// else {
//     console.log("Fail");
// }

// var a = parseInt(prompt("Enter Marks: "))
// switch(true){
//     case 90 < a || a >= 100 :
//         console.log("Grade A")
//         break
//     case (80 < a || a >= 90):
//         console.log("Grade B")
//         break
//     case(70 < a || a >= 80):
//         console.log("Grade C")
//         break
//     case(60 < a || a >=50):
//         console.log("Grade D")
//         break
//     default:
//         console.log("Fail");
// }

// var a = parseInt(prompt("Enter first num:"));
// var b = parseInt(prompt("Enter second num:"));
// var c = parseInt(prompt("Enter third num:"));
// var x = (-b+(Math.sqrt(Math.abs(Math.pow(b,2)-4*a*c))))/2*a;
// var y = -b-((Math.sqrt(Math.abs(Math.pow(b,2)-4*a*c)))/2*a);
// console.log(x);
// console.log(y);



//Promise Function: 
// var careTaker = new Promise(function(Success,Reject){
//     var x = 0;
//     if(x > 10) {
//         Success("This is completed");
//     }
//     else {
//         Reject("This is Eroor");
//     }
// })
// careTaker.then(function(value){
//     console.log(value);
// },function(error){
//     console.log(error);
// })
// console.log(careTaker);


async function fun() {
    console.log("First");
    setTimeout(function func(){
        console.log("Hello");
    },1000);
    console.log("Secpnd");
    console.log("Third");
}
fun();