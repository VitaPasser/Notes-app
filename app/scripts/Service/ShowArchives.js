import { Display } from '../Display.js'
import { EnumFrames } from '../Enums/EnumFrames.js'
import { configureDisplay } from '../Utils.js';

const createNote = function(data, config) {
    config = configureDisplay(config, 
        EnumFrames.Index == config.display 
        ? EnumFrames.Archives 
        : EnumFrames.Index)

    Display(data, config)
}

export {createNote}