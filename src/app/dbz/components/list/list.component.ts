import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  @Input() public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  @Output() public onDeleteCharacterById: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if(!id) return;
    console.log('character index ', {id});
    this.onDeleteCharacterById.emit(id);
  }

}
