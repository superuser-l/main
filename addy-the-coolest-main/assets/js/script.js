

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function marqueeTitle() {
    const atSymbol = "@";
    let title = atSymbol + "addy "; // Initial title with space to create the effect

    while (true) {
        document.title = title;
        await sleep(200); // Adjust the speed of the marquee

        // Shift the title to create the marquee effect
        title = title.substring(1) + title[0];
    }
}

marqueeTitle();

        function playMusic() {
            var play = document.getElementById("music");
            var play2 = document.getElementById("myVideo");

            if (play !== null) {
                if (play.getElementsByTagName('source').length > 0) {
                    play.play();
                }
            }

            if (play2 !== null) {
                if (play2.getElementsByTagName('source').length > 0) {
                    play2.play();
                }
            }
        }

        document.addEventListener("click", function () {
            var clickAnywhereElement = document.getElementById("clickanywhere");
            clickAnywhereElement.style.opacity = "0";
            setTimeout(function () {
                clickAnywhereElement.style.display = "none";
            }, 500);
            playMusic();
        });
      
//Video Starter
        document.addEventListener('DOMContentLoaded', function() {
            const video = document.getElementById('myVideo');

           
            video.addEventListener('loadedmetadata', function() {
               
                video.currentTime = 0;
            });

            // Play the video
            video.play();
        });  