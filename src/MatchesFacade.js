import React from 'react';

const URL = "http://localhost:8080";
//const URL = "https://weinell.dk/eksamen";

function MatchesFacade() {

    const getMatches = () => {
        const options = makeOptions("GET"); //True add's the token
        return fetch(URL + "/api/match/all", options);
    }

    const getMatchByID = (matchID) => {
        const options = makeOptions("GET"); //True add's the token
        return fetch(URL + "/api/match/"+matchID, options).then(r => r.json());;
    }

    const createMatch = (match) => {
        const options = makeOptions("POST", match, true); //True add's the token
        fetch(URL + "/api/match/create", options).then(r => r.json());
    }

    const makeOptions = (method, body,addToken) => {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        if (addToken) {
            opts.headers["x-access-token"] = localStorage.getItem("jwtToken");
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }
    return {
        getMatches,
        getMatchByID,
        createMatch
    }
}

const facade = MatchesFacade();
export default facade;