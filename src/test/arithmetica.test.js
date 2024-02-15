const { evaluate_Expression } = require("../arithmetica")

test('2 + 3 is equal to 5 ',()=>{
    expect(evaluate_Expression('2+3')).toBe(5);
})

test('1000 + 56423 is equal to 57423 ', () => {
    expect(evaluate_Expression('1000+56423')).toBe(57423);
})

test('10000000 + 100000000 is equal to 110000000 ', () => {
    expect(evaluate_Expression('10000000+100000000')).toBe(110000000);
})

test('123456 + 65321 is equal to 188777 ', () => {
    expect(evaluate_Expression('123456+65321')).toBe(188777);
})

test('10000000000000000000000000 + 123143152526 is equal to 1.0000000000000123e+25 ', () => {
    expect(evaluate_Expression('10000000000000000000000000 + 123143152526')).toBe(1.0000000000000123e+25);
})