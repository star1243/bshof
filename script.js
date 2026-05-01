const FALLBACK_AVATAR = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%232a8dff'/%3E%3Cstop offset='1' stop-color='%2300a323'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23g)'/%3E%3Ccircle cx='200' cy='155' r='70' fill='rgba(255,255,255,0.78)'/%3E%3Cpath d='M82 350c25-74 77-112 118-112s93 38 118 112' fill='rgba(255,255,255,0.78)'/%3E%3C/svg%3E";

const members = [
  {
    name: "Star_Dev",
    category: "Developer",
    avatar: "https://i.postimg.cc/PJhkSs3w/268459727.jpg",
    roles: ["Site Creator"],
    links: [
      { label: "View BeatSaver Profile", href: "https://www.beatsaver.com/profile/312077" },
      { label: "View BeatLeader Profile", href: "https://beatleader.com/u/adamsrealm1/" },
      { label: "View GitHub Profile", href: "https://github.com/adamsrealm1" }
    ]
  },
  {
    name: "Swifter",
    category: "Artist",
    avatar: "https://i.imgur.com/ECf8pN6.png",
    video: "videos/swifter.mp4",
    roles: ["Extra Sensory 2 Creator", "Modchart Maker", "Built BSIPA", "BSIPA is the mod that allows mods to load in."],
    links: [
      { label: "View BeatSaver Profile", href: "https://beatsaver.com/profile/4284246" },
      { label: "View BeatLeader Profile", href: "https://beatleader.com/u/76561198271377161/" },
      { label: "View GitHub Profile", href: "https://github.com/Swifter1243" },
      { label: "View User's Website", href: "https://swifter1243.dev" },
      {
        label: "About Extra Sensory 2",
        popupTitle: "About Extra Sensory 2",
        popupBody: "Extra Sensory II is a major 2025 Beat Saber community event and custom map pack showcasing advanced Modder techniques, primarily utilizing the Vivify mod to create high-tech, immersive visual environments. As a sequel to the 2020 event, it features intense, experimental modcharts curated into a competitive, battle royale style live event."
      }
    ]
  },
  {
    name: "Aeroluna",
    category: "Modder",
    avatar: "https://i.imgur.com/bGTXQ8k.png",
    roles: ["NE Creator", "Synapse Creator", "Vivify Creator"],
    links: [
      {
        label: "About Synapse",
        popupTitle: "About Synapse",
        popupBody: "EXSII featured a truly interactive live event, enabled by Synapse, a cutting-edge mod that brings players from around the world together to engage with innovative new maps in real time. Participants compete on a shared leaderboard and can communicate using in-game chat."
      },
      { label: "View GitHub Profile", href: "https://github.com/Aeroluna" },
      { label: "View User's Website", href: "https://aeroluna.dev/" },
      { label: "View BeatSaver Profile", href: "https://beatsaver.com/profile/4284266#" }
    ]
  },
  {
    name: "Ozymandias",
    category: "Artist",
    avatar: "https://i.imgur.com/74o9eTd.jpeg",
    video: "videos/ozymandias.mp4",
    roles: ["3D VFX Artist", "Vivify Artist", "Noodle Extensions Pro"],
    links: [{ label: "View BeatSaver Profile", href: "https://beatsaver.com/profile/333773" }]
  },
  {
    name: "Caeden117",
    category: "Platform",
    avatar: "https://i.imgur.com/CdAxmd7.png",
    roles: ["Creator of ChroMapper", "Without CM 60% of maps wouldn't be made!"],
    links: [
      { label: "View GitHub Profile", href: "https://github.com/caeden117" },
      { label: "View User's Website", href: "https://caeden.dev/" },
      { label: "View BeatSaver Profile", href: "https://beatsaver.com/profile/4235137" },
      { label: "View Twitch Profile", href: "https://www.twitch.tv/caeden117" },
      { label: "View X Profile", href: "https://x.com/The_Caeden117" },
      {
        label: "About ChroMapper",
        popupTitle: "About ChroMapper",
        popupBody: "ChroMapper is an in-development, Unity-based map editor for Beat Saber, specializing in modded map creation. ChroMapper also offers tools and features tailored for advanced mappers."
      }
    ]
  },
  {
    name: "Lauriethefish",
    category: "Platform",
    avatar: "https://i.imgur.com/pzxowGO.png",
    video: "videos/fish.mp4",
    roles: ["Creator of ModsBeforeFriday", "MBF is the website used to mod Beat Saber for standalone users."],
    links: [
      { label: "View GitHub Profile", href: "https://github.com/Lauriethefish" },
      { label: "Go to MBF", href: "https://mbf.bsquest.xyz" },
      { label: "View MBF on Github", href: "https://github.com/Lauriethefish/ModsBeforeFriday" }
    ]
  },
  {
    name: "Top-Cat",
    category: "Platform",
    avatar: "https://i.imgur.com/fSg4gL5.png",
    roles: ["Creator of beatsaver.com", "BeatSaver is how users find and download custom songs for Beat Saber."],
    links: [
      { label: "Go to BeatSaver", href: "https://beatsaver.com" },
      { label: "View GitHub Profile", href: "https://github.com/Top-Cat" }
    ]
  },
  {
    name: "Mawntee",
    category: "Artist",
    avatar: "https://i.imgur.com/IDWvf85.jpeg",
    video: "videos/mawntee.mp4",
    roles: ["Modchart Artist", "Collaborator on community Modder projects, including EXS2."],
    links: [
      { label: "View BeatSaver Profile", href: "https://beatsaver.com/profile/4285959" },
      { label: "View BeatLeader Profile", href: "https://beatleader.com/u/mawntee" },
      { label: "View GitHub Profile", href: "https://github.com/Mawntee" },
      { label: "View X Profile", href: "https://twitter.com/Mawntee" }
    ]
  }
];

const introOverlay = document.getElementById("introOverlay");
const hallCards = document.getElementById("hallCards");
const memberSearch = document.getElementById("memberSearch");
const categoryFilters = document.getElementById("categoryFilters");
const emptyState = document.getElementById("emptyState");
const music = document.getElementById("bgMusic");
const bgMusicToggle = document.getElementById("bgMusicToggle");
const profileVideosToggle = document.getElementById("profileVideosToggle");
const SETTINGS_COOKIE_NAME = "bshofSettings";
const COOKIE_CONSENT_KEY = "bshofCookieConsent";
const DEFAULT_MUSIC_VOLUME = 0.4;

const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
  (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && window.innerWidth <= 1024);

let activeCategory = "All";
let introReady = false;
let introRightClicks = 0;
let introFinished = false;
let unlocked = false;
let videoActivated = false;
let musicFadeInterval = null;
let siteSettings = {
  bgMusicOn: true,
  profileVideosOn: true
};

music.volume = DEFAULT_MUSIC_VOLUME;

setTimeout(() => {
  introReady = true;
}, 14000);

function enterSite() {
  if (introFinished || !introOverlay) return;
  introFinished = true;
  introOverlay.classList.add("introLeaving");
  setTimeout(() => introOverlay.remove(), 600);
}

if (introOverlay) {
  introOverlay.addEventListener("click", () => {
    if (introReady) {
      enterSite();
    }
  });

  introOverlay.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    introRightClicks += 1;

    if (introRightClicks >= 2) {
      enterSite();
    }
  });
}

function normalizeText(value) {
  return value.toLowerCase().trim();
}

function memberMatches(member, searchValue) {
  const query = normalizeText(searchValue);
  const categoryMatches = activeCategory === "All" || member.category === activeCategory;
  if (!query) return categoryMatches;

  const haystack = normalizeText([
    member.name,
    member.category,
    ...member.roles,
    ...member.links.map(link => link.label)
  ].join(" "));

  return categoryMatches && haystack.includes(query);
}

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function setAvatarBackground(avatarElement, imageUrl) {
  const testImage = new Image();
  testImage.onload = () => {
    avatarElement.style.backgroundImage = `url('${imageUrl}')`;
  };
  testImage.onerror = () => {
    avatarElement.style.backgroundImage = `url('${FALLBACK_AVATAR}')`;
  };
  testImage.src = imageUrl || FALLBACK_AVATAR;
}

function createMemberCard(member) {
  const card = createElement("div", "card");
  card.dataset.category = member.category;

  if (member.video && !isMobileDevice) {
    const video = createElement("video", "card-video");
    const source = document.createElement("source");
    source.src = member.video;
    source.type = "video/mp4";
    video.appendChild(source);
    video.addEventListener("error", () => {
      video.remove();
      card.classList.remove("has-video");
    });
    card.appendChild(video);
  }

  const avatar = createElement("div", "avatar");
  setAvatarBackground(avatar, member.avatar);
  card.appendChild(avatar);

  card.appendChild(createElement("div", "categoryBadge", member.category));
  card.appendChild(createElement("div", "name", member.name));

  member.roles.forEach(role => {
    card.appendChild(createElement("div", "score", role));
  });

  member.links.forEach(link => {
    const linkWrap = createElement("div", "link");
    const anchor = document.createElement("a");
    anchor.textContent = link.label;
    anchor.style.color = "var(--neon2)";
    anchor.style.textDecoration = "none";
    anchor.style.fontSize = "0.85rem";

    if (link.href) {
      anchor.href = link.href;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
    } else if (link.popupTitle) {
      anchor.href = "#";
      anchor.addEventListener("click", event => openCustomPopup(event, link.popupTitle, link.popupBody));
    } else {
      anchor.href = "#";
      anchor.addEventListener("click", event => event.preventDefault());
    }

    linkWrap.appendChild(anchor);
    card.appendChild(linkWrap);
  });

  return card;
}

function renderCards() {
  pauseAllProfileVideos();
  hallCards.innerHTML = "";

  const searchValue = memberSearch.value;
  const filteredMembers = members.filter(member => memberMatches(member, searchValue));

  filteredMembers.forEach(member => {
    hallCards.appendChild(createMemberCard(member));
  });

  emptyState.classList.toggle("show", filteredMembers.length === 0);
  setupProfileVideos();
}

function renderCategoryFilters() {
  const categories = ["All", ...new Set(members.map(member => member.category))];
  categoryFilters.innerHTML = "";

  categories.forEach(category => {
    const button = createElement("button", "filterButton", category);
    button.type = "button";
    button.classList.toggle("active", category === activeCategory);
    button.addEventListener("click", () => {
      activeCategory = category;
      renderCategoryFilters();
      renderCards();
    });
    categoryFilters.appendChild(button);
  });
}

async function unlockAudio() {
  if (unlocked) return;

  unlocked = true;
  videoActivated = true;

  if (siteSettings.bgMusicOn) {
    try {
      music.muted = false;
      await music.play();
    } catch (error) {
      console.log("Music blocked:", error);
    }
  }

  window.removeEventListener("click", unlockAudio);
  window.removeEventListener("keydown", unlockAudio);
}

window.addEventListener("click", unlockAudio);
window.addEventListener("keydown", unlockAudio);

function openCredits(event) {
  event.preventDefault();
  document.getElementById("creditsModal").classList.add("show");
}

function closeCredits() {
  document.getElementById("creditsModal").classList.remove("show");
}

function openSettings() {
  document.getElementById("settingsModal").classList.add("show");
}

function closeSettings() {
  document.getElementById("settingsModal").classList.remove("show");
}

function openCustomPopup(event, title, bodyText) {
  event.preventDefault();
  document.getElementById("popupTitle").textContent = title;
  document.getElementById("popupBody").textContent = bodyText;
  document.getElementById("customPopupOverlay").classList.add("show");
}

function closeCustomPopup() {
  document.getElementById("customPopupOverlay").classList.remove("show");
}

function closeMobileNotice() {
  document.getElementById("mobileNoticeOverlay").classList.remove("show");
}

function getCookie(name) {
  const cookiePrefix = `${name}=`;
  const cookieParts = document.cookie.split(";");

  for (const cookiePart of cookieParts) {
    const cookie = cookiePart.trim();
    if (cookie.startsWith(cookiePrefix)) {
      return decodeURIComponent(cookie.slice(cookiePrefix.length));
    }
  }

  return "";
}

function saveSettingsCookie() {
  const value = encodeURIComponent(JSON.stringify(siteSettings));
  document.cookie = `${SETTINGS_COOKIE_NAME}=${value}; max-age=31536000; path=/; SameSite=Lax`;
}

function deleteSettingsCookie() {
  document.cookie = `${SETTINGS_COOKIE_NAME}=; max-age=0; path=/; SameSite=Lax`;
}

function loadSettingsCookie() {
  const savedSettings = getCookie(SETTINGS_COOKIE_NAME);
  if (!savedSettings) return;

  try {
    const parsedSettings = JSON.parse(savedSettings);
    siteSettings = {
      bgMusicOn: parsedSettings.bgMusicOn !== false,
      profileVideosOn: parsedSettings.profileVideosOn !== false
    };
  } catch (error) {
    console.log("Settings cookie failed to load:", error);
  }
}

function getCookieConsent() {
  return localStorage.getItem(COOKIE_CONSENT_KEY);
}

function syncSettingsControls() {
  bgMusicToggle.checked = siteSettings.bgMusicOn;
  profileVideosToggle.checked = siteSettings.profileVideosOn;
}

function pauseAllProfileVideos() {
  document.querySelectorAll(".card-video").forEach(video => {
    video.pause();
    video.currentTime = 0;
  });

  document.querySelectorAll(".video-activation-popup").forEach(popup => {
    popup.classList.remove("active");
  });
}

function applySettings() {
  document.body.classList.toggle("profile-videos-off", !siteSettings.profileVideosOn);

  if (!siteSettings.bgMusicOn) {
    if (musicFadeInterval) {
      clearInterval(musicFadeInterval);
      musicFadeInterval = null;
    }

    music.muted = true;
    music.pause();
    music.volume = 0;
  } else {
    music.muted = false;
    music.volume = DEFAULT_MUSIC_VOLUME;

    if (unlocked) {
      music.play().catch(error => console.log("Music play failed:", error));
    }
  }

  if (!siteSettings.profileVideosOn) {
    pauseAllProfileVideos();
  }
}

function promptSettingsCookieSave() {
  const consent = getCookieConsent();

  if (consent === "accepted") {
    saveSettingsCookie();
    return;
  }

  if (consent === "declined") {
    deleteSettingsCookie();
    return;
  }

  document.getElementById("cookiePreferenceModal").classList.add("show");
}

function acceptSettingsCookies() {
  localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
  saveSettingsCookie();
  document.getElementById("cookiePreferenceModal").classList.remove("show");
}

function declineSettingsCookies() {
  localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
  deleteSettingsCookie();
  document.getElementById("cookiePreferenceModal").classList.remove("show");
}

function updateSetting(settingName, isEnabled) {
  siteSettings[settingName] = isEnabled;
  syncSettingsControls();
  applySettings();
  promptSettingsCookieSave();
}

function fadeOutMusic() {
  return new Promise(resolve => {
    if (!siteSettings.bgMusicOn) {
      music.muted = true;
      music.pause();
      resolve();
      return;
    }

    if (musicFadeInterval) {
      clearInterval(musicFadeInterval);
    }

    const fadeSpeed = 0.1;
    musicFadeInterval = setInterval(() => {
      music.volume = Math.max(0, music.volume - fadeSpeed);
      if (music.volume <= 0) {
        clearInterval(musicFadeInterval);
        musicFadeInterval = null;
        music.pause();
        resolve();
      }
    }, 30);
  });
}

function fadeInMusic() {
  return new Promise(resolve => {
    if (!siteSettings.bgMusicOn) {
      music.muted = true;
      music.pause();
      music.volume = 0;
      resolve();
      return;
    }

    if (musicFadeInterval) {
      clearInterval(musicFadeInterval);
    }

    music.muted = false;
    music.volume = 0;
    music.play().catch(error => console.log("Music play failed:", error));
    const fadeSpeed = 0.05;
    musicFadeInterval = setInterval(() => {
      music.volume = Math.min(DEFAULT_MUSIC_VOLUME, music.volume + fadeSpeed);
      if (music.volume >= DEFAULT_MUSIC_VOLUME) {
        clearInterval(musicFadeInterval);
        musicFadeInterval = null;
        resolve();
      }
    }, 30);
  });
}

function setupProfileVideos() {
  if (isMobileDevice) return;

  document.querySelectorAll(".card-video").forEach(video => {
    const card = video.parentElement;
    if (!card || card.dataset.videoReady === "true") return;

    card.dataset.videoReady = "true";
    card.classList.add("has-video");
    video.loop = true;
    video.volume = 0.4;

    const popup = createElement("div", "video-activation-popup");
    popup.innerHTML = '<span class="popup-icon">🔒</span><div class="popup-text">Click to activate videos.</div>';
    card.appendChild(popup);

    card.addEventListener("mouseenter", () => {
      if (!siteSettings.profileVideosOn) {
        popup.classList.remove("active");
        video.pause();
        video.currentTime = 0;
        return;
      }

      if (!videoActivated) {
        popup.classList.add("active");
      } else {
        if (siteSettings.bgMusicOn) {
          fadeOutMusic();
        }
        video.play().catch(error => console.log("Video play failed:", error));
      }
    });

    card.addEventListener("mouseleave", () => {
      popup.classList.remove("active");
      if (videoActivated) {
        video.pause();
        video.currentTime = 0;
        if (siteSettings.bgMusicOn) {
          fadeInMusic();
        }
      }
    });
  });
}

function closeOverlayModal(event, elementId, closeCallback) {
  const modal = document.getElementById(elementId);
  if (event.target === modal) {
    closeCallback();
  }
}

if (isMobileDevice) {
  document.getElementById("mobileNoticeOverlay").classList.add("show");
}

loadSettingsCookie();
syncSettingsControls();
applySettings();
renderCategoryFilters();
renderCards();

memberSearch.addEventListener("input", renderCards);

bgMusicToggle.addEventListener("change", () => {
  updateSetting("bgMusicOn", bgMusicToggle.checked);
});

profileVideosToggle.addEventListener("change", () => {
  updateSetting("profileVideosOn", profileVideosToggle.checked);
});

window.addEventListener("click", event => {
  closeOverlayModal(event, "customPopupOverlay", closeCustomPopup);
  closeOverlayModal(event, "creditsModal", closeCredits);
  closeOverlayModal(event, "settingsModal", closeSettings);
  closeOverlayModal(event, "mobileNoticeOverlay", closeMobileNotice);
});
