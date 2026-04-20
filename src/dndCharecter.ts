// export class DnDCharacter {
//   private static rollDie = (): number => Math.floor(Math.random() * 6) + 1;

//   public static generateAbilityScore(): number {
//     const rolls = [
//       this.rollDie(),
//       this.rollDie(),
//       this.rollDie(),
//       this.rollDie(),
//     ];

//     rolls.sort((a, b) => a - b);
//     return rolls[1] + rolls[2] + rolls[3];
//   }

//   public static getModifierFor(abilityValue: number): number {
//     return Math.floor((abilityValue - 10) / 2);
//   }

//   readonly strength: number = DnDCharacter.generateAbilityScore();
//   readonly dexterity: number = DnDCharacter.generateAbilityScore();
//   readonly constitution: number = DnDCharacter.generateAbilityScore();
//   readonly intelligence: number = DnDCharacter.generateAbilityScore();
//   readonly wisdom: number = DnDCharacter.generateAbilityScore();
//   readonly charisma: number = DnDCharacter.generateAbilityScore();
//   readonly hitpoints: number;

//   constructor() {
//     this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
//   }
// }


// const myCharacter = new DnDCharacter();

// console.log(`Strength: ${myCharacter.strength}`);
// console.log(`Dexterity: ${myCharacter.dexterity}`);
// console.log(`Constitution: ${myCharacter.constitution}`);
// console.log(`Intelligence: ${myCharacter.intelligence}`);
// console.log(`Wisdom: ${myCharacter.wisdom}`);
// console.log(`Charisma: ${myCharacter.charisma}`);
// console.log(`HITPOINTS: ${myCharacter.hitpoints}`);





const rollDice = () => {
  const result = Math.floor(Math.random() * 6) + 1;
  console.log(`roll: ${result}`);

  return result
}
rollDice();
rollDice();
rollDice();
