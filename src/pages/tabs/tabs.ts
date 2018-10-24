import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { IntroPage } from '../intro/intro';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = IntroPage;

  constructor() {

  }
}
