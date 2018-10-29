import { IDatabase } from "../../interfaces/IDatabaseInteractions";

export class Database implements IDatabase {
  protected driver: IDatabase;

  constructor(driver: IDatabase) {
    this.driver = driver;
  }

  getAll = (table: string): Promise<Array<object>> => {
    return this.driver.getAll(table);
  };

  getById = (table: string, id: number): Promise<object> => {
    return this.driver.getById(table, id);
  };

  create = (table: string, newElement: object): Promise<object> => {
    return this.driver.create(table, newElement);
  };

  update = (
    table: string,
    changedFields: object,
    id: number
  ): Promise<object> => {
    return this.driver.update(table, changedFields, id);
  };

  delete = (table: string, id: number): Promise<any> => {
    return this.driver.delete(table, id);
  };
}

const DatabaseFactory = (driver: IDatabase): Database => {
  return new Database(driver);
};
