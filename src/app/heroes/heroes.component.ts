import	{ Component, OnInit } from '@angular/core'
import { Hero } from '../hero'
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service'

@Component({
	// 这个selector的名字，只是为了在父组件的模板中匹配 HTML 元素的名称，以识别出该组件
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{
	heroes: Hero[] = []
	constructor(private heroService: HeroService, private messageService: MessageService) { }
	ngOnInit(): void {
		this.getHeroes()
	}

	getHeroes(): void {
		this.heroService.getHeroes().subscribe(
			heroes => this.heroes = heroes
		)
	}
}


