let {connection, mongoose} = require("./config/database")
let {Schema, model} = mongoose;
let {estudiantesSchema} = require("./schemas/estudiante");
let estudiantesSchemaModel = new Schema(estudiantesSchema);
let EstudianteModel = new model('estudiantes', estudiantesSchemaModel);


const estudiantes = [
    { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7 },
    { nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8 },
    { nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },
    { nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
    { nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },
    { nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },
    { nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },
    { nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },
    { nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
    { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 }
];

// PUNTO 1
(async ()=>{
    console.log("asdasd");
    try {
        const inserciones = [];
        for (const estudiante of estudiantes) {
            inserciones.push(EstudianteModel.create(estudiante));
        }
        const result = await Promise.allSettled(inserciones);
        let rejected = result.filter(element => element.status == "rejected");
        console.log(result);
        console.log("---------------------------");
        if(rejected.length > 0){
            console.log("Veeee, algo falló!");
        }else{
            console.log("Tooodo bien!")
        }
    } catch (error) {
        console.log(error);
    }
})();