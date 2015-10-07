import {Http} from 'angular2/http';
import {Injectable} from 'angular2/angular2';
import {Child} from './child';

@Injectable()
export class ChildService {
    children: Child[] = [];

    constructor(private _http: Http) {
        console.log('hello');
    }

	getCurrentChildren(): Promise<Child[]> {
		this.children.length = 0;
		let promise = this._http.get('http://localhost:3000/current')
			.map((response: any) => response.json()).toPromise()
			.then((children: Child[]) => {
				this.children.push(...children);
				return this.children;
			})

		  .then((_: any) => _, (e: any) => this._fetchFailed(e));
			return promise;
	}

    getCurrentChildrenState(state: string): Promise<Child[]> {
		this.children.length = 0;
		let promise = this._http.get('http://localhost:3000/state/' + state)
			.map((response: any) => response.json()).toPromise()
			.then((children: Child[]) => {
				this.children.push(...children);
				return this.children;
			})

		  .then((_: any) => _, (e: any) => this._fetchFailed(e));
			return promise;
	}

	private _fetchFailed(error:any) {
		console.error(error);
		return Promise.reject(error);
	}
}