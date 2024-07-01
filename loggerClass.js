"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.devLogger = exports.consoleLogger = exports.loggerLevel = void 0;
var loggerLevel;
(function (loggerLevel) {
    loggerLevel[loggerLevel["Verbose"] = 1] = "Verbose";
    loggerLevel[loggerLevel["Info"] = 2] = "Info";
    loggerLevel[loggerLevel["Warning"] = 3] = "Warning";
    loggerLevel[loggerLevel["Error"] = 4] = "Error";
})(loggerLevel || (exports.loggerLevel = loggerLevel = {}));
var logger = /** @class */ (function () {
    function logger() {
    }
    return logger;
}());
var consoleLogger = /** @class */ (function (_super) {
    __extends(consoleLogger, _super);
    function consoleLogger(datetime, loggerlevel, event) {
        var _this = _super.call(this) || this;
        _this.datetime = datetime;
        _this.loggerlevel = loggerlevel;
        _this.event = event;
        return _this;
    }
    consoleLogger.prototype.logMessage = function () {
        var logMessage = "\"Log ".concat(loggerLevel[this.loggerlevel], "\" has been saved. - ").concat(this.event);
        return logMessage;
    };
    consoleLogger.prototype.getLogInfo = function (logMessage) {
        var logInfo = "".concat(this.loggerlevel, " - [Console] - ").concat(this.datetime, " - ").concat(this.event);
        return logInfo;
    };
    return consoleLogger;
}(logger));
exports.consoleLogger = consoleLogger;
var devLogger = /** @class */ (function (_super) {
    __extends(devLogger, _super);
    function devLogger(datetime, loggerlevel, event) {
        if (loggerlevel === void 0) { loggerlevel = loggerLevel.Info; }
        var _this = _super.call(this) || this;
        _this.datetime = datetime;
        _this.loggerlevel = loggerlevel;
        _this.event = event;
        return _this;
    }
    devLogger.prototype.logMessage = function () {
        var logMessage = "\"Log ".concat(loggerLevel[this.loggerlevel], "\" has been saved. - ").concat(this.event);
        return logMessage;
    };
    devLogger.prototype.getLogInfo = function (logMessage) {
        var logInfo = "".concat(this.loggerlevel, " - [DevCommit] - ").concat(this.datetime, " - ").concat(this.event);
        return logInfo;
    };
    return devLogger;
}(logger));
exports.devLogger = devLogger;
