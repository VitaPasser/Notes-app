import { data } from './Data.js'
import { Display } from './Display.js'
import { EnumFrames } from './Enums/EnumFrames.js'

const defaultConf = { display: EnumFrames.Index, next_create_id: 7, id: null }

Display(data, defaultConf)