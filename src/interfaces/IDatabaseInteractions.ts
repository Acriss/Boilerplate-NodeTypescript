interface IDatabase {
  getAll: (table: string) => Promise<Array<object>>;
  getById: (table: string, id: number) => Promise<object>;
  create: (table: string, newElement: object) => Promise<object>;
  update: (table: string, changedFields: object, id: number) => Promise<object>;
  delete: (table: string, id: number) => Promise<any>;
}

type IDatabaseReader = Pick<IDatabase, "getAll" | "getById">;
type IDatabaseWriter = Pick<IDatabase, "create" | "update" | "delete">;

export { IDatabase, IDatabaseReader, IDatabaseWriter };
