import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  icon = faHouse;
}
