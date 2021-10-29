import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  notifications = [
    {
      message:
        'Hey Harini, It’s time to update your consultant profile!',
      timestamp: '12:30 PM, 12th Mar 2021',
    },
    {
      message: 'Hey Harini, It’s time to update your consultant profile!',
      timestamp: '12:30 PM, 12th Mar 2021',
    },
    {
      message: 'Hey Harini, It’s time to update your consultant profile!',
      timestamp: '12:30 PM, 12th Mar 2021',
    },
    {
      message: 'Hey Harini, It’s time to update your consultant profile!',
      timestamp: '12:30 PM, 12th Mar 2021',
    },
    {
      message: 'Hey Harini, It’s time to update your consultant profile!',
      timestamp: '12:30 PM, 12th Mar 2021',
    },
    {
      message: 'Hey Harini, It’s time to update your consultant profile!',
      timestamp: '12:30 PM, 12th Mar 2021',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
