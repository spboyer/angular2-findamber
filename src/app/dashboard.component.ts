import {Component, FORM_DIRECTIVES, View} from 'angular2/angular2';
import {BeTogetherComponent} from './be.together.component';
import {KidsWhereComponent} from './kids.where.component';
import {ResourcesComponent} from './resources.component';
import {FooterComponent} from './footer.component';

@Component({ selector: 'my-dashboard' })
@View({
	templateUrl: 'app/dashboard.component.html',
	directives: [FORM_DIRECTIVES, BeTogetherComponent, KidsWhereComponent, ResourcesComponent, FooterComponent]
})
export class DashboardComponent {
	public name = 'john';
	public message = '';

	sayHello() {
		this.message = 'Hello ' + this.name + '!';
	}
}
