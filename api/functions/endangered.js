const fetch = require('node-fetch')

const API_TOKEN = "9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee"

exports.handler = async function() {
  const data = await getEndangeredSpecies()
  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET",
    },
  }
}

async function getEndangeredSpecies() {
  const species = await fetchAllSpecies();

  const endangeredSpeciesIds = species.result
    .filter(({ category }) => category === "EN")
    .map(({ taxonid }) => taxonid);

  return Promise.all(endangeredSpeciesIds.map(fetchSpeciesById));
}

function fetchAllSpecies() {
  return fetchJson(
    `https://apiv3.iucnredlist.org/api/v3/country/getspecies/gb?token=${API_TOKEN}`
  );
}

async function fetchSpeciesById(id) {
  const data = await fetchJson(
    `https://apiv3.iucnredlist.org/api/v3/species/id/${id}?token=${API_TOKEN}`
  );
  return data.result[0];
}

async function fetchJson(url, options = {}) {
  const res = await fetch(url, options);
  return res.json();
}
