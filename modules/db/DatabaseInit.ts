import { MongoClient } from "mongodb";

export class DatabaseConnection {
  databaseClient: MongoClient;

  constructor(connectionString: string) {
    this.databaseClient = new MongoClient(connectionString, {
      useUnifiedTopology: true,
    });
    this.init();
  }

  private async init() {
    await this.databaseClient.connect((error, result) => {
      if (error) {
        console.log(`Error during database connection: ${error}`);
        return;
      }
      console.log(`Database connection sucsessful`);
    });
  }
}
