import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const uploadAPI = 'http://localhost:4000/api/upload';
@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html'
})
export class CreatePageComponent implements OnInit{
  public uploader: FileUploader = new FileUploader({ url: uploadAPI, itemAlias: 'file' });

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('FileUpload:uploaded successfully:', item, status, response);
      alert('Article a bien été ajouté');
    };
  }
}
