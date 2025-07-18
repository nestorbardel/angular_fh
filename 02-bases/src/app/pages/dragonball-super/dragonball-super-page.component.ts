import { Component, computed, signal } from '@angular/core';

interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector:'dragonball-super'
})
export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
    },
    {
      id:2,
      name: 'Vegeta',
      power: 8000,
    },
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    }
  })

  addCharacter(){
    console.log("Nombre: " , this.name());
    console.log("Poder: ", this.power());
  }
}
