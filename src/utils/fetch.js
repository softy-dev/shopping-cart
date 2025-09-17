const fetchData = async function fetchDataFromAPI() {
  const url = `https://api.escuelajs.co/api/v1/products/?categorySlug=clothes`;
  const response = await fetch(url);
  const result = await response.json();
  const filteredProducts = result.map((item) => {
    const newObj = {
      name: item.title,
      description: item.description,
      image: item.images[0],
      price: item.price,
    };

    return newObj;
  });

  console.log(filteredProducts);

  return filteredProducts;
};

export default fetchData;
