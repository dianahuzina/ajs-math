import MathCharacter from './mathCharacter';

export default class Daemon extends MathCharacter {
  constructor(name, type, distance) {
    super(name, type, distance);
    if (type === 'Daemon') {
      this.type = type;
    } else {
      throw new Error('Type is not correct!');
    }
  }
}