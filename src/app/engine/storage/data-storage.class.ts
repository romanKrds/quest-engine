import {INodeData} from '../models/models';

export class DataStorageClass {
  public data: {[node: string]: INodeData} = {
    'A': {
      name: 'A',
      headline: 'go to A',
      description: 'This is A node you can go to B node from here'
    },
    'B': {
      // headline will be the option on previous step
      name: 'B',
      headline: 'go to B',
      description: 'This is B node you can go either to A & B node from here',
    },
    'C': {
      name: 'C',
      headline: 'go to C',
      description: 'This is C node you can go to B node from here',

    },
  };
}
