const students = [
    { name: "Paisley Parker", gpa: 4.0 },
    { name: "Lake Herr", gpa: 3.2 },
    { name: "Promise Lansing", gpa: 3.9 },
    { name: "Friar Park", gpa: 2.8 },
    { name: "Mason Amitie", gpa: 3.49 }
  ]
  
  function getDeansList(studentList) {
    let deansList = [];
    //for(let student of studentList) {
      //console.log(studentList[i]);
      //console.log(studentList[i].gpa);
      //console.log(studentList[i].name);
    //  if(student.gpa >= 3.5){
   //     deansList.push(student.name);
    //  }
   // }
   studentList.forEach(student => {
    if(student.gpa >= 3.5){
    deansList.push(student.name);
    }
   })
    return deansList;
  }
  
  console.log(getDeansList(students))