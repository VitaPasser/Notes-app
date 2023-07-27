import { Display } from "../Display.js";
import { configureDisplay } from "../Utils.js";

const toBack = function (data, config, event) {
    event.preventDefault();
    config = configureDisplay(config, config.display_last)
    Display(data, config)
}

export default toBack