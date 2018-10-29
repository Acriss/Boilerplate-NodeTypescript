import { IDatabaseReader } from "../interfaces/IDatabaseInteractions";

export class DatabaseReader implements IDatabaseReader {
  private driver: IDatabaseReader;

  constructor(driver: IDatabaseReader) {
    this.driver = driver;
  }

  getAll = (table: string) => {
    return this.driver.getAll(table);
  };

  getById = (table: string, id: number) => {
    return this.driver.getById(table, id);
  };
}
