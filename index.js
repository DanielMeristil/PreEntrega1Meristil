// Variables
// El y Ella Beauty Salon; Nuestro productos y servicios.

var producto = "Jabón para cabello, LOSION ONE $29.990";
console.log(producto);
var producto = "TRATMIENTO FACIAL $29.990";
console.log(producto);
var producto = "JABON SOLIDO $19.990";
console.log(producto);
var producto = "TRATAMIENTO CON LOSION ONE $49.990";
console.log(producto);
var producto = "TINTAS DE PELO $39.990";


//Productos y servicios

var categoria = 'Servicios con dermapen, servicios con fibroblast';
console.log(categoria);
var servicios = "Microneedling, Mesoterapia, Anticelulitis y Flacidez, Despimentacion de manchas, Levantamiento de Parpados";
console.log(servicios);
var precio;
precio = 99.990 ;
console.log(precio);

// Aplicando Estructura de control para comprar en "El y Ella Beauty Salon"

const jabón = 30;
const totalApagar = 50;
if(jabón<totalApagar){
console.log('Exito')
}
else{
console.log('Rechazo');
}
//El resultado "Exito"

const tratamientoFacial = 30;
if (tratamientoFacial>totalApagar2){
    console.log('Exito')
}
else{
  console.log('Rechazo');
}
// El resultado es "Rechazo".


//Evaluando diferentes formas de pagos en "EL Y Ella Beaty Salón"

const metodoPago = 'transferencia';

switch(metodoPago) {
    case 'transferencia':
        pagar();
    case 'efectivo':  

        console.log(`Pago efectuado con ${metodoPago}`);
    break;
    default:
        console.log('Faltas seleccionar metodo de pago o metodo de pago no coincide');
    break;    
}

function pagar(){
    console.log('Tu pago está procesando...')
}

const metodoPago2 = 'tarjeta';

switch(metodoPago2) {
    case 'tranferencia':
       console.log(`Pago efectuado con ${metodoPago2}`);
   break;
    default:
        console.log('Faltas seleccionar metodo de pago o metodo de pago no coincide');
        break;    
} 


const cliente = true;
const tienes20PorcientosDescuentos = true;

if(cliente && tienes20PorcientosDescuentos) {
    console.log('Estás calificado por descuentos')
} else if(!cliente){
    console.log('Crear una cuenta')
} else if(!tienes20PorcientosDescuentos){
    console.log('No eres cliente')
} else {
    console.log('No estás calificado por descuentos')
}


const cliente2 = false;
const tienes20PorcientosDescuentos2 = true;

if(cliente2 && tienes20PorcientosDescuentos2) {
    console.log('Estás calificado por descuentos')
} else if(!cliente2){
    console.log('Crear una cuenta')
} else if(!tienes20PorcientosDescuentos2){
    console.log('No eres cliente')
} else {
    console.log('No estás calificado por descuentos')
}


const cliente4 = false;
const tienes20PorcientosDescuentos4 = false;

if(cliente4 && tienes20PorcientosDescuentos4) {
    console.log('Estás calificado por descuentos')
} else if(!tienes20PorcientosDescuentos4 && !cliente4){
    console.log('No eres cliente')

} else if(!cliente4){
    console.log('Crear una cuenta');
} else(tienes20PorcientosDescuentos4); {
    console.log('No estás calificado por descuentos');
}


//Iteradores
//Carrito de compra en El y Ella Beaty Salón
const carrito = [
    {nombre: 'Losion one', precio: 29.990},
    {nombre: 'Tratamiento facial', precio: 39.990},
    {nombre: 'Jabón solido', precio: 29.990},
    {nombre: 'Jabón liquido', precio: 29.990},
    {nombre: 'Tintas de pelos', precio: 29.990},
    {nombre: 'Anticelulitis', precio: 49.990},
    {nombre: 'Maniciur', precio: 29.990},
    {nombre: 'Pediciur', precio: 29.990},
]
console.log(carrito.length);
for(let i =0; i <carrito.length; i++ ){
    console.log(carrito[i]);
}


//forEach Aplicando forEach 

const procesando = ['Losion One', 'Tratamiento facial', 'Jabón solido', 'Anticelulitis',];
procesando.forEach((procesando,indice) => {
    console.log(`${indice} : ${procesando}`)
})

const carrito2 = [
    {nombre: 'Losion one', precio: 29.990},
    {nombre: 'Tratamiento facial', precio: 39.990},
    {nombre: 'Jabón solido', precio: 29.990},
    {nombre: 'Jabón liquido', precio: 29.990},
    {nombre: 'Tintas de pelos', precio: 29.990},
    {nombre: 'Anticelulitis', precio: 49.990},
    {nombre: 'Maniciur', precio: 29.990},
    {nombre: 'Pediciur', precio: 29.990},
]

//const carrito2 = carrito;es evitar notificacion error roja en la pantalla
const nuevoArreglo = carrito.forEach(producto =>producto.nombre);
const nuevoArreglo2 = carrito.map( (producto) =>producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);


//Funcion
//Carrito de compra
agregarProductos();
ProductosTotal();

function agregarProductos() {
    console.log('agregando producto...');
}
function ProductosTotal() {
    console.log('productos total agregados');

    chequeandoProducto()
}

function chequeandoProducto() {
    console.log('chequeando producto...');
  console.log('producto fue chequeado con exito,');
}


//Function
//sumar y calcular impuesto del precio de los productos
//    {nombre: 'Losion one', precio: 29.990},
//    {nombre: 'Tratamiento facial', precio: 39.990},
//    {nombre: 'Jabón solido', precio: 29.990},
//    {nombre: 'Jabón liquido', precio: 29.990},
//    {nombre: 'Tintas de pelos', precio: 29.990},
//    {nombre: 'Anticelulitis', precio: 49.990},
//    {nombre: 'Maniciur', precio: 29.990},
//    {nombre: 'Pediciur', precio: 29.990},
function sumar(a, b, c, d, e, f, g, h) {
    return a + b + c + d + e + f + g + h ;
}
const resultado = sumar(29.990, 39.990, 29.990, 29.990, 29.990, 49.990, 29.990, 29.990);
console.log(resultado);

let total = 0;
function agregarAlcarrito(precio) {
    return total += precio;
}
function calcularImpuesto(total) {
    return total * 1.07;
}

total = agregarAlcarrito(29.990);
total = agregarAlcarrito(39.990);
total = agregarAlcarrito(29.990);
total = agregarAlcarrito(29.990);
total = agregarAlcarrito(29.990);
total = agregarAlcarrito(49.990);
total = agregarAlcarrito(29.990);
total = agregarAlcarrito(29.990);

const totalApagar2 = calcularImpuesto(total);
console.log(`Total a pagar es ${totalApagar}`);
console.log(total);

//const totalApagar2 = totalApagar; es evitar notificacion error roja en la pantalla