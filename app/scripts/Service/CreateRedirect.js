import { Display } from "../Display.js";
import { EnumFrames } from "../Frames/EnumFrames.js";

const drawCreateForm = function (data, conf) {
    conf.display = EnumFrames.Create;
    Display(data, conf)
}

export { drawCreateForm }