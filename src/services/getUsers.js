export default async function getUsers(company, from = '', to = '', name, ddd) {
    const URL = `https://api.flashvolve.io/api:GBD2ICmZ/usuarios?empresa=${company}&de=${from}&ate=${to}&nome=${name}&ddd=${ddd}`;

    const request = await fetch(URL, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const response = await request.json();
    return response;
}
