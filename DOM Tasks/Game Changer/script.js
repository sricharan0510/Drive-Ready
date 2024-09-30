var User_Input = prompt("Enter Any Number(1-6) :");
var Table = document.createElement('table');
Table.classList.add('my-table');
var input_value = parseInt(User_Input);

for(var i=1;i<=input_value;i++){
    var tableRow = document.createElement('tr');
    tableRow.classList.add('my-tableRow');
    for(var j=1;j<=input_value;j++){
        var tableData =document.createElement('td');
        tableData.classList.add('my-tableData');
        tableRow.appendChild(tableData);
    }
    Table.appendChild(tableRow);
}
var index = Table.rows[0].cells[0];
document.body.appendChild(Table);

var image = document.createElement('img');
image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUK1LaBaummJfuW6GIM_kt3R9egIlpqVpEKw&s");
image.classList.add('my-image');
index.appendChild(image)

var buttonsDivision = document.createElement('div');
buttonsDivision.classList.add('buttonsDivision');

var upButton = document.createElement('button');
upButton.classList.add('Button');
upButton.innerHTML = "Up";
buttonsDivision.appendChild(upButton);

var downButton = document.createElement('button');
downButton.classList.add('Button');
downButton.innerHTML = "Down";
buttonsDivision.appendChild(downButton);

var leftButton = document.createElement('button');
leftButton.classList.add('Button');
leftButton.innerHTML = "Left";
buttonsDivision.appendChild(leftButton);

var rightButton = document.createElement('button');
rightButton.classList.add('Button');
rightButton.innerHTML = "Right";
buttonsDivision.appendChild(rightButton);

document.body.appendChild(buttonsDivision);
 
let x = 0;
let y = 0;
var score=0;

upButton.onclick = function(){
    if(x==0){
        x=input_value-1;
        if(x == m && y == n){
            print(score + 1);
            score+=1;
        }
    }
    else {
        x-=1;
        if(x == m && y == n){
            print(score + 1);
            score+=1;
        }
    }
    index = Table.rows[x].cells[y];
    index.appendChild(image);
}
downButton.onclick = function() {
    if(x==input_value-1) {
        x=0;
        if(x == m && y == n){
            print(score + 1);
            score+=1;
        }
    }
    else {
        x+=1;
        if(x == m && y == n){
            print(score + 1);
            score+=1;
        }
    }
    index = Table.rows[x].cells[y];
    index.appendChild(image);
}
rightButton.onclick = function() {   
    if(y==input_value-1) {
        y=0;
        if(x == m && y == n){
            print(score + 1);
            score+=1;
        }
    }
    else {
        y+=1;
        if(x == m && y == n){
            print(score + 1);
            score+=1;
        }
    }  
    index = Table.rows[x].cells[y];
    index.appendChild(image);
}
leftButton.onclick = function() {
    if(y==0){
        y=input_value-1;
        if(x == m && y == n){
            print(score + 1);
            score+=1;
        }
    }
    else {
        y-=1;
        if(x == m && y == n){
            print(score + 1);
            score+=1;
        }
    }
    index = Table.rows[x].cells[y];
    index.appendChild(image);
}

var m, n;
var targetCell;

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
function updateTargetCell() {
    if (targetCell) {
        targetCell.classList.remove('targetCell');
    }
    m = Math.floor(randomNumber(0, input_value));
    n = Math.floor(randomNumber(0, input_value));
    targetCell = Table.rows[m].cells[n];
    targetCell.classList.add('targetCell');
}
function print(score) {
    s = score;
    scoreCard.innerHTML = `Score : ${s}`;

    updateTargetCell();
}

var scoreCard = document.createElement('div');
scoreCard.classList.add('scoreCard');
document.body.appendChild(scoreCard);
print(0);
