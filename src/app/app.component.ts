import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from "./shared/toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mobreak-ai-web';
}
