export class Usuario {

    constructor(input?: any) {
    
        this.nombres = input.nombres? input.nombres : undefined;

        this.apellidos = input.apellidos? input.apellidos : undefined;
        this.userName = input.userName? input.userName : undefined;
        this.email = input.email? input.email : undefined;
        this.pass = input.pass? input.pass : undefined;

    }
 

   
    nombres: string;
    apellidos: string;
    userName: string;
    email: string;
    pass:string;
   
}
