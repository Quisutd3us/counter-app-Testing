import {getSaludo} from "../../base-pruebas/02-template-string.js";

describe('Test en 02-template-string', function () {
  test(`getSaludo must be return "Hola Fernando"`, () => {
    const name = 'Fernando';
    const message = getSaludo(name);
    expect(message).toBe(`Hola ${name}`)
  })
});