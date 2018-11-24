import {Component, OnInit} from '@angular/core';
import {SocketService} from './socket/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private socket: SocketService) {}
  title = 'frontend';

  ngOnInit() {
    let data = 'test_data';
    this.socket.emit('event', data).subscribe(
      (data) => {
        console.log('2Success',data);
      },
      (error) => {
        console.log('2Error',error);
      },
      () => {
        console.log('2complete');
      }
    );
  }
}
