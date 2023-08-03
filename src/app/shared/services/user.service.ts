import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ISubmitForm } from "../interfaces/ISubmitForm";

@Injectable({
    providedIn: 'root',
})
export class UserService {

	constructor(private http: HttpClient) {}

	public sendLetter(body: ISubmitForm): Observable<{status: string}> {
		return this.http.post<{status: string}>('https://next-level-back.vercel.app/user', body);
	}
}