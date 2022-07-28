const solve = (s) => {

    let total = s.length;
    let letter = s[0];
    let repeat = 0;
    
    for (var i = 0; i<s.length; i++) {
            let next = s[i+1];
        
            if (next === letter) {
                repeat++;
            } else {
                letter = s[i+1];
            }
    console.log(s[i])

    }
    return total+(repeat*2);
}

console.log(solve("aabb"))