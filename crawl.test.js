const {normalizeURL,getURLsFromHTML} = require('./crawl.js')
const {test,expect} = require('@jest/globals')

test('normalized https url',()=>{
    const input="https://xyz.dev/path/"
    const result="xyz.dev/path"
    expect(normalizeURL(input)).toBe(result)
}
)
test('normalized capital url',()=>{
    const input="http://XYZ.DEV/path/"
    const result="xyz.dev/path"
    expect(normalizeURL(input)).toBe(result)
}
)
test('normalized http url',()=>{
    const input="http://xyz.dev/path"
    const result="xyz.dev/path"
    expect(normalizeURL(input)).toBe(result)
}
)

test('list of all urls from html-page',()=>{
    const baseurl='https://xyz.dev'
    const input=
        `<!DOCTYPE html>
    <html lang="en">
    <body>
        <a href="https://xyz.dev/path"> url for next page</a>
        <a href="https://abc.dev/path"> url for next page</a>
    </body>
    </html>`
    const result=["https://xyz.dev/path","https://abc.dev/path"]
    expect(getURLsFromHTML(input,baseurl)).toEqual(result)
}
)

test('list of all relative urls to absolute urls from html-page',()=>{
    const baseurl='https://xyz.dev'
    const input=
        `<!DOCTYPE html>
    <html lang="en">
    <body>
        <a href="/path"> url for next page</a>
        <a href="/blog"> url for next page</a>
    </body>
    </html>`
    const result=["https://xyz.dev/path","https://xyz.dev/blog"]
    expect(getURLsFromHTML(input,baseurl)).toEqual(result)
}
)