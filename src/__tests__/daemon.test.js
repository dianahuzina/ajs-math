import Daemon from '../js/daemon';
import { test } from '@jest/globals';
import { expect } from '@jest/globals';

test('check Daemon name', () => {
  const daemon = new Daemon('gamer', 'Daemon');
  expect(daemon.name).toEqual('gamer');
})

test('check Daemon error name', () => {
  expect(() => {
    new Daemon('g', 'Daemon');
  }).toThrow('Name is not correct!')
})

test('check Character error type', () => {
  expect(() => {
    new Daemon('gamer', 'lmlkmlkm');
  }).toThrow('Type is not correct!')
})

test('check Daemon error type', () => {
  expect(() => {
    new Daemon('gamer', 'Swordsman');
  }).toThrow('Type is not correct!')
})

test('check daemon stoned attack', () => {
  const daemon = new Daemon('admin123', 'Daemon', 2);
  daemon.attack = 100;
  daemon.stoned = true;
  expect(daemon.attack).toBe(85);
})

test('check daemon not stoned attack', () => {
  const daemon = new Daemon('admin123', 'Daemon', 2);
  daemon.attack = 100;
  daemon.stoned = false;
  expect(daemon.attack).toBe(90);
})

test('check daemon attack less than 0', () => {
  const daemon = new Daemon('admin123', 'Daemon', 11);
  daemon.attack = 100;
  daemon.stoned = false;
  expect(daemon.attack).toBe(0);
})