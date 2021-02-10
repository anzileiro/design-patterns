import AccountFactory from '@application/creational/factory-method/factory/AccountFactory';
import Personal from '@application/creational/factory-method/model/Personal';

export default class PersonalFactory extends AccountFactory {
  public getAccount(identifier: string): Personal {
    return new Personal(identifier);
  }
}
