export default class Database {
    private static instance: Database = null;

    public static getInstance(): Database {
      if (Database.instance === null) {
        Database.instance = new Database();
      }

      return Database.instance;
    }
}
