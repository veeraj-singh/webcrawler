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

module.exports={normalizeURL,getURLsFromHTML}