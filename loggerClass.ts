export enum loggerLevel {
  "Verbose" = 1,
  "Info" = 2,
  "Warning" = 3,
  "Error" = 4,
}

abstract class logger {
  protected abstract readonly datetime?: string;
  protected abstract readonly loggerlevel?: loggerLevel;
  protected abstract readonly event?: string;

  abstract logMessage(): string;
  abstract getLogInfo(logMessage: string): string;
}

export class consoleLogger extends logger {
  public constructor(
    protected datetime?: string,
    protected loggerlevel?: loggerLevel,
    protected event?: string
  ) {
    super();
  }

  logMessage(): string {
    const logMessage = `\"Log ${
      loggerLevel[this.loggerlevel]
    }\" has been saved. - ${this.event}`;
    return logMessage;
  }

  getLogInfo(logMessage: string): string {
    const logInfo = `${this.loggerlevel} - [Console] - ${this.datetime} - ${this.event}`;
    return logInfo;
  }
}

export class devLogger extends logger {
  public constructor(
    protected datetime?: string,
    protected loggerlevel: loggerLevel = loggerLevel.Info,
    protected event?: string
  ) {
    super();
  }

  logMessage(): string {
    const logMessage = `\"Log ${
      loggerLevel[this.loggerlevel]
    }\" has been saved. - ${this.event}`;
    return logMessage;
  }

  getLogInfo(logMessage: string): string {
    const logInfo = `${this.loggerlevel} - [DevCommit] - ${this.datetime} - ${this.event}`;
    return logInfo;
  }
}
