const APIkey = 'KBcDY9XFthklKrhi9VSTFuJx4';
const APIurl = 'https://ci-jshint.herokuapp.com/api';
const results_modal = new bootstrap.Modal(document.getElementById('resultsModal'));

document.getElementById('status').addEventListener('click', e => getStatus(e));

async function getStatus(e){
    const queryString = `${APIurl}?api_key=${APIkey}`;
    const response = await fetch(queryString);
    const data = await response.json();
    if (response.ok){
        console.log(data.expiry);
    }
}
