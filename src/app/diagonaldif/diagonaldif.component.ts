import { Component } from '@angular/core';

@Component({
  selector: 'app-diagonaldif',
  templateUrl: './diagonaldif.component.html',
  styleUrls: ['./diagonaldif.component.css']
})
export class DiagonaldifComponent {
  pholder="";
  answerLabel="Give a square matrix of size N x N (separated by Space or Comma) and we'll calculate the absolute difference between the sums of its diagonals. First line/number should tell the N.";
  diagDifOutput="";
  primaryDiag="";
  secondaryDiag="";
  
  
 

  calculateAnswer(numinput:string){
    this.diagDifOutput="";
  
    
    this.answerLabel="TADA!" ;

     let arrayNum =  numinput.trim().replace(/,/gi," ").split(/\s+/);
     
      //check if all input is a number
      if (!arrayNum.some(i => isNaN(Number(i)))){ 
        if(numinput==""){
          this.errDisplay("");
          this.answerLabel="Give a square matrix of size N x N (separated by Space or Comma) and we'll calculate the absolute difference between the sums of its diagonals. First line/number should tell the N.";
          
        }
        else
        //check if input count fits
        if((Math.pow(Number(arrayNum[0]),2)+1) === arrayNum.length){
          let diagA =0;
          let diagB =0;
          this.primaryDiag = "Primary diagonal is: ";
          this.secondaryDiag = "Secondary diagonal is: ";
          let rowcount = Number(arrayNum[0]);

          //get the numbers on the diagonals
          for (let i = 0; i < rowcount; i++) {
            diagA += Number(arrayNum[(i*rowcount)+i + 1]);
            diagB += Number(arrayNum[(rowcount-1) * (i+1)+1]);         
            this.primaryDiag += Number(arrayNum[(i*rowcount)+i + 1]).toString() + "  ";
            this.secondaryDiag += Number(arrayNum[(rowcount-1) * (i+1)+1]).toString() + "  ";
          }

        //display the answer
        this.answerDisplay(diagA,diagB);
        }


        else //input error, N and matrix count doesn't match
          this.errDisplay("Invalid count of numbers");    
      }
      else //input error, some are strings
        this.errDisplay("NOT all input is a number");
    
  }

  errDisplay(errMessage:string) {
    this.answerLabel="";
    this.diagDifOutput=errMessage;
    this.primaryDiag="";
    this.secondaryDiag="";

  }


  answerDisplay(diagA:number,diagB:number){
    this.primaryDiag += "(sum: " + diagA + ")";
    this.secondaryDiag += "(sum: " + diagB + ")";
    this.diagDifOutput = "Their absolute difference is " + (Math.abs(diagA - diagB)).toString();
  }
}