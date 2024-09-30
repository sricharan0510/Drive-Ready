var a = [
    {
        name:"Name",
        rollno:"Roll No.",
        college:"College",
    },
    { name : "Sricharan",
        rollno : "23",
        college : 'ACOE',
    },
    { name : "Charan",
        rollno : "50",
        college : 'ACET',
    },
    { name : "Praveen",
        rollno : "20",
        college : 'AEC',
    },
]
let firstClick = true;
document.querySelector('button').addEventListener('click', function(){
    if(firstClick){
        fun();
        firstClick = false;
    }
    else {
        addData();
    }
});
function fun(){
    var tbl = document.createElement('table');
    var keys = ['name', 'rollno', 'college'];
    for(let i=0;i<a.length;i++){
        var tr = document.createElement('tr');
        tr.classList.add('table-row');
        for(let j=0;j<keys.length;j++){
            var td = document.createElement('td');
            td.classList.add('table-cell');
            var tdtext = document.createTextNode(a[i][keys[j]]);
            td.appendChild(tdtext);
            tr.appendChild(td);
        }
        tbl.appendChild(tr);
    }
    document.body.appendChild(tbl);
      tbl.classList.add('tbl');

    for (let k = 1; k < a.length; k++) {
        var actionsCell = document.createElement('td');
        actionsCell.classList.add('table-cell');
    
        actionsCell.innerHTML = `
            <button class="but but1" onclick="editData(this)">Edit</button>
            <button class="but but2" onclick="deleteData(this)">Delete</button>`;
        var currentRow = document.querySelector('.tbl').rows[k];
        currentRow.appendChild(actionsCell);
    }

}


function addData() {
    var inputsDivision = document.createElement('div');
    inputsDivision.classList.add('inputsdiv');

    var inputdiv1 = document.createElement('div');
    inputdiv1.classList.add('inputdiv');
    var namefield = document.createElement('label');
    namefield.innerHTML = "Name: ";
    var nameInput = document.createElement('input');
    nameInput.classList.add('nameInput');
    inputdiv1.appendChild(namefield);
    inputdiv1.appendChild(nameInput);

    var inputdiv2 = document.createElement('div');
    inputdiv2.classList.add('inputdiv');
    var rollnofield = document.createElement('label');
    rollnofield.innerHTML = "Roll no: ";
    var rollnoInput = document.createElement('input');
    rollnoInput.classList.add('rollnoInput');
    inputdiv2.appendChild(rollnofield);
    inputdiv2.appendChild(rollnoInput);

    var inputdiv3 = document.createElement('div');
    inputdiv3.classList.add('inputdiv');
    var Collegefield = document.createElement('label');
    Collegefield.innerHTML = "College: ";
    var CollegeInput = document.createElement('input');
    CollegeInput.classList.add('CollegeInput');
    inputdiv3.appendChild(Collegefield);
    inputdiv3.appendChild(CollegeInput);

    inputsDivision.appendChild(inputdiv1);
    inputsDivision.appendChild(inputdiv2);
    inputsDivision.appendChild(inputdiv3);

    var addButton = document.createElement('button');
    addButton.innerHTML = "Add Data";
    addButton.classList.add('styled-button');
    addButton.onclick = function() {
        var name = document.querySelector('.nameInput').value;
        var rollno = document.querySelector('.rollnoInput').value;
        var College = document.querySelector('.CollegeInput').value;

        var tbl = document.querySelector('.tbl');
        var newRow = tbl.insertRow();
        var nameCell = newRow.insertCell(0);
        nameCell.classList.add('table-cell');
        nameCell.innerHTML = name;

        var rollnoCell = newRow.insertCell(1);
        rollnoCell.classList.add('table-cell');
        rollnoCell.innerHTML = rollno;

        var CollegeCell = newRow.insertCell(2);
        CollegeCell.classList.add('table-cell');
        CollegeCell.innerHTML = College;

        var actionsCell = newRow.insertCell(3);
        actionsCell.classList.add('table-cell');
        actionsCell.innerHTML =
            '<button class="but but1" onclick="editData(this)">Edit</button>' +" "+
            '<button class="but but2" onclick="deleteData(this)">Delete</button>';
        
        document.querySelector('.nameInput').value = '';
        document.querySelector('.rollnoInput').value = '';
        document.querySelector('.CollegeInput').value = '';

        document.querySelector('.inputsdiv').style = 'display:none';

    };

    inputsDivision.appendChild(addButton);
    document.body.appendChild(inputsDivision);
}

function editData(button) {

    let row = button.parentNode.parentNode;

    let nameCell = row.cells[0];
    let rstyleollnoCell = row.cells[1];
    let CollegeCell = row.cells[2];

    let nameInput = prompt("Enter the updated Name:", nameCell.innerHTML);
    let rollnoInput = prompt("Enter the updated RollNo.:", rollnoCell.innerHTML);
    let CollegeInput = prompt("Enter the updated :", CollegeCell.innerHTML);

    nameCell.innerHTML = nameInput;
    rollnoCell.innerHTML = rollnoInput;
    CollegeCell.innerHTML = CollegeInput;
}

function deleteData(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}