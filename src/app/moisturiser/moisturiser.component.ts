import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moisturizer } from '../models/moisturizer';
import { MoisturizerService } from '../services/cosmatics/moisturizer.service';

@Component({
  selector: 'app-moisturiser',
  templateUrl: './moisturiser.component.html',
  styleUrls: ['./moisturiser.component.css']
})
export class MoisturiserComponent implements OnInit {

  moisturizer:Moisturizer[]=[]
  constructor(private ls:MoisturizerService) { }

  ngOnInit(): void {
    this.moisturizer=this.ls.getAll();
  }

}
