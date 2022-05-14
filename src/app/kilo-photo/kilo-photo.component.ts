import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kilo-photo',
  templateUrl: './kilo-photo.component.html',
  styleUrls: ['./kilo-photo.component.scss']
})
export class KiloPhotoComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  kilos!: number;
  imageUrl!: string;

  ngOnInit(): void {
      this.title = "Berger Australian"
      this.description = "This is my future beautiful dog !"
      this.createdDate = new Date();
      this.kilos = 10;
      this.imageUrl = "https://images.unsplash.com/photo-1625409802595-cfa825b39e05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80";
  }
}
