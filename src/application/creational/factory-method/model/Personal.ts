import Account from '@application/creational/factory-method/model/Account';

export default class Personal implements Account {
 private email: string;

 public constructor(email: string) {
   this.email = email;
 }

 signIn(): void {
   if (this.email === 'anderson.anzileiro@gmail.com') {
     console.log(`Welcome ${this.email} you are our best!`);
   }

   console.log(`The personal account with the identifier ${this.email} has been sign in`);
 }

 signOut(): void {
   console.log(`The personal account with the identifier ${this.email} has been sign out`);
 }
}
