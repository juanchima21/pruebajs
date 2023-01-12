//VAR --variables globales
var saludo = 'hola Juan'
if(saludo)               //var, le estás diciendo a JavaScript que va a declarar una variable. Al usar var, las variables pueden ser reasignadas.
console.log(saludo)
//--------------------------------
//LET -- 
let nombre1 ="Juan"  // let  permite declarar variables limitando su alcance
console.log(nombre)
//------------------------------------
//variable tipo string
//----------------------------------------
var nombre2 = "David"
console.log(nombre)        
var minumero = 50
console.log(minumero)
const PI = 3.14
console.log(PI)
var verdadero = true
var falso = false
console.log(verdadero)
console.log(falso)
//________________________________
//funciones
function saludo(){
    console.log("hola a todos")  //una función es un "subprograma" que puede ser llamado por código externo o interno,
}
function misuma(a,b,c){
    return a + b + c
    
}
saludo()
console.log(misuma(4,5,7))
//__________________________________
//objetos
var miobjeto = {
    nombree : "host",
    edad : 2020,
    importante : true
}
console.log(miobjeto.importante)
//___________________
//Arrays
var permitido = "usuario permitido"   // permiten agregar/quitar elementos al del principio o al del final.
var mifuncion = acceso => acceso
var persona ={         
    nombre : "paez"
}
var miarray =["host", 2020,34,9,true  ["otro array ","array",7900], mifuncion(permitido)]
console.log(miarray[2][1].nombre)
//___________________
//json
var miobjeto ={
    nombre : "host2" // es un archivo que contiene datos estructurados
}
console.log(JSON.stringify(miobjeto))
//_________________
//if else
var variable = 20
if(variable==50) {
    console.log("verdadero")  //Si la condición es evaluada como falsa, otra sentencia puede ser ejecutada.
}else{
    console.log("falso")
}


var edad = 18
if(edad>=18 && edad <= 30) {
    console.log("joven adulto")
}else if(edad < 18 && edad <= 30)
    console.log("niño o adolecente")
    //_________________
    //swhitch
    var opcion = "nuevo menu"
    switch (opcion) {
        case 1:
            console.log("menu de usuario") //permite hacer múltiples operaciones dependiendo del estado de una variable.
            break;
            case 2:
                console-log("menu administrativo")
                break;
                case "nuevo menu":
                    console.log(opcion)
                default:
                    break;

    }
//_______________
// for foreach
for(i=0; i < 10; i ++){
    if(i==1){
        console.log("hola " + i + "vez")
    }else{
        console.log("hola " + i + "veces")
    }
    
}
 for(let index = 0; index < miarray.length; index ++) {     //Recorrer cada elemento de un array
    if(personas [index].edad >= 20){
        break;
    }
    const element = personas[index].nombre;
    console.log(element)

 }

 personas.forEach(element => console.log(element.edad) {
    
 });