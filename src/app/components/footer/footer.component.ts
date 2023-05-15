import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  text: Observable<any>

  constructor(private firestore: AngularFirestore) {
    this.text = firestore.collection('text').valueChanges()
  }

  ngOnInit(): void {
  }

}
