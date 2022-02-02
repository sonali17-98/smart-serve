url = 'https://s3.amazonaws.com/open-to-cors/assignment.json';
const fetchData = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        const products = data.products;
        console.log(products);
    } catch (err) {
        console.log(err);
    }
}
fetchData();

