// Your code here:

function singBottlesOfMilk() {
    for (let i = 100; i > 0; i--) {
        let next = i - 1;
        let bottleWord = i === 1 ? "bottle" : "bottles";
        let nextBottleWord = next === 1 ? "bottle" : "bottles";
        
        if (next > 1) {
            console.log(`${i} ${bottleWord} of milk on the wall, ${i} ${bottleWord} of milk, ake one down and pass it around, ${next} ${nextBottleWord} of milk on the wall.\n`);
        } 
    }
    console.log("1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall");
    console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
}

singBottlesOfMilk();