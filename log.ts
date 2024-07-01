import { devLoggerFile } from './fileSystem';

const [, , levelParam, ...messageParams] = process.argv;
const level = Number(levelParam);
const message = messageParams.join(' ');

function __init__<L, M>(level: L, message: M): void {
  devLoggerFile(level as string, message as string);
}
__init__(level, message);
