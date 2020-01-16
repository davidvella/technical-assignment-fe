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