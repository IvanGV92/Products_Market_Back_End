const knex = require("./knex");

function createProduct(product){
  return knex("product").insert(product);
}

function getAllProducts(){
  return knex("product").select("*")
}

module.exports ={
  createProduct,
  getAllProducts
}