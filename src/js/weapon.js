/**
 * Class which defines a weapon. A weapon has a name and can beat other weapons.
 * @param {*} name: the name of the weapon
 * @param {*} beats: an array of names of weapons that are defeated in battle
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

/**
 * Get weapon by using name
 * @param {*} weaponName
 */
export const convertStringToWeapon = (weaponName) => {
	return Weapons[weaponName.toLowerCase()];
};
