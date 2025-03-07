import { Component } from '@angular/core';
import { BannerComponent } from "../shared/banner/banner.component";

@Component({
  selector: 'app-profile',
  imports: [BannerComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
