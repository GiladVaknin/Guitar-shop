class ClassicGuitar {
  constructor(manufactureYear, brand, price, numberOfString, used) {
    this.manufactureYear = manufactureYear;
    this.brand = brand;
    this.price = price;
    this.numberOfString = numberOfString;
    this.used = used;
  }

  play() {
    this.price *= 0.9;
    return "🎶🎶🎶";
  }

  getManufactureYear() {
    return this.manufactureYear;
  }

  getBrand() {
    return this.brand;
  }

  getPrice() {
    return this.price;
  }

  setPrice(newPrice) {
    this.price = newPrice;
  }
}
