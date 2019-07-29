import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'SPA-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontendComponent implements OnInit {


  @Input() id_video: string;

  constructor(private route: ActivatedRoute) {
    this.id_video = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
