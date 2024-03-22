const chunkArray = require('./chunk')

test('', () => {
    const chunk = chunkArray([1,2,3,4], 2)
    expect(chunk).toEqual([[1,2],[3,4]])
})