import {getUser, getUsuarioActivo} from "../../base-pruebas/05-funciones.js";

describe('Test for 05-funciones.js() ',  () =>{
  test('Test for getUser()',()=>{
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }
    const functionUser = getUser(testUser);
    expect(functionUser).toEqual(testUser)
  })

  test('Test for getUsuarioActivo()',()=>{
    const nameTest = 'david';
    const testResult ={
      uid: 'ABC567',
      username: 'david'
    }
    const functionUser = getUsuarioActivo(nameTest)
    expect(functionUser).toEqual(testResult)
  })
});

