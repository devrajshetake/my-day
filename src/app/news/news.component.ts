import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {
  articles: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getNews().subscribe((data: any) => {
      console.log(data);
      this.articles = data.articles;
    });
  }

  getNews() {
    const apiKey = '7987bfcc2d3a4ba7babf296323edd56b';
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
    return this.http.get(url);
  }
}