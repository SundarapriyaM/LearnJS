class Employee {
    constructor(name,hourlyWage){
      this._name = name;
      this._hourlyWage = hourlyWage;
      this._hoursWorked = 0;
    }
  
    logHours(numOfHours){
      this._hoursWorked += numOfHours;
    }
  
    generatePaycheck(){
      console.log(this._hoursWorked * this._hourlyWage);
      this.hoursWorked=0;
    }
    get name(){
        return this._name;
    }
  }
  
  const newEmp = new Employee("Alex",35);
  console.log(newEmp.name);
  console.log(process.cwd());