// export class Contact{

//     // name: string;
//     // phone: string;
//     // descr: string;

//     constructor( public name : string ,   public phone : string , public descr ?: string){
//         this.name = name;
//         this.phone = phone;
//         this.descr = this.name + ' ' + this.phone;
//     }
// }
export class Tracker{

    constructor(public empname : string , public empid : string , public taskid : string , public taskname : string , public date : string  ){
            this.empname = empname;
            this.empid = empid;
            this.taskid = taskid;
            this.taskname = taskname;
            this.date = date;
    }

}