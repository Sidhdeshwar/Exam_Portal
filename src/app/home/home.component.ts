import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  testList:any [] = [];
  constructor(private http: HttpClient, private router:Router)
  {
        this.http.get('http://xapi.ngminds.com/getQuizData').subscribe((data:any)=>{
          console.log(data.tests);
          this.testList = data.tests;
        })
  }

  startTest(obj:any)
  {
    localStorage.setItem('exam',JSON.stringify(obj))
    this.router.navigateByUrl('/test');
  }
}
