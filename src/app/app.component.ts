import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from '@core/components/Tree';
import {SlidebarComponent} from "@core/components/slidebar/slidebar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, TreeComponent,SlidebarComponent],
})
export class AppComponent {}
