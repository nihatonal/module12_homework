function create(newObj) {

    newObj = Object.create(null);
  
    return newObj;
  }
  
  console.log(create("test"));