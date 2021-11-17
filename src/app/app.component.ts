import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pruebatecnica';
  getUrl()
{
  return "url('https://image.freepik.com/free-vector/cloud-background_91008-382.jpg')";
}
}
