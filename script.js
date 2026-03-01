// Content Data Structure
// 
// VIDEO SOURCES: You can use either:
// 1. Local files: "assets/videos/year1/video.mp4"
// 2. Google Drive: "https://drive.google.com/file/d/FILE_ID/view?usp=sharing"
//    (The code automatically converts Google Drive links to embeddable format)
//
const content = {
    gradYear: "2026",
    playerName: "Sharanya",
    year1: {
        title: "The Girls",
        intro: "Your day ones. The ones who've been there through it all.",
        videos: [
            {
                name: "Megha",
                caption: "Your first lab parter who saw you through the toughest times",
                src: "https://drive.google.com/file/d/1OIudvptPpoihXn42YR2969vqa6F5CPsj/view?usp=drive_link"
            },
            {
                name: "Rahave",
                caption: "The core girls group who always had your back",
                src: "https://drive.google.com/file/d/1d28btEDSvaHFD4ZlSjS2J-ULKnuTOdoM/view?usp=drive_link"
            },
            {
                name: "Nawal",
                caption: "The one who never let you feel alone",
                src: "https://drive.google.com/file/d/1daQyFfRsWJHLEKWQ-OAB09zkqyCfcIrg/view?usp=drive_link"
            },
            {
                name: "Rana",
                caption: "The one with the cutest cat!",
                src: "https://drive.google.com/file/d/1rRYynuNp0u4pGQMLWEDFaxH6s8zZcr94/view?usp=drive_link"
            },
            {
                name: "Kemi",
                caption: "Your study partner who always had your back",
                src: "https://drive.google.com/file/d/1FSwuS6_7P26jW6pf6AShu0ySo7BZAtM3/view?usp=drive_link"
            },
            {
                name: "Argo",
                caption: "Honestly bro, your crazy friend which is always needed",
                src: "https://drive.google.com/file/d/16cNCLS5nOcwWBeC-y_JA7kM4cfFe2nbX/view?usp=drive_link"
            }
        ]
    },
    year2: {
        title: "The Boys",
        intro: "The ones who always have your back. Your ride or dies.",
        videos: [
            {
                name: "Jason",
                caption: "The cool guy who always had your back",
                src: "https://drive.google.com/file/d/1-7q4Z6wYUrh3gqSqK4eBuSBWMI09HhH0/view?usp=drive_link"
            },
            {
                name: "Faizan",
                caption: "Your driver friend for every trip!",
                src: "https://drive.google.com/file/d/1xnWjmvnRBuFPsq6XwNq5_2YbijPXzrWu/view?usp=drive_link"
            },
            {
                name: "Yash",
                caption: "From what I understand, the financially concerned friend who always had your back",
                src: "https://drive.google.com/file/d/16BvhBKE1cg7M3Zune0a0yMDFsdlRkmzK/view?usp=drive_link"
            },
            {
                name: "Fasih",
                caption: "The comdien friend who always matches our vibes",
                src: "https://drive.google.com/file/d/1gs11sAyhUDABmsOIbejP6GEHuDhwfSZf/view?usp=drive_link"
            },
            {
                name: "Ahsen",
                caption: "The calm and collected friend who always has your back",
                src: "https://drive.google.com/file/d/1xnWjmvnRBuFPsq6XwNq5_2YbijPXzrWu/view?usp=drive_link"
            }
        ]
    },
    year3: {
        title: "The OGs",
        intro: "The originals. The ones who've been with you from the start.",
        videos: [
            {
                name: "Luc",
                caption: "The eccentric funny friend who always had your back",
                src: "https://drive.google.com/file/d/1daQyFfRsWJHLEKWQ-OAB09zkqyCfcIrg/view?usp=drive_link"
            },
            {
                name: "Nich",
                caption: "Your extroverted full on YOLO friend!",
                src: "https://drive.google.com/file/d/1xfH0lMtFMpPcK3xSLtWsHCcjU8Zd219g/view?usp=drive_link"
            },
            {
                name: "Andre",
                caption: "The friend you met in 1B and continues to question your faith in engineers lol.",
                src: "https://drive.google.com/file/d/1MhX8_84VLWCha0hTq3-YLORPnF3zpCB9/view?usp=drive_link"
            },
            {
                name: "Theo",
                caption: "The crazy friend who drove blind downhill and left you wondering if you should be scared of him",
                src: "https://drive.google.com/file/d/14nSNgqC1QyzNrqEN7U7BkGFGe1j6Ha_Z/view?usp=drive_link"
            },
            {
                name: "Juan",
                caption: "Your latino man crush who had your back during the toughest times",
                src: "https://drive.google.com/file/d/1WU54oUGrJo0hn1WHa7x2rVMHfgJzvdVq/view?usp=drive_link"
            },
            {
                name: "Adesh",
                caption: "Your first friend and roomie but don't have words for him now",
                src: "https://drive.google.com/file/d/1FXTMaiNEIUIQCA4GgprCiep2PyBfiGNB/view?usp=drive_link"
            }
        ]
    },
    constant: {
        title: "THE CONSTANT",
        intro: "When college ended, something didn't.",
        video: {
            src: "https://drive.google.com/file/d/1VBUeA7Agiwgs0sqzeX6lqRfdRKEdlztH/view?usp=drive_link"
        },
        letter: "Optional letter to future him goes here. This is where you can write a personal message that will be displayed below the video."
    }
};

// Helper Functions
function isGoogleDriveLink(url) {
    return url && (url.includes('drive.google.com') || url.includes('docs.google.com'));
}

function convertDriveLinkToEmbed(url) {
    // Convert Google Drive sharing link to embeddable format
    // Format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
    // To: https://drive.google.com/file/d/FILE_ID/preview
    if (url.includes('/file/d/')) {
        const fileIdMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
        if (fileIdMatch) {
            return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
        }
    }
    return url;
}

// State Management
let currentScreen = 'cover';
let musicPlaying = false;

// DOM Elements
const screens = {
    cover: document.getElementById('cover-screen'),
    yearSelection: document.getElementById('year-selection'),
    yearPage: document.getElementById('year-page'),
    constantPage: document.getElementById('constant-page')
};

const startBtn = document.getElementById('start-btn');
const constantBtn = document.getElementById('constant-btn');
const backBtns = {
    toCover: document.getElementById('back-to-cover'),
    toSelection: document.getElementById('back-to-selection'),
    toSelectionConstant: document.getElementById('back-to-selection-constant')
};
const yearCards = document.querySelectorAll('.year-card');
const videoModal = document.getElementById('video-modal');
const modalClose = document.querySelector('.modal-close');
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
const clickSound = document.getElementById('click-sound');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set cover screen content
    document.getElementById('grad-year').textContent = content.gradYear;
    document.getElementById('player-name').textContent = content.playerName;
    
    // Mark cover screen as no-flip on initial load
    document.getElementById('cover-screen').classList.add('no-flip');
    
    // Create floating particles
    createParticles();
    
    // Event Listeners
    setupEventListeners();
});

function createParticles() {
    const container = document.querySelector('.particles-container');
    if (!container) return;
    
    const particleCount = 12;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        
        // Random animation duration (slow, 15-25 seconds)
        const duration = 15 + Math.random() * 10;
        particle.style.animationDuration = duration + 's';
        
        // Random delay
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        // Random size variation
        const size = 1.5 + Math.random() * 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        container.appendChild(particle);
    }
}

function setupEventListeners() {
    // Navigation
    startBtn.addEventListener('click', () => {
        // Prevent double trigger
        if (startBtn.disabled) return;
        
        playClickSound();
        
        // Disable button during animation
        startBtn.disabled = true;
        
        // Start background music after user interaction
        if (!musicPlaying && bgMusic) {
            bgMusic.volume = 0.12;
            bgMusic.play().catch(e => {
                console.log('Audio play failed:', e);
            });
            musicPlaying = true;
            musicToggle.classList.remove('muted');
            musicToggle.textContent = '🔊';
        }
        
        // Trigger car animation
        triggerCarAnimation();
    });
    
    constantBtn.addEventListener('click', () => {
        playClickSound();
        showIntroVideo();
    });
    
    backBtns.toCover.addEventListener('click', () => {
        playClickSound();
        showScreen('cover');
    });
    
    backBtns.toSelection.addEventListener('click', () => {
        playClickSound();
        showScreen('yearSelection');
    });
    
    backBtns.toSelectionConstant.addEventListener('click', () => {
        playClickSound();
        showScreen('yearSelection');
    });
    
    // Year Cards
    yearCards.forEach(card => {
        card.addEventListener('click', () => {
            playClickSound();
            const year = card.dataset.year;
            renderYearPage(year);
            // Apply themed background
            const yearPage = screens.yearPage;
            yearPage.classList.remove('theme-girls', 'theme-boys', 'theme-ogs');
            if (year === 'year1') yearPage.classList.add('theme-girls');
            else if (year === 'year2') yearPage.classList.add('theme-boys');
            else if (year === 'year3') yearPage.classList.add('theme-ogs');
            showScreen('yearPage');
        });
    });
    
    // Modal
    modalClose.addEventListener('click', () => {
        playClickSound();
        closeModal();
    });
    
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            closeModal();
        }
    });
    
    // Password modal close on outside click
    const passwordModal = document.getElementById('password-modal');
    passwordModal.addEventListener('click', (e) => {
        if (e.target === passwordModal) {
            passwordModal.classList.remove('active');
        }
    });
    
    // Music Toggle
    musicToggle.addEventListener('click', () => {
        toggleMusic();
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeModal();
        }
    });
}

function showScreen(screenName) {
    // Find current active screen
    let currentActiveScreen = null;
    Object.values(screens).forEach(screen => {
        if (screen.classList.contains('active')) {
            currentActiveScreen = screen;
        }
    });
    
    // Show target screen
    if (screens[screenName]) {
        // If there's a current screen, flip it out and next page in
        if (currentActiveScreen && currentActiveScreen !== screens[screenName]) {
            // Position next page behind current page (at -180deg)
            screens[screenName].classList.remove('no-flip');
            screens[screenName].classList.add('flipping-in');
            
            // Start flipping out current page (0deg to -180deg)
            currentActiveScreen.classList.remove('active', 'no-flip');
            currentActiveScreen.classList.add('flipping-out');
            
            // After transition completes, clean up classes
            setTimeout(() => {
                currentActiveScreen.classList.remove('flipping-out');
                screens[screenName].classList.remove('flipping-in');
                screens[screenName].classList.add('active');
                currentScreen = screenName;
            }, 800); // Match transition duration (0.8s)
        } else {
            // No current screen, just show directly
            Object.values(screens).forEach(screen => {
                screen.classList.remove('active', 'flipping-out', 'flipping-in');
            });
            screens[screenName].classList.remove('no-flip', 'flipping-in');
            screens[screenName].classList.add('active');
            currentScreen = screenName;
        }
    }
}

function renderYearPage(yearKey) {
    const yearData = content[yearKey];
    if (!yearData) return;
    
    const yearContent = document.getElementById('year-content');
    
    // Create header
    const header = document.createElement('div');
    header.className = 'year-header';
    header.innerHTML = `
        <h2>${yearData.title}</h2>
        <p class="year-intro">${yearData.intro}</p>
    `;
    
    // Create video grid
    const grid = document.createElement('div');
    grid.className = 'video-grid';
    
    yearData.videos.forEach((video, index) => {
        const card = document.createElement('div');
        card.className = 'video-card';
        
        const videoId = `${yearKey}-${index}`;
        
        card.innerHTML = `
            <h3>${video.name}</h3>
            <p>${video.caption}</p>
            <button class="watch-btn" data-video-id="${videoId}" data-video-src="${video.src}" data-friend-name="${video.name}" data-caption="${video.caption}">
                [ Watch Message ]
            </button>
        `;
        
        grid.appendChild(card);
    });
    
    // Clear and populate
    yearContent.innerHTML = '';
    yearContent.appendChild(header);
    yearContent.appendChild(grid);
    
    // Add event listeners to watch buttons
    const watchButtons = yearContent.querySelectorAll('.watch-btn');
    watchButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            playClickSound();
            const videoId = btn.dataset.videoId;
            const videoSrc = btn.dataset.videoSrc;
            const friendName = btn.dataset.friendName;
            const caption = btn.dataset.caption;
            openVideoModal(videoId, videoSrc, friendName, caption);
        });
    });
}

function renderConstantPage() {
    const constantData = content.constant;
    const constantContent = document.getElementById('constant-content');
    
    constantContent.innerHTML = `
        <div class="constant-header">
            <h2>${constantData.title}</h2>
            <p class="constant-intro">${constantData.intro}</p>
        </div>
        <div class="constant-video-container">
            ${isGoogleDriveLink(constantData.video.src) 
                ? `<iframe 
                    src="${convertDriveLinkToEmbed(constantData.video.src)}" 
                    width="100%" 
                    height="600" 
                    frameborder="0" 
                    allow="autoplay; encrypted-media" 
                    allowfullscreen
                    style="border: 4px solid var(--text-dark); box-shadow: 6px 6px 0 var(--shadow-strong);">
                   </iframe>`
                : `<video controls>
                    <source src="${encodeURI(constantData.video.src)}" type="${constantData.video.src.split('.').pop().toLowerCase() === 'mov' ? 'video/quicktime' : 'video/mp4'}">
                    Your browser does not support the video tag.
                   </video>`
            }
        </div>
        ${constantData.letter ? `<div class="constant-letter">${constantData.letter}</div>` : ''}
    `;
    
    // Add error handling for constant video (only for local files)
    if (!isGoogleDriveLink(constantData.video.src)) {
        const constantVideo = constantContent.querySelector('video');
        if (constantVideo) {
            constantVideo.addEventListener('error', (e) => {
                console.error('Constant video loading error:', e);
                console.error('Video source:', constantData.video.src);
                alert('Unable to load video. Please check:\n1. File path is correct\n2. File exists\n3. You are using a local server (not file://)');
            });
            constantVideo.addEventListener('loadeddata', () => {
                console.log('Constant video loaded successfully:', constantData.video.src);
            });
        }
    }
}

function openVideoModal(videoId, videoSrc, friendName, caption) {
    const modalVideoContainer = document.getElementById('modal-video-container');
    const modalFriendName = document.getElementById('modal-friend-name');
    const modalCaption = document.getElementById('modal-caption');
    const memoryUnlocked = document.getElementById('memory-unlocked');
    
    // Reset animation
    memoryUnlocked.style.animation = 'none';
    setTimeout(() => {
        memoryUnlocked.style.animation = 'unlockAnimation 1s ease forwards';
    }, 10);
    
    // Check if it's a Google Drive link or local file
    if (isGoogleDriveLink(videoSrc)) {
        // Use iframe for Google Drive
        const embedUrl = convertDriveLinkToEmbed(videoSrc);
        modalVideoContainer.innerHTML = `
            <iframe 
                src="${embedUrl}" 
                width="100%" 
                height="500" 
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen
                style="border: 3px solid var(--text-dark); box-shadow: 4px 4px 0 var(--shadow);">
            </iframe>
        `;
        console.log('Google Drive video loaded:', embedUrl);
    } else {
        // Use video tag for local files
        const fileExtension = videoSrc.split('.').pop().toLowerCase();
        const mimeType = fileExtension === 'mov' ? 'video/quicktime' : 'video/mp4';
        const encodedSrc = encodeURI(videoSrc);
        
        modalVideoContainer.innerHTML = `
            <video controls autoplay>
                <source src="${encodedSrc}" type="${mimeType}">
                Your browser does not support the video tag.
            </video>
        `;
        
        // Add error handling
        const video = modalVideoContainer.querySelector('video');
        if (video) {
            video.addEventListener('error', (e) => {
                console.error('Video loading error:', e);
                console.error('Video source:', encodedSrc);
                alert('Unable to load video. Please check:\n1. File path is correct\n2. File exists\n3. You are using a local server (not file://)');
            });
            video.addEventListener('loadeddata', () => {
                console.log('Video loaded successfully:', encodedSrc);
            });
        }
    }
    
    // Set info
    modalFriendName.textContent = friendName;
    modalCaption.textContent = caption;
    
    // Show modal
    videoModal.classList.add('active');
}

function showIntroVideo() {
    const introVideoUrl = "https://drive.google.com/file/d/1EnZlsKUU2op6Qoumen9yLEmh3bRVeHr5/view?usp=drive_link";
    const modalVideoContainer = document.getElementById('modal-video-container');
    const modalFriendName = document.getElementById('modal-friend-name');
    const modalCaption = document.getElementById('modal-caption');
    const memoryUnlocked = document.getElementById('memory-unlocked');
    
    // Hide the memory unlocked text for intro video
    memoryUnlocked.style.display = 'none';
    modalFriendName.textContent = '';
    modalCaption.textContent = '';
    
    // Check if it's a Google Drive link
    if (isGoogleDriveLink(introVideoUrl)) {
        const embedUrl = convertDriveLinkToEmbed(introVideoUrl);
        modalVideoContainer.innerHTML = `
            <iframe 
                id="intro-video-iframe"
                src="${embedUrl}" 
                width="100%" 
                height="500" 
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen
                style="border: 3px solid var(--text-dark); box-shadow: 4px 4px 0 var(--shadow);">
            </iframe>
        `;
        
        // For Google Drive, add a "Continue" button that appears after some time
        setTimeout(() => {
            const continueBtn = document.createElement('button');
            continueBtn.textContent = '[ Continue ]';
            continueBtn.className = 'retro-btn';
            continueBtn.style.margin = '1rem auto 0';
            continueBtn.style.display = 'block';
            continueBtn.onclick = () => {
                closeModal();
                showPasswordPrompt();
            };
            modalVideoContainer.appendChild(continueBtn);
        }, 3000); // Show continue button after 3 seconds
    } else {
        // Use video tag for local files
        modalVideoContainer.innerHTML = `
            <video id="intro-video" controls autoplay>
                <source src="${encodeURI(introVideoUrl)}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
        
        const video = document.getElementById('intro-video');
        video.addEventListener('ended', () => {
            closeModal();
            showPasswordPrompt();
        });
    }
    
    // Show modal
    videoModal.classList.add('active');
}

function closeModal() {
    videoModal.classList.remove('active');
    
    // Stop video (local files)
    const video = document.querySelector('#modal-video-container video');
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
    
    // Remove iframe (Google Drive) to stop playback
    const iframe = document.querySelector('#modal-video-container iframe');
    if (iframe) {
        iframe.src = '';
    }
    
    // Clear the container
    const modalVideoContainer = document.getElementById('modal-video-container');
    modalVideoContainer.innerHTML = '';
    
    // Show memory unlocked text again
    const memoryUnlocked = document.getElementById('memory-unlocked');
    if (memoryUnlocked) {
        memoryUnlocked.style.display = 'block';
    }
}

// Password for constant page - CHANGE THIS TO YOUR DESIRED PASSWORD
const CONSTANT_PASSWORD = "Bittu";

function showPasswordPrompt() {
    const passwordModal = document.getElementById('password-modal');
    const passwordInput = document.getElementById('password-input');
    const passwordSubmit = document.getElementById('password-submit');
    const passwordError = document.getElementById('password-error');
    
    // Reset
    passwordInput.value = '';
    passwordError.classList.add('hidden');
    passwordError.textContent = '';
    
    // Show modal
    passwordModal.classList.add('active');
    passwordInput.focus();
    
    // Handle submit
    const handleSubmit = () => {
        const enteredPassword = passwordInput.value.trim();
        
        if (enteredPassword === CONSTANT_PASSWORD) {
            playClickSound();
            passwordModal.classList.remove('active');
            passwordInput.value = '';
            renderConstantPage();
            showScreen('constantPage');
        } else {
            playClickSound();
            passwordError.textContent = '[ INCORRECT PASSWORD ]';
            passwordError.classList.remove('hidden');
            passwordInput.value = '';
            passwordInput.focus();
            
            // Shake animation
            passwordInput.style.animation = 'shake 0.5s';
            setTimeout(() => {
                passwordInput.style.animation = '';
            }, 500);
        }
    };
    
    // Submit on button click
    passwordSubmit.onclick = handleSubmit;
    
    // Submit on Enter key
    passwordInput.onkeydown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };
}


function toggleMusic() {
    if (musicPlaying) {
        bgMusic.pause();
        musicToggle.classList.add('muted');
        musicToggle.textContent = '🔇';
        musicPlaying = false;
    } else {
        bgMusic.volume = 0.12; // Very low volume (0.12 = 12%)
        bgMusic.play().catch(e => {
            console.log('Audio play failed:', e);
        });
        musicToggle.classList.remove('muted');
        musicToggle.textContent = '🔊';
        musicPlaying = true;
    }
}

function playClickSound() {
    if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.volume = 0.3;
        clickSound.play().catch(e => {
            // Ignore audio play errors
        });
    }
}


function triggerCarAnimation() {
    const coverScreen = document.getElementById('cover-screen');
    const carSprite = document.querySelector('.car-sprite');
    const carBanner = document.querySelector('.car-banner');
    const roadLine = document.querySelector('.road-line');
    
    if (!carSprite || !roadLine) return;
    
    // Start car, banner, and road animations
    carSprite.classList.add('animating');
    if (carBanner) {
        carBanner.classList.add('animating');
    }
    roadLine.classList.add('animating');
    
    // After car reaches right side (3.5s), fade out screen
    setTimeout(() => {
        coverScreen.classList.add('fading-out');
        
        // After fade out completes, transition to year selection
        setTimeout(() => {
            coverScreen.classList.remove('fading-out');
            carSprite.classList.remove('animating');
            if (carBanner) {
                carBanner.classList.remove('animating');
            }
            roadLine.classList.remove('animating');
            startBtn.disabled = false;
            showScreen('yearSelection');
        }, 500); // Match fadeOutScreen duration
    }, 3500); // Match driveCar duration (3.5s)
}

