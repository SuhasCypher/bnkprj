export class Bank {

    branch: string;
    
    acc_holder: string;
    acc_num; string;
    acc_type: string;
    acc_bal: string;
    email: string;
    phone: string;
    address: string;
    

    constructor(branch,acc_holder,acc_type,acc_bal,acc_num,email,phone,address,){

        this.branch=branch;
        this.email=email;
        this.phone=phone;
        this.address=address;
        this.acc_holder=acc_holder;
        this.acc_bal=acc_bal;
        this.acc_num=acc_num;
        this.acc_type=acc_type;
        

    }
}
