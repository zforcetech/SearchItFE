import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Celebrity } from '../model/Celebrity';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(http: HttpClient) {
    this.http = http;
   }

  private http: HttpClient;

  analyzeImage(base64Image: string): Observable<Celebrity[]>{
    var base64result = base64Image.split(',')[1];
console.log("requesting");

    return this.http.post<Celebrity[]>(
      // "http://152.67.174.105:9090/api/demo",
//       "https://8080-d503f82a-f55f-4fdd-aa3b-e877f0416b1b.asia-southeast1.cloudshell.dev/api/analyze",
      // "http://localhost:8080/api/demo",
	"https://searchit-aws-recog.herokuapp.com/api/demo",
      base64result);
  }
}
