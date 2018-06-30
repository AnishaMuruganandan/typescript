class Bean {
  studentRollNo: number;
  studentSchoolName: string;
  studentStd: number;
  studentName: string;


constructor(studentName : string, studentRollNo : number, studentStd : number, studentSchoolName : string) {
      this.studentName = studentName;
      this.studentRollNo = studentRollNo;
      this.studentStd = studentStd;
      this.studentSchoolName = studentSchoolName;
    }
    get returnStudentName():string {
      return this.studentName;
    }
    set setStudentName(studentName : string) {
      this.studentName = studentName;
    }
    get returnStudentRollNo():number {
      return this.studentRollNo;
    }
    set setStudentRollNo(studentRollNo : number) {
      this.studentRollNo = studentRollNo;
    }
    get returnStudentStd():number {
      return this.studentStd;
    }
    set setStudentStd(studentStd : number) {
      this.studentStd = studentStd;
    }
    get returnStudentSchoolName():string {
      return this.studentSchoolName;
    }
    set setStudentSchoolName(studentSchoolName : string) {
      this.studentSchoolName = studentSchoolName;
    }


}
export default Bean;
