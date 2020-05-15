import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FakeSessionItemService } from '../fake-session-item.service';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {

  alignement = 'right';
  couleur = 'red';
  @Input() session: any;
  @Output() participantsChange = new EventEmitter<any>();
  constructor(private sessionItemService: FakeSessionItemService) { }  
    ngOnInit() {
    }
    onDelete() {
    console.log(this.session);
    this.sessionItemService.delete(this.session);
    }
}
