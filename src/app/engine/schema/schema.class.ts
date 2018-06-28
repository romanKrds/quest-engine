import {ISchema} from '../models/models';

export class SchemaClass {
  private _graphSchema: ISchema = {};

  public get schema() {
    return this._graphSchema;
  }

  public constructor() {
    this._graphSchema['A'] = ['B'];
    this._graphSchema['B'] = ['A', 'C'];
    this._graphSchema['C'] = ['B'];
  }
}
