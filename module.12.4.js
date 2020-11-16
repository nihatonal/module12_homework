function Machine(name) {

    this.name = name;
  
    let turn = false;
  
    this.turnOn = function() {
      turn = true;
    };
  
    this.turnOff = function() {
      turn = false;
    };
  
  }
  
  Machine.prototype.getPower = function(power) {
    console.log(`Power is ${power} watt`);
  }
  
  function CoffeeMachine() {
  
    let waterAmount = 0;
  
    this.setWaterAmount = function(amount) {
      waterAmount = amount;
    };
  
  }
  
  
  function Fridge(power) {
   
    Machine.apply(this, arguments);
  
    let food = []; 
  
    this.addFood = function() {
      if (!this.turnOn) {
        throw new Error("Холодильник выключен");
      }
      if (food.length + arguments.length > this._power / 100) {
        throw new Error("Нельзя добавить, не хватает мощности");
      }
      for (var i = 0; i < arguments.length; i++) {
        food.push(arguments[i]);
         console.log(food)
      }
     
    };
  
    this.getFood = function() {
      return food.slice();
    };
  
  }
  
  let fridge = new Fridge(500);
  fridge.turnOn();
  fridge.addFood("apple", "cake", "cheese");
  
  
  const coffeeMachine = new Machine("coffeeMachine");
  coffeeMachine.getPower(10000);



  // I have a big problem about this topic. I just tried to understand what this is. 3 times I watched the module. 
  // But I could not understand all of them.
  