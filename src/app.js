import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Feng Shui 2';
    config.map([
      { route: ['','tracker'], moduleId: './tracker', nav: true, title:'Fight Tracker' }
    ]);

    this.router = router;
  }
}
