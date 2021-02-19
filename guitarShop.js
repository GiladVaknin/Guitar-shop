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

  this.play = function () {
    this.price *= 0.9;
    return "🎶🎶🎶";
  };

  this.getManufactureYear = function () {
    return this.manufactureYear;
  };

  this.getBrand = function () {
    return this.brand;
  };

  this.getPrice = function () {
    return this.price;
  };

  this.setPrice = function (newPrice) {
    this.price = newPrice;
  };

  function detectSound(sound) {
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
  }
}

function ElectricGuitar(manufactureYear, brand, price, longNeck) {
  ClassicGuitar.call(this, manufactureYear, brand, price);
  this.longNeck = longNeck;
  this.play = function () {
    return "🎸🎸🎸";
  };
}

const EG = new ElectricGuitar("2000", "yamaha", 900, true);
// let classicGuitar1 = new ClassicGuitar(manufactureYear, brand, price);

function BassGuitar(manufactureYear, brand, price) {
  ClassicGuitar.call(this, manufactureYear, brand, price);
  this.play = function () {
    return "🔊🔊🔊";
  };
  this.numberOfString = 4;
  this.plySolo = function () {
    let emojisArr = ["💥", "🤘", "🎵", "📢", "💢", "🕺"];
    let;
  };
}
function getProtos({ __proto__ }) {
  if (!(__proto__ === null)) {
    return [__proto__.constructor.name, ...getProtos(__proto__)];
  } else {
    return [];
  }
}
