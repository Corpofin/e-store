var Marketcloud = require('marketcloud-node');


var marketcloud = new Marketcloud.Client({
    public_key : process.env.MARKETCLOUD_PUBLIC_KEY,
    secret_key : process.env.MARKETCLOUD_SECRET_KEY
});


marketcloud.products.list({})
.then(function(products){
    console.log(products);
})