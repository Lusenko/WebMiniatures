import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './create-catalogue.component.html',
  styleUrls: ['./create-catalogue.component.scss']
})
export class CreateCatalogueComponent implements OnInit {

  formGroup: FormGroup;

  get InvalidLength()  {
    return this.formGroup.get('description')?.errors?.invalidLength
  }

  constructor(private readonly matDialogRef: MatDialogRef<CreateCatalogueComponent>, private readonly formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      id: 0,
      images: ['assets/images/main/gameList/Rectangle1.svg'],
      title: '',
      description: ['', this.descriptionValid()],
      quantity: 0
    })
  }

  save(){
    this.matDialogRef.close(this.formGroup.value);
  }

  private descriptionValid(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null =>{
      return  control.value.length > 299 ? { invalidLength: true} : null
    }
  }

  ngOnInit(): void {
  }
}
