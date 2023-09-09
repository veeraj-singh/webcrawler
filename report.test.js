const {SortPages} = require('./report.js')
const {test,expect} = require('@jest/globals')

test('Sorted',()=>{
    const input={
        '/path':6,
        'https:xyz.dev':54
    }
    const result=[
        ['https:xyz.dev',54],
        ['/path',6]
    ]
    expect(SortPages(input)).toEqual(result)
}
)