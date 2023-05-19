import GenerateRandom from '../randomNum';
const generateRandom = new GenerateRandom(15);

test('test random number', async () => {
    const result = await generateRandom.randomNum();

    expect(typeof(result)).toBe('number');
})

test('test the random numbers are not equal ', async () => {
    const result = await generateRandom.randomNum();
    const result2 = await generateRandom.randomNum();
    const result3 = await generateRandom.randomNum();

    expect(result !== result2 && result2 !== result3).toBe(true); 
}) 