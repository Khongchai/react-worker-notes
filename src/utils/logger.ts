export class Logger {
  private static logged = false;

  static clearLog() {
    Logger.logged = false;
  }

  static logOnce(object: any) {
    if (!Logger.logged) {
      console.log(object);

      Logger.logged = true;
    }
  }
}
