"use strict";
exports.__esModule = true;
var bean_1 = require("./bean");
var body = document.getElementById('b');
var table = document.createElement('table');
var tr;
var beanarray = new Array();
$(document).ready(function () {
    var fetchingAndStoringValue = function () {
        var nameandmarks = new Array();
        var txt;
        var person = prompt("Please enter the values:", "");
        if (person == null || person == "") {
            txt = "No records.";
        }
        else {
            var studentnamesandvalues = person.split(" ");
            console.log(studentnamesandvalues);
            for (var i = 0; i < studentnamesandvalues.length; i++) {
                tr = document.createElement('tr');
                nameandmarks = studentnamesandvalues[i].split(",");
                // let bean = new Bean(nameandmarks[0],nameandmarks[1],nameandmarks[2],nameandmarks[3]);
                var bean = new bean_1["default"](nameandmarks[0], nameandmarks[1], nameandmarks[2], nameandmarks[3]);
                beanarray[i] = bean;
                printingInsertedValues(bean);
                console.log(beanarray.length);
            }
        }
    };
    // foo();
    body.appendChild(table);
    table.setAttribute("border", "2");
});
// function foo() {
//
//   body.appendChild(table);
//   table.setAttribute("border", "2");
//
//
//    fetchingAndStoringValue();
// }
function displayStudents() {
    printingValues(beanarray);
}
function printingInsertedValues(bean) {
    var td = document.createElement('td');
    var text0 = document.createTextNode(bean.studentName);
    td.appendChild(text0);
    tr.appendChild(td);
    var td1 = document.createElement('td');
    var text1 = document.createTextNode(bean.studentRollNo);
    td1.appendChild(text1);
    tr.appendChild(td1);
    var td2 = document.createElement('td');
    var text2 = document.createTextNode(bean.studentStd);
    td2.appendChild(text2);
    tr.appendChild(td2);
    var td3 = document.createElement('td');
    var text3 = document.createTextNode(bean.studentSchoolName);
    td3.appendChild(text3);
    tr.appendChild(td3);
    table.appendChild(tr);
}
function printingValues(beanarray) {
    for (var _i = 0, beanarray_1 = beanarray; _i < beanarray_1.length; _i++) {
        var beanarrayvalue = beanarray_1[_i];
        // for(let i = 0; i < beanarray.length; i++) {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        var text0 = document.createTextNode(beanarrayvalue.studentName + "c");
        td.appendChild(text0);
        tr.appendChild(td);
        var td1 = document.createElement('td');
        var text1 = document.createTextNode(beanarrayvalue.studentRollNo + "b");
        td1.appendChild(text1);
        tr.appendChild(td1);
        var td2 = document.createElement('td');
        var text2 = document.createTextNode(beanarrayvalue.studentStd + "a");
        td2.appendChild(text2);
        tr.appendChild(td2);
        var td3 = document.createElement('td');
        var text3 = document.createTextNode(beanarrayvalue.studentSchoolName + "a");
        td3.appendChild(text3);
        tr.appendChild(td3);
        table.appendChild(tr);
    }
}
function searchingValues() {
    var rollNo = prompt("Please enter the rollno to be searched:", "");
    for (var i = 0; i < beanarray.length; i++) {
        if (rollNo == beanarray[i].studentRollNo) {
            tr = document.createElement('tr');
            printingInsertedValues(beanarray[i]);
        }
    }
}
function deletingValues() {
    var rollNo = prompt("Please enter the rollno to be deleted:", "");
    for (var i = 0; i < beanarray.length; i++) {
        if (rollNo == beanarray[i].studentRollNo) {
            beanarray.splice(i, 1);
        }
    }
    printingValues(beanarray);
}
