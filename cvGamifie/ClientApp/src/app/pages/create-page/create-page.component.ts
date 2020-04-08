import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html'
})
export class CreatePageComponent {
  public uploader: FileUploader = new FileUploader({ url: uploadAPI, itemAlias: 'file' });
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
