import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { environment } from '../environments/environment';

@Injectable()

export class PortadaService {
    
    private URL: string;

    constructor(private _http: HttpClient) { 
        this.URL = environment.API_URL + environment.API_KEY + '&q=';
    }

    // Petición AJAX al backend de Pixabay para obtener todas las portadas
    getPortadas(search:string): Observable<any> {
        return this._http.get(this.URL + search);
    }   
}