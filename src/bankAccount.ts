export class BankAccount {
  private _balance: number = 0;
  private isOpen: boolean = false;

  open(): void {
    if (this.isOpen) throw new ValueError();
    this.isOpen = true;
    this._balance = 0;
  }

  close(): void {
    if (!this.isOpen) throw new ValueError();
    this.isOpen = false;
  }

  deposit(amount: number): void {
    this.checkStatus();
    if (amount < 0) throw new ValueError();
    this._balance += amount;
  }

  withdraw(amount: number): void {
    this.checkStatus();
    if (amount < 0 || amount > this._balance) throw new ValueError();
    this._balance -= amount;
  }

  get balance(): number {
    this.checkStatus();
    return this._balance;
  }

  private checkStatus(): void {
    if (!this.isOpen) throw new ValueError();
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
