interface IDatabaseReader {
  getAll: (table: string) => Array<object>;
  getById: (table: string, id: number) => object;
}

interface IDatabaseWriter {
  create: (table: string, newElement: object) => object;
  update: (table: string, changedFields: object, id: number) => object;
  delete: (table: string, id: number) => string;
}

export { IDatabaseReader, IDatabaseWriter };
