const redirect = (path:string) => {    
    if(process.browser){
        document.location.pathname = path
    }
}
export default redirect