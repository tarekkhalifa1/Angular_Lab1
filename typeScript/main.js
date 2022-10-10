var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(accNumber, balance) {
        this.accNo = accNumber;
        this.balance = balance;
    }
    Account.prototype.debitAmount = function () {
        return "amount";
    };
    Account.prototype.credittAmount = function () {
        return "amount";
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(accNo, balance, minBalance) {
        var _this = _super.call(this, accNo, balance) || this;
        _this.dateOfOpening = "1/1/2022";
        _this.minBalance = minBalance;
        return _this;
    }
    SavingAccount.prototype.addCustomer = function () {
        return "Customer added";
    };
    SavingAccount.prototype.removeCustomer = function () {
        return "Customer removed";
    };
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(accNo, balance, inerestRate) {
        var _this = _super.call(this, accNo, balance) || this;
        _this.dateOfOpening = "1/1/2022";
        _this.inerestRate = inerestRate;
        return _this;
    }
    CurrentAccount.prototype.addCustomer = function () {
        return "Customer added";
    };
    CurrentAccount.prototype.removeCustomer = function () {
        return "Customer removed";
    };
    return CurrentAccount;
}(Account));
var client = new Account(123456, 0);
// console.log(client);
// console.log(client.getBalance());
