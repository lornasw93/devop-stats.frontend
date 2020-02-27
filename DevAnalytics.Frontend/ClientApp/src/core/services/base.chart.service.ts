import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEvent } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseChart {
   
  abstract setData();

}
