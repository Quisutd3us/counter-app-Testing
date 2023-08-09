import {getHeroeById} from './08-imp-exp.js'


// .catch( err => console.warn( err ) );

export const getHeroeByIdAsync = (id) => {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const p1 = getHeroeById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject('No se pudo encontrar el héroe, id: ' +id);
      }
    }, 1000)
  });
}

/*
getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);*/
