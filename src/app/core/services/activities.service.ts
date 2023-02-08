import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private httpService: HttpService) {

  }

  deleteActivity(id: number): Observable<Any> {
    return this.httpService.delete(environment.endpoints.actividades.delete(id))
  }
}
