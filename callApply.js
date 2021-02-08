const normalPerson = {
    first:'kabir',
    last:'hasan',
    salary:10000,
    getFullName:function(){
        console.log(this.first,this.last);
    },
    chargeBill:function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
normalPerson.chargeBill(2000);
normalPerson.chargeBill(2000);
normalPerson.getFullName();
console.log(normalPerson.salary);
