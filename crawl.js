function normalizeURL(url){
    if(url.slice(-1)==='/'){
        url=url.slice(0,-1)
    }
    const urlobj=new URL(url)
    const norm_url=`${urlobj.hostname}${urlobj.pathname}`
    return norm_url
}

module.exports={normalizeURL}