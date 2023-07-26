import { Display } from "../Display.js";
import { EnumFrames } from "../Frames/EnumFrames.js";

const drawUpdateForm = function (data, conf, id) {
    conf.display = EnumFrames.Edit;
    conf.id = id
    Display(data, conf)
}

export { drawUpdateForm }