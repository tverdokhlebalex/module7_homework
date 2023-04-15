class ElectricalAppliance {
  constructor(name, manufacturer) {
    this.name = name;
    this.manufacturer = manufacturer;
  }

  getInfo() {
    return (
      "The " + this.name + " is manufactured by " + this.manufacturer + "."
    );
  }

  getPowerConsumption(power) {
    return "Power Consumption of the " + this.name + " is " + power + " W.";
  }

  getTern(on_off) {
    return "The " + this.name + " is switched " + on_off + ".";
  }
}

class Lighting extends ElectricalAppliance {
  constructor(name, manufacturer, typeofLamp) {
    super(name, manufacturer);
    this.typeofLamp = typeofLamp;
  }
}

class PC extends ElectricalAppliance {
  constructor(name, manufacturer, display) {
    super(name, manufacturer);
    this.display = display;
  }

  getTern(on_off) {
    return "This " + this.name + " is switched " + on_off + ".";
  }

  getInfo() {
    return (
      "The " +
      this.name +
      " is manufactured by " +
      this.manufacturer +
      ". Display is " +
      this.display +
      " inches."
    );
  }
}

const iron = new ElectricalAppliance("iron", "Tefal");

console.log(iron.getInfo()); // "The iron is manufactured by Tefal."
console.log(iron.getPowerConsumption(650)); // "Power Consumption of the iron is 650 W."
console.log(iron.getTern("on")); // "The iron is switched on."

const lamp = new Lighting("lamp", "IKEA", "LED");

console.log(lamp.getInfo()); // "The lamp is manufactured by IKEA."
console.log(lamp.getPowerConsumption(20)); // "Power Consumption of the lamp is 20 W."
console.log(lamp.getTern("off")); // "The lamp is switched off."

const computer = new PC("computer", "Toshiba", 17);

console.log(computer.getInfo()); // "The computer is manufactured by Toshiba. Display is 17 inches."
console.log(computer.getPowerConsumption(380)); // "Power Consumption of the computer is 380 W."
console.log(computer.getTern("on")); // "This computer is switched on."
