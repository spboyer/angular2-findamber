import {Component, CORE_DIRECTIVES, View, OnInit} from 'angular2/angular2';
import {ChildService} from './child-service';
import {Child} from './child';

@Component({ selector: 'state-list' })
@View({
  templateUrl: 'app/state.component.html',
  styles: [`
        .demo-card-wide.mdl-card {
        width: 300px;
        }
        .demo-card-wide > .mdl-card__title {
        color: #fff;
        height: 125px;
        }
        .demo-card-wide > .mdl-card__menu {
        color: #fff;
        }
        .mdl-card__supporting-text {
            color: #fff
        }
  `],
  directives: [CORE_DIRECTIVES]
})
export class StateComponent implements OnInit {
   public children : Child[];

    constructor(private _childService : ChildService) { }

        onInit() { this.children = this.getchildrenstate('fl'); }

        getUrl(child: Child) { return `url('${child.photoC[0]}') center / cover`}

  getchildrenstate(st: string) {
    this.children = [];

    this._childService.getCurrentChildrenState(st)
      .then((children: Child[]) => this.children = children);



    return this.children;
  }
}
