import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Games to Play';
  image1 = 'https://cf.geekdo-images.com/aNabLAdJAW0ot6hojnC9rw__itemrep/img/BwUJ5yt-3zSFU9AgJHrR4OZJqAU=/fit-in/246x300/filters:strip_icc()/pic4602889.jpg';
  image2 = 'https://bgomedia-19127.kxcdn.com/image/product/source/9oPl42EZOVFDoyY816pL';
  image3 = 'https://cf.geekdo-images.com/g9rQ3Dmawr-_EZkMVRJx2Q__itemrep/img/ArZBMF84hYzwTDV7HzEZSB8oq9Q=/fit-in/246x300/filters:strip_icc()/pic6974383.png';

  constructor() { }

  ngOnInit() {
  }

}