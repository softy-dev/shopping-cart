const getData = async function getDataFromAPI(department) {
  const url = `https://apidojo-forever21-v1.p.rapidapi.com/products/search?query=dress&rows=60&start=0&brand=${department}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'f1c11f6b27msh2fd06bb94eda8f9p11c483jsn14066c3eb029',
      'x-rapidapi-host': 'apidojo-forever21-v1.p.rapidapi.com',
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  return result.response.docs;
};

export default getData;
