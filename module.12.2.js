function check(obj, str) {

    return str in obj;
  
  }
  
  
  const test = {
  
    teamName: "L.Moscow",
    country: "Russia",
    foundYear: 1922,
    owner: "Russian Railways",
    league: "Russian Premier League",
    stadium: "RZD Arena"
  }
  
  
  console.log(check(test, "foundYear"));

// В данном задании не стояло условие проверить наличие именно собственного свойства, должно выводиться true, даже если свойство есть только в прототипе. Выше исправила