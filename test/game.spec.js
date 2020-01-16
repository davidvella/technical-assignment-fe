import { Weapons } from "../src/js/weapon";
import { calculateWinner } from "../src/js/game";

describe("game", () => {
	describe("calculateWinner", () => {
		it("rock loses paper", () => {
			// Arrange
			const rock = Weapons.rock;
			const paper = Weapons.paper;

			// Act
			const res = calculateWinner(rock, paper);

			// Assert
			expect(res).toBe(2);
		});

		it("paper beats rock", () => {
			// Arrange
			const rock = Weapons.rock;
			const paper = Weapons.paper;

			// Act
			const res = calculateWinner(paper, rock);

			// Assert
			expect(res).toBe(1);
		});

		it("paper loses scissors", () => {
			// Arrange
			const scissor = Weapons.scissors;
			const paper = Weapons.paper;

			// Act
			const res = calculateWinner(paper, scissor);

			// Assert
			expect(res).toBe(2);
		});

		it("rock beats scissors", () => {
			// Arrange
			const scissor = Weapons.scissors;
			const rock = Weapons.rock;

			// Act
			const res = calculateWinner(rock, scissor);

			// Assert
			expect(res).toBe(1);
		});

		it("scissors loses rock", () => {
			// Arrange
			const scissor = Weapons.scissors;
			const rock = Weapons.rock;

			// Act
			const res = calculateWinner(scissor, rock);

			// Assert
			expect(res).toBe(2);
		});

		it("paper equals paper", () => {
			// Arrange
			const paper2 = Weapons.paper;
			const paper = Weapons.paper;

			// Act
			const res = calculateWinner(paper, paper2);

			// Assert
			expect(res).toBe(0);
		});

		it("rock equals rock", () => {
			// Arrange
			const rock = Weapons.rock;
			const rock2 = Weapons.rock;

			// Act
			const res = calculateWinner(rock, rock2);

			// Assert
			expect(res).toBe(0);
		});

		it("scissors equals scissors", () => {
			// Arrange
			const scissor = Weapons.scissors;
			const scissors = Weapons.scissors;

			// Act
			const res = calculateWinner(scissor, scissors);

			// Assert
			expect(res).toBe(0);
		});
	});
});
