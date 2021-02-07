import { Component, Input, OnInit } from '@angular/core';
import { Celebrity } from 'src/app/model/Celebrity';

@Component({
  selector: 'app-matter',
  templateUrl: './matter.component.html',
  styleUrls: ['./matter.component.scss']
})
export class MatterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public celebImage: string;
  @Input() public showImage: boolean;
  @Input("results") public celebs: Celebrity[];

  // startProgress() {
  //   var i=0;
  //   if (i == 0) {
  //     i = 1;
  //     var elem = document.getElementById("analyse-bar");
  //     var width = 0;
  //     var id = setInterval(frame, 10);
  //     function frame() {
  //       if (width >= 100) {
  //         clearInterval(id);
  //         i = 0;
  //       } else {
  //         width++;
  //         elem.style.width = width + "%";
  //         elem.innerHTML = width + "%";
  //       }
  //     }
  //   }
  // }

}
