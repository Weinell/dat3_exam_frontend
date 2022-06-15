import {Link} from "react-router-dom";
import jwt from 'jwt-decode'


const URL = "http://localhost:8080";
//const URL = "https://weinell.dk/eksamen";

function handleHttpErrors(res) {
    if (!res.ok) {
        alert(res.status +" " + res.message);
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}


function apiFacade() {
    

    const login = (user, password) => {
        const options = makeOptions("POST", true,{username: user, password: password });
        return fetch(URL + "/api/login", options)
            .then(handleHttpErrors)
            .then(res => {
                setToken(res.token)
                setUserType(res.userType)
                setUserID(res.userID)

            })
    }

    const setUserType = (userType) => {
        localStorage.setItem("userType",userType)
    }

    const setUserID = (userID) => {
        localStorage.setItem("userID",userID)
    }

    const getRoles = () => {
		return jwt(getToken()).roles;
	}

	const getName = () => {
		return jwt(getToken()).username;
	}

    const fetchData = () => {
        const options = makeOptions("GET",true); //True add's the token
        if (getRoles() == "user") {
            setUserType("user");
            return fetch(URL + "/api/info/user", options).then(handleHttpErrors);
        } else if (getRoles() == "admin") {
            setUserType("admin");
            return fetch(URL + "/api/info/admin", options).then(handleHttpErrors);
        }
        
    }
    const makeOptions= (method,addToken,body) =>{
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        if (addToken && loggedIn()) {
            opts.headers["x-access-token"] = getToken();
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }
    const setToken = (token) => {
        localStorage.setItem('jwtToken', token)
    }
    const getToken = () => {
        return localStorage.getItem('jwtToken')
    }
    const getUserType = () => {
        return localStorage.getItem('userType')
    }

    const getUserID = () => {
        return localStorage.getItem('userID')
    }

    const loggedIn = () => {
        const loggedIn = getToken() != null;
        return loggedIn;
    }

    const logout = () => {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("userType");
        localStorage.removeItem("userID");

    }

    return {
        makeOptions,
        setToken,
        getToken,
        loggedIn,
        login,
        logout,
        fetchData,
        setUserType,
        setUserID,
        getUserType,
        getUserID

    }
}
const facade = apiFacade();
export default facade;