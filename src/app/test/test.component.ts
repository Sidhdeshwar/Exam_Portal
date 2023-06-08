import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { mainInterface } from '../exam';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  ProgrammingLanguge !: mainInterface;
   cnt : number = 0;
   answerArray: any [] = [] ;
   num:number = 0;
   multi:number[] = [];
  constructor(private http: HttpClient, private router:Router)
  {
      this.loadLocalStorage();
      let a = localStorage.getItem('cnt');
      if(a!=null)
      {
         this.cnt = JSON.parse(a);
      }
  }
//* loadLocalStorage :
  loadLocalStorage()
  {
     let a =  localStorage.getItem('exam');
      if(a!=null)
      {
         this.ProgrammingLanguge = JSON.parse(a);
      }
  }
//* NextQueStion :
  nextQue()
  {
    this.cnt++;
    localStorage.setItem('cnt', JSON.stringify(this.cnt));

  }
// *Add Answer
  assignAnswer(num:any)
  {
    this.num = num;
    if(this.ProgrammingLanguge.questions[this.cnt]?.type=='Multiple-Response')
    {

      if(!this.multi.includes(num))
      {
        this.multi.push(num);
        this.answerArray[this.cnt] = this.multi;
      }
      else
      {
        for(let i=0 ; i<this.multi.length ; i++)
        {
           if(this.multi[i]==num)
           {
             this.multi.splice(i,1);
             return;
           }
        }
      }

    }
    else
    {
       this.answerArray[this.cnt] = num
    }
  }
//* Finish ===============>>>>>
  correct: number = 0;
  wrong:number = 0;

  finish()
  {
      for(let i=0 ; i<this.ProgrammingLanguge.questions.length ; i++)
      {
        if(this.ProgrammingLanguge.questions[i]?.type=='Multiple-Response')
        {
            if( JSON.stringify( this.ProgrammingLanguge.questions[i].correctOptionIndex ) == JSON.stringify( this.multi))
            {
               this.correct++;
            }
            else
            {
              this.wrong++;
            }
        }
else
{
  if(this.ProgrammingLanguge.questions[i].correctOptionIndex==this.answerArray[i])
  {
    this.correct++;
  }
  else
  {
    this.wrong++;
  }
}
      }
      localStorage.setItem('answer',JSON.stringify({correct: this.correct, wrong: this.wrong}));
      this.router.navigateByUrl('/result');
      localStorage.setItem('cnt', JSON.stringify(0));
  }
}
