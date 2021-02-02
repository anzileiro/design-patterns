import PersonalFactory from '@application/creational/factory-method/PersonalFactory';
import BusinessFactory from '@application/creational/factory-method/BusinessFactory';

export default class FactoryMethod {
  private personalAccountHandler(): void {
    const personalFactory = new PersonalFactory();

    const personalAccount = personalFactory.getAccount('anderson.anzileiro@gmail.com');

    personalAccount.signIn();
    personalAccount.signOut();
  }

  private businessAccountHandler(): void {
    const businessFactory = new BusinessFactory();

    const businessAccount = businessFactory.getAccount(25101994);

    businessAccount.signIn();
    businessAccount.signOut();
  }

  public handle(): void {
    this.personalAccountHandler();
    this.businessAccountHandler();
  }
}
