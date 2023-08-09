import {retornaArreglo} from "../../base-pruebas/07-deses-arr.js";

describe('Test on 07-deses-arr.js', () => {
  test('Test for destructure retornaArreglo()', () => {
    const returnArray = retornaArreglo()
    expect(returnArray).toStrictEqual(['ABC',123])
    const [letters, numbers] =retornaArreglo()
    /*expect(letters).toBe('ABC')
    expect(numbers).toBe(123)/**/
    expect(typeof letters).toBe('string')
    expect(typeof numbers).toBe('number')
  })
})