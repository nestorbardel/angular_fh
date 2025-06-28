import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal, WritableSignal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  imports: [
    UpperCasePipe
  ]
})

export class HeroPageComponent {
  name:WritableSignal<string> = signal('Ironman');
  age:WritableSignal<number> = signal(45);

  capitalizedName = computed(() => this.name().toUpperCase());

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  // getHeroDescription(): string {
  //   return `${this.name()} - ${this.age()} `;
  // }

  changeHero():void {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm():void {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge(): void {
    this.age.set(60);
  }
}
