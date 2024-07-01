"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fileSystem_1 = require("./fileSystem");
var _a = process.argv, levelParam = _a[2], messageParams = _a.slice(3);
var level = Number(levelParam);
var message = messageParams.join(' ');
function __init__(level, message) {
    (0, fileSystem_1.devLoggerFile)(level, message);
}
__init__(level, message);
