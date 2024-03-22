const reverseString = require ("./reverseString")

test('test reversed string' , () => {
    const str = reverseString('test')
    expect(str).toBe('tset')
})