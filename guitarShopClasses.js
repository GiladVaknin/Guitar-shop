class ClassicGuitarClass {
  constructor(manufactureYear, brand, price, numberOfString, used) {
    this._manufactureYear = manufactureYear;
    this._brand = brand;
    this._price = price;
    this._numberOfString = numberOfString;
    this._used = used;
  }

  constructor(manufactureYear, brand, price) {
    this._manufactureYear = manufactureYear;
    this._brand = brand;
    this._price = price;
    this._numberOfString = 6;
    this._used = false;
  }

  //Methods
  play() {
    if (!used) {
      this.price *= 0.9;
    }
    return "🎶🎶🎶";
  }

  get ManufactureYear() {
    return `Year: ${this._manufactureYear}`;
  }

  set manufactureYear(newYear) {
    if (newYear > 0) this._manufactureYear = newYear;
    else throw new Error("Year can not be negative");
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  static detectSound(sound) {
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

class ElectricGuitar extends ClassicGuitarClass {
  constructor(manufactureYear, brand, price, longNeck) {
    super(manufactureYear, brand, price);
    this.longNeck = longNeck;
  }

  play() {
    super.play();
    return "🎸🎸🎸";
  }
}

class BassGuitar extends ClassicGuitarClass {
  constructor(manufactureYear, brand, price) {
    super(manufactureYear, brand, price);
    this._numberOfString = 4;
  }

  play() {
    super.play();
    return "🔊🔊🔊";
  }

  plySolo() {
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
  }
}
