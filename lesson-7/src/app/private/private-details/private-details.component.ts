import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-private-details',
  standalone: true,
  imports: [],
  templateUrl: './private-details.component.html',
  styleUrl: './private-details.component.scss'
})
export class PrivateDetailsComponent {
  @Input() id?: string;
}
