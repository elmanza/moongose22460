const Joi = require("joi");
let nombre = Joi.string().min(3);
let apellido = Joi.string().min(3);
let dni = Joi.string().min(3);

const usuariosSchema = {
    nombre: nombre.required(),
    apellido: apellido.required(),
    dni: dni.required()
}


module.exports = {
    usuariosSchema
}