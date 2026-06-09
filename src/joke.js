// joke.js holds all logic for fetching a joke from the icanhazdadjoke.com API

import request from "request-promise";

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "User-Agent": "Writing JavaScript action GitHub Skills exercise.",
    },
    json: true,
};

// getJoke makes a GET request to the icanhazdadjoke.com API and returns a
// random dad joke.
async function getJoke() {
    const res = await request(options);
    return res.joke;
}

export default getJoke;