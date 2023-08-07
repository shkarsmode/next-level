import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ISubmitForm } from "../interfaces/ISubmitForm";
import { BASE_PATH_API } from "./variables";

@Injectable({
    providedIn: 'root',
})
export class UserService {

	private basePathApi: string = '/';

	constructor(
		private http: HttpClient,
		@Inject(BASE_PATH_API) basePathApi: string
	) {
		if (basePathApi) this.basePathApi = basePathApi;
	}

	public sendLetter(body: ISubmitForm): Observable<{status: string}> {
		return this.http.post<{status: string}>(`${this.basePathApi}/user`, body);
	}
}