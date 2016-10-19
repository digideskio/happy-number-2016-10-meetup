import happy from './happy'

test('1 should be happy', () => expect(happy(1)).toBeTruthy())

test('10 should be happy', () => expect(happy(10)).toBeTruthy())

test('100 should be happy', () => expect(happy(100)).toBeTruthy())

test('19 should be happy', () => expect(happy(19)).toBeTruthy())

test('20 should be unhappy', () => expect(happy(20)).toBeFalsy())

test('4 should be unhappy', () => expect(happy(4)).toBeFalsy())

test('490 should be happy', () => expect(happy(490)).toBeTruthy())

test('492 should be unhappy', () => expect(happy(492)).toBeFalsy())