import { Display } from "../Display.js";
import { EnumFrames } from "../Enums/EnumFrames.js";
import { configureDisplay } from "../Utils.js";

const drawUpdateForm = function (data, config, id) {
    config = configureDisplay(config, EnumFrames.Edit)
    config.id = id
    Display(data, config)
}

export { drawUpdateForm }