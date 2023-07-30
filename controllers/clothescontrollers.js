const Dress = require('../models/dresses');
const Jeans = require('../models/jeans');
const Pants = require('../models/pants');
const Shirts = require('../models/womenshirts');
const Top = require('../models/womentops');
const Manshirts = require('../models/manshirts')
const Manshorts = require('../models/manshorts')
const Manpants = require('../models/manpants')
const Mantshirts = require('../models/mantshirt')
const Dressagetwo = require('../models/girls/dressagetwo')
const Shirtsagetwo = require('../models/girls/shirtsagetwo')
const Pantsagetwo  = require('../models/girls/pantsagetwo')
const Shirtsagenine = require('../models/girls/shirtsagenine')
const Jeansagenine = require('../models/girls/jeansagenine')
const Sweateragenine = require('../models/girls/sweateragenine')
const Shirtstwoboys = require('../models/boys/shirtsagetwoboy')
const Pantstwoboys = require('../models/boys/pantstwoboys')
const Shortstwoboys = require('../models/boys/shortstwoboys')
const Shirtsnineboys = require('../models/boys/shirtsnineboys')
const Pantsnineboys = require('../models/boys/pantsnineboys')
const Shortsnineboys = require('../models/boys/shortsnineboys')

exports.addclothes = (req, res) => {
    let {productarray} = req.body
    try{
        let temp =  [Dress,Top,Shirts,Pants,Jeans]
        for (let i = 0; i < productarray.length; i++) {
            for (let index = 0; index < productarray[i].length; index++) {
                temp[i].create({productname:productarray[i][index].productTitle,productimage:productarray[i][index].productImage,productfit:productarray[i][index].productFit,producturl:productarray[i][index].productLink,companyname:productarray[i][index].companyName})
            }        
        }
        res.status(200).json('added')
    }catch(err){
        res.status(500).send(err)
    }
}

exports.addmanclothes = (req, res) => {
    let {productarray} = req.body
    try{
        let temp =  [Mantshirts,Manpants,Manshorts,Manshirts]
        for (let i = 0; i < productarray.length; i++) {
            for (let index = 0; index < productarray[i].length; index++) {
                temp[i].create({productname:productarray[i][index].productTitle,productimage:productarray[i][index].productImage,productfit:productarray[i][index].productFit,producturl:productarray[i][index].productLink,companyname:productarray[i][index].companyName})
            }        
        }
        res.status(200).json('added')
    }catch(err){
        res.status(500).send(err)
    }
}

exports.addkidsclothes = (req, res) => {
    let {productarray} = req.body
    try{
        let temp =  [Dressagetwo,Shirtsagetwo,Pantsagetwo,Shirtstwoboys,Pantstwoboys,Shortstwoboys,Shirtsagenine,Jeansagenine,Sweateragenine,Shirtsnineboys,Pantsnineboys,Shortsnineboys]
        for (let i = 0; i < productarray.length; i++) {
            for (let index = 0; index < productarray[i].length; index++) {
                temp[i].create({productname:productarray[i][index].productTitle,productimage:productarray[i][index].productImage,productfit:productarray[i][index].productFit,producturl:productarray[i][index].productLink,companyname:productarray[i][index].companyName})
            }        
        }
        res.status(200).json('added')
    }catch(err){
        res.status(500).send(err)
    }
}


