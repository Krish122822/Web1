const slider = document.getElementById("slider");
const letterText = document.getElementById("letterText");
const waxSeal = document.getElementById("waxSeal");
const envelopeImg = document.getElementById("envelopeImg");
const music = document.getElementById("bgMusic");

let opened = [false, false, false, false];
let current = 0;

/* LETTER CONTENT — FULL, UNTOUCHED */
const letters = [
`As your birthday comes,
I find myself thinking of you more than ever.
You came into my life like a quiet blessing,
Turning heavy days into light ones.
Not every year gives someone so special,
But this year, I’m grateful for you.
A reason to smile,
A reason to hope,
A reason to believe in simple joys and wonderful moments.
On your birthday, I won’t make big promises.
I’ll carry one wish.
That your year is full of happiness,
And that our paths stay close, always.`,

`On your birthday, 
and on every day that follows.
I can’t stop thinking of you.
Even when I’m feeling low,
I read our old messages
And remember the places we’ve shared.
On my way to the office,
I smile like an idiot,
Listening to songs that whisper your name,
And missing you even more.
Not seeing you feels like something is missing from the day
I quietly pray.
That life is kind to you,
That happiness finds you often,
And that you’re surrounded by love and warmth,
Just as you deserve.
Happy Birthday, Roo ❤
May your day be as warm and wondrous
As the love and joy you bring into my life.`,

`You’ve brought something into my life that I can’t quite explain,
Something I didn’t even know I was missing.
A peace, a comfort, a feeling of being truly cared for.
An assurance that no matter what happens, I’ll be okay,
Because with you, I’m in good hands.
Please know this, Roo. You are a sweet soul,
And you deserve all the good things that come your way.
I hope this birthday is as sweet, bright, and beautiful as you.
Happy Birthday, Roo 💛`,

`I still remember the first time I saw you.
And I remember the first time we talked too.
I remember waiting for you, staying awake all night.
I remember our first movie, our first trip.
I remember our first Kiss.
I remember smiling with you, and even crying for you.
You are beautiful, deep down to your soul.
I know you’ve been through a lot,
but still, you carry that lovely smile,
that sparkle in your eyes,
and a voice that lights up when you talk about what you love.
I’ve watched you with admiration,
and I remember it all, every little moment.
On your birthday, I want you to know
how special you are to me.
May your day be as bright, warm, and beautiful
as you are to me.

Happy Birthday, my dear Roo❤.


Yours,
Roo`
];

function goTo(page) {
  slider.style.transform = `translateX(-${page * 100}vw)`;
  const bgs = ["lock","lock","intro","select","reader","postcard"];
  document.body.setAttribute("data-bg", bgs[page]);
}

/* AUTH */
function checkNickname() {
  if (nickname.value.trim().toLowerCase() === "roo") goTo(1);
}
function checkName() {
  if (realname.value.trim().toLowerCase() === "krish") goTo(2);
}

/* START */
function startExperience() {
  document.querySelector(".stack").classList.add("open");
  music.volume = 0.4;
  music.play().catch(() => {});
  setTimeout(() => goTo(3), 800);
}

/* LETTER FLOW */
function openLetter(i, el) {
  current = i;
  letterText.textContent = letters[i];
  waxSeal.classList.remove("broken");
  envelopeImg.src = "assets/envelope.png";
  document.querySelector(".paper").classList.add("hidden");

  if (!opened[i]) {
    opened[i] = true;
    el.classList.add("opened");
  }
  goTo(4);
}

function breakSeal() {
  waxSeal.classList.add("broken");
  envelopeImg.src = "assets/envelope-open.png";
  setTimeout(() => document.querySelector(".paper").classList.remove("hidden"), 400);
}

function closeLetter() {
  goTo(3);
  if (opened.every(v => v)) setTimeout(() => goTo(5), 800);
}

