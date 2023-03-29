function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

Student.prototype.sayname = function () {
  console.log(this.name);
};

const studentTwo = new Student("jack", "A+");
studentTwo.sayname();
