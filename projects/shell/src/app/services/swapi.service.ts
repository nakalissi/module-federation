import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
    constructor(private http: HttpClient) {}

    getPeople(): Observable<any> {
        const response = this.http.get('/api/people/');
        return response;
    }

    getPlanets(): Observable<any> {
        return this.http.get('/api/planets/');
    }

    getStarships(): Observable<any> {
        return this.http.get('/api/starships/');
    }
} 