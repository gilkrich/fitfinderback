const Dress = require('../models/dresses');
const Jeans = require('../models/jeans');
const Pants = require('../models/pants');
const Shirts = require('../models/womenshirts');
const Top = require('../models/womentops');


exports.addclothes = (req, res) => {
    let {productarray} = req.body.productarray
    console.log(productarray);
    try{
        let temp =  [Dress,Top,Shirts,Pants,Jeans]
        for (let i = 0; i < productarray.length; i++) {
            for (let index = 0; index < productarray[i].length; index++) {
                temp[i].create({productname:productarray[i][index].productTitle,productimage:productarray[i][index].productImage,productfit:productarray[i][index].productFit,producturl:productarray[i][index].productLink,companyname:productarray[i][index].companyName})
              console.log(productarray[i][index]);
            }        
        }
        res.status(200).json('added')
    }catch(err){
        res.status(500).send(err)
    }
}


