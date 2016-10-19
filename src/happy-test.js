import happy from './happy'

test('1 should be happy', () => expect(happy(1)).toBeTruthy())

test('10 should be happy', () => expect(happy(10)).toBeTruthy())

test('100 should be happy', () => expect(happy(100)).toBeTruthy())

test('19 should be happy', () => expect(happy(100)).toBeTruthy())

test('20 should be happy', () => expect(happy(100)).toBeTruthy())

test('4 should be happy', () => expect(happy(100)).toBeTruthy())