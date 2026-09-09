import { PageNode } from './page-node';

export class DoublyLinkedList {
  head: PageNode | null;
  tail: PageNode | null;
  current: PageNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  addPage(url: string, title: string): void {
    const newPage = new PageNode(url, title);

    if (this.head === null) {
      this.head = newPage;
      this.tail = newPage;
      this.current = newPage;
      return;
    }

    newPage.previous = this.tail;
    this.tail!.next = newPage;
    this.tail = newPage;
    this.current = newPage;
  }

  goBack(): PageNode | null {
    if (this.current?.previous !== null) {
      this.current = this.current!.previous;
    }

    return this.current;
  }

  goForward(): PageNode | null {
    if (this.current?.next !== null) {
      this.current = this.current!.next;
    }

    return this.current;
  }

  getCurrentPage(): PageNode | null {
    return this.current;
  }
}