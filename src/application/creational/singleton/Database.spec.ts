import Database from '@application/creational/singleton/Database';

describe('Creational - Singleton', () => {
  test('The database instance must be unique and globally accessible ', () => {
    const databaseOne = Database.getInstance();

    const databaseTwo = Database.getInstance();

    expect(databaseOne === databaseTwo).toBeTruthy();
  });

  test('The database instance must be different from each other', () => {
    const databaseDynamic = new Database();

    const databaseStatic = Database.getInstance();

    expect(databaseDynamic === databaseStatic).toBeFalsy();
  })
});
