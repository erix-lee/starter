import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'qs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  routes: Object[] = [{
      title: '首页',
      route: '/',
      icon: 'dashboard',
    }, {
      title: '产品',
      route: '/product',
      icon: 'view_quilt',
    }, {
      title: '日志',
      route: '/logs',
      icon: 'receipt',
    }, {
      title: '用户管理',
      route: '/users',
      icon: 'people',
    },
  ];

  constructor(private _router: Router) {}

  logout(): void {
    this._router.navigate(['/login']);
  }
}
