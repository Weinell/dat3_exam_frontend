import React from 'react';

const URL = "http://localhost:8080";
//const URL = "https://weinell.dk/eksamen";

function MatchesFacade() {


    const populate = () => {
        const options = makeOptions("GET"); //True add's the token
        return fetch(URL + "/api/info/populate", options);
    }

    // Matches

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

    // Locations

    const getPlayers = () => {
        const options = makeOptions("GET"); //True add's the token
        return fetch(URL + "/api/player/all", options);
    }

    const createPlayer = (player) => {
        const options = makeOptions("POST", player, true); //True add's the token
        fetch(URL + "/api/player/create", options).then(r => r.json());
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
        createMatch,
        createPlayer
    }
}

const matchesFacade = MatchesFacade();
export default matchesFacade;