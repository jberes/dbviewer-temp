import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { DashboardNames } from '../models/acme-analytics-server/dashboard-names';
import { ErrorHandlerService } from './error-handler.service';

const API_ENDPOINT = 'https://acmeanalyticsserver.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class AcmeAnalyticsServerService {
  constructor(
    private http: HttpClient
  ) { }

  public getDashboardNamesList(): Observable<DashboardNames[]> {
    return this.http.get<DashboardNames[]>(`${API_ENDPOINT}/dashboards/names`)
      .pipe(catchError(ErrorHandlerService.handleError<DashboardNames[]>('getDashboardNamesList', [])));
  }
}
