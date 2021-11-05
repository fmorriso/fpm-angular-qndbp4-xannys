import { Component, ViewEncapsulation } from '@angular/core';
import { customers } from './customers';

@Component({
  selector: 'my-app',
  styles: ['.ws-normal{white-space: normal !important;}'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <kendo-grid
      [kendoGridBinding]="gridData"
      [pageSize]="10"
      [pageable]="true"
      [height]="510"
    >
      <kendo-grid-column
        field="CompanyName"
        [headerClass]="myClass"
      >
      </kendo-grid-column>
      <kendo-grid-column
        field="ContactName"
        [headerClass]="'my-class'"
      >
      </kendo-grid-column>
      <kendo-grid-column
        field="I am a big title. Can you wrap me please"
        [headerClass]="'ws-normal'"
      >
      </kendo-grid-column>
      <kendo-grid-column
        field="ContactTitle"
      >
      </kendo-grid-column>
    </kendo-grid>
  `,
})
export class AppComponent {
  public gridData: any[] = customers;
  public myClass: string = 'my-class';
}
