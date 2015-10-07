import {Component, CORE_DIRECTIVES, View, OnInit} from 'angular2/angular2';
import {ChildService} from 'app/child-service';
import {Child} from 'child';

@Component({ selector: 'be-together' })
@View({
  templateUrl: 'app/be.together.html',
  styles: [`
  `],
  directives: [CORE_DIRECTIVES]
})
export class BeTogetherComponent implements OnInit {
   public children : Child[];

    constructor(private _childService : ChildService) { }

        onInit() { this.children = this.getchildren(); }


    getchildren() {
    this.children = [];

    this._childService.getCurrentChildren()
      .then((children: Child[]) => this.children = children);

    return this.children;
  }
}
