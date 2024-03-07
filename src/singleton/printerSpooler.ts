import { arrayBuffer } from 'stream/consumers';
import type { PrinterJob } from '../types.js';

export class PrinterSpooler {

  private static instance: PrinterSpooler;

  private jobs: Array<PrinterJob> = [];

  private constructor(){

  }

  static getInstance(){

    if(this.instance === undefined){
      this.instance = new PrinterSpooler();

      let instance = this.instance;
      return instance;
    }

    let instance = this.instance;
    return instance;
  }

  addJob(job : PrinterJob){
    this.jobs.push(job);
  }

  listAllJobs() : Array<PrinterJob>{
    let jobs: Array<PrinterJob> = this.jobs.slice() ;

    return jobs.reverse();

  }

  getNextJob(){
    let job = this.jobs[0];
    this.jobs.shift();
    return job
  }

  clearJobs(){
    this.jobs = [];
  }

}
