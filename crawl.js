const {JSDOM}= require('jsdom')
function normalizeURL(url){
    if(url.slice(-1)==='/'){
        url=url.slice(0,-1)
    }
    const urlobj=new URL(url)
    const norm_url=`${urlobj.hostname}${urlobj.pathname}`
    return norm_url
}

function getURLsFromHTML(htmlbody,baseurl){
    const {document}=new JSDOM(htmlbody).window
    const list=document.querySelectorAll('a')
    let urls=[]
    list.forEach((item)=>{
        let url=item.href
        if(url[0]==='/'){
            url=`${baseurl}${url}`
        }
        urls.push(url)
    })
    return urls
}

async function CrawlPage(baseurl,currenturl,pages){
    const baseurl_obj=new URL(baseurl)
    const currenturl_obj=new URL(currenturl)
    if(baseurl_obj.hostname!==currenturl_obj.hostname){
        return pages
    }

    const norm_url=normalizeURL(currenturl)
    if(pages[norm_url]>0){
        pages[norm_url]++
        return pages
    }
    baseurl!==currenturl?pages[norm_url]=1:pages[norm_url]=0
    console.log(`Crawling currently on page : ${currenturl}`)
    try{
        const response= await fetch(currenturl)
        if(response.status>399){
            console.log(`Failed to fetch the URL with status code: ${response.status}`)
            return pages
        }
        if(!response.headers.get('content-type').includes('text/html')){
            console.log(`Failed to fetch URL with content type: ${response.headers.get('content-type')}`)
            return pages
        }
    const htmlbody= await response.text()
    const urls=getURLsFromHTML(htmlbody,baseurl)
    for(const url of urls){
        pages=await CrawlPage(baseurl,url,pages)
    }

    }catch(err){
        console.log(`Error :${err.message} on page:${baseurl}`)
    }
    return pages
    
}

module.exports={normalizeURL,getURLsFromHTML,CrawlPage}