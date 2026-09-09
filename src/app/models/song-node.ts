export class SongNode {
  title: string;
  artist: string;
  next: SongNode | null;

  constructor(title: string, artist: string) {
    this.title = title;
    this.artist = artist;
    this.next = null;
  }
}
