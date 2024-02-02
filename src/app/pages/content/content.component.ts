import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string =""
  contentTitle:string = ""
  contentDescription:string = ""

  private id:string | null = "0"
  constructor(
      private Route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.Route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
     const result = dataFake.filter(article => article.id == id)[0]
     
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
     
  }

}
