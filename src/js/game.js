import { convertStringToWeapon, getRandomWeapon } from "./weapon";
/**
 * Give weapon 1 and weapon 2 calculate the result
 * @param {*} weapon1
 * @param {*} weapon2
 * @returns If 0 it is a draw. If 1 then weapon1 beats weapon 2. If 2 then weapon 1 loses to weapon 2.
 */
export const calculateWinner = (weapon1, weapon2) => {
	if (weapon1 === weapon2) return 0;
	return weapon1.beats.some(beats => beats === weapon2.name) ? 1 : 2;
};

/**
 * Add event to elements on the dom for rock paper scissors.
 */
export const setupRockPaperScissors = () => {
	// The player 1 score
	let p1Score = 0;
	// The player 2 score
	let p2Score = 0;

	// Set the player scores in the dom.
	const updateScore = () => {
		const player1Score = document.querySelector(".player1-score p");
		const player2Score = document.querySelector(".player2-score p");
		player1Score.textContent = p1Score;
		player2Score.textContent = p2Score;
	};

	// Add button on click event receiver for the player 2 options
	const addOptionsEventReceivers = () => {
		const options = document.querySelectorAll("#player2-options button");
		options.forEach(option => {
			option.addEventListener("click", function() {
				playGame(this.getAttribute("data-cmd"));
			});
		});
	};

	// Add button on click event receiver for the reset button
	const addResetButtonEventReceivers = () => {
		const button = document.querySelector("#reset-button");

		button.addEventListener("click", function() {
			// Get options again
			const message = document.querySelector("#message h2");
			const player1Hand = document.querySelector("#player1-hand");
			const player2Hand = document.querySelector("#player2-hand");

			// Set values on screen
			message.textContent = "Reset";
			player1Hand.className = `hand`;
			player2Hand.className = `hand`;
			p1Score = 0;
			p2Score = 0;
			updateScore();
		});
	};

	// The logic for playing rock paper scissor as written here: https://en.wikipedia.org/wiki/Rock_paper_scissors
	const playGame = player2Option => {
		const player1Hand = document.querySelector("#player1-hand");
		const player2Hand = document.querySelector("#player2-hand");
		const message = document.querySelector("#message h2");

		// Set Random Weapon for player 1
		const player1Weapon = getRandomWeapon();
		player1Hand.className = `hand ${player1Weapon.name}`;

		// If player 2 option is undefined, must have set ai as option
		const player2Weapon = Object.is(
			convertStringToWeapon(player2Option),
			undefined
		)
			? getRandomWeapon()
			: convertStringToWeapon(player2Option);
		player2Hand.className = `hand ${player2Weapon.name}`;

		const result = calculateWinner(player1Weapon, player2Weapon);

		switch (result) {
			// It is a draw
			case 0:
				message.textContent = "It is a draw";
				break;
			// Player 1 wins
			case 1:
				message.textContent = "Player 1 wins";
				p1Score++;
				break;
			// Player 2 wins
			case 2:
				message.textContent = "Player 2 wins";
				p2Score++;
				break;
		}
		updateScore();
	};

	addOptionsEventReceivers();
	addResetButtonEventReceivers();
};
