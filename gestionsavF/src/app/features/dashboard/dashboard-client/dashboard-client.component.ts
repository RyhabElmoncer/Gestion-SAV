import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrl: './dashboard-client.component.css'
})
export class DashboardClientComponent {
  section: string = 'profile'; // Section par défaut

  setSection(section: string) {
    this.section = section;
  }
}
