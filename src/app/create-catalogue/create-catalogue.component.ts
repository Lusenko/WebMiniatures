import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './create-catalogue.component.html',
  styleUrls: ['./create-catalogue.component.scss']
})
export class CreateCatalogueComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private readonly matDialogRef: MatDialogRef<CreateCatalogueComponent>, private readonly formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      id: 0,
      images: ['assets/images/main/gameList/Rectangle1.svg'],
      title: '',
      description: '',
      quantity: 0
    })
  }

  save(){
    this.matDialogRef.close(this.formGroup.value);
  }

  ngOnInit(): void {
  }
}
