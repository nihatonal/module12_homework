function getTeam(obj) {

    for (let key in obj) {
  
      if (obj.hasOwnProperty(key)) {
  
        console.log(`${key}: ${obj[key]}`);
      }
    }
  }
  
  
  const person = {
  
    team: "L.Moscow"
  
  }
  const student = Object.create(person);
  
  student.ownTeam = "Zenit";
  student.age = "20";
  
  getTeam(student);