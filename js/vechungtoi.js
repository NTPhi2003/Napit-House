$(document).ready(function() {
    let video = $('.video-watch')[0]
    $('.play-btn').click(function() {

        if(video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    $('.video-watch').on('click', function() {
        if(video.paused) {
            video.play();
        } else {
            video.pause();
        }
    })

    $('.video-watch').on('dblclick', function() {
        toggleFullScreen(video)
    })

    function toggleFullScreen(videos) {
        if (videos.requestFullscreen) {
            videos.requestFullscreen();
        } else if (videos.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (videos.webkitRequestFullscreen) {
            videos.webkitRequestFullscreen();
        }
    }
})



