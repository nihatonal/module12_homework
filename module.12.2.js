function check(obj, str) {

    return obj.hasOwnProperty(str);
  
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