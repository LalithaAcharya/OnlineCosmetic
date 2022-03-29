import { Component, OnInit } from '@angular/core';
import { Bestdeals } from '../models/bestdeals';
import { BestdealsService } from '../services/cosmatics/bestdeals.service';

@Component({
  selector: 'app-bestdeals',
  templateUrl: './bestdeals.component.html',
  styleUrls: ['./bestdeals.component.css']
})
export class BestdealsComponent implements OnInit {

    bestdeals:Bestdeals[]=[]
    constructor(private ls:BestdealsService) { }
  
    ngOnInit(): void {
      this.bestdeals=this.ls.getAll();
    }

}
