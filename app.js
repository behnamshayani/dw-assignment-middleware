const productService = require('./product-service');

exports.handler = async () => {
    try {
        const res = await productService.getAllProducts();
        return {
            statusCode: 200,
            body: JSON.stringify(res)
        }
    } catch (e) {
        console.log(e)
        return {
            statusCode: 500,
            body: JSON.stringify(e)
        }
    }
};