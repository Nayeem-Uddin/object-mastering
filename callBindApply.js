const person1 = {
    first:'sagir',
    last:'khan',
    salary:2000,
    getFullName:function(){
        return this.first+this.last;
    },
    chargeBill:function(amount,tax){
        //console.log(this.amount);
        this.salary = this.salary - amount - tax;
        return this.salary;
    }
}

const person2 = {
    name:'murgi',
    last:'khan',
    salary:3000
}

const person3 = {
    name:'kurbi',
    last:'khan',
    salary:4000
}

// person1.chargeBill(100);
// console.log(person1.salary);


//call method
person1.chargeBill.call(person2,200,100);
console.log(person2.salary);
console.log(person1.salary);

//apply method
person1.chargeBill.apply(person3,[200,200]);
console.log(person3.salary);





