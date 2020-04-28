import React from 'react';

// DATA
//      numSides for Die Components
//      currentRoll for Die Components
//      Number of Dice
//      [ { numSides: NUMBER, currentRoll: NUMBER } ]
// BEHAVIOR
//      RollAll() 
//      RollOne(id)
//      AddToDice(Die)
//      EmptyDiceBag()
//      RemoveFromDiceBag(id)

export const DiceBagContext = React.createContext({
    dice: [ ], // READ
    rollAll: () => { }, // UPDATE (Dice)
    rollOne: () => { }, // UPDATE (Die)
    addToDice: () => { }, // UPDATE (Dice) / CREATE (Die)
    emptyDiceBag: () => { }, // DELETE (Dice)
    removeFromDiceBag: () => { }, // UPDATE (Dice) / DELETE (Die)
});