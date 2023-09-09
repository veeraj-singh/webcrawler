function main() {
    if(process.argv.length>3){
        console.log("Error : Provide a single url please")
        process.exit(1)
    }
    if(process.argv.length<3){
        console.log("Error : Give url please")
        process.exit(1)
    }
    else{
        console.log(`Crawler is satrting at BASEURL : ${process.argv[2]}`)
    }
}
main()