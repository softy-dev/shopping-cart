const fetchData = async function fetchDataFromAPI(department, number) {
  const url = `https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list?pageSize=${number}&pageNumber=1&category=${department}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'f1c11f6b27msh2fd06bb94eda8f9p11c483jsn14066c3eb029',
      'x-rapidapi-host': 'apidojo-forever21-v1.p.rapidapi.com',
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const products = result.CatalogProducts;
  console.log(products);
  const filteredProducts = products.map((item) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(item.Description, 'text/html');
    const descriptionContents = [...doc.querySelectorAll('div.d_content')].map(div => div.textContent.trim());
    const description = descriptionContents[0].slice(0, descriptionContents[0].indexOf('.') + 1);

    const newObj = {
      name: item.DisplayName,
      description: description,
      image: item.DefaultProductImage,
      price: `$${item.OriginalPrice}`,
    }
    
    return newObj;
  })

  return filteredProducts;
};

export default fetchData;
