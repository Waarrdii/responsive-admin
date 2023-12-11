import { addElement } from "./modules/container.js";
window.addEventListener("load", addElement);

import {addLogo} from "./modules/Logo.js";
import { createSidebar } from "./modules/sidebar.js";
window.addEventListener("load", addLogo);

window.addEventListener("load", createSidebar);
// import {createTable} from "./modules/script.js";
// window.addEventListener("load", createTable);


