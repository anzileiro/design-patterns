import BusinessFactory from '@application/creational/factory-method/factory/BusinessFactory';
import PersonalFactory from '@application/creational/factory-method/factory/PersonalFactory';

export default class FactoryMethod {
    private businessFactory: BusinessFactory;

    private personalFactory: PersonalFactory;

    public constructor() {
      this.businessFactory = new BusinessFactory();
      this.personalFactory = new PersonalFactory();
    }

    private businessFactoryHandler(): void {
      const businessAccount = this.businessFactory.getAccount(123456);

      businessAccount.signIn();
      businessAccount.signOut();
    }

    private personalFactoryHandler(): void {
      const personalAccount = this.personalFactory.getAccount('anderson.anzileiro@hotmail.com');

      personalAccount.signIn();
      personalAccount.signOut();
    }

    public handle(): void {
      this.businessFactoryHandler();
      this.personalFactoryHandler();
    }
}
