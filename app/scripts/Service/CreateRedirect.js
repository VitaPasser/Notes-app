import { Display } from "../Display.js";
import { EnumFrames } from "../Enums/EnumFrames.js";
import { configureDisplay } from '../Utils.js';

const drawCreateForm = function (data, config) {
    
    config = configureDisplay(config, EnumFrames.Create)
    Display(data, config)
}

export { drawCreateForm }