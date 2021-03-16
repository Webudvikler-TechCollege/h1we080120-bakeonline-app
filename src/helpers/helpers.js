/**
 * Funktion til at fetche API's med
 * @param {string} url API Endpoint
 * @param {string} method HTTP Request Method
 * @param {string} token Access Token String
 * @param {object} formdata Form Data Object
 */
export async function fetch2api(url, method = 'GET', token = null, formdata = null) {
    let options = {
        method: method,
    }   

    if(token) {
        options.headers = {
            'Authorization' : `Baerer ${token}`
        }
    }

    if(formdata) {
        options.body = formdata
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    }
    catch(error) {
        console.error(error);
    }
}

/**
 * Funktion til at shuffle og slice et array med
 * @param {array} array 
 * @param {number} slices 
 */
export const shuffleArray = (array, slices = 0) => {    
    array.sort(() => 0.5 - Math.random())
    return (slices > 0) ? 
                array.slice(0,slices) : array;
}

/**
 * Konverterer timestamp til lokal dato format
 * @param {number} stamp 
 */
export const date2local = (stamp, caps = false) => {

    function addZero(i) {
        return (i < 10) ? "0" + i : i;
    }

    const days = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
    const months = [null, "Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"];
    const d = new Date(stamp*1000);
    
    const localday = !caps ? days[d.getDay()].toLowerCase() : days[d.getDay()];
    const localmonth = !caps ? months[d.getMonth()].toLowerCase() : months[d.getMonth()];
    const hours = addZero(d.getHours());
    const minutes = addZero(d.getMinutes());
    const format = `${localday} d. ${d.getDay()}. ${localmonth} kl. ${hours}:${minutes}`;
    return format;
}