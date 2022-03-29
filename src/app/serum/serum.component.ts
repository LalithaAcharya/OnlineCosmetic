import { Component, OnInit } from '@angular/core';
import { Serum } from '../models/serum';
import { SerumService } from '../services/cosmatics/serum.service';

@Component({
  selector: 'app-serum',
  templateUrl: './serum.component.html',
  styleUrls: ['./serum.component.css']
})
export class SerumComponent implements OnInit {
  serum:Serum[]=[]
  constructor(private ls:SerumService) { }

  ngOnInit(): void {
    this.serum=this.ls.getAll();
  }

}
