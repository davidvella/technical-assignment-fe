import "core-js/stable";
import "regenerator-runtime/runtime";

import logger from "./logger";
import { setupRockPaperScissors } from "./game";

import "../css/index.scss";

logger("it works well!");

// Sets up the game on the page.
setupRockPaperScissors();
