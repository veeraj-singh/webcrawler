const {normalizeURL} = require('./crawl.js')
const {test,expect} = require('@jest/globals')

test('normalized url',()=>{
    const input="https://xyz.dev/path/"
    const result="xyz.dev/path"
    expect(normalizeURL(input)).toBe(result)
}
)
test('normalized url',()=>{
    const input="http://XYZ.DEV/path/"
    const result="xyz.dev/path"
    expect(normalizeURL(input)).toBe(result)
}
)
test('normalized url',()=>{
    const input="http://xyz.dev/path"
    const result="xyz.dev/path"
    expect(normalizeURL(input)).toBe(result)
}
)