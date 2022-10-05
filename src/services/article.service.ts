import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'src/modals/Article';
import { global } from 'src/app/app_config';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  public tab1:Article[]=global._db.Articles;
  
  constructor(private httpClient:HttpClient)
  { 

  }
}
