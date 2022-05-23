import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
public aboutus :any
  constructor(private ser:ServiceService) { 
   this.getData();
  }

  ngOnInit(): void {
  }

  getData(){
    this.ser.getAllData().subscribe((res)=>{
      this.aboutus=res;
    })
  }

}
