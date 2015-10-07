import {bind, bootstrap} from 'angular2/angular2';
import {HTTP_BINDINGS} from 'angular2/http';
import {routerBindings, HashLocationStrategy, LocationStrategy} from 'angular2/router';
import {CharacterService} from './character.service';
import {AppComponent} from './app.component';
import {ChildService} from './child-service';


bootstrap(AppComponent, [
    HTTP_BINDINGS,
	routerBindings(AppComponent),
	CharacterService,
    ChildService,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
	success => console.log(`Bootstrap success`),
	error => console.log(error)
);
