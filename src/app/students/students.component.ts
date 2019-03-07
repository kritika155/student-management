import { Component, OnInit } from '@angular/core';
import { Student } from  '../student';
import { STUDENTS } from  '../student-list';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students=STUDENTS;
student: Student = {
    id: 0,
    name: '',
    class:0,
    subject:'',
    schoolname:''
  };
  selectedStudent: Student;
  constructor() { }

  ngOnInit() {
  }
  onSelect(student: Student): void {
    this.selectedStudent =student;
  }
  addCustomer()
  {
    if(this.student.name.length>0)
    {
      this.student.id=this.students.length+1;
      this.students.push(this.student);
    
    this.student= {
      id: 0,
      name: '',
      class:0,
      subject:'',
      schoolname:''
    };
  }
  }
  remove(i){
    this.students.splice(i,1);
  }
  deleteCustomer(num)
  {
    var studentList:Student[]=[];
    for(var i=0;i<this.students.length;i++)
    {
      if(this.students[i].id!=num)
      {
        studentList.push(this.students[i]);
      }
     
    }
    this.students=studentList;
  }
}
