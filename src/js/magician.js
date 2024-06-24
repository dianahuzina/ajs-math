import MathCharacter from './mathCharacter';

export default class Magician extends MathCharacter {
  constructor(name, type, distance) {
    super(name, type, distance);
    if (type === 'Magician') {
      this.type = type;
    } else {
      throw new Error('Type is not correct!');
    }
  }
}