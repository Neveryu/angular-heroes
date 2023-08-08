import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    // $ 是一个约定，表示 heroes$ 是一个 Observable 而不是数组
    this.heroes$ = this.searchTerms.pipe(
      // 节流300毫秒
      debounceTime(300),
      // 如果与前一术语相同，则忽略新术语；确保只在过滤条件变化时才发送请求。
      distinctUntilChanged(),
      // 每当词条发生变化时，就切换到新的搜索观测值
      // switchMap() 会为每个从 debounce() 和 distinctUntilChanged() 中通过的搜索词调用搜索服务。它会取消并丢弃以前的搜索可观察对象，只保留最近的。
      /**
       * 借助 switchMap 操作符，每个有效的按键事件都会触发一次 HttpClient.get() 方法调用。
       * 即使在每个请求之间都有至少 300ms 的间隔，仍然可能会同时存在多个尚未返回的 HTTP 请求。
       * switchMap() 会记住原始的请求顺序，只会返回最近一次 HTTP 方法调用的结果。以前的那些请求都会被取消和舍弃。
       */
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }
}
