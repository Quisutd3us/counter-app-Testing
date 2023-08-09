import {getImagen} from "../../base-pruebas/11-async-await.js";
describe('Test for 11-async-await.js',()=>{
  test('Test for async function getImagen() this call a API',async ()=>{
    const url = await getImagen()
    expect(typeof url).toBe('string')
  })
})