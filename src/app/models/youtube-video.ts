export class Snippet {
    description: string;
    title: string;
    thumbnails: {
        default: { url: string }
    }
}

export class YoutubeVideo {
    snippet: Snippet;
    id: {
        videoId: string
    }
}