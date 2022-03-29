import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {


  videoIcon:string = "../assets/play.png";
  play:string = "Play";
  videodisabled:boolean = true;
  
  changeImg(){
    if(this.play == "Play")
    {
      this.play = "Pause",
      this.videoIcon = "../assets/pause.png",
      this.videodisabled = false
    }
    else
    {
      this.videoIcon = "../assets/play.png",
      this.play = "Play",
      this.videodisabled = true
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
  

}
