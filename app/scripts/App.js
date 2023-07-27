import { data } from './Data.js'
import { Display } from './Display.js'
import { EnumFrames } from './Enums/EnumFrames.js'

try {
    
    const defaultConf = { display: EnumFrames.Index, display_last: null, next_create_id: 7, id: null }
    Display(data, defaultConf)

} catch (error) {
    console.log(error.message)
    console.log(error.cause)
}