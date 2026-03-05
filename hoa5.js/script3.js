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

/* -------- TEST -------- */

let student1 = new Student({name:'Rafael',surname:'Fife',email:'rfife@rhyta.com'});
let student2 = new Student({name:'Kelly',surname:'Estes',email:'k_estes@dayrep.com'});
let teacher1 = new Teacher({name:'Paula',surname:'Thompkins',email:'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths',2);
student1.addCourse('physics',4);

teacher1.addCourse('maths',4);

let match = ExtendedUser.match(teacher1, student1);
console.log(match); // [{course:'maths', level:2}]

teacher1.editCourse('maths',1);
match = ExtendedUser.match(teacher1, student1);
console.log(match); // []

teacher1.addCourse('physics',4);
match = ExtendedUser.match(teacher1, student1, 'physics');
console.log(match); 