class Machine {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }

  watt() {
    console.log(`${this.name} using ${this.power} watts per hour`);
  }
}

class PowerUsing extends Machine {
  constructor(name, power, hour) {
    super(name, power);
    this.hour = hour;
  }

  calcPower() {
    let result = this.hour * this.power;
    console.log(`A ${this.power} ${this.name} used ${this.hour} hours per day is using totally ${result} watts`);
  }
}

class CoffeeMachine extends PowerUsing {

  makeCoffee(capsule) {

    if (capsule == 0) {
      return `Opps!! You forgot the coffee capsule`
    } else {
      return `Your coffee is getting ready`
    }
  }
}

class Iron extends PowerUsing {

  iron(wateramount) {
    if (wateramount < 10) {
      return `Low water level. Please, add water!`
    } else {
      return `Hello! I'm ready to serve you.`
    }
  }
}

const MyCoffeeMachine = new CoffeeMachine('Coffee Maker', 1200, 3);
MyCoffeeMachine.watt();
MyCoffeeMachine.calcPower();
console.log(MyCoffeeMachine.makeCoffee(0));

const MyIron = new Iron('Iron', 1600, 2);
MyIron.watt();
MyIron.calcPower();
console.log(MyIron.iron(10));