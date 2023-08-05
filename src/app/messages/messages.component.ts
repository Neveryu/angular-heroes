import { Component } from '@angular/core'
import { MessageService } from '../message.service'

@Component({
	// 这个selector的名字，只是为了在父组件的模板中匹配 HTML 元素的名称，以识别出该组件
	selector: 'app-messages',
	templateUrl: './messages.component.html',
	styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  // 这个 messageService 属性必须是公共属性，因为你将会在模板中绑定到它
  // Angular 只会绑定到组件的公共属性
  // 上面这句话的意思是：Angular的模版中使用js中的属性，这个属性应该是public的才行
  // 如果这个属性只在本js代码中使用，那么这个属性可以定义为private的
  // 由于messages.component.html模版中需要使用到messageService，所以这里定义为public的
  constructor(public messageService: MessageService) {}
}


