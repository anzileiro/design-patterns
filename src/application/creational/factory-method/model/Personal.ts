import Account from '@application/creational/factory-method/model/Account';

export default class Personal implements Account {
  private email: string;

  public constructor(email: string) {
    this.email = email;
  }

  signIn(): void {
    console.log(`The personal account ${this.email} has been sign in`);
  }

  signOut(): void {
    console.log(`The personal account ${this.email} has been sign out`);
  }
}
