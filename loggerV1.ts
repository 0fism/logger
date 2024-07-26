import { exec, ExecException } from "child_process";
import * as readline from "readline";
import { consoleLoggerFile } from "./fileSystem";
import { devLogger } from "./loggerClass";

const readlines = readline.createInterface({ input: process.stdin });
const regex = /log\.js/;

async function terminalAduit(input: string): Promise<void> {
  return new Promise((resolve) => {
    exec(
      input,
      (error: ExecException | null, stdout: string, stderr: string) => {
        const logger = new devLogger();
        if (error) {
          console.error(`${stderr}`);
          consoleLoggerFile(`${stderr}`);
        }
        if (regex.test(stdout)) {
          console.log(logger.logMessage());
        }
        resolve();
        if (stdout.length > 1) {
          console.log(`stdout: ${stdout}`);
        }
      }
    );
  });
}

async function terminalInput(): Promise<void> {
  while (true) {
    const command = await new Promise<string>((resolve) => {
      readlines.question("> ", (input) => {
        resolve(input);
      });
    });
    await terminalAduit(command);
  }
}

terminalInput();
