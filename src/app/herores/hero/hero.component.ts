import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  get heroDescription(): string {
    return this.getHeroDescription();
  }

  private getHeroDescription(): string {
    return `The hero name is ${this.name} and is ${this.age} old`;
  }

  changeHero(name: string): void {
    this.name = name;
  }

  changeAge(age: number): void {
    this.age = age;
  }

  resetData(): void {
    this.name = 'Ironman';
    this.age = 45;
  }
}
