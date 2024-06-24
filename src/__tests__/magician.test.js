import Magician from '../js/magician';
import { test } from '@jest/globals';
import { expect } from '@jest/globals';

test('check Magician name', () => {
  const magician = new Magician('gamer', 'Magician');
  expect(magician.name).toEqual('gamer');
})

test('check Magician error name', () => {
  expect(() => {
    new Magician('g', 'Magician');
  }).toThrow('Name is not correct!')
})

test('check Character error type', () => {
  expect(() => {
    new Magician('gamer', 'lmlkmlkm');
  }).toThrow('Type is not correct!')
})

test('check Magician error type', () => {
  expect(() => {
    new Magician('gamer', 'Swordsman');
  }).toThrow('Type is not correct!')
})

test('check magician stoned attack', () => {
  const magician = new Magician('admin123', 'Magician', 2);
  magician.attack = 100;
  magician.stoned = true;
  expect(magician.attack).toBe(85);
})

test('check magician not stoned attack', () => {
  const magician = new Magician('admin123', 'Magician', 2);
  magician.attack = 100;
  magician.stoned = false;
  expect(magician.attack).toBe(90);
})

test('check magician attack less than 0', () => {
  const magician = new Magician('admin123', 'Magician', 11);
  magician.attack = 100;
  magician.stoned = false;
  expect(magician.attack).toBe(0);
})