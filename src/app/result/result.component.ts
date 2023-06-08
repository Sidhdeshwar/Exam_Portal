import { Component } from '@angular/core';
import { mainInterface } from '../exam';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

Answers:any;
Language!:mainInterface
  constructor()
  {
     let a = localStorage.getItem('answer');
     if(a!=null)
     {
       this.Answers = JSON.parse(a);
       console.log(a);
     }

     //???????????????????????????????
     let b =  localStorage.getItem('exam');
     if(b!=null)
     {
        this.Language = JSON.parse(b);
     }
  }
}
