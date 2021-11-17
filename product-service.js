const axios = require('axios');

module.exports.getAllProducts = async () => {
    return await axios.all([
        axios.get('https://assignment.dwbt.tech/products'),
        axios.get('https://assignment.dwbt.tech/images')
    ]).then(axios.spread((productsResponse, imagesResponse) => {
        // Both requests are now complete
        var rawProducts = productsResponse.data.products;
        const keys = Object.keys(rawProducts);

        keys.forEach((key, index) => {
            rawProducts[key] = linkImage(rawProducts[key], imagesResponse.data);
        });

        return rawProducts;
    }));
};

const linkImage = (productData, allImages) => {
    Object.assign(productData, {images: allImages.images[productData.sku]});
    delete productData._links;
    return productData;
};