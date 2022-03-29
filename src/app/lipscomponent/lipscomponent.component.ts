import { Component, OnInit } from '@angular/core';
import { LipsService } from '../services/cosmatics/lips.service';
import { Lips } from '../models/lips';

@Component({
  selector: 'app-lipscomponent',
  templateUrl: './lipscomponent.component.html',
  styleUrls: ['./lipscomponent.component.css']
})
export class LipscomponentComponent implements OnInit {
  lips:Lips[]=[]
  constructor(private ls:LipsService) { }

  ngOnInit(): void {
    this.lips=this.ls.getAll();
  }

}
