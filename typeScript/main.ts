class Account {
    accNo:number;
    balance:number;

    constructor(accNumber, balance){
        this.accNo = accNumber;
        this.balance = balance;
    }

    debitAmount() {
        return "amount"
    }
    credittAmount() {
        return "amount"
    }
    getBalance() {
        return this.balance;
    }
}


interface IAccount {

    dateOfOpening:string;
    addCustomer();
    removeCustomer();
}



class SavingAccount extends Account implements IAccount{

    minBalance:number;
    dateOfOpening = "1/1/2022";

    constructor(accNo, balance, minBalance){
        super(accNo, balance);

        this.minBalance = minBalance;
    }

    addCustomer() {
        return "Customer added";
    }

    removeCustomer() {
        return "Customer removed";
    }

}

class CurrentAccount extends Account implements IAccount{

    inerestRate:number;
    dateOfOpening = "1/1/2022";

    constructor(accNo, balance, inerestRate){
        super(accNo, balance);

        this.inerestRate = inerestRate;
    }

    addCustomer() {
        return "Customer added";
    }

    removeCustomer() {
        return "Customer removed";
    }

}

let client = new Account(123456, 0);
// console.log(client);
// console.log(client.getBalance());
