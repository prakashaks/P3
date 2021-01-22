import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormGroup, FormBuilder } from '@angular/forms';

const orders = [
  { id: 100, name: 'order 1' },
  { id: 200, name: 'order 2' },
  { id: 300, name: 'order 3' },
  { id: 400, name: 'order 4' }
];

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  dates: string[] = [];
  orders: any[] = [];


  startEndDatesForm: any;
  weeklyForm: any;

  tabIndex = 0;
  weekdays = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  years: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  name = ['daily', 'weekly', 'monthly', 'quarterly', 'yearly', 'one time', 'on completion of']
  tabName = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.tabName =this.name[0];
    this.startEndDatesForm = this.fb.group({
      startDate: [''],
      endDate: [''],
      occurence: ['1'],
      valueRadio: ['1']
    });

    this.weeklyForm = this.fb.group({
      startDate: [''],
      endDate: [''],
      occurence: [''],
      checkList: [''],
      valueRadio: ['1']
    });

  }
  
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.dates.push(` ${type}: ${event.value}`);
  }

  onClickNext() {
    this.tabIndex = this.tabIndex + 1;
    this.tabName = this.name[this.tabIndex];
  }

  onClickDown() {
    this.tabIndex = this.tabIndex - 1;
    this.tabName = this.name[this.tabIndex];
  }

  selectedWeek(day: any) {
  }

  selectedMonths(months: any) {
  }

}
