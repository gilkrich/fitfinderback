const User =require("../models/user")
const Manpants =require("../models/manpants")
const Mantshirts =require("../models/mantshirt")
const Manshorts =require("../models/manshorts")
const Manshirt =require("../models/manshirts")
const Womanshirts =require("../models/womenshirts")
const Womantops =require("../models/womentops")
const Jeans =require("../models/jeans")
const Pants =require("../models/pants")
const Dresses =require("../models/dresses")
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

const fetchManPants = async(req,res)=>{
    try{
        const fetchPants = await Manpants.find({})
        res.status(200).json(fetchPants)
    }
    catch(err){
        res.status(500).json("somthing is wrong")
    }
}
const fetchManshirts = async(req,res)=>{
    try{
        const fetchPants = await Manshirt.find({})
        res.status(200).json(fetchPants)
    }
    catch(err){
        res.status(500).json("somthing is wrong")
    }
}
const fetchMantshirt = async(req,res)=>{
    try{
        const fetchPants = await Mantshirts.find({})
        res.status(200).json(fetchPants)
    }
    catch(err){
        res.status(500).json("somthing is wrong")
    }
}
const fetchManShorts = async(req,res)=>{
    try{
        const fetchPants = await Manshorts.find({})
        res.status(200).json(fetchPants)
    }
    catch(err){
        res.status(500).json("somthing is wrong")
    }
}
const fetchWomanShirts = async(req,res)=>{
    try{
        const fetchPants = await Womanshirts.find({})
        res.status(200).json(fetchPants)
    }
    catch(err){
        res.status(500).json("somthing is wrong")
    }
}
const fetchWomanTops = async(req,res)=>{
    try{
        const fetchPants = await Womantops.find({})
        res.status(200).json(fetchPants)
    }
    catch(err){
        res.status(500).json("somthing is wrong")
    }
}
const fetchWomanJeans = async(req,res)=>{
    try{
        const fetchPants = await Jeans.find({})
        res.status(200).json(fetchPants)
    }
    catch(err){
        res.status(500).json("somthing is wrong")
    }
}
const fetchWomanPants = async(req,res)=>{
    try{
        const fetchPants = await Pants.find({})
        res.status(200).json(fetchPants)
    }
    catch(err){
        res.status(500).json("somthing is wrong")
    }
}
const fetchWomanDresses = async(req,res)=>{
    try{
        const fetchPants = await Dresses.find({})
        res.status(200).json(fetchPants)
    }
    catch(err){
        res.status(500).json("somthing is wrong")
    }
}
const fetchDressAgeTwo = async(req,res)=>{
    try{
        const fetchPants = await Dressagetwo.find({})
        res.status(200).json(fetchPants)
    }
    catch(err){
        res.status(500).json("somthing is wrong")
    }
}
const fetchShirtsAgewo = async(req,res)=>{
    try{
        const fetchPants = await Shirtsagetwo.find({})
        res.status(200).json(fetchPants)
    }
    catch(err){
        res.status(500).json("somthing is wrong")
    }
}
const fetchPantsAgeTwo = async(req,res)=>{
    try{
        const fetchPants = await Pantsagetwo.find({})
        res.status(200).json(fetchPants)
    }
    catch(err){
        res.status(500).json("somthing is wrong")
    }
}
const fetchShirtsAgeNine = async(req,res)=>{
    try{
        const fetchPants = await Shirtsagenine.find({})
        res.status(200).json(fetchPants)
    }
    catch(err){
        res.status(500).json("somthing is wrong")
    }
}
const fetchJeansAgeNine = async(req,res)=>{
    try{
        const fetchPants = await Jeansagenine.find({})
        res.status(200).json(fetchPants)
    }
    catch(err){
        res.status(500).json("somthing is wrong")
    }
}
const fetchSweaterAgeNine = async(req,res)=>{
    try{
        const fetchPants = await Sweateragenine.find({})
        res.status(200).json(fetchPants)
    }
    catch(err){
        res.status(500).json("somthing is wrong")
    }
}
const fetchShirtsTwoBoys = async(req,res)=>{
    try{
        const fetchPants = await Shirtstwoboys.find({})
        res.status(200).json(fetchPants)
    }
    catch(err){
        res.status(500).json("somthing is wrong")
    }
}
const fetchPantsTwoBoys = async(req,res)=>{
    try{
        const fetchPants = await Pantstwoboys.find({})
        res.status(200).json(fetchPants)
    }
    catch(err){
        res.status(500).json("somthing is wrong")
    }
}
const fetchShortsTwoBoys = async(req,res)=>{
    try{
        const fetchPants = await Shortstwoboys.find({})
        res.status(200).json(fetchPants)
    }
    catch(err){
        res.status(500).json("somthing is wrong")
    }
}
const fetchShirtsNineBoys = async(req,res)=>{
    try{
        const fetchPants = await Shirtsnineboys.find({})
        res.status(200).json(fetchPants)
    }
    catch(err){
        res.status(500).json("somthing is wrong")
    }
}
const fetchPantsNineBoys = async(req,res)=>{
    try{
        const fetchPants = await Pantsnineboys.find({})
        res.status(200).json(fetchPants)
    }
    catch(err){
        res.status(500).json("somthing is wrong")
    }
}
const fetchShortsNineBoys = async(req,res)=>{
    try{
        const fetchPants = await Shortsnineboys.find({})
        res.status(200).json(fetchPants)
    }
    catch(err){
        res.status(500).json("somthing is wrong")
    }
}




module.exports={fetchDressAgeTwo,fetchJeansAgeNine,fetchManPants,fetchManShorts,fetchManshirts,fetchMantshirt,fetchPantsAgeTwo,fetchPantsNineBoys,fetchPantsTwoBoys,fetchShirtsAgeNine,fetchShirtsAgewo,fetchShirtsNineBoys,fetchShirtsTwoBoys,fetchShortsNineBoys,fetchShortsTwoBoys,fetchSweaterAgeNine,fetchWomanDresses,fetchWomanJeans,fetchWomanJeans,fetchWomanPants,fetchWomanShirts,fetchWomanTops}