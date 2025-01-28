const rate = 26; 
for (let dollars = 10; dollars <= 100; dollars += 10) {
    const cost = dollars * rate; 
    console.log(`${dollars} доларів коштує ${cost} гривень`);
}