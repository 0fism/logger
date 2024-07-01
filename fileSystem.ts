import * as fs from 'fs';
import { loggerLevel, consoleLogger, devLogger } from './loggerClass';

export function consoleLoggerFile(terminalError : string){
    const loggerType = (loggerLevel[terminalError as keyof typeof loggerLevel] || "Error") as loggerLevel;
    const newConsoleLogger = new consoleLogger(new Date().toISOString(), loggerType || loggerType, terminalError);
    const logMessage = newConsoleLogger.logMessage()
    const logInfo = newConsoleLogger.getLogInfo(logMessage);
    writeToFile(logInfo);
};

export function devLoggerFile(level: string, message: string) {
  const newDevLogger = new devLogger(new Date().toISOString(), loggerLevel[level], message || 'This is a message');
  const logMessage = newDevLogger.logMessage();
  const logInfo = newDevLogger.getLogInfo(logMessage);
  writeToFile(logInfo);
}

async function writeToFile(logInfo: string){
    try{
        const errMessage = `${logInfo}\n------------------------------------------------------\n`;
        await fs.promises.appendFile('LOG.txt', errMessage);
    }catch (err) {
        console.log(err);
    }
}



