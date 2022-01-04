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

// PUNTO 1 [EJERCICIO 1]
(async ()=>{
    try {
        const inserciones = [];
        for (const estudiante of estudiantes) {
            inserciones.push(EstudianteModel.create(estudiante));
        }
        const result = await Promise.allSettled(inserciones);
        let rejected = result.filter(element => element.status == "rejected");
        // console.log(result);
        console.log("---------------------------");
        if(rejected.length > 0){
            console.log("Veeee, algo falló!");
        }else{
            console.log("Tooodo bien!")
        }
    } catch (error) {
        console.log(error);
    }
});

//  [EJERCICIO 2]

(async ()=>{
    try {
        // PUNTO A
        let res_A = await EstudianteModel.find({nombre: 'Lucas'}, {dni: 20355875});
        // console.log(res_A);

        // PUNTO B
        let res_B = await EstudianteModel.find({}).sort({edad: 1}).limit(1);
        // console.log(res_B);

        // PUNTO C
        let res_C = await EstudianteModel.find({curso: '2A'});
        // console.log(res_C);

        // PUNTO D
        let res_D = await EstudianteModel.find({}).sort({edad: 1}).limit(1).skip(1);
        // console.log(res_D);

        // PUNTO E
        let res_E = await EstudianteModel.find({}, {nombre: 1, apellido: 1, curso:1}).sort({apellido: -1});
        // console.log(res_E);

        // PUNTO F
        let res_F = await EstudianteModel.find({nota: 10});
        // console.log(res_F);

        // PUNTO G
        let res_G = await EstudianteModel.find({},{nota: 1, _id: 0});
        let total_punto_g = res_G.reduce((prev, current)=>{
            return prev + current.nota;
        }, 0);
        let promedio_res_G = total_punto_g/res_G.length;
        // console.log(promedio_res_G);

        // PUNTO H
        let res_H = await EstudianteModel.find({curso: '1A'},{nota: 1, _id: 0});
        let total_punto_H = res_H.reduce((prev, current)=>{
            return prev + current.nota;
        }, 0);
        let promedio_res_H = total_punto_H/res_H.length;
        // console.log(promedio_res_H);


    } catch (error) {
        console.log(error);
    }
});


//  [EJERCICIO 3]

(async ()=>{
    try {
        // PUNTO A
        // let res_A = await EstudianteModel.updateOne({nombre: 'Lucas'}, {dni: "20355875"});
        // console.log(res_A);

        // PUNTO B
        // let res_B = await EstudianteModel.updateMany({}, { ingreso: false });
        // console.log(res_B);

        // // PUNTO C
        // let res_C = await EstudianteModel.updateMany({curso: '2A'}, { ingreso: true });
        // console.log(res_C);

        // PUNTO D
        // let res_D = await EstudianteModel.find({nota: {$gte: 4}}, {_id: 0, __v:0});
        // console.log(res_D);

        // // PUNTO E
        // let res_E = await EstudianteModel.find({ingreso:true}, {_id:0, __v:0});
        // console.log(res_E);

        // PUNTO F
        // let res_F = await EstudianteModel.deleteMany({ingreso:true});
        // console.log(res_F);

        // PUNTO G
        let res_G = await EstudianteModel.find({}, {__v:0});
        // console.log(res_G);
        
        res_G.forEach(estudiante => {
            console.log(estudiante, ' -> Fecha de creación ', new Date(estudiante._id.getTimestamp().toLocaleDateString()));
        });


    } catch (error) {
        console.log(error);
    }
})();