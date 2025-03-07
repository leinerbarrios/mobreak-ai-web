import { Component } from '@angular/core';
import { BannerComponent } from "../shared/banner/banner.component";
import { ProfileFormComponent } from "./components/profile-form/profile-form.component";

@Component({
  selector: 'app-profile',
  imports: [BannerComponent, ProfileFormComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
