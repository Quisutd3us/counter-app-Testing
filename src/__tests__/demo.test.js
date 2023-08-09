describe('Test DemoComponent',()=>{
  test('This test must not be fail',()=>{
    let message1 = 'hi world';
    let message2 = message1.trim();
    expect(message1).toBe(message2);
  })
})

