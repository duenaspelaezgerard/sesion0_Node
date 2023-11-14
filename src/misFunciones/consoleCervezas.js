import { cervezasBD } from '../bd/cervezasBD.js'

export const consoleCervezas = (cervezasBD) => {
  cervezasBD.array.forEach(element => {
    console.log('Nombre: ', element.nombre)
  })
}
