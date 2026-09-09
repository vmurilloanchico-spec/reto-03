export class PageNode {
  url: string;
  title: string;
  previous: PageNode | null;
  next: PageNode | null;

  constructor(url: string, title: string) {
    this.url = url;
    this.title = title;
    this.previous = null;
    this.next = null;
  }
}