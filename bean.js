"use strict";
exports.__esModule = true;
var Bean = /** @class */ (function () {
    function Bean(studentName, studentRollNo, studentStd, studentSchoolName) {
        this.studentName = studentName;
        this.studentRollNo = studentRollNo;
        this.studentStd = studentStd;
        this.studentSchoolName = studentSchoolName;
    }
    Object.defineProperty(Bean.prototype, "returnStudentName", {
        get: function () {
            return this.studentName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bean.prototype, "setStudentName", {
        set: function (studentName) {
            this.studentName = studentName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bean.prototype, "returnStudentRollNo", {
        get: function () {
            return this.studentRollNo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bean.prototype, "setStudentRollNo", {
        set: function (studentRollNo) {
            this.studentRollNo = studentRollNo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bean.prototype, "returnStudentStd", {
        get: function () {
            return this.studentStd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bean.prototype, "setStudentStd", {
        set: function (studentStd) {
            this.studentStd = studentStd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bean.prototype, "returnStudentSchoolName", {
        get: function () {
            return this.studentSchoolName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bean.prototype, "setStudentSchoolName", {
        set: function (studentSchoolName) {
            this.studentSchoolName = studentSchoolName;
        },
        enumerable: true,
        configurable: true
    });
    return Bean;
}());
exports["default"] = Bean;
