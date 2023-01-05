import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";
declare const tables: readonly [
  {
    readonly name: "Aquarius";
    readonly columns: readonly [
      {
        readonly name: "birth_place";
        readonly type: "string";
      },
      {
        readonly name: "birth_date";
        readonly type: "datetime";
      },
      {
        readonly name: "status";
        readonly type: "string";
      },
      {
        readonly name: "age";
        readonly type: "int";
      },
      {
        readonly name: "sign";
        readonly type: "string";
      },
      {
        readonly name: "gender";
        readonly type: "string";
      },
      {
        readonly name: "name";
        readonly type: "string";
      },
      {
        readonly name: "description";
        readonly type: "text";
      }
    ];
  }
];
export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;
export type Aquarius = InferredTypes["Aquarius"];
export type AquariusRecord = Aquarius & XataRecord;
export type DatabaseSchema = {
  Aquarius: AquariusRecord;
};
declare const DatabaseClient: any;
export declare class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions);
}
export declare const getXataClient: () => XataClient;
export {};
