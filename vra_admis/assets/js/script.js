// made by tr1x_em
// optimized by vra.admis


let mobile = 'ontouchstart' in document.documentElement;

let switchAllowed = false;

function openSocial(type) {
  let url = 'about:blank';

  switch (type) {
    case 'github':
      url = 'https://github.com/vrafounder';
      break;

      case 'discord':
        url = 'https://discord.dog/943169973067599933';
        break; 

	case 'instagram':
        url = 'https://www.instagram.com/prince._.admis';
        break;    
  }

  window.open(url);
}

function centerIntroText() {
  let introText = document.getElementById('intro-text');
  introText.style.position = 'absolute';
  introText.style.top = '50%';
  introText.style.left = '50%';
  introText.style.transform = 'translate(-50%, -50%)';
}

function startIntroTyping() {
  centerIntroText();

  new TypeIt('#intro-text', {
    speed: 50,
  })
    .type('welcome.', { delay: 1200 })
    .delete(null, { delay: 1000 })
    .type(`${mobile ? 'tap' : 'press any key'} to enter.`)
    .go();

  setTimeout(function () {
    switchAllowed = true;
  }, 2500);
}

function typerStartTyping(typer) {
  typer.reset();


  let text = ['For nature we are artist,','For environment we are artful,','For poor we are affordable,','For rich we are acclaimable,','For friends we are active,','For enemies we are attackers,','join us because we are amazing,','at the end we are anonymous,'];
	
  text.forEach(function (language, index) {
    typer.move(null);
    typer.type(language, { delay: 1000 });
    typer.pause(1000);

    typer.delete(language.length, { delay: 1000 });
  });

  typer.go();
}

function startMainTyping() {
  let typer = new TypeIt('#subtext', {
    speed: 50,
    afterComplete: async () => {
      typerStartTyping(typer);
    },
  });

  typerStartTyping(typer);
}

function switchScreen() {
  document.title = 'VRA | HOME';

  $('.intro').fadeOut(1000, function () {
    $('.bg-image').fadeIn(1000);
    $('.main').fadeIn(1000, function () {
      startMainTyping();
    });
  });
  loadSong(currentSongIndex);
    audioPlayer.play().then(() => {
    console.log("Music started");
    updatePlayPauseIcon();
    }).catch(error => {
    console.log("Music play error:", error);
});
}

document.addEventListener('keydown', function (e) {
  if (switchAllowed) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('touchstart', function (e) {
  if (switchAllowed && mobile) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  startIntroTyping();
});

console.log("GG Everything working perfectly fine ,Made with ❤️ by tr1x_em");
