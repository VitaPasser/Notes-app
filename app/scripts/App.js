import { data } from './Data.js'
import { Display } from './Display.js'
import { EnumWindows } from './EnumWindow.js'

const defaultConf = {display: EnumWindows.Index}

Display(data, defaultConf)