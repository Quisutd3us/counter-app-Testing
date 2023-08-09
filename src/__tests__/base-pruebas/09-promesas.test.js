import {getHeroeByIdAsync} from "../../base-pruebas/09-promesas.js";

describe('Test for 09-promesas.js', function () {
  test('test getHeroeByIdAsync', (done) => {
    const id = 1
    getHeroeByIdAsync(id)
        .then(hero => {
          expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
          })
          done()
        })
  })

  test('test getHeroeByIdAsync must be return a error',(done)=>{
    const id=111
    getHeroeByIdAsync(id)
        .catch(hero=>{
          expect(hero).toBe('No se pudo encontrar el héroe, id: '+id)
          done()
        })
  })
});