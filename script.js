const actividad = (tarea, duracion, callback) => {
    
    setTimeout(() => {
        callback(tarea);    
    }, duracion);
    
}

actividad("1. Comprar Bicicleta", 5000, (tarea)=> {
    console.log("tarea "+ tarea);
    actividad("2. Comprar casco", 1000, (tarea)=> {
        console.log("tarea "+ tarea);
        actividad("3. Comprar guantes", 2000, (tarea)=> {
            console.log("tarea "+ tarea);
            actividad("4. Ir de paseo en bici", 8000, (tarea)=> {
                console.log("tarea "+ tarea);
            })
        })
    })
})