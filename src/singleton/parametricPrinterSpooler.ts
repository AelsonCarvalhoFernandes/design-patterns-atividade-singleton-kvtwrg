import type { PrinterJob } from '../types.js';

export class ParametricPrinterSpooler {

    private static instances: Array<ParametricPrinterSpooler> = [];

    private jobs: Array<PrinterJob> = [];

    private constructor(public name: String){

    }


    static getInstance(name : String){

        if(this.instances.length < 3){

            if(this.instances.length == 0){
                let instance: ParametricPrinterSpooler = new ParametricPrinterSpooler(name);
    
                this.instances.push(instance);
            }else{
                if(this.instances[0].name == name){
                    return this.instances;
                }else{
                    let instance: ParametricPrinterSpooler = new ParametricPrinterSpooler(name);
    
                    this.instances.push(instance);

                    return this.instances[1];
                }
            }

        }
    
        let instances = this.instances;

        return instances;
      }
    
      addJob(job : PrinterJob){
        this.jobs.push(job);
      }
    
      listAllJobs(){
        let jobs = this.jobs.slice;
        return jobs;
      }
    
      getNextJob(){
    
        return this.jobs.shift();
    
      }
}
