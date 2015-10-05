import {View, Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CharactersComponent} from './characters.component';
import {DashboardComponent} from './dashboard.component';
import {BeTogetherComponent} from './be.together.component';
import {KidsWhereComponent} from './kids.where.component';
import {ResourcesComponent} from './resources.component';
import {FooterComponent} from './footer.component';

@Component({ selector: 'my-app' })
@View({
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES, BeTogetherComponent, KidsWhereComponent, ResourcesComponent, FooterComponent]
})
@RouteConfig([
  { path: '/', as: 'Dashboard', component: DashboardComponent },
  { path: '/characters', as: 'Characters', component: CharactersComponent }
])
export class AppComponent { }
