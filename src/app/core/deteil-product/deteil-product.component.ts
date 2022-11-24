import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deteil-product',
  templateUrl: './deteil-product.component.html',
  styleUrls: ['./deteil-product.component.css']
})
export class DeteilProductComponent implements OnInit {
  id: any;
  constructor(private activatedRouter: ActivatedRoute) // ijection des services dans constructeur 
  { }

  ngOnInit(): void {
    // console.log(this.activatedRouter.snapshot.params['id']);
    // snaposhot capture ecran mtaa url mteei 
    this.id = this.activatedRouter.snapshot.params['id'];
  }

}
