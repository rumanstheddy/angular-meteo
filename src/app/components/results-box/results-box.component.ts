import { Component, Input } from '@angular/core';

@Component({
  selector: 'results-box',
  templateUrl: './results-box.component.html',
  styleUrl: './results-box.component.scss',
})
export class ResultsBoxComponent {
  @Input() resultsData: string = '';
}
