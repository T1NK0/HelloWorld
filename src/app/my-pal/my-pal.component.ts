import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pal',
  templateUrl: './my-pal.component.html',
  styleUrls: ['./my-pal.component.css']
})
export class MyPalComponent implements OnInit {

  userName:string = "Steffen Halberg";
  constructor() { }

  ngOnInit(): void {
  }

}
