var names = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var dateOfBirth = document.getElementById('dateOfBirth');

var btn = document.querySelector('.btn');
var records = document.querySelector('.records');
var checkbox = document.getElementById('checkbox');
var table = document.getElementById('record-list');

const year = new Date().getFullYear();
function onSubmit() {
    localStorage.setItem('Name', names.value);
    localStorage.setItem('Email', email.value);
    localStorage.setItem('Password', password.value);
    localStorage.setItem('DOB', dateOfBirth.value);
    localStorage.setItem('AcceptTerms', checkbox.checked);

    var birthYear = new Date(dateOfBirth.value).getFullYear();

    if(names.value=="" || email.value == "" || password.value=="" || dateOfBirth.value=="" ){
        alert("Given Columns should not be empty!");
        return;
    }

    if ((year - birthYear) >= 16 && (year - birthYear) <= 55) {
        var row = table.insertRow(2);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = localStorage.getItem("Name");
        cell2.innerHTML = localStorage.getItem("Email");
        cell3.innerHTML = localStorage.getItem("Password");
        cell4.innerHTML = localStorage.getItem("DOB");
        cell5.innerHTML = localStorage.getItem("AcceptTerms");


    } else {
        alert("Your age is not accepted!");
    }
}
