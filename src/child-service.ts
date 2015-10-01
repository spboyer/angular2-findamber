import {Http} from 'angular2/http';
import {Child} from './child';

export class ChildService {
    children: Child[] = [];

    constructor(private _http: Http) {}

	getCurrentChildren(): Rx.IPromise<Child[]> {
		this.children.length = 0;
		let promise = this._http.get('url')
			.toRx().map((response: any) => response.json()).toPromise()
			.then(children => {
				this.children.push(...children);
				return this.children;
			})
			//TODO: fix catch
			//.catch(e => this._fetchFailed(e)) // want we want to say
			// baroque way to ensure promise stays Promise<Hero[]>
			.then<Child[]>(_ => _, e => this._fetchFailed(e));
		return promise;
	}

	private _fetchFailed(error:any) {
		console.error(error);
		return Promise.reject(error);
	}


    getChildByCaseNumber(caseNumber: string){
        return Promise.resolve(ITEMS)
        .then((children) => { return children.filter((c) => {
				return c.caseNumber === caseNumber;
			})[0]});
    }

    getChildByState(state: string){
        return Promise.resolve(ITEMS)
        .then((children) => { return children.filter((c) => {
				return c.state === state;
			})[0]});
    }
}

var ITEMS : Child[] = [];