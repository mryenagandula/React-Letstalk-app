export const AUTH_TOKEN="auth";

export const getToken = ()=>{
    return localStorage.getItem(AUTH_TOKEN)
}

export const setToken = (token)=>{
    return localStorage.setItem(AUTH_TOKEN,JSON.stringify(token));
}

export const deleteToken = (token)=>{
    return localStorage.removeItem(AUTH_TOKEN,token)
}