
// 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function marqueeTitle() {
    const atSymbol = "@";
    let title = atSymbol + "stem1"; // Initial title with space to create the effect

    while (true) {
        document.title = title;
        await sleep(200); // Adjust the speed of the marquee

        // Shift the title to create the marquee effect
        title = title.substring(1) + title[0];
    }
}


function typerStartTyping(typer) {
  typer.reset();

}

 // script.js

function typerStartTyping(typer) {
  typer.reset();

  let text = [
    "Gaming aficionado", 
" Socializing enthusiast ",
"Constantly exploring new things ",
"Python, Java, CSS coder" 
 
  ];

  // Use a recursive function to handle typing and deleting sequentially
  function typeAndDelete(index) {
    if (index < text.length) {
      typer.move(null).type(text[index], { delay: 100 }).pause(1000).delete(text[index].length, { delay: 100 }).pause(1000);

      // Call the function recursively for the next sentence
      typeAndDelete(index + 1);
    } else {
      // After typing and deleting all sentences, call typer.go() to finish the animation
      typer.go();
    }
  }

  // Start the typing and deleting process with the first sentence
  typeAndDelete(0);
}

function startMainTyping() {
  let typer = new TypeIt('#subtext', {
    speed: 50,
    afterComplete: async () => {
      typerStartTyping(typer);
    },
  });

  // Start the initial typing animation
   document.addEventListener("click", function () {
            	typer.go();
	
        });
}

// Call the main typing function when the document is ready
document.addEventListener('DOMContentLoaded', startMainTyping);


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