import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stairccase',
  templateUrl: './stairccase.component.html',
  styleUrls: ['./stairccase.component.css']
})
export class StairccaseComponent {
  stairOutput="";
  stairLabel="";
  stairNum = 3;

  showAnswer(numinput:string){
    this.stairOutput="";
    this.stairLabel="TADA!" ;
    this.stairNum = Number(numinput);

    if (numinput == "")
      this.stairOutput="No input";
    else
    {
      for (let i = 0; i < this.stairNum; i++) {      
        this.stairOutput+= " ".repeat(this.stairNum-1-i);
        this.stairOutput += "#".repeat(i+1);
        this.stairOutput += "\n";
      }
      
    }


  }

}
