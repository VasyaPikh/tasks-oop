class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    showFullName (){
        console.log (`${this.surname} ${this.name}`);
    }
}


class Student extends Person {
    constructor (name, surname, year) {
        super(name, surname)
        this.year = year;
    }
    showFullName(middLeNAme){
        return `${this.surname} ${this.name} ${this.middLeNAme}`;
    }
    showCourse (){
        return new Data().getFullYear() - this.year; 
    }
}

const stud1 = new Student('Petro', 'Petrenko', '2017');
console.log(stud1.showFullName("Petrovych"));
console.log("Current course:" + stud1.showCourse());