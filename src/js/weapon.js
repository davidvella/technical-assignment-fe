/**
 * Class which defines a weapon. A weapon has a name and can beat other weapons.
 * name: the name of the weapon
 * beats: an array of names of weapons that are defeated in battle
 */
export class Weapon {
	constructor(name, beats) {
		this.name = name;
		this.beats = beats;
	}
}

/**
 * A constant array of weapons.
 */
export const Weapons = {
	rock: new Weapon("rock", ["scissors"]),
	paper: new Weapon("paper", ["rock"]),
	scissors: new Weapon("scissors", ["paper"])
};

/**
 * Get a random weapon.
 */
export const getRandomWeapon = () => {
    const weaponValues = Object.values(Weapons);
	return weaponValues[Math.floor(Math.random() * weaponValues.length)];
}

