class Machine {
    constructor(power, hour) {
      this.power = power;
      this.hour = hour;
    }
    getWatt() {
      return this.power * this.hour +` watt`;
    }
  
  }
  
  class CoffeeMachine extends Machine {
    constructor(wateramount, power, hour) {
      super(power, hour);
      this.wateramount = wateramount;
    }
  
    getCoffee() {
      if (this.wateramount < 10) {
        return `Low water level. Please, add water!`
      } else {
        return `Your coffee is getting ready`
      }
    }
  }
  
  class iron extends Machine {
    constructor(temperature, power, hour) {
      super(power, hour);
      this.temperature = temperature;
    }
  
    addWater() {
      if (this.temperature > 250) {
        return `Temperature is too high! Add water, please`
      } else {
        return `You can iron your clothes. Good Luck!`
      }
    }
  }
  
  const myCoffeeMachine = new CoffeeMachine(40, 900, 3);
  const myIron = new iron(270, 1100, 3);
  console.log(myCoffeeMachine.getCoffee());
  console.log(myCoffeeMachine.getWatt());
  console.log(myIron.addWater());
  console.log(myIron.getWatt());
  
  