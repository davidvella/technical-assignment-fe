import { Weapon, getRandomWeapon } from "../src/js/weapon";

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
});
