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
  public  defaultText: string ="Results will appear here.";


  ngOnInit(): void {
  }

  updateImg(imageData: string) {
    this.defaultText ="Analyzing..."
    this.showImage=false;
    this.imageData=imageData;
    this.dataService.analyzeImage(imageData).subscribe(data=>
      {
        this.showImage=true;
        this.results=data;
      });

  }

  visibility(showImage: boolean) {
    this.showImage = showImage;
  }
}
