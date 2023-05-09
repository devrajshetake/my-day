import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {
  articles: any[] = [];
  countries: any[] = [['in', 'India'], ['us', 'United States'], ['gb', 'Great Britain'], ['au', 'Australia'], ['ca', 'Canada']];
  filterCountries: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.articles = [];
    for(let country of this.filterCountries){
    this.getNews(country).subscribe((data: any) => {
      console.log(data);
      this.articles = [...this.articles, ...data.articles];
    });
  }
  }

  getNews(code:string) {
    const apiKey = '7987bfcc2d3a4ba7babf296323edd56b';
    const url = `https://newsapi.org/v2/top-headlines?country=${code}&apiKey=${apiKey}`;
    console.log(url)
    return this.http.get(url);
  }

  toggleFilter(event: any) {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      // Add the value to the array of selected countries
      this.filterCountries.push(checkboxValue);
    } else {
      // Remove the value from the array of selected countries
      this.filterCountries = this.filterCountries.filter(c => c !== checkboxValue);
    }

    this.getNewArticles();
  }

  getNewArticles(){
    this.articles = []
    for(let country of this.filterCountries){
      this.getNews(country).subscribe((data: any) => {
        console.log(data);
        this.articles = [...this.articles, ...data.articles];
      });
    }

    this.articles.sort(() => Math.random() - 0.5);
  }
}