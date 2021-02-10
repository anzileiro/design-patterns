import AccountFactory from '@application/creational/factory-method/factory/AccountFactory';
import Business from '@application/creational/factory-method/model/Business';

export default class BusinessFactory extends AccountFactory {
  public getAccount(identifier: number): Business {
    return new Business(identifier);
  }
}
