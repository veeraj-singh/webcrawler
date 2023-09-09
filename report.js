function SortPages(pages){
    const arr=Object.entries(pages)
    arr.sort((a,b)=>{return b[1]-a[1]})
    return arr
}
function PrintReport(pages){
    const report_arr=SortPages(pages)
    console.log(`#################### REPORT STARTED ######################`)
    for(const item of report_arr){
        console.log(`Found ${item[1]} internal links to ${item[0]} `)
    }
    console.log(`#################### REPORT ENDED ######################`)

}
module.exports={SortPages,PrintReport}