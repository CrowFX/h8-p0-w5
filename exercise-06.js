function meleeRangedGrouping(str) {
    if (str.length === 0) {
        return []
    };
    let melee = [];
    let ranged = [];
    let group = str.split(',');
    let placeHolder = [];
    let result = [ranged, melee];
    for (let i = 0; i < group.length; i++) {
        temp = group[i].split('-');
        placeHolder.push(temp);
    }
    for (let i = 0; i < placeHolder.length; i++) {
        if (placeHolder[i][1] === 'Ranged') {
            ranged.push(placeHolder[i][0]);
        }
        if (placeHolder[i][1] === 'Melee') {
            melee.push(placeHolder[i][0]);
        }
    }
    return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []