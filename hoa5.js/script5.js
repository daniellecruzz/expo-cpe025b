class ExtendedUser{
  constructor({name,surname,email,role}){
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.role=role;
    this.courses=[];
    this.messages=[];
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

  sendMessage(from,message){
    this.messages.push({
      from: from.email,
      message,
      date: new Date()
    });
  }

  showMessagesHistory(){
    this.messages.forEach(m=>{
      console.log(`${m.from} -> ${this.email}: ${m.message}`);
    });
  }

  static match(teacher, student){
    return teacher.courses.filter(t =>
      student.courses.some(s =>
        t.course===s.course && t.level>=s.level
      )
    );
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
}

class ExtendedTutoring extends Tutoring{
  constructor(){
    super();
  }

  sendMessages(from,to,message){
    if(from && to.length){
      for(let user of to){
        user.sendMessage(from,message);
      }
    }
  }
}

/* ===== TEST ===== */

let tutoring = new ExtendedTutoring();

tutoring.addStudent('Rafael','Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly','Estes','k_estes@dayrep.com');
tutoring.addTeacher('Paula','Thompkins','PaulaThompkins@jourrapide.com');

let to = [];
to.push(tutoring.getStudentByName('Rafael','Fife'));
to.push(tutoring.getStudentByName('Kelly','Estes'));

tutoring.sendMessages(
  tutoring.getTeacherByName('Paula','Thompkins'),
  to,
  'test message'
);

for(let user of to){
  user.showMessagesHistory();
}