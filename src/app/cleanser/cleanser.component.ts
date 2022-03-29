import { Component, OnInit } from '@angular/core';
import { Cleanser } from '../models/cleanser';
import { CleanserService } from '../services/cosmatics/cleanser.service';

@Component({
  selector: 'app-cleanser',
  templateUrl: './cleanser.component.html',
  styleUrls: ['./cleanser.component.css']
})
export class CleanserComponent implements OnInit {
  cleanser:Cleanser[]=[]
  constructor(private ls:CleanserService) { }

  ngOnInit(): void {
    this.cleanser=this.ls.getAll();
  }

}
