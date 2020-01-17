import {
	Weapon,
	getRandomWeapon,
	convertStringToWeapon
} from "../src/js/weapon";

describe("weapon", () => {
	describe("getRandomWeapon", () => {
		it("should return object of type weapon", () => {
			// Arrange

			// Act
			const obj = getRandomWeapon();

			// Assert
			expect(obj).toBeTruthy();
			expect(obj).toBeInstanceOf(Weapon);
		});
  });
  
  describe("convertStringToWeapon", () => {
		it("should return object of type weapon when scissors specified", () => {
			// Arrange

			// Act
			const obj = convertStringToWeapon("scissors");

			// Assert
			expect(obj).toBeTruthy();
			expect(obj).toBeInstanceOf(Weapon);
    });

    it("should return object of type weapon when rock specified", () => {
			// Arrange

			// Act
			const obj = convertStringToWeapon("rock");

			// Assert
			expect(obj).toBeTruthy();
			expect(obj).toBeInstanceOf(Weapon);
    });

    it("should return object of type weapon when paper specified", () => {
			// Arrange

			// Act
			const obj = convertStringToWeapon("paper");

			// Assert
			expect(obj).toBeTruthy();
			expect(obj).toBeInstanceOf(Weapon);
    });
    
    it("should return undefined when incorrect string specified", () => {
			// Arrange

			// Act
			const obj = convertStringToWeapon("test");

			// Assert
			expect(obj).toBeUndefined();
		});
	});
});
