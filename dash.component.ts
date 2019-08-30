import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../graphql.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  snow="im old string";

  constructor(private service: GraphqlService) { }
  ngOnInit() {
    this.service.listen().subscribe(res => {
      this.snow = res.data.newUser;
    });
  }
}
