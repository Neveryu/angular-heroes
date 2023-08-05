import { Hero } from '../hero'
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
	// 这个selector的名字，只是为了在父组件的模板中匹配 HTML 元素的名称，以识别出该组件
	selector: 'app-hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit{
	hero?: Hero
	constructor(
		private route: ActivatedRoute,
		private heroService: HeroService,
		private location: Location
	) { }
	ngOnInit(): void {
		this.getHero()
	}
	getHero(): void {
		const id = Number(this.route.snapshot.paramMap.get('id'))
		this.heroService.getHero(id).subscribe(hero => this.hero = hero)
	}
	goBack(): void {
		this.location.back()
	}
}


