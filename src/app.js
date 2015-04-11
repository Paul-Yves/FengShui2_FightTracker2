import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Feng Shui 2';
      config.map([
        { route: ['','tracker'], moduleId: 'tracker', nav: true, title:'Fight Tracker' }
      ]);
    });
  }
}