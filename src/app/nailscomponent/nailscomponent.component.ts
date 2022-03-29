import { Component, OnInit } from '@angular/core';
import { Nails } from '../models/nails';
import { NailsService } from '../services/cosmatics/nails.service';

@Component({
  selector: 'app-nailscomponent',
  templateUrl: './nailscomponent.component.html',
  styleUrls: ['./nailscomponent.component.css']
})
export class NailscomponentComponent implements OnInit {

  nails:Nails[]=[]
  constructor(private ls:NailsService) { }

  ngOnInit(): void {
    this.nails=this.ls.getAll();
  }
}
