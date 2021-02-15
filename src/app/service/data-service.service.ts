import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
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

        const headerDict = {
        'Access-Control-Allow-Origin': '*',
// 'Cookie':'	CloudShellAuthorization="Bearer ya29.a0AfH6SMADVGVkcSYY7bJbpR8t0_LK6AkXRaSu-Zi7yYzPsh-ebw2wNyavneOgvb5JcfEy_16zMOg32i5JCVtqOEyr2r9q9KM_MEzZ_QMiW23vA80UN2ya5VPDXYz9bbnb3D9kz2C39JKuqhyDvcV0luZ-BOAcD_agi6IgbuNJQa8CImELiHNBn78w1aVl9fZjbcVnQKNTNZooRz97kgQoiLxXBvUPru210AE4NI7AzPk1Q4CDXA"'
        }

    const requestOptions = {
        headers: new HttpHeaders(headerDict),
    };

    return this.http.post<Celebrity[]>(
      // "http://152.67.174.105:9090/api/demo",
      // "https://8080-d503f82a-f55f-4fdd-aa3b-e877f0416b1b.asia-southeast1.cloudshell.dev/api/demo",
      // "/api/demo",
	"https://searchit-aws-recog.herokuapp.com/api/demo",
      base64result, requestOptions);
  }
}
