import {Component, OnInit} from '@angular/core';
import {EngineService} from './engine/services/engine.service';
import {INodeData} from './engine/models/models';

interface IOption {
  name: string;
  headline: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  public description: string;
  public options: Array<IOption> = [];

  public constructor(
    private engine: EngineService
  ) {}

  public ngOnInit() {
    // root node of the graph (start point)
    this.goToStep('A');
  }

  // data of the node
  private setStepDescription(currentNode: string) {
    const data: INodeData = this.engine.getDataForNode(currentNode);
    if (data) {
      this.description = data.description;
    }
  }

  private setStepOptions(currentNode: string) {
    this.options = [];
    const neighbors: Array<string> = this.engine.getNeighborsForNode(currentNode);
    if (neighbors) {
      neighbors.forEach((neighbor: string) => {
        const neighborData: INodeData = this.engine.getDataForNode(neighbor);
        if (neighborData) {
          this.options.push({
            name: neighborData.name,
            headline: neighborData.headline
          });
        }
      });
    }
  }

  private goToStep(node: string) {
    this.setStepDescription(node);
    this.setStepOptions(node);
  }
}
