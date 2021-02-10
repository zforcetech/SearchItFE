import { Component, OnInit } from '@angular/core';
import { Celebrity } from '../model/Celebrity';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(dataService: DataServiceService) {
    this.dataService = dataService;
  }

  public showImage: boolean;
  public imageData: string;
  private dataService: DataServiceService;
  public results: Celebrity[];

  ngOnInit(): void {
  }

  updateImg(imageData: string) {
    this.showImage=true;
    this.imageData=imageData;
    this.dataService.analyzeImage(imageData).subscribe(data=>this.results=data);
  }

  visibility(showImage: boolean) {
    this.showImage = showImage;
  }
}
