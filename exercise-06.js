function meleeRangedGrouping(str) {
    let melee = str.split(',').filter(x => x.match('Melee')).map(y => y.replace(/([A-Za-z\s]+)-\w+/, '$1'))
    let ranged = str.split(',').filter(x => x.match('Ranged')).map(y => y.replace(/([A-Za-z\s]+)-\w+/, '$1'))
    return str.length === 0 ? [] : [ranged, melee]
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []