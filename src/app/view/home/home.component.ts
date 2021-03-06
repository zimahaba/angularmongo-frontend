import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  message: string;

  ngOnInit(): void {
    this.homeService.getHomeMessage().subscribe((message) => {
      this.message = message;
    });
  }
}
