export const AUTH_TOKEN="auth";

export const getToken = ()=>{
    console.log(localStorage.getItem(AUTH_TOKEN))
    return localStorage.getItem(AUTH_TOKEN)
}

export const setToken = (token)=>{
    return localStorage.setItem(AUTH_TOKEN,token)
}

export const deleteToken = (token)=>{
    return localStorage.removeItem(AUTH_TOKEN,token)
}