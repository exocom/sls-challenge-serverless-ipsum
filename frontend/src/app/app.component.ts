import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';


interface ApiResponse {
  data: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'serverless-ipsum';
  content;

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {

    this.http.post<ApiResponse>('https://owdkhmj7j4.execute-api.us-west-2.amazonaws.com/dev/filler-text', {
      type: 'Cat'
    }).subscribe(body => {
      console.log('Here!', body);
      this.content = this.sanitizer.bypassSecurityTrustHtml(body.data)
    })
    ;
  }
}
