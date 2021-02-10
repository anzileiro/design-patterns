import Account from '@application/creational/factory-method/model/Account';

export default abstract class AccountFactory {
    public abstract getAccount(identifier: string | number): Account;
}
