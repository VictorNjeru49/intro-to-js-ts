class BankAccount {
    //Properties
    protected accountNumber: string;
    protected balance: number;
    protected accountType: string;
    //Constructor
    constructor(_accountNumber: string, _balance: number, 
        _accountType: string) {
        this.accountNumber =_accountNumber;
        this.balance = _balance;
        this.accountType= _accountType;
    }
        //Methods
    getAccountNumber(): string{
        return this.accountNumber;
    }
    getBalance(): number{
        return this.balance;
    }
    getAccountType(): string{
        return this.accountType;
    }
}

class BankAccount2 extends BankAccount {
   
    constructor(accountNumber: string, balance: number, 
        accountType: string) {
        super(accountNumber, balance, accountType);
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.accountType = accountType;
    }

    public deposit(amount: number): void {
        this.balance += amount;
        console.log(`1. Deposited ${amount} to account 
            ${this.accountNumber}. 
            New balance is ${this.balance}.
            The type of deposit is ${this.accountType}.`);
    }
    public withdraw(amount: number, newAccountType: string): void {
        if (amount > this.balance) {
            console.log(`Insufficient funds for withdrawal of 
                ${amount} from account ${this.accountNumber}.`);
        } else {
            this.balance -= amount;
            this.accountType = newAccountType;
            console.log(`2. Withdrew ${amount} from account 
                ${this.accountNumber}. 
                New balance is ${this.balance}.
                The type of withdrawal is ${this.accountType}.`);
        }
    }  public transfer(amount: number, toAccount: BankAccount, 
        newAccountType: string): void {
        if (amount > this.balance) {
            console.log(`Insufficient funds for transfer of 
                ${amount} from account ${this.accountNumber} 
                to account ${toAccount.getAccountNumber()}.`);
        } else {
            this.balance -= amount;
            if (toAccount instanceof BankAccount2) {
                toAccount.deposit(amount);
            } else {
                console.log(`Cannot transfer to the specified 
                    account as it does not support deposits.`);
            }
            this.accountType = newAccountType;
            console.log(`3. Transferred ${amount} from account 
                ${this.accountNumber} to account 
                ${toAccount.getAccountNumber()}. 
                New balance is ${this.balance}.
                The type of transfer is ${this.accountType}.`);
        }
    }
    public getAccountDetails(): void {
        console.log(`4. Account Number: ${this.accountNumber}, 
            Balance: ${this.balance}, Account Type: 
            ${this.accountType}`);
    }
    public setAccountType(accountType: string): void {
        this.accountType = accountType;
        console.log(`5. Account type changed to ${this.accountType} 
            for account ${this.accountNumber}.`);
    }
    public validateAccount(amount: number): boolean {
        if (amount > this.balance) {
            console.log(`Insufficient funds for transaction of 
                ${amount} from account ${this.accountNumber}.`);
            return false;
        } else {
            console.log(`Sufficient funds for transaction of 
                ${amount} from account ${this.accountNumber}.`);
            return true;
        }
    }
}


class SavingsAccount extends BankAccount2 {
    public interestRate: number;
    protected timelapse: Date;

    constructor(accountNumber: string, balance: number, 
        accountType: string, _interestRate: number,_timelapse: Date) {
        super(accountNumber, balance, accountType);
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.accountType = accountType;
        this.interestRate = _interestRate;
        this.timelapse = _timelapse;
    }
    getTimelapse(): number {
        return new Date().getFullYear() - this.timelapse.getFullYear();
    }
    public calculateInterest(): number {
        const interest = this.balance * (this.interestRate / 100);
        this.balance += interest;
        console.log(`6. Interest calculated for account 
            ${this.accountNumber} is ${interest}
            And the new Total Amount is ${this.balance}.`);
        return interest;
    }
    public getAccountDetails(): void {
            const timelapse = this.getTimelapse();

        console.log(`7. Account Number: ${this.accountNumber}, 
            Balance: ${this.balance}, 
            Account Type: ${this.accountType}, 
            Interest Rate: ${this.interestRate} %
            Timelapse: ${timelapse} years`);
    }

    public compoundInterest(): (void | number) {
        const timelapse = this.getTimelapse();

        const compoundInterest = this.balance * Math.pow((1 + this.interestRate / 100),timelapse) - this.balance;
        this.balance += compoundInterest;
        console.log(`8. Compound Interest calculated for account 
            ${this.accountNumber} is ${compoundInterest}
            And the new Total Amount is ${this.balance}.`);
        return compoundInterest;
    }
}

const johnDoeAccount1 = new SavingsAccount("123456789", 1000, 
    "Savings", 5, new Date("2023-01-01"));
johnDoeAccount1.getAccountDetails();
johnDoeAccount1.calculateInterest()
johnDoeAccount1.getAccountDetails();
johnDoeAccount1.compoundInterest()

const johnDoeAccount = new BankAccount2("123456789", 
1000, "Savings");
johnDoeAccount.getAccountDetails();

johnDoeAccount.deposit(500);
johnDoeAccount.withdraw(200, "ATM");

const jonhDoe =new BankAccount2("987654321", 1000, "Savings");
johnDoeAccount.transfer(300, new BankAccount2("987654321", 
500, "Checking"),"Check");
jonhDoe.getAccountDetails();

johnDoeAccount.getAccountDetails();
johnDoeAccount.setAccountType("Business");
johnDoeAccount.getAccountDetails();

jonhDoe.deposit(600);
