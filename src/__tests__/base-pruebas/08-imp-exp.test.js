import {getHeroeById, getHeroesByOwner} from "../../base-pruebas/08-imp-exp.js";

describe('Test for 08-imp-exp.js', function () {
  /*test that will be return an object Hero*/
  test('test for getHeroeById() ', () => {
    const testId = 2
    const resultGetHero = getHeroeById(testId)
    expect(resultGetHero).toEqual({
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel'
    })
  })
  /*Test that whill be return an empty hero*/
  test('test for null getHeroeById() ', () => {
    const testId = 456
    const resultGetHero = getHeroeById(testId)
    expect(resultGetHero).toBeFalsy()
  })

  test('Test for getHeroesByOwner()', () => {
    const owner = 'DC'
    const hero = getHeroesByOwner(owner)

    expect(hero.length).toBe(3)
    expect(hero).toEqual([
          {id: 1, name: 'Batman', owner: 'DC'},
          {id: 3, name: 'Superman', owner: 'DC'},
          {id: 4, name: 'Flash', owner: 'DC'}
        ]
    )
    const ownerMarvel = 'Marvel'
    const heroMarvel = getHeroesByOwner(ownerMarvel)
    expect(heroMarvel.length).toBe(2)
    expect(heroMarvel).toEqual([
      {id: 2, name: 'Spiderman', owner: 'Marvel'},
      {id: 5, name: 'Wolverine', owner: 'Marvel'}
    ])
  })
  test('test for null getHeroesByOwner() ', () => {
    const testId = 'barbie'
    const resultGetHero = getHeroeById(testId)
    expect(resultGetHero).toBeFalsy() //null , undefined
  })
});