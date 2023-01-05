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
	},
	{
		readonly name: "Capricorn";
		readonly columns: readonly [
			{
				readonly name: "name";
				readonly type: "string";
			},
			{
				readonly name: "birth_place";
				readonly type: "string";
			},
			{
				readonly name: "birth_date";
				readonly type: "datetime";
			},
			{
				readonly name: "Status";
				readonly type: "string";
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
				readonly name: "description";
				readonly type: "text";
			},
			{
				readonly name: "age";
				readonly type: "int";
			}
		];
	},
	{
		readonly name: "Aries";
		readonly columns: readonly [
			{
				readonly name: "name";
				readonly type: "string";
			},
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
				readonly name: "description";
				readonly type: "text";
			},
			{
				readonly name: "imageURL";
				readonly type: "string";
			}
		];
	},
	{
		readonly name: "Scorpio";
		readonly columns: readonly [
			{
				readonly name: "name";
				readonly type: "string";
			},
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
				readonly name: "sign";
				readonly type: "string";
			},
			{
				readonly name: "age";
				readonly type: "int";
			},
			{
				readonly name: "gender";
				readonly type: "string";
			},
			{
				readonly name: "description";
				readonly type: "text";
			}
		];
	},
	{
		readonly name: "Sagittarius";
		readonly columns: readonly [
			{
				readonly name: "name";
				readonly type: "string";
			},
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
				readonly name: "description";
				readonly type: "text";
			}
		];
	},
	{
		readonly name: "Cancer";
		readonly columns: readonly [
			{
				readonly name: "name";
				readonly type: "string";
			},
			{
				readonly name: "birth_place";
				readonly type: "string";
			},
			{
				readonly name: "birth_date";
				readonly type: "datetime";
			},
			{
				readonly name: "age";
				readonly type: "int";
			},
			{
				readonly name: "status";
				readonly type: "string";
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
				readonly name: "description";
				readonly type: "text";
			}
		];
	},
	{
		readonly name: "Leo";
		readonly columns: readonly [
			{
				readonly name: "name";
				readonly type: "string";
			},
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
export type Capricorn = InferredTypes["Capricorn"];
export type CapricornRecord = Capricorn & XataRecord;
export type Aries = InferredTypes["Aries"];
export type AriesRecord = Aries & XataRecord;
export type Scorpio = InferredTypes["Scorpio"];
export type ScorpioRecord = Scorpio & XataRecord;
export type Sagittarius = InferredTypes["Sagittarius"];
export type SagittariusRecord = Sagittarius & XataRecord;
export type Cancer = InferredTypes["Cancer"];
export type CancerRecord = Cancer & XataRecord;
export type Leo = InferredTypes["Leo"];
export type LeoRecord = Leo & XataRecord;
export type DatabaseSchema = {
	Aquarius: AquariusRecord;
	Capricorn: CapricornRecord;
	Aries: AriesRecord;
	Scorpio: ScorpioRecord;
	Sagittarius: SagittariusRecord;
	Cancer: CancerRecord;
	Leo: LeoRecord;
};
declare const DatabaseClient: any;
export declare class XataClient extends DatabaseClient<DatabaseSchema> {
	constructor(options?: BaseClientOptions);
}
export declare const getXataClient: () => XataClient;
export {};
