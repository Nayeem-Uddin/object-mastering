const normalPerson = {
    first:'balam',
    last:'khan',
    salary:500,
    getFullName:function(){
        console.log(this.first,this.last);
    },
    chargeBill:function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }  
}


// const normalPersonDetails = normalPerson.getFullName();
// console.log(normalPersonDetails);
// const normalPersonSalary = normalPerson.chargeBill(200);
// console.log(normalPersonSalary);


const heroPerson = {
    first:'asif',
    last:'akbor',
    salary:1000
}


const frinedlyPerson = {
    first:'kalam',
    last:'khan',
    salary:2000
}

// const heroPersonSalary = normalPerson.chargeBill.bind(heroPerson);
// heroPersonSalary(200);
// heroPersonSalary(300);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

const frinedlyPersonSalary = normalPerson.chargeBill.bind(frinedlyPerson);
frinedlyPersonSalary(100);
frinedlyPersonSalary(100);
console.log(frinedlyPerson.salary);
