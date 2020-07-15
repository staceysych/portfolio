import View from './View';

class Controller {
  constructor() {
    this.view = new View();
  }

  init() {
    this.view.init();
  }
}

export default Controller;
