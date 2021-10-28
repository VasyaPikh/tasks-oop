function student(firstName, lastName, direction){
        this.firstName = firstName;
        this.lastName = lastName;
        this.direction = direction;
        this.showFullName = function() {
           return this.firstName + " " + this.lastName;
        	  }
}
let stud1 = new student("Ivan", "Petrenko", "web");
let stud2 = new student("Sergiy", "Koval", "python");
