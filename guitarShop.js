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
let classicGuitar1 = new ClassicGuitar(manufactureYear, brand, price);

function ClassicGuitar(manufactureYear, brand, price) {
  this.manufactureYear = manufactureYear;
  this.brand = brand;
  this.price = price;
  this.numberOfString = 6;
  this.used = false;
}
