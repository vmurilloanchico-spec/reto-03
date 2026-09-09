import { Component } from '@angular/core';
import { DoublyLinkedList } from '../../models/doubly-linked-list';
import { PageNode } from '../../models/page-node';

@Component({
  selector: 'app-browser',
  imports: [],
  templateUrl: './browser.html',
  styleUrl: './browser.css'
})
export class Browser {

  history: DoublyLinkedList;
  currentPage: PageNode | null = null;

  constructor() {
    this.history = new DoublyLinkedList();

    this.history.addPage('https://google.com', 'Google');
    this.history.addPage('https://youtube.com', 'YouTube');
    this.history.addPage('https://github.com', 'GitHub');
    this.history.addPage('https://wikipedia.org', 'Wikipedia');

    this.currentPage = this.history.getCurrentPage();
  }

  goBack(): void {
    this.currentPage = this.history.goBack();
  }

  goForward(): void {
    this.currentPage = this.history.goForward();
  }
}