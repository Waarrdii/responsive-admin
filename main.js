
import { addElement } from "./modules/container.js";
import {addLogo} from "./modules/Logo.js";
import { createSidebar } from "./modules/sidebar.js";
import { createCard } from "./modules/card.js";
import {createTable} from "./modules/script.js";

window.addEventListener("load", addElement);
window.addEventListener("load", addLogo);
window.addEventListener("load", createSidebar);
window.addEventListener("load", createCard);
window.addEventListener("load", createTable);


