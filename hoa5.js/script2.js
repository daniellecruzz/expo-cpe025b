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

let student1 = new Student({name:'Rafael',surname:'Fife',email:'rfife@rhyta.com'});
let student2 = new Student({name:'Kelly',surname:'Estes',email:'k_estes@dayrep.com'});
let teacher1 = new Teacher({name:'Paula',surname:'Thompkins',email:'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths',2);
teacher1.addCourse('biology',3);
teacher1.editCourse('chemistry',4);

console.log(`${student1.fullName}: ${student1.courses.length} courses`);
console.log(`${teacher1.fullName}: ${teacher1.courses.length} courses`);

student1.fullName = 'Rafael Fifer';
console.log(`${student1.fullName}: ${student1.courses.length} courses`);