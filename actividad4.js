console.warn('punto 1 de la actividad-4')
 const diasSemana = [
     'Domingo',
     'Lunes',
     'Martes',
     'Miercoles',
     'Jueves',
     'Viernes',
     'Sabado',
 ]
 diasSemana(diasSemana[dia])

 console.warn('punto 2 de la actividad-4')

 let diasDeSemana={
     0: 'Domingo',
     1: 'Lunes',
     2: 'Martes',
     3: 'Miercoles',
     4: 'Jueves',
     5: 'Viernes',
     6: 'Sabado',
 }
  console.log(`diasDeSemana${dia}`)

  
  console.warn('punto 3 actividad-4')

  let numHombres = parseInt(prompt('Ingrese la cantidad de hombres'))
  let numMujeres = parseInt(prompt('Ingrese la cantidad de mujeres'))
  const numTotalEstudiantes = numHombres+numMujeres
  let porcentajeHombres = ((numHombres*100)/numTotalEstudiantes)
  let porcentajeMujeres = ((numMujeres*100)/numTotalEstudiantes)
  alert(`el porcentaje de hombres es: ${Math.round(porcentajeHombres)}% y el porcentaje de mujeres es: ${Math.round(porcentajeMujeres)}%`)

console.warn("punto 4 actividad-4")

let valor1 = prompt("Ingrese primer valor")
valor1 = parseInt(valor1)
let valor2 = prompt("Ingrese segundo valor")
valor2 = parseInt(valor2)

let suma = valor1 + valor2
let resta = valor1 - valor2
let multiplicar = valor1 * valor2
let dividir = valor1/valor2

let procedimiento = parseInt(prompt("Ingrese la operación a realizar:  para sumar 1, para restar 2, para multiplicar 3, para divir 4"))
if(procedimiento === 1){
    alert(`la suma es: ${suma}`)
} else if(procedimiento === 2){
    alert(`la resta es: ${resta}`)
} else if(procedimiento === 3){
    alert(`la multiplicacion es: ${multiplicar}`)
} else if(procedimiento === 4){
    alert(`la division es:  ${dividir}`)
}else {
    console.error('no existe operación')
}


console.warn('punto 5 actividad-4')

let huevo = prompt('ingrese Que tipo de huevo desea llevar: 1 para tipo "a" o 2 para tipo "aa"')
let cantHuevo = parseInt(prompt('ingrese cantidad de huevos'))

if (huevo = 1 && cantHuevo < 101){
    alert(`El total a pagar es: ${(220 * cantHuevo)}`)
}else if (huevo = 1 && cantHuevo > 100 && cantHuevo < 201){
    alert(`El total a pagar es: ${(220 * cantHuevo) / 0.05}`)
}else if (huevo = 1 && cantHuevo > 201 && cantHuevo < 301){
    alert(`El total a pagar es: ${(220 *cantHuevo) / 0.08}`)
}else if(huevo = 1 && cantHuevo >= 301){
    alert(`El total a pagar es: ${(220 *cantHuevo) / 0.10}`)
}else if(huevo = 2 && cantHuevo < 101){
    alert(`El total a pagar es: ${(250 * cantHuevo)}`)
}else if(huevo = 2 && cantHuevo > 100 && cantHuevo < 201){
    alert(`El total a pagar es: ${(250* cantHuevo)/ 0.05}`)
}else if(huevo = 2 && cantHuevo > 201 && cantHuevo < 301){
    alert(`El total a pagar es: ${(250 *cantHuevo)/ 0.08}`)
}else if(huevo = 2 && cantHuevo >= 301){
    alert(`El total a pagar es: ${(250 * cantHuevo)/ 0.10}`)
}