import { run } from "./app/app";
// import "./main.css";
import "./main.scss";
import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/component.service";
const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);
//to check if that everytime a new file is generated with the different hash
console.log("J");
