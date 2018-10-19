import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {
  currencies: string[] = ['PLN', 'USD', 'EUR', 'GBP'];
  valueControl = new FormControl('0', [Validators.required, Validators.pattern('[0-9]*')]);
  initialControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]);
  destinationControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]);
  result: String;
  display: boolean;

  constructor(protected httpService: HttpService)  {
    this.display = false;
  }

  ngOnInit(): void {
  }

  calculateValue(): void {
    this.httpService.getValue(this.valueControl.value, this.initialControl.value, this.destinationControl.value).subscribe( (data) => {
      this.result = 'For ' + (Number)(this.valueControl.value).toFixed(2) + ' ' + this.initialControl.value +
      ' you can buy ' + data.toFixed(2) + ' ' + this.destinationControl.value + '.';
      console.log(data);
    });
  }
}
