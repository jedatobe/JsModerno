// OBJETOS ANIDADOS

const laptop = {
    pantalla: `15 pulgadas`,
    discoDuro: `1Tb`,
    cpu: `3.1Ghz`,
    medidas: {
        peso: `2.8 libras`,
        anchura: `11.98 pulgadas`,
        altura: `0.16 - 0.63 pulgadas`
    }
}

// Acceder a todaas las propiedadesd del objeto
console.log(laptop)
console.log(laptop.medidas)
console.log(laptop.medidas.altura)

laptop.medidas.peso = `3 libras`

console.log(laptop.medidas.peso)