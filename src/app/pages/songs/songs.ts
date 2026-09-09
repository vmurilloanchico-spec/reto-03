import { Component } from '@angular/core';
import { CircularLinkedList } from '../../models/circular-linked-list';
import { SongNode } from '../../models/song-node';

@Component({
  selector: 'app-songs',
  imports: [],
  templateUrl: './songs.html',
  styleUrl: './songs.css'
})
export class Songs {

  playlist: CircularLinkedList;
  currentSong: SongNode | null = null;

  constructor() {
    this.playlist = new CircularLinkedList();

    this.playlist.addSong('Blinding Lights', 'The Weeknd');
    this.playlist.addSong('Shape of You', 'Ed Sheeran');
    this.playlist.addSong('Levitating', 'Dua Lipa');
    this.playlist.addSong('As It Was', 'Harry Styles');

    this.currentSong = this.playlist.getCurrentSong();
  }

  nextSong(): void {
    this.currentSong = this.playlist.nextSong();
  }
}