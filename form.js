function limpiar(){
    document.getElementById('myForm').reset();
    document.getElementById('resultado').innerHTML = ''
}

function calcular(e){
    
    //let nro1, nro2, total=0   LET DEFINE TIPO DE VARIABLE, PUEDE CAMBIAR SOLO EL VALOR, VAR DEFINE UNA VARIABLE PUEDE CAMBIAR TIPO Y VALOR//
    let cant = 0;
    let categoria = '';
    let total = 0;

    //leo los numeros ingresados en los inputo con ID
    cant = parseFloat(document.getElementById('inputCantidad').value);
    //leo la opcion seleccionada 
    categoria = document.getElementById('inputCategoria').value;
    //calculo el restultado en base a la operación elegida
    switch(categoria){
        case "Estudiante":
            total = (cant*200)*0.20;
            break;
        case "Trainee":
            total = (cant*200)*0.5
            break;
        case "Junior":
            total = (cant*200)*0.85;
            break;
    }
    document.getElementById('resultado').innerHTML = 'El total a abonar es: $' + total;
    e.preventDefault()
    console.log(cant)
    console.log(categoria)
    console.log(total)
}