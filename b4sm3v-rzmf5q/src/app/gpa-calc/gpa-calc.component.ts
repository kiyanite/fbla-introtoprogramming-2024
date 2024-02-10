import { Component } from '@angular/core';
import { scales } from '../scales';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gpa-calc',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './gpa-calc.component.html',
  styleUrl: './gpa-calc.component.css'
})


export class GpaCalcComponent {
  scales = [...scales];
  
  

  firstGrade: number = 1;
  firstCredit: string = "0";
  firstType: string = "regular";
  secondGrade: number = 1;
  secondCredit: string = "0";
  secondType: string = "regular";
  thirdGrade: number = 1;
  thirdCredit: string = "0";
  thirdType: string = "regular";
  fourthGrade: number = 1;
  fourthCredit: string = "0";
  fourthType: string = "regular";


  findGradeScoreUnWeighted(grade: number){
    var currentScale = scales[Math.round(grade)];
    return currentScale.regular;
  }

 calculateSingleGPAUnWeighted(grd: number, credit: string){
   var score = this.findGradeScoreUnWeighted(grd);
   var singleGPA = score * parseInt(credit);
   return singleGPA;
 }

calculateTotalGPAUnWeighted(){
  var firstGPA = this.calculateSingleGPAUnWeighted(this.firstGrade, this.firstCredit);
  var secondGPA = this.calculateSingleGPAUnWeighted(this.secondGrade, this.secondCredit);
  var thirdGPA = this.calculateSingleGPAUnWeighted(this.thirdGrade, this.thirdCredit);
  var fourthGPA = this.calculateSingleGPAUnWeighted(this.fourthGrade, this.fourthCredit);
  console.log(this.firstCredit);
  console.log(this.secondCredit);
  var totalCredits = parseInt(this.firstCredit) + parseInt(this.secondCredit) + parseInt(this.thirdCredit) + parseInt(this.fourthCredit);
  console.log(totalCredits); 
  var answer = 0;
  if(totalCredits > 0)
  {
    answer = (firstGPA + secondGPA + thirdGPA + fourthGPA) / totalCredits;
  }
  return Math.round(answer*100)/100;
}

  findGradeScoreWeighted(grade: number, type: string){
    var currentScale = scales[Math.round(grade)];
    var gradeNumber = 0;
    switch (type) {
      case "regular":
        gradeNumber = currentScale.regular;
        break;
      case "honors":
        gradeNumber = currentScale.honors;
        break;
      case "ap":
        gradeNumber = currentScale.ap;
        break;
      default:
        gradeNumber = currentScale.regular;
        break;
      }
   return gradeNumber;
  }

 calculateSingleGPAWeighted(grd: number, type: string, credit: string){
   var score = this.findGradeScoreWeighted(grd, type);
   var singleGPA = score * parseInt(credit);
   return singleGPA;
 }

calculateTotalGPAWeighted(){
  var firstGPA = this.calculateSingleGPAWeighted(this.firstGrade, this.firstType, this.firstCredit);
  var secondGPA = this.calculateSingleGPAWeighted(this.secondGrade, this.secondType, this.secondCredit);
  var thirdGPA = this.calculateSingleGPAWeighted(this.thirdGrade, this.thirdType, this.thirdCredit);
  var fourthGPA = this.calculateSingleGPAWeighted(this.fourthGrade, this.fourthType, this.fourthCredit);
  console.log(this.firstCredit);
  console.log(this.secondCredit);
  var totalCredits = parseInt(this.firstCredit) + parseInt(this.secondCredit) + parseInt(this.thirdCredit) + parseInt(this.fourthCredit);
  console.log(totalCredits); 
  var answer = 0;
  if(totalCredits > 0)
  {
    answer = (firstGPA + secondGPA + thirdGPA + fourthGPA) / totalCredits;
  }
  return Math.round(answer*100)/100;
}




/* map-grade-points defines mapping from grades (e.g. A+,A) to to the corresponding 
 * regular points, Honors Points, AP/IB Points and Percent.
 * Percent is editable.
 */





//let names: string[] = ["John", "Jane", "Doe"];
}
