const { system24 } = require('./index');

test('system24 returns results from the 15/5 poll', () => {
    expect(system24([32.5, 16, 13, 9, 10, 2.2, 3.3, 3.5, 2.4, 2.9, 2.5], 3)).toStrictEqual([8, 4, 3, 2, 2, 0, 1, 1, 0, 0, 0]);
});

test('system24 returns results from the 13/5 poll', () => {
    expect(system24([33.3, 17.2, 12.2, 6.7, 7.8, 2.7, 3.4, 5.0], 3)).toStrictEqual([8, 4, 3, 2, 2, 0, 1, 1]);
});

test('system24 returns results from the 25/4 poll', () => {
    expect(system24([33.4, 14.7, 11.4, 8.5, 9.8, 2.4, 5.4, 2.4, 3.4, 2.2, 2.5, 1.7], 3)).toStrictEqual([8, 4, 3, 2, 2, 0, 1, 0, 1, 0, 0, 0]);
});

test('system24 returns results from the 22/4 poll', () => {
    expect(system24([33.6, 16.3, 13.5, 8.8, 9.1, 2.1, 3.1, 2.4, 3.4, 2.7, 2.2], 3)).toStrictEqual([8, 4, 3, 2, 2, 0, 1, 0, 1, 0, 0]);
});

test('system24 returns results from the final results', () => {
    expect(system24([28.31, 14.92, 12.79, 9.30, 9.25, 4.37, 3.40, 3.04], 3)).toStrictEqual([7, 4, 3, 2, 2, 1, 1, 1]);
});