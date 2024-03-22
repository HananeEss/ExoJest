const isanagram = require('./anagram.js')

test('test si 2 strings sont des anagrames', () => {
    const anagram = isanagram('hello', 'elloh')
    expect(anagram).toBe(true)
})