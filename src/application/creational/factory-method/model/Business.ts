import Account from '@application/creational/factory-method/model/Account';

export default class Business implements Account {
  private token: number;

  public constructor(token: number) {
    this.token = token;
  }

  signIn(): void {
    console.log(`The business account ${this.token} has been sign in`);
  }

  signOut(): void {
    console.log(`The business account ${this.token} has been sign out`);
  }
}
