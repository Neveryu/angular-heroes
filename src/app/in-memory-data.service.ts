import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: '影魔' },
      { id: 13, name: '蓝胖子' },
      { id: 14, name: '矮人狙击手' },
      { id: 15, name: '幽鬼' },
      { id: 16, name: '土猫' },
      { id: 17, name: '巴拉森' },
      { id: 18, name: '撼地神牛' },
      { id: 19, name: '骷髅王' },
      { id: 20, name: '拍拍熊' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
