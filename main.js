const {CrawlPage}= require('./crawl.js')
async function main() {
    if(process.argv.length>3){
        console.log("Error : Provide a single url please")
        process.exit(1)
    }
    if(process.argv.length<3){
        console.log("Error : Give url please")
        process.exit(1)
    }
    else{
        console.log(`Crawler is starting at BASEURL : ${process.argv[2]}`)
    }
    const baseurl=process.argv[2]
    const pages=await CrawlPage(baseurl,baseurl,{})
    for(const page of Object.entries(pages)){
        console.log(page)
    }
}
main()