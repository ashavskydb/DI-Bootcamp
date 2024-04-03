class Video {

    constructor(a, b, c) {
        this.title = a;
        this.uploader = b;
        this.time = c;
    }
    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}


let arr5videos = [
    { title: "Video1", uploader: "user1", time: 80},
    { title: "Video2", uploader: "user2", time: 100},
    { title: "Video3", uploader: "user3", time: 65},
    { title: "Video4", uploader: "user4", time: 95},
    { title: "Video5", uploader: "user5", time: 125},
];

let arr = [];
arr5videos.forEach(item => {
    let video = new Video(item.title, item.uploader, item.time);
    arr.push(video);
    console.log(video);
});

    console.log(arr);

    arr.forEach(item => {
        console.log(item.watch())
    })