import { Component, OnInit } from '@angular/core';
import { Trending } from '../models/trending';
import { TrendingService } from '../services/cosmatics/trending.service';

@Component({
  selector: 'app-trendingnow',
  templateUrl: './trendingnow.component.html',
  styleUrls: ['./trendingnow.component.css']
})
export class TrendingnowComponent implements OnInit {
  
  trending:Trending[]=[]
  constructor(private ls:TrendingService) { }

  ngOnInit(): void {
    this.trending=this.ls.getAll();
  }

}
