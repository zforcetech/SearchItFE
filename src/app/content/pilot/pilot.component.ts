import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.scss']
})
export class PilotComponent implements OnInit {

  @Output() private imageUploadEmitter = new EventEmitter<string>();
  @Output() private showContentEmitter = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  constructor() { }

  uploadFiles(event: any) {
    this.startProgress();
    this.showContentEmitter.emit(false);
    var image: File = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
    this.showContentEmitter.emit(true);

        this.imageUploadEmitter.emit(reader.result as string);
    }
  }

  startProgress() {
    // this.showContentEmitter.emit(false);
    var i=0;
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("analyse-bar");
      var width = 0;
      var id = setInterval(() => {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%";
        }
        // this.showContentEmitter.emit(true);
      }, 10);
      // function frame() {
      //   if (width >= 100) {
      //     clearInterval(id);
      //     i = 0;
      //   } else {
      //     width++;
      //     elem.style.width = width + "%";
      //     elem.innerHTML = width + "%";
      //   }
      //   this.showContentEmitter.emit(true);
      // }
    }

  }
}
