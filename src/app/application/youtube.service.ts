import { Injectable } from '@angular/core';
import { PLAYLIST } from './youtube/myPlaylist';
import { YoutubeVideo } from './youtube/youtubeVideo';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  videos: Array<YoutubeVideo>;

  constructor() {}

  getVideos(year: number): Array<YoutubeVideo> {
    this.videos = PLAYLIST[year - 1].items;
    return this.videos;
  }
}
