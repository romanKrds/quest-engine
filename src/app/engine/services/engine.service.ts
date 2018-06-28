import {Injectable} from '@angular/core';
import {ISchema, INodeData} from '../models/models';
import {SchemaClass} from '../schema/schema.class';
import {DataStorageClass} from '../storage/data-storage.class';

@Injectable()
export class EngineService {
  private _schema: ISchema;
  private _data: {[node: string]: INodeData};

  constructor() {
    this._schema = new SchemaClass().schema;
    this._data = new DataStorageClass().data;
  }

  public getDataForNode(node: string): INodeData{
    return this._data[node];
  }

  public getNeighborsForNode(node: string) {
    return this._schema[node];
  }
}
