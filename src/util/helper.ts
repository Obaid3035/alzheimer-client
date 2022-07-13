export function setToken(token: any){
    localStorage.setItem('token', token)
}

export function getToken(){
    localStorage.getItem('token')
}