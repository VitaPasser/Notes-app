import { Display } from '../Display.js'
import { EnumFrames } from '../Enums/EnumFrames.js'

const createNote = function(data, conf) {
    
    conf.display = EnumFrames.Index == conf.display ? EnumFrames.Archives : EnumFrames.Index
    Display(data, conf)
}

export {createNote}