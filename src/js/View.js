import {
  NAME,
  MENU_ITEMS,
  PROMO_HEADER,
  PROMO_INFO,
  PROMO_CONTACTS,
  PROMO_IMG,
} from './constants';

class View {
  constructor() {
    this.me = null;
  }

  init() {
    this.body = document.querySelector('body');
    this.renderHeader();
    this.renderMenu();
    this.renderPromo();
  }

  renderContainer = () => {
    const container = document.createElement('div');
    container.classList.add('container');

    return container;
  }

  renderHeader() {
    const container = this.renderContainer();
    container.classList.add('container__header');
    this.header = document.createElement('header');
    this.header.appendChild(container);
    this.body.appendChild(this.header);
  }

  renderMenu() {
    this.menu = document.createElement('div');
    this.menu.classList.add('menu-container');
    this.name = document.createElement('h1');
    this.name.classList.add('name');
    this.name.innerHTML = NAME;
    this.menuItems = document.createElement('ul');
    this.menuItems.classList.add('menu__items');
    this.menuItems.innerHTML = MENU_ITEMS;
    document.querySelector('.container__header').appendChild(this.menu);
    this.menu.appendChild(this.name);
    this.menu.appendChild(this.menuItems);
  }

  renderPromo() {
    this.promo = document.createElement('div');
    this.promo.classList.add('promo-container');
    const container = this.renderContainer();
    const promoAbout = document.createElement('div');
    const promoHeader = document.createElement('h2');
    const promoInfo = document.createElement('div');
    const promoContacts = document.createElement('div');
    const promoImg = document.createElement('div');
    container.classList.add('container__promo');
    promoAbout.classList.add('promo-about');
    promoHeader.classList.add('promo-about__header');
    promoInfo.classList.add('promo-about__info');
    promoContacts.classList.add('promo-about__contacts');
    promoImg.classList.add('promo-about__image');
    promoHeader.innerHTML = PROMO_HEADER;
    promoInfo.innerHTML = PROMO_INFO;
    promoContacts.innerHTML = PROMO_CONTACTS;
    promoImg.innerHTML = PROMO_IMG;

    promoAbout.appendChild(promoHeader);
    promoAbout.appendChild(promoInfo);
    promoAbout.appendChild(promoContacts);

    this.promo.appendChild(container);
    container.appendChild(promoAbout);
    container.appendChild(promoImg);
    this.body.appendChild(this.promo);
  }
}

export default View;
