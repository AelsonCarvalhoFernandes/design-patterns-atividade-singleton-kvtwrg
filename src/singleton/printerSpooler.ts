import type { PrinterJob } from '../types.js';

export class PrinterSpooler {

  private instance: PrinterSpooler;

  private jobs : Array<PrinterJob>;

  private constructor(){}

  public getInstance(){

    if(this.instance == null){
      this.instance = new PrinterSpooler();

      return this.instance;
    }
  }

  public addJog(job : PrinterJob){
    this.jobs.push(job);
  }

}
