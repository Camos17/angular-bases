import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  
  public deletedHero?: string;
  public heroesNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];

  removeLastHero():void {
    this.deletedHero = this.heroesNames.pop();
  }

}
