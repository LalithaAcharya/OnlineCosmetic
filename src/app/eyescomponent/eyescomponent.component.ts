import { Component, OnInit } from '@angular/core';
import { Eyes } from '../models/eyes';
import { EyesService } from '../services/cosmatics/eyes.service';


@Component({
  selector: 'app-eyescomponent',
  templateUrl: './eyescomponent.component.html',
  styleUrls: ['./eyescomponent.component.css']
})
export class EyescomponentComponent implements OnInit {

  eyes:Eyes[]=[]
  constructor(private fs:EyesService) { }

  ngOnInit(): void {
    this.eyes=this.fs.getAll();
  }

}
