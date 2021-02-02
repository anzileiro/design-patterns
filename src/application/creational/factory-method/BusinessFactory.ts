import Business from '@application/creational/factory-method/model/Business';
import AccountFactory from '@application/creational/factory-method/AccountFactory';
import Account from '@application/creational/factory-method/model/Account';

export default class BusinessFactory extends AccountFactory {
  public getAccount(identifier: number): Account {
    return new Business(identifier);
  }
}
