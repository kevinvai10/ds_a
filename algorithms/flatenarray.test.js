const flattenarray = require('./flattenarray')

test('flattens [1,2,[3,4,[5,6]]] into [1,2,3,4,5,6]', () => {
    expect(flattenarray([1,2,[3,4,[5,6]]])).toStrictEqual([1,2,3,4,5,6])
})