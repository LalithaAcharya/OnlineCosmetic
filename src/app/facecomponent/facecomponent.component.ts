import { Component, OnInit } from '@angular/core';
import { Face } from '../models/face';
import { FaceService } from '../services/cosmatics/face.service';

@Component({
  selector: 'app-facecomponent',
  templateUrl: './facecomponent.component.html',
  styleUrls: ['./facecomponent.component.css']
})
export class FacecomponentComponent implements OnInit {

  faces:Face[]=[]
  constructor(private fs:FaceService) { }

  ngOnInit(): void {
    this.faces=this.fs.getAll();
  }

}
