class Car {
  private brand: string;
  private model: string;

  public constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }
  public get getBrand() {
    return this.brand;
  }
  public get getModel() {
    return this.model;
  }
}
