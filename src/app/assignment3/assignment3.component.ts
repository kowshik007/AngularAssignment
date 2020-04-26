import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  displayContent:boolean=false;
  displayColor: boolean=false;
  buttonClickEventList: any=[];
  constructor() { }
  onButtonClick(){
    let date: Date = new Date();
    let dateStr:string =
  ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
  ("00" + date.getDate()).slice(-2) + "/" +
  date.getFullYear() + " " +
  ("00" + date.getHours()).slice(-2) + ":" +
  ("00" + date.getMinutes()).slice(-2) + ":" +
  ("00" + date.getSeconds()).slice(-2);
    this.buttonClickEventList.push(dateStr);
    this.displayContent=true;
    if(this.buttonClickEventList.length<5){
      this.displayColor=true;
    }
  }
  getColor(){
    if(this.buttonClickEventList.length<5){
      this.displayColor=true;
      return 'blue';
    }
  }
  ngOnInit(): void {
  }

}
