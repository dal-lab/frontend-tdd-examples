export default class Integer {
  constructor(value) {
    this.value = value;
  }

  plus(other) {
    return new Integer(this.value + other.value);
  }
}
