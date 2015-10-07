import {Component, CORE_DIRECTIVES, View, OnInit} from 'angular2/angular2';
import {ChildService} from 'app/child-service';
import {Child} from 'child';

@Component({ selector: 'be-together' })
@View({
  templateUrl: 'app/be.together.html',
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
export class BeTogetherComponent implements OnInit {
   public children : Child[];

    constructor(private _childService : ChildService) { }

        onInit() { this.children = this.getchildren(); }

        getUrl(child: Child) { return `url('${child.photoC[0]}') center / cover`}

    getchildren() {
    this.children = [];

    this._childService.getCurrentChildren()
      .then((children: Child[]) => this.children = children);

    return this.children;
  }
}
