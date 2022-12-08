export default async function getCustomizations(company) {
    const URL = `https://api.flashvolve.io/api:GBD2ICmZ/personalizacao_nome_artes?empresa=${company}`;
    const request = await fetch(URL, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    const response = await request.json();

    return response;
}