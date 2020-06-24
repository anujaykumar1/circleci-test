const {add, sub ,product,divide} = require('../index');

test("Math test suite",()=>{

    expect(add(1,0)).toBe(1)
    expect(sub(1,1)).toBe(0);
    expect(product(1,1)).toBe(1)
   // expect(divide(1,1)).toBe(1)
})