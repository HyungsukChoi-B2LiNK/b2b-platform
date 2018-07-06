import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HttpGatewayService {
  ip;

  constructor(public http: Http) { }

  get(url) {
    return new Promise((resolve, reject) => {
      this.http.get(`http://${this.ip}/${url}`).subscribe((res:any) => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
    });
  }

  post(url, body) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-type', 'application/json');
      this.http.post(`http://${this.ip}/${url}`, JSON.stringify(body), {headers: headers}).subscribe((res) => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
    });
  }
}
