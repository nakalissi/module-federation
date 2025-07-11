import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class JPService {
    constructor(private http: HttpClient) { }

    getUsers(): Observable<any> {
        return this.http.get('/api/users');
    }

    getPosts(): Observable<any> {
        return this.http.get('/api/posts');
    }

    getAlbuns(): Observable<any> {
        return this.http.get('/api/albums');
    }

    getPOsts(): Observable<any> {
        return this.http.get('/api/posts');
    }
} 