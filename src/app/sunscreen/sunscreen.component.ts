import { Component, OnInit } from '@angular/core';
import { Sunscreen } from '../models/sunscreen';
import { SunscreenService } from '../services/cosmatics/sunscreen.service';

@Component({
  selector: 'app-sunscreen',
  templateUrl: './sunscreen.component.html',
  styleUrls: ['./sunscreen.component.css']
})
export class SunscreenComponent implements OnInit {

  sunscreen:Sunscreen[]=[]
  constructor(private ls:SunscreenService) { }

  ngOnInit(): void {
    this.sunscreen=this.ls.getAll();
  }

}
