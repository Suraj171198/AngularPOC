import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  carousalImages:any;

  ngOnInit(): void {

    this.carousalImages = [
      "../../assets/images/elec.jpeg",
      "../../assets/images/laptop2.jpeg",
      "../../assets/images/apple.jpg",
      "../../assets/images/fur.jpeg",
      "../../assets/images/sofa2.jpeg",
      "../../assets/images/fas1.jpeg",
      "../../assets/images/fas2.jpeg"
    ]

  }

  carouselOption: OwlOptions = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    margin: 0,
    dots: true,
    responsive: {
      672: {
        items: 3
      },

      576: {
        items: 2
      },

      936: {
        items: 6
      }
    }
  }

}
