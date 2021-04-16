import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runningtime',
  templateUrl: './runningtime.component.html',
  styleUrls: ['./runningtime.component.css']
})
export class RunningtimeComponent  {
  pholder="";
  answerLabel="Let's sort some numbers! On the first line, input the number of elements you want to be sorted. And after that, type in the elements separated by Space or Comma.";
  runtimeOutput="";  
  rtDetails="";
 

  calculateAnswer(numinput:string){
    this.runtimeOutput="";
  
    
    this.answerLabel="TADA!" ;
    
     let arrayNum =  numinput.trim().replace(/,/gi," ").split(/\s+/);
     
      //check if all input is a number
      if (!arrayNum.some(i => isNaN(Number(i)))){ 
        if(numinput==""){
          this.errDisplay("");
          this.answerLabel="Let's sort some numbers! On the first line, input the number of elements you want to be sorted. And after that, type in the elements separated by Space or Comma.";
          
        }
        else
        //check if input count fits
        if((Number(arrayNum[0])+1) === arrayNum.length){
         
         if(Number(arrayNum[0])>= 1 &&Number(arrayNum[0])<= 1001)  //check val constraints
          {
            
            if(arrayNum.every(i => (Number(i)>=-10000) && (Number(i)<=10000) )) 
            { 
                  let runtime = 0;
                  
                  arrayNum.shift(); //remove first input
                  


                  this.rtDetails = "Step by step: \n"
                  ///insertion code from https://www.csharpstar.com/csharp-program-to-perform-insertion-sort/
                  let i, j;
                    for (i = 1; i < arrayNum.length; i++)
                    {
                        let item = arrayNum[i];
                        let ins = 0;
                        for (j = i - 1; j >= 0 && ins != 1; )
                        {
                            if (Number(item) < Number(arrayNum[j]))
                            {
                                arrayNum[j + 1] = arrayNum[j];
                                j--;
                                arrayNum[j + 1] = item;
                                runtime+=1; //get the runtime
                            }
                            else ins = 1;
i
                        }
                        this.rtDetails+= arrayNum.toString() + '\n'; //get the step by step
                    }
                    ///insertion code ends

                //display the answer
                this.answerDisplay(runtime);
            }
            else
            this.errDisplay("Some of the numbers are out of range -10,000 to 10,000");

          }
         else
          this.errDisplay("First number out of range 1 to 10001");
      }


        else //input error, N and matrix count doesn't match
          this.errDisplay("Invalid count of numbers");    
      }
      else //input error, some are strings
        this.errDisplay("NOT all input is a number");
    
  }

  errDisplay(errMessage:string) {
    this.answerLabel="";
    this.runtimeOutput=errMessage;
    this.rtDetails = "";
  }


  answerDisplay(runtime:any){
    this.runtimeOutput = "Running time is " + runtime.toString();
  }
}