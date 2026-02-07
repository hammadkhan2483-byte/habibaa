function startMagic() {
  const audio = document.getElementById("loveVoice");

  // MOBILE-SAFE AUDIO PLAY
  audio.currentTime = 0;
  audio.volume = 1;

  audio.play().then(() => {
    console.log("Audio playing");
  }).catch((err) => {
    console.log("Audio blocked:", err);
  });

  document.getElementById("batmanBox").style.display = "block";

  setTimeout(() => {
    document.getElementById("tasks").style.display = "block";
  }, 1500);

  setTimeout(() => {
    document.getElementById("kissSection").style.display = "block";
  }, 3000);

  setTimeout(() => {
    document.getElementById("flight").style.display = "block";
  }, 5000);
}


function kissYes() {
  document.querySelector(".container").classList.add("heartbeat");
spawnHearts();

  launchConfetti();
  


  document.getElementById("catKiss").style.display = "block";

showDistance();
  showFinal(
    "Okay wow 😳 you said YES… come here 🙈\n" +
    "I’m shy now but happy at the same time 🤍"
  );
  finalSurprise();

}

function kissNo() {
  showFinal(
    "You said NO? 😂 you shawtyyyy\n" +
    "Doesn’t matter, I still choose you 😌"
  );
}

function showFinal(text) {
  const final = document.getElementById("finalText");
  final.innerText =
    text +
    "\n\nBasmaa, you’re beautiful, you melt me, and even thousands of kilometers can’t touch what we have 🤍\n— Hammad";
  final.style.display = "block";

  showSince();

}
function enterSite() {
  const val = document.getElementById("entryInput").value.toLowerCase();
  const msg = document.getElementById("entryMsg");

  if (val === "basmaa") {
    document.getElementById("entryScreen").style.display = "none";
    document.getElementById("mainSite").style.display = "block";
  } else {
    msg.innerText = "Nice try 😏 but only Basmaa can enter";
  }
}
// ===== CONFETTI LOGIC =====
function launchConfetti() {
  const confetti = document.getElementById("confetti");
  confetti.innerHTML = "";

  for (let i = 0; i < 40; i++) {
    const piece = document.createElement("div");
    piece.classList.add("confetti-piece");

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.backgroundColor =
      ["#ff4d6d", "#ffd166", "#06d6a0", "#4dabf7"][
        Math.floor(Math.random() * 4)
      ];

    confetti.appendChild(piece);
  }

  setTimeout(() => {
    confetti.innerHTML = "";
  }, 3000);
}
// ===== US SINCE COUNTER =====
function showSince() {
  // CHANGE THIS DATE TO YOUR DATE (YYYY, MM-1, DD)
  const startDate = new Date(2025, 11, 15); // example: June 1, 2024

  const today = new Date();
  const diffTime = today - startDate;
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const text = `Basmaa ❤️ Hammad — ${days} days and counting 🤍`;

  document.getElementById("sinceText").innerText = text;
  document.getElementById("sinceBox").style.display = "block";
}
// ===== FLOATING HEARTS =====
function spawnHearts() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 2 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}

function showDistance() {
  const flight = document.getElementById("flight");
  flight.innerHTML = `
    ✈️ Mumbai → Larache<br>
    Distance: ~7,300 km 🌍<br>
    Flight time: ~9 hours ⏱️<br>
    But my heart arrives instantly 🤍
  `;
  flight.style.display = "block";
}
function finalSurprise() {
  setTimeout(() => {
    alert(
      "Basmaa… if you’re reading this,\n" +
      "I hope you smiled.\n\n" +
      "I’m not perfect, but my love for you is real.\n" +
      "— Hammad 🤍"
    );
  }, 10000); // 10 seconds
}
function playVoice() {
  const audio = document.getElementById("loveVoice");
  audio.currentTime = 0;
  audio.play();
}



