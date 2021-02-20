// class ClassicGuitar {
//   constructor(manufactureYear, brand, price, numberOfString, used) {
//     this.manufactureYear = manufactureYear;
//     this.brand = brand;
//     this.price = price;
//     this.numberOfString = numberOfString;
//     this.used = used;
//   }

//   constructor(manufactureYear, brand, price) {
//     this.manufactureYear = manufactureYear;
//     this.brand = brand;
//     this.price = price;
//     this.numberOfString = 6;
//     this.used = false;
//   }

//   //Methods
//   play() {
//     this.price *= 0.9;
//     return "🎶🎶🎶";
//   }

//   getManufactureYear() {
//     return this.manufactureYear;
//   }

//   getBrand() {
//     return this.brand;
//   }

//   getPrice() {
//     return this.price;
//   }

//   setPrice(newPrice) {
//     this.price = newPrice;
//   }

//   static detectSound(sound) {
//     switch (sound) {
//       case "🎶":
//         return "ClassicGuitar";
//       case "🎸":
//         return "ElectricGuitar";
//       case "🔊":
//         return "BassGuitar";
//       default:
//         return "Not a guitar";
//     }
//   }
// }

// Creating an object using the ClassicGuitar constructor
function ClassicGuitar(manufactureYear, brand, price) {
  this.manufactureYear = manufactureYear;
  this.brand = brand;
  this.price = price;
  this.numberOfString = 6;
  this.used = false;
}

ClassicGuitar.prototype.play = function () {
  this.price *= 0.9;
  return "🎶🎶🎶";
};

ClassicGuitar.prototype.getManufactureYear = function () {
  return this.manufactureYear;
};

ClassicGuitar.prototype.getBrand = function () {
  return this.brand;
};

ClassicGuitar.prototype.getPrice = function () {
  return this.price;
};

ClassicGuitar.prototype.setPrice = function (newPrice) {
  this.price = newPrice;
};

ClassicGuitar.prototype.detectSound = function (sound) {
  switch (sound) {
    case "🎶":
      return "ClassicGuitar";
    case "🎸":
      return "ElectricGuitar";
    case "🔊":
      return "BassGuitar";
    default:
      return "Not a guitar";
  }
};

function ElectricGuitar(manufactureYear, brand, price, longNeck) {
  ClassicGuitar.call(this, manufactureYear, brand, price);
  this.longNeck = longNeck;
}

ElectricGuitar.prototype = Object.create(ClassicGuitar.prototype);
ElectricGuitar.prototype.constructor = ElectricGuitar;

ElectricGuitar.prototype.play = function () {
  return "🎸🎸🎸";
};

function BassGuitar(manufactureYear, brand, price) {
  ClassicGuitar.call(this, manufactureYear, brand, price);
  this.numberOfString = 4;
}

BassGuitar.prototype = Object.create(ClassicGuitar.prototype);
BassGuitar.prototype.constructor = BassGuitar;

BassGuitar.prototype.play = function () {
  return "🔊🔊🔊";
};

BassGuitar.prototype.plySolo = function () {
  let emojiesArr = ["💥", "🤘", "🎵", "📢", "💢", "🕺"];
  let usedEmojies = [];
  let solo = "";
  for (let i = 0; i < 6; i++) {
    let rnd = Math.floor(Math.random() * 6);
    if (usedEmojies.includes(rnd)) {
      rnd = Math.floor(Math.random() * 6);
    } else {
      usedEmojies.push(rnd);
      solo += emojiesArr[rnd];
    }
  }
  return solo;
};

const getProtos = ({ __proto__: prt }) =>
  !(prt === null) ? [prt.constructor.name, ...getProtos(prt)] : [];

let bg = new BassGuitar("2000", "yamaha", 900, true);
const eg = new ElectricGuitar("2000", "yamaha", 900, true);
let cg1 = new ClassicGuitar("2331", "korg", 250);

console.log(bg);
console.log(eg);
console.log(cg1);

console.log(getProtos(eg));
