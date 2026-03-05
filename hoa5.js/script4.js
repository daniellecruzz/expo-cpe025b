class ExtendedUser{
  constructor({name,surname,email,role}){
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.role=role;
    this.courses=[];
  }

  get fullName(){
    return this.name+" "+this.surname;
  }

  set fullName(value){
    [this.name,this.surname]=value.split(" ");
  }

  addCourse(course,level){
    this.courses.push({course,level});
  }

  editCourse(course,level){
    let c=this.courses.find(c=>c.course===course);
    if(c) c.level=level;
  }

  static match(teacher, student, courseName){
    let matches = teacher.courses.filter(tCourse =>
      student.courses.some(sCourse =>
        tCourse.course === sCourse.course &&
        tCourse.level >= sCourse.level
      )
    );

    if(courseName){
      return matches.find(m => m.course === courseName);
    }

    return matches;
  }
}

class Student extends ExtendedUser{
  constructor({name,surname,email}){
    super({name,surname,email,role:'student'});
  }
}

class Teacher extends ExtendedUser{
  constructor({name,surname,email}){
    super({name,surname,email,role:'teacher'});
  }
}

class Tutoring{
  constructor(){
    this.students=[];
    this.teachers=[];
  }

  addStudent(name,surname,email){
    this.students.push(new Student({name,surname,email}));
  }

  addTeacher(name,surname,email){
    this.teachers.push(new Teacher({name,surname,email}));
  }

  getStudentByName(name,surname){
    return this.students.find(s=>s.name===name && s.surname===surname);
  }

  getTeacherByName(name,surname){
    return this.teachers.find(t=>t.name===name && t.surname===surname);
  }

  getTeacherForStudent(student){
    return this.teachers.filter(teacher =>
      ExtendedUser.match(teacher, student).length > 0
    );
  }

  getStudentsForTeacher(teacher){
    return this.students.filter(student =>
      ExtendedUser.match(teacher, student).length > 0
    );
  }
}

/* ===== TEST ===== */

let tutoring = new Tutoring();

tutoring.addStudent('Rafael','Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly','Estes','k_estes@dayrep.com');
tutoring.addTeacher('Paula','Thompkins','PaulaThompkins@jourrapide.com');

let student = tutoring.getStudentByName('Rafael','Fife');
student.addCourse('maths',2);
student.addCourse('physics',4);

let teacher = tutoring.getTeacherByName('Paula','Thompkins');
teacher.addCourse('maths',4);

let students = tutoring.getTeacherForStudent(student);
let teachers = tutoring.getStudentsForTeacher(teacher);

console.log(students[0]);
console.log(teachers[0]);