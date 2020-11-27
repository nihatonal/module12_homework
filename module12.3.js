function create() {

    let newObj = Object.create(null);
  
    return newObj;
  }
  
  console.log(create());

// По сути всё сделано верно, но в данном случае передача аргумента в функцию не имеет смысла, т.к. он никак не используется. Исправила на более оптимальный вариант