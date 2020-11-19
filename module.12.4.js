function Machine(name, power) {
	this.name = name;
  this.power = power;
}

Machine.prototype.Watt = function() {
	console.log(`${this.name} using ${this.power} watts per hour`);
}

function PowerUsing(name, power, hour) {
	Machine.call(this, name, power);
	this.hour = hour;
}
PowerUsing.prototype = Object.create(Machine.prototype);
PowerUsing.prototype.constructor = PowerUsing;
PowerUsing.prototype.calcPower = function(){
	let result = this.hour * this.power;
  	console.log(`A ${this.power} ${this.name} used ${this.hour} hours per day is using totally ${result} watts`);
}


function CoffeeMachine(name, power, hour,capsule) {
	PowerUsing.call(this, name, power, hour);
  this.capsule = capsule;
}
CoffeeMachine.prototype = Object.create(PowerUsing.prototype);
CoffeeMachine.prototype.constructor = CoffeeMachine;
CoffeeMachine.prototype.makeCoffee = function() {
 
 if (this.capsule == 0) {
        return `Opps!! You forgot the coffee capsule`
      } else {
        return `Your coffee is getting ready`
      }
}

function Iron(name, power, hour,wateramount) {
	PowerUsing.call(this, name, power, hour);
  this.wateramount = wateramount;
}
Iron.prototype = Object.create(PowerUsing.prototype);
Iron.prototype.constructor = Iron;
Iron.prototype.iron = function() {
 
 if (this.wateramount < 10) {
        return `Low water level. Please, add water!`
      } else {
        return `Good Luck, I'm ready to serve you.`
      }
}


const MyCoffeeMachine = new CoffeeMachine('Coffee Maker', 1200, 3, 0);
MyCoffeeMachine.Watt();
MyCoffeeMachine.calcPower();
console.log(MyCoffeeMachine.makeCoffee());

const MyIron = new Iron('Iron', 1600, 2, 10);
MyIron.Watt();
MyIron.calcPower();
console.log(MyIron.iron());
