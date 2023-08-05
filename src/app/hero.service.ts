import { Injectable } from '@angular/core'
import { Hero } from './hero'
import { HEROES } from './mock-heroes'
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service'

@Injectable({
	providedIn: 'root'
})
export class HeroService {
	/**
	 * 这是一个典型的“服务中的服务”场景，
	 * 你把 MessageService 注入到了 HeroService 中，而 HeroService 又被注入到了 HeroesComponent 中。
	 * @param messageService 
	 */
	constructor(private messageService: MessageService) { }
	
	getHeroes(): Observable<Hero[]> {
		const heroes = of(HEROES)
		this.messageService.add(`HeroService: fetched heroes。Time: ${new Date().toLocaleString()}`)
		return heroes
	}

	getHero(id: number): Observable<Hero> {
		const hero = HEROES.find(h => h.id === id)!
		this.messageService.add(`HeroService: fetched hero。Time: ${new Date().toLocaleString()}`)
		return of(hero)
	}
}