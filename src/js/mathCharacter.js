import Character from './character';

export default class MathCharacter extends Character {
  constructor(name, type, distance) {
    super(name, type);
    this.distance = distance;
    this._stoned = false; 
    this._attack = 0;
  }
  get stoned() {
    return this._stoned;
  }
  set stoned(value) {
    this._stoned = value;
  }
  get attack() {
    let attack = this._attack - this._attack * (this.distance - 1) / 10;
    if (this._stoned) attack = attack - Math.log2(this.distance) * 5;
    if (attack > 0) attack = Math.round(attack);
    else attack = 0;
    return attack;
  }
  set attack(value) {
    this._attack = value;
  }
}