import Personal from '@application/creational/factory-method/model/Personal';
import AccountFactory from '@application/creational/factory-method/AccountFactory';
import Account from '@application/creational/factory-method/model/Account';

export default class PersonalFactory extends AccountFactory {
  public getAccount(identifier: string): Account {
    return new Personal(identifier);
  }
}
