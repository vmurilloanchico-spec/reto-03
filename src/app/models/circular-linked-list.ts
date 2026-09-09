import { SongNode } from './song-node';

export class CircularLinkedList {
  head: SongNode | null;
  current: SongNode | null;

  constructor() {
    this.head = null;
    this.current = null;
  }

  addSong(title: string, artist: string): void {
    const newSong = new SongNode(title, artist);

    if (this.head === null) {
      this.head = newSong;
      newSong.next = this.head;
      this.current = this.head;
      return;
    }

    let last = this.head;

    while (last.next !== this.head) {
      last = last.next!;
    }

    last.next = newSong;
    newSong.next = this.head;
  }

  getCurrentSong(): SongNode | null {
    return this.current;
  }

  nextSong(): SongNode | null {
    if (this.current !== null) {
      this.current = this.current.next;
    }

    return this.current;
  }
}
