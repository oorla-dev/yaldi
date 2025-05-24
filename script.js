// Global State
let currentSection = 'home';
let currentUser = null;
let isLoggedIn = false;
let cart = [];
let currentTrack = null;
let isPlaying = false;
let selectedAlbum = null;
let logoClickCount = 0;
let showGames = false;
let currentAccountSection = 'login';

// Data
const products = [
    {
        id: 1,
        name: "FREE MARINAIO TEE",
        code: "FM-01",
        image: "https://i.ibb.co/N2MRs64X/FREE-MARINAIO.jpg",
        type: "clothing",
        category: "tee",
        available: true,
        price: 30,
        sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
        id: 2,
        name: "YALDI HOODIE",
        code: "YH-01",
        image: "https://i.ibb.co/MDZf9tSY/Progetto-senza-titolo.jpg",
        type: "clothing",
        category: "hoodie",
        available: true,
        price: 55,
        sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
        id: 3,
        name: "ALDI RUNNER",
        code: "AR-01",
        image: "https://i.ibb.co/Z1BSx9zR/Progetto-senza-titolo.jpg",
        type: "shoes",
        available: true,
        price: 20,
        sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    },
    {
        id: 4,
        name: "YALDI CLASSIC",
        code: "YC-01",
        image: "https://i.ibb.co/MDD2ZSgp/Progetto-senza-titolo-2.jpg",
        type: "shoes",
        available: true,
        price: 20,
        sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    },
    {
        id: 5,
        name: "BASIC TEE",
        code: "BT-01",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f0f0f0'/%3E%3Ctext x='200' y='200' text-anchor='middle' dy='0.3em' font-family='Arial' font-size='16' fill='%23666'%3EBASIC TEE%3C/text%3E%3C/svg%3E",
        type: "clothing",
        category: "tee",
        available: true,
        price: 30,
        sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
        id: 6,
        name: "OVERSIZED HOODIE",
        code: "OH-01",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f0f0f0'/%3E%3Ctext x='200' y='200' text-anchor='middle' dy='0.3em' font-family='Arial' font-size='16' fill='%23666'%3EOVERSIZED HOODIE%3C/text%3E%3C/svg%3E",
        type: "clothing",
        category: "hoodie",
        available: true,
        price: 55,
        sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
        id: 7,
        name: "SPORT RUNNER",
        code: "SR-01",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f0f0f0'/%3E%3Ctext x='200' y='200' text-anchor='middle' dy='0.3em' font-family='Arial' font-size='16' fill='%23666'%3ESPORT RUNNER%3C/text%3E%3C/svg%3E",
        type: "shoes",
        available: true,
        price: 20,
        sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    },
];

const albums = [
    {
        id: 1,
        title: "YALDHI",
        image: "https://i.ibb.co/NgS7rqnn/2-20250302_130159-0001.jpg",
        available: true,
        tracks: [
            { title: "AITS-01", name: "ALDI IN THE SKY", duration: "3:24", src: "#" },
            { title: "MTAM-01", name: "MEET THE ALDI MANAGERS", duration: "2:58", src: "#" },
            { title: "FG-01", name: "FVUCK GIANVOIT", duration: "4:12", src: "#" },
        ],
    },
    {
        id: 2,
        title: "DONDA 2",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23333'/%3E%3Ctext x='150' y='150' text-anchor='middle' dy='0.3em' font-family='Arial' font-size='16' fill='%23fff'%3EDONDA 2%3C/text%3E%3C/svg%3E",
        available: false,
        tracks: [],
    },
    {
        id: 3,
        title: "BULDY",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23666'/%3E%3Ctext x='150' y='150' text-anchor='middle' dy='0.3em' font-family='Arial' font-size='16' fill='%23fff'%3EBULDY%3C/text%3E%3C/svg%3E",
        available: false,
        tracks: [],
    },
];

const games = [
    {
        id: 1,
        name: "YALDI RUNNER",
        description: "Corri attraverso i corridoi di ALDI",
        icon: "🎯",
        color: "blue",
        status: "available",
    },
    {
        id: 2,
        name: "PUZZLE YEEZY",
        description: "Risolvi puzzle con le sneakers",
        icon: "🧩",
        color: "green",
        status: "available",
    },
    {
        id: 3,
        name: "ALDI QUEST",
        description: "Avventura nel mondo YALDI",
        icon: "🏆",
        color: "orange",
        status: "available",
    },
    {
        id: 4,
        name: "MUSIC HERO",
        description: "Gioca con le tracce YALDI",
        icon: "🎵",
        color: "pink",
        status: "available",
    },
];

// User Profile and Settings
let userProfile = {
    name: "",
    username: "",
    bio: "",
    avatar: "",
    location: "",
    website: "",
    birthDate: "",
    favoriteGenre: "",
    isPublic: true,
};

let userSettings = {
    notifications: true,
    emailNotifications: true,
    pushNotifications: false,
    autoPlay: true,
    highQuality: false,
    language: "it",
    currency: "EUR",
    theme: "light",
};

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    startCountdown();
    loadUserData();
    renderProducts();
    renderAlbums();
    renderGames();
    preventContextMenu();
});

function initializeApp() {
    selectedAlbum = albums[0];
    showSection('home');
}

function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.target.getAttribute('data-section');
            showSection(section);
        });
    });

    // Mobile menu
    document.getElementById('mobileMenuBtn').addEventListener('click', toggleMobileMenu);

    // Logo clicks for games easter egg
    document.getElementById('logo').addEventListener('click', handleLogoClick);

    // Cart
    document.getElementById('cartBtn').addEventListener('click', openCart);

    // Account navigation
    document.querySelectorAll('.account-nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.target.getAttribute('data-account-section');
            showAccountSection(section);
        });
    });

    // Auth forms
    document.getElementById('loginSubmit').addEventListener('click', handleLogin);
    document.getElementById('registerSubmit').addEventListener('click', handleRegister);
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);

    // Profile and settings
    document.getElementById('saveProfile').addEventListener('click', saveProfile);
    document.getElementById('saveSettings').addEventListener('click', saveSettings);

    // Theme selector
    document.getElementById('themeSelect').addEventListener('change', (e) => {
        changeTheme(e.target.value);
    });

    // Music player controls
    document.getElementById('playPauseBtn').addEventListener('click', togglePlay);
    document.getElementById('prevBtn').addEventListener('click', playPrevTrack);
    document.getElementById('nextBtn').addEventListener('click', playNextTrack);
    document.getElementById('closePlayerBtn').addEventListener('click', closeMiniPlayer);

    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', closeModals);
    });

    // Close modals when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModals();
            }
        });
    });
}

// Navigation Functions
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionName).classList.add('active');

    // Update navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.querySelectorAll(`[data-section="${sectionName}"]`).forEach(btn => {
        btn.classList.add('active');
    });

    currentSection = sectionName;

    // Close mobile menu
    document.getElementById('mobileNav').classList.add('hidden');
}

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('hidden');
}

function handleLogoClick() {
    logoClickCount++;
    if (logoClickCount === 3) {
        showGames = true;
        document.getElementById('gamesBtn').classList.remove('hidden');
        document.getElementById('mobileGamesBtn').classList.remove('hidden');
        setTimeout(() => {
            logoClickCount = 0;
        }, 1000);
    }
}

// Countdown Timer
function startCountdown() {
    const endDate = new Date("June 15, 2025 18:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeDifference = endDate - now;

        if (timeDifference <= 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Products Functions
function renderProducts() {
    // Featured product
    const featuredProduct = products[0];
    document.getElementById('featuredProduct').innerHTML = createProductCard(featuredProduct, true);

    // Apparel
    const apparel = products.filter(p => p.type === 'clothing');
    document.getElementById('apparelGrid').innerHTML = apparel.map(p => createProductCard(p)).join('');

    // Footwear
    const footwear = products.filter(p => p.type === 'shoes');
    document.getElementById('footwearGrid').innerHTML = footwear.map(p => createProductCard(p)).join('');
}

function createProductCard(product, featured = false) {
    const sizeSelector = product.sizes ? `
        <div class="size-selector">
            <label>Taglia:</label>
            <select id="size-${product.id}">
                <option value="">Seleziona taglia</option>
                ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
            </select>
        </div>
    ` : '';

    return `
        <div class="product-card ${featured ? 'featured' : ''}">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-code">${product.code}</p>
                <p class="product-price">€${product.price.toFixed(2)}</p>
                ${sizeSelector}
                <button class="btn btn-primary full-width" onclick="addToCart(${product.id})">
                    AGGIUNGI AL CARRELLO
                </button>
            </div>
        </div>
    `;
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let selectedSize = '';
    if (product.sizes) {
        const sizeSelect = document.getElementById(`size-${productId}`);
        selectedSize = sizeSelect ? sizeSelect.value : '';
        if (!selectedSize) {
            alert('Seleziona una taglia');
            return;
        }
    }

    const existingItem = cart.find(item => item.id === productId && item.size === selectedSize);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            size: selectedSize,
            quantity: 1
        });
    }

    updateCartBadge();
    
    // Reset size selector
    if (product.sizes) {
        const sizeSelect = document.getElementById(`size-${productId}`);
        if (sizeSelect) sizeSelect.value = '';
    }
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (totalItems > 0) {
        badge.textContent = totalItems;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

function openCart() {
    const modal = document.getElementById('cartModal');
    const content = document.getElementById('cartContent');
    
    if (cart.length === 0) {
        content.innerHTML = '<p>Il carrello è vuoto</p>';
    } else {
        content.innerHTML = `
            <div class="cart-items">
                ${cart.map(item => createCartItem(item)).join('')}
            </div>
            <div class="cart-total">
                <span>TOTALE:</span>
                <span>€${getCartTotal().toFixed(2)}</span>
            </div>
            <button class="btn btn-primary full-width" onclick="checkout()">
                PROCEDI AL CHECKOUT
            </button>
        `;
    }
    
    modal.classList.add('active');
}

function createCartItem(item) {
    return `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                ${item.size ? `<div class="cart-item-size">Taglia: ${item.size}</div>` : ''}
                <div class="cart-item-price">€${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, '${item.size}', ${item.quantity - 1})">-</button>
                <span class="quantity-display">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, '${item.size}', ${item.quantity + 1})">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id}, '${item.size}')">×</button>
            </div>
        </div>
    `;
}

function updateQuantity(id, size, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(id, size);
        return;
    }

    const item = cart.find(item => item.id === id && item.size === size);
    if (item) {
        item.quantity = newQuantity;
        updateCartBadge();
        openCart(); // Refresh cart display
    }
}

function removeFromCart(id, size) {
    cart = cart.filter(item => !(item.id === id && item.size === size));
    updateCartBadge();
    openCart(); // Refresh cart display
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function checkout() {
    if (cart.length === 0) return;

    // Pre-fill customer info if logged in
    let customerInfo = {
        name: '',
        email: '',
        address: '',
        city: '',
        zip: ''
    };

    if (isLoggedIn && currentUser) {
        customerInfo.name = userProfile.name || currentUser.name || '';
        customerInfo.email = currentUser.email || '';
        customerInfo.address = userProfile.location || '';
    }

    // Simple checkout simulation
    const orderData = {
        items: cart,
        total: getCartTotal(),
        customer: customerInfo,
        orderNumber: 'YLD-' + Math.random().toString(36).substr(2, 9).toUpperCase()
    };

    // Generate receipt (simplified)
    generateReceipt(orderData);
    
    // Clear cart
    cart = [];
    updateCartBadge();
    closeModals();
    
    alert('Ordine completato! Ricevuta generata.');
}

function generateReceipt(orderData) {
    // Simple receipt generation - in a real app, this would create a PDF
    const receiptContent = `
YALDI - RICEVUTA DI ACQUISTO
============================

Data: ${new Date().toLocaleDateString('it-IT')}
Ordine: ${orderData.orderNumber}

PRODOTTI:
${orderData.items.map(item => 
    `${item.name} ${item.size ? `(${item.size})` : ''} x${item.quantity} - €${(item.price * item.quantity).toFixed(2)}`
).join('\n')}

TOTALE: €${orderData.total.toFixed(2)}

Grazie per il tuo acquisto!
    `;

    // Create and download as text file
    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ricevuta-yaldi-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Music Functions
function renderAlbums() {
    const albumsGrid = document.getElementById('albumsGrid');
    albumsGrid.innerHTML = albums.map(album => createAlbumCard(album)).join('');
    
    // Render tracks for selected album
    renderTracks();
}

function createAlbumCard(album) {
    const comingSoon = !album.available ? '<div class="album-overlay">COMING SOON</div>' : '';
    
    return `
        <div class="album-card ${selectedAlbum && selectedAlbum.id === album.id ? 'selected' : ''}" 
             onclick="selectAlbum(${album.id})">
            <img src="${album.image}" alt="${album.title}" class="album-image">
            <div class="album-info">
                <h3 class="album-title">${album.title}</h3>
            </div>
            ${comingSoon}
        </div>
    `;
}

function selectAlbum(albumId) {
    selectedAlbum = albums.find(a => a.id === albumId);
    renderAlbums();
    renderTracks();
}

function renderTracks() {
    const tracksList = document.getElementById('tracksList');
    
    if (!selectedAlbum || !selectedAlbum.available) {
        tracksList.innerHTML = '';
        return;
    }

    tracksList.innerHTML = `
        <h3 style="text-align: center; margin-bottom: 1.5rem;">${selectedAlbum.title}</h3>
        ${selectedAlbum.tracks.map((track, index) => createTrackItem(track, index)).join('')}
    `;
}

function createTrackItem(track, index) {
    const isCurrentTrack = currentTrack && currentTrack.title === track.title;
    const playIcon = isCurrentTrack && isPlaying ? '⏸' : '▶';
    
    return `
        <div class="track-item ${isCurrentTrack ? 'playing' : ''}" onclick="playTrack(${index})">
            <div class="track-left">
                <button class="track-play-btn">${playIcon}</button>
                <div class="track-info">
                    <div class="track-title">${track.title}</div>
                    <div class="track-name">${track.name}</div>
                </div>
            </div>
            <div class="track-right">
                <span class="track-duration">${track.duration}</span>
                <span>🎵</span>
            </div>
        </div>
    `;
}

function playTrack(trackIndex) {
    if (!selectedAlbum || !selectedAlbum.tracks[trackIndex]) return;

    const track = selectedAlbum.tracks[trackIndex];
    currentTrack = track;
    
    // Show mini player
    showMiniPlayer();
    
    // Update track display
    renderTracks();
    
    // Simulate playing
    isPlaying = true;
    updateMiniPlayer();
}

function showMiniPlayer() {
    const miniPlayer = document.getElementById('miniPlayer');
    const miniPlayerImage = document.getElementById('miniPlayerImage');
    
    miniPlayerImage.src = selectedAlbum.image;
    miniPlayer.classList.remove('hidden');
}

function updateMiniPlayer() {
    const playPauseBtn = document.getElementById('playPauseBtn');
    playPauseBtn.textContent = isPlaying ? '⏸' : '▶';
}

function togglePlay() {
    if (!currentTrack) return;
    
    isPlaying = !isPlaying;
    updateMiniPlayer();
    renderTracks();
}

function playNextTrack() {
    if (!selectedAlbum || !currentTrack) return;
    
    const currentIndex = selectedAlbum.tracks.findIndex(t => t.title === currentTrack.title);
    const nextIndex = (currentIndex + 1) % selectedAlbum.tracks.length;
    playTrack(nextIndex);
}

function playPrevTrack() {
    if (!selectedAlbum || !currentTrack) return;
    
    const currentIndex = selectedAlbum.tracks.findIndex(t => t.title === currentTrack.title);
    const prevIndex = currentIndex === 0 ? selectedAlbum.tracks.length - 1 : currentIndex - 1;
    playTrack(prevIndex);
}

function closeMiniPlayer() {
    document.getElementById('miniPlayer').classList.add('hidden');
    currentTrack = null;
    isPlaying = false;
    renderTracks();
}

// Games Functions
function renderGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = games.map(game => createGameCard(game)).join('');
}

function createGameCard(game) {
    return `
        <div class="game-card ${game.color}">
            <div class="game-header">
                <div class="game-icon">${game.icon}</div>
                <div class="game-info">
                    <h3>${game.name}</h3>
                    <p class="game-description">${game.description}</p>
                </div>
            </div>
            <div class="game-footer">
                <span class="game-status">
                    ${game.status === 'available' ? 'DISPONIBILE' : 'PROSSIMAMENTE'}
                </span>
                <button class="game-play-btn" 
                        ${game.status !== 'available' ? 'disabled' : ''} 
                        onclick="startGame(${game.id})">
                    ${game.status === 'available' ? 'GIOCA' : 'PRESTO'}
                </button>
            </div>
        </div>
    `;
}

function startGame(gameId) {
    const game = games.find(g => g.id === gameId);
    if (!game || game.status !== 'available') return;

    const modal = document.getElementById('gameModal');
    const title = document.getElementById('gameTitle');
    const content = document.getElementById('gameContent');

    title.textContent = game.name;

    switch (gameId) {
        case 1:
            content.innerHTML = createYaldiRunner();
            break;
        case 2:
            content.innerHTML = createPuzzleYeezy();
            break;
        case 3:
            content.innerHTML = createAldiQuest();
            break;
        case 4:
            content.innerHTML = createMusicHero();
            break;
    }

    modal.classList.add('active');
    
    // Initialize game
    setTimeout(() => initializeGame(gameId), 100);
}

// Game 1: Yaldi Runner
function createYaldiRunner() {
    return `
        <div class="game-container">
            <div id="runnerScore" class="game-score">Score: 0</div>
            <div id="runnerArea" class="game-area">
                <div id="runnerPlayer" class="game-player" style="top: 50%;"></div>
            </div>
            <p>Premi SPAZIO per saltare!</p>
            <button id="runnerStart" class="btn btn-primary">INIZIA</button>
            <button id="runnerRestart" class="btn btn-outline hidden">RIGIOCA</button>
        </div>
    `;
}

// Game 2: Puzzle Yeezy
function createPuzzleYeezy() {
    return `
        <div class="game-container">
            <div id="puzzleScore" class="game-score">Mosse: 0</div>
            <div id="puzzleGrid" class="puzzle-grid"></div>
            <button id="puzzleNew" class="btn btn-primary">NUOVO PUZZLE</button>
        </div>
    `;
}

// Game 3: Aldi Quest
function createAldiQuest() {
    return `
        <div class="game-container">
            <div id="questScore" class="game-score">Score: 0</div>
            <div id="questScene" class="quest-scene">
                <h4 id="questTitle" class="quest-title">Ingresso ALDI</h4>
                <p id="questDescription" class="quest-description">Ti trovi davanti al negozio ALDI. Cosa fai?</p>
                <div id="questOptions" class="quest-options"></div>
            </div>
        </div>
    `;
}

// Game 4: Music Hero
function createMusicHero() {
    return `
        <div class="game-container">
            <div id="heroScore" class="game-score">Score: 0</div>
            <div id="heroArea" class="music-hero-area">
                <div class="music-lane" style="left: 0%;"></div>
                <div class="music-lane" style="left: 25%;"></div>
                <div class="music-lane" style="left: 50%;"></div>
                <div class="music-lane" style="left: 75%;"></div>
                <div class="music-hit-line"></div>
                <div class="music-keys">
                    <div class="music-key">A</div>
                    <div class="music-key">S</div>
                    <div class="music-key">D</div>
                    <div class="music-key">F</div>
                </div>
            </div>
            <p>Usa i tasti A, S, D, F</p>
            <button id="heroStart" class="btn btn-primary">INIZIA</button>
        </div>
    `;
}

function initializeGame(gameId) {
    switch (gameId) {
        case 1:
            initYaldiRunner();
            break;
        case 2:
            initPuzzleYeezy();
            break;
        case 3:
            initAldiQuest();
            break;
        case 4:
            initMusicHero();
            break;
    }
}

// Game Implementations
let runnerGame = {
    score: 0,
    isRunning: false,
    playerPosition: 50,
    obstacles: [],
    gameLoop: null
};

function initYaldiRunner() {
    document.getElementById('runnerStart').addEventListener('click', startRunner);
    document.getElementById('runnerRestart').addEventListener('click', restartRunner);
    
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && runnerGame.isRunning) {
            e.preventDefault();
            jumpPlayer();
        }
    });
}

function startRunner() {
    runnerGame.isRunning = true;
    runnerGame.score = 0;
    runnerGame.obstacles = [];
    runnerGame.playerPosition = 50;
    
    document.getElementById('runnerStart').classList.add('hidden');
    document.getElementById('runnerRestart').classList.add('hidden');
    
    runnerGame.gameLoop = setInterval(updateRunner, 100);
}

function updateRunner() {
    runnerGame.score += 1;
    document.getElementById('runnerScore').textContent = `Score: ${runnerGame.score}`;
    
    // Move obstacles
    runnerGame.obstacles = runnerGame.obstacles.map(obs => obs - 5).filter(obs => obs > -10);
    
    // Add new obstacles
    if (Math.random() < 0.3) {
        runnerGame.obstacles.push(100);
    }
    
    // Check collisions
    const collision = runnerGame.obstacles.some(obs => 
        obs < 15 && obs > 5 && Math.abs(runnerGame.playerPosition - 60) < 10
    );
    
    if (collision) {
        endRunner();
    }
    
    // Update display
    updateRunnerDisplay();
}

function jumpPlayer() {
    runnerGame.playerPosition = 30;
    setTimeout(() => {
        runnerGame.playerPosition = 50;
    }, 200);
}

function updateRunnerDisplay() {
    const player = document.getElementById('runnerPlayer');
    player.style.top = runnerGame.playerPosition + '%';
    
    const area = document.getElementById('runnerArea');
    // Clear obstacles
    area.querySelectorAll('.game-obstacle').forEach(obs => obs.remove());
    
    // Add obstacles
    runnerGame.obstacles.forEach(pos => {
        const obstacle = document.createElement('div');
        obstacle.className = 'game-obstacle';
        obstacle.style.left = pos + '%';
        area.appendChild(obstacle);
    });
}

function endRunner() {
    runnerGame.isRunning = false;
    clearInterval(runnerGame.gameLoop);
    document.getElementById('runnerRestart').classList.remove('hidden');
    alert(`Game Over! Score finale: ${runnerGame.score}`);
}

function restartRunner() {
    startRunner();
}

// Puzzle Game
let puzzleGame = {
    pieces: [],
    moves: 0,
    correctOrder: [1, 2, 3, 4, 5, 6, 7, 8, 0]
};

function initPuzzleYeezy() {
    document.getElementById('puzzleNew').addEventListener('click', newPuzzle);
    newPuzzle();
}

function newPuzzle() {
    puzzleGame.pieces = [...puzzleGame.correctOrder].sort(() => Math.random() - 0.5);
    puzzleGame.moves = 0;
    updatePuzzleDisplay();
}

function updatePuzzleDisplay() {
    document.getElementById('puzzleScore').textContent = `Mosse: ${puzzleGame.moves}`;
    
    const grid = document.getElementById('puzzleGrid');
    grid.innerHTML = '';
    
    puzzleGame.pieces.forEach((piece, index) => {
        const div = document.createElement('div');
        div.className = `puzzle-piece ${piece === 0 ? 'empty' : 'filled'}`;
        div.textContent = piece !== 0 ? piece : '';
        if (piece !== 0) {
            div.addEventListener('click', () => movePiece(index));
        }
        grid.appendChild(div);
    });
    
    // Check if solved
    if (puzzleGame.pieces.join('') === puzzleGame.correctOrder.join('')) {
        setTimeout(() => alert('Puzzle completato! 🎉'), 100);
    }
}

function movePiece(index) {
    const emptyIndex = puzzleGame.pieces.indexOf(0);
    const canMove = 
        (Math.abs(index - emptyIndex) === 1 && Math.floor(index / 3) === Math.floor(emptyIndex / 3)) ||
        Math.abs(index - emptyIndex) === 3;
    
    if (canMove) {
        puzzleGame.pieces[emptyIndex] = puzzleGame.pieces[index];
        puzzleGame.pieces[index] = 0;
        puzzleGame.moves++;
        updatePuzzleDisplay();
    }
}

// Quest Game
let questGame = {
    currentScene: 0,
    score: 0,
    inventory: [],
    scenes: [
        {
            title: "Ingresso ALDI",
            description: "Ti trovi davanti al negozio ALDI. Cosa fai?",
            options: [
                { text: "Entra nel negozio", action: () => questGame.currentScene = 1 },
                { text: "Guarda la vetrina", action: () => { questGame.score += 10; questGame.currentScene = 1; } }
            ]
        },
        {
            title: "Corridoio Principale",
            description: "Sei nel corridoio principale. Vedi delle YEEZY speciali!",
            options: [
                { text: "Prendi le YEEZY", action: () => { questGame.inventory.push("YEEZY"); questGame.score += 50; questGame.currentScene = 2; } },
                { text: "Continua a esplorare", action: () => questGame.currentScene = 2 }
            ]
        },
        {
            title: "Cassa",
            description: "Arrivi alla cassa. Il cassiere ti sorride.",
            options: [
                { text: "Paga e esci", action: () => questGame.currentScene = 3 },
                { text: "Chiedi dello sconto YALDI", action: () => { questGame.score += 30; questGame.currentScene = 3; } }
            ]
        },
        {
            title: "Fine",
            description: "Missione completata!",
            options: [
                { text: "Rigioca", action: () => { questGame.currentScene = 0; questGame.score = 0; questGame.inventory = []; } }
            ]
        }
    ]
};

function initAldiQuest() {
    updateQuestDisplay();
}

function updateQuestDisplay() {
    const scene = questGame.scenes[questGame.currentScene];
    
    document.getElementById('questScore').textContent = `Score: ${questGame.score}`;
    document.getElementById('questTitle').textContent = scene.title;
    document.getElementById('questDescription').textContent = scene.description;
    
    const optionsContainer = document.getElementById('questOptions');
    optionsContainer.innerHTML = '';
    
    scene.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = index === 0 ? 'btn btn-primary full-width' : 'btn btn-outline full-width';
        button.textContent = option.text;
        button.style.marginBottom = '0.5rem';
        button.addEventListener('click', () => {
            option.action();
            updateQuestDisplay();
        });
        optionsContainer.appendChild(button);
    });
}

// Music Hero Game
let heroGame = {
    score: 0,
    isRunning: false,
    notes: [],
    nextNoteId: 0,
    gameLoop: null
};

function initMusicHero() {
    document.getElementById('heroStart').addEventListener('click', startMusicHero);
    
    document.addEventListener('keydown', (e) => {
        if (!heroGame.isRunning) return;
        
        let lane = -1;
        if (e.key === 'a' || e.key === 'A') lane = 0;
        if (e.key === 's' || e.key === 'S') lane = 1;
        if (e.key === 'd' || e.key === 'D') lane = 2;
        if (e.key === 'f' || e.key === 'F') lane = 3;
        
        if (lane >= 0) {
            hitNote(lane);
        }
    });
}

function startMusicHero() {
    heroGame.isRunning = true;
    heroGame.score = 0;
    heroGame.notes = [];
    heroGame.nextNoteId = 0;
    
    document.getElementById('heroStart').classList.add('hidden');
    
    heroGame.gameLoop = setInterval(updateMusicHero, 100);
}

function updateMusicHero() {
    // Move notes down
    heroGame.notes = heroGame.notes.map(note => ({ ...note, position: note.position + 5 }))
                                   .filter(note => note.position < 100);
    
    // Add new notes
    if (Math.random() < 0.3) {
        heroGame.notes.push({
            id: heroGame.nextNoteId++,
            lane: Math.floor(Math.random() * 4),
            position: 0
        });
    }
    
    updateMusicHeroDisplay();
}

function hitNote(lane) {
    const hitNote = heroGame.notes.find(note => 
        note.lane === lane && note.position > 80 && note.position < 95
    );
    
    if (hitNote) {
        heroGame.score += 100;
        heroGame.notes = heroGame.notes.filter(note => note.id !== hitNote.id);
        document.getElementById('heroScore').textContent = `Score: ${heroGame.score}`;
    }
}

function updateMusicHeroDisplay() {
    const area = document.getElementById('heroArea');
    
    // Clear existing notes
    area.querySelectorAll('.music-note').forEach(note => note.remove());
    
    // Add notes
    heroGame.notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.className = 'music-note';
        noteElement.style.left = (note.lane * 25 + 12.5 - 3) + '%';
        noteElement.style.top = note.position + '%';
        area.appendChild(noteElement);
    });
}

// Authentication Functions
function loadUserData() {
    const savedUser = localStorage.getItem('yaldi-current-user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        isLoggedIn = true;
        updateAuthUI();
        loadUserProfile();
    }
}

function updateAuthUI() {
    const userGreeting = document.getElementById('userGreeting');
    const logoutBtn = document.getElementById('logoutBtn');
    const accountNavGuest = document.getElementById('accountNavGuest');
    const accountNavUser = document.getElementById('accountNavUser');

    if (isLoggedIn) {
        userGreeting.textContent = `Ciao, ${currentUser.name}`;
        userGreeting.classList.remove('hidden');
        logoutBtn.classList.remove('hidden');
        accountNavGuest.classList.add('hidden');
        accountNavUser.classList.remove('hidden');
        showAccountSection('profile');
    } else {
        userGreeting.classList.add('hidden');
        logoutBtn.classList.add('hidden');
        accountNavGuest.classList.remove('hidden');
        accountNavUser.classList.add('hidden');
        showAccountSection('login');
    }
}

function showAccountSection(section) {
    // Hide all account forms
    document.querySelectorAll('.account-form').forEach(form => {
        form.classList.remove('active');
    });

    // Show selected form
    document.getElementById(section + 'Form').classList.add('active');

    // Update navigation
    document.querySelectorAll('.account-nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.querySelectorAll(`[data-account-section="${section}"]`).forEach(btn => {
        btn.classList.add('active');
    });

    currentAccountSection = section;
}

function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        alert('Inserisci email e password');
        return;
    }

    const accounts = JSON.parse(localStorage.getItem('yaldi-accounts') || '[]');
    const user = accounts.find(acc => acc.email === email && acc.password === password);

    if (user) {
        currentUser = user;
        isLoggedIn = true;
        localStorage.setItem('yaldi-current-user', JSON.stringify(user));
        loadUserProfile();
        updateAuthUI();
        
        // Clear form
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
        
        alert('Accesso effettuato con successo!');
    } else {
        alert('Email o password non corretti!');
    }
}

function handleRegister() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    if (!name || !email || !password || !confirmPassword) {
        alert('Compila tutti i campi');
        return;
    }

    if (password !== confirmPassword) {
        alert('Le password non coincidono!');
        return;
    }

    const accounts = JSON.parse(localStorage.getItem('yaldi-accounts') || '[]');
    const existingUser = accounts.find(acc => acc.email === email);

    if (existingUser) {
        alert('Email già registrata!');
        return;
    }

    const newUser = {
        name,
        email,
        password,
        registeredAt: new Date().toISOString()
    };

    accounts.push(newUser);
    localStorage.setItem('yaldi-accounts', JSON.stringify(accounts));

    currentUser = newUser;
    isLoggedIn = true;
    localStorage.setItem('yaldi-current-user', JSON.stringify(newUser));

    // Initialize profile
    userProfile.name = name;
    saveUserProfile();
    
    updateAuthUI();
    
    // Clear form
    document.getElementById('registerName').value = '';
    document.getElementById('registerEmail').value = '';
    document.getElementById('registerPassword').value = '';
    document.getElementById('registerConfirmPassword').value = '';
    
    alert('Registrazione completata con successo!');
}

function handleLogout() {
    isLoggedIn = false;
    currentUser = null;
    localStorage.removeItem('yaldi-current-user');
    
    // Reset profile
    userProfile = {
        name: "",
        username: "",
        bio: "",
        avatar: "",
        location: "",
        website: "",
        birthDate: "",
        favoriteGenre: "",
        isPublic: true,
    };
    
    updateAuthUI();
    alert('Disconnesso con successo!');
}

// Profile Functions
function loadUserProfile() {
    if (!currentUser) return;

    const userKey = `yaldi-user-${currentUser.email}`;
    const userData = localStorage.getItem(userKey);
    
    if (userData) {
        const data = JSON.parse(userData);
        userProfile = { ...userProfile, ...data.profile };
        userSettings = { ...userSettings, ...data.settings };
    } else {
        userProfile.name = currentUser.name;
    }
    
    updateProfileForm();
    updateSettingsForm();
}

function updateProfileForm() {
    document.getElementById('profileName').value = userProfile.name || '';
    document.getElementById('profileUsernameInput').value = userProfile.username || '';
    document.getElementById('profileBio').value = userProfile.bio || '';
    document.getElementById('profileLocation').value = userProfile.location || '';
    document.getElementById('profileWebsite').value = userProfile.website || '';
    document.getElementById('profileBirthDate').value = userProfile.birthDate || '';
    document.getElementById('profileGenre').value = userProfile.favoriteGenre || '';
    document.getElementById('profilePublic').checked = userProfile.isPublic;
    
    // Update avatar display
    const avatarDisplay = document.getElementById('avatarDisplay');
    const profileUsername = document.getElementById('profileUsername');
    
    avatarDisplay.textContent = userProfile.name ? userProfile.name.charAt(0).toUpperCase() : 'Y';
    profileUsername.textContent = `@${userProfile.username || 'username'}`;
}

function saveProfile() {
    if (!currentUser) return;

    userProfile.name = document.getElementById('profileName').value;
    userProfile.username = document.getElementById('profileUsernameInput').value;
    userProfile.bio = document.getElementById('profileBio').value;
    userProfile.location = document.getElementById('profileLocation').value;
    userProfile.website = document.getElementById('profileWebsite').value;
    userProfile.birthDate = document.getElementById('profileBirthDate').value;
    userProfile.favoriteGenre = document.getElementById('profileGenre').value;
    userProfile.isPublic = document.getElementById('profilePublic').checked;

    saveUserProfile();
    updateProfileForm();
    alert('Profilo salvato con successo!');
}

function saveUserProfile() {
    if (!currentUser) return;

    const userKey = `yaldi-user-${currentUser.email}`;
    const userData = {
        profile: userProfile,
        settings: userSettings,
        lastUpdated: new Date().toISOString()
    };

    localStorage.setItem(userKey, JSON.stringify(userData));
    updateAccountsList();
}

function updateAccountsList() {
    const accounts = JSON.parse(localStorage.getItem('yaldi-accounts') || '[]');
    const accountIndex = accounts.findIndex(acc => acc.email === currentUser.email);

    const accountData = {
        ...currentUser,
        profile: userProfile,
        settings: userSettings,
        lastLogin: new Date().toISOString()
    };

    if (accountIndex >= 0) {
        accounts[accountIndex] = accountData;
    } else {
        accounts.push(accountData);
    }

    localStorage.setItem('yaldi-accounts', JSON.stringify(accounts));

    // Create and download txt file
    const accountsText = accounts.map(acc => `
=== ACCOUNT YALDI ===
Nome: ${acc.name}
Email: ${acc.email}
Username: ${acc.profile?.username || 'N/A'}
Bio: ${acc.profile?.bio || 'N/A'}
Posizione: ${acc.profile?.location || 'N/A'}
Genere Preferito: ${acc.profile?.favoriteGenre || 'N/A'}
Ultimo Accesso: ${acc.lastLogin}
Tema: ${acc.settings?.theme || 'light'}
Lingua: ${acc.settings?.language || 'it'}
Valuta: ${acc.settings?.currency || 'EUR'}
Notifiche: ${acc.settings?.notifications ? 'Attive' : 'Disattive'}
========================
`).join('\n');

    const blob = new Blob([accountsText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `yaldi-accounts-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Settings Functions
function updateSettingsForm() {
    document.getElementById('themeSelect').value = userSettings.theme || 'light';
    document.getElementById('autoPlay').checked = userSettings.autoPlay;
    document.getElementById('highQuality').checked = userSettings.highQuality;
    document.getElementById('pushNotifications').checked = userSettings.pushNotifications;
    document.getElementById('emailNotifications').checked = userSettings.emailNotifications;
    document.getElementById('languageSelect').value = userSettings.language || 'it';
    document.getElementById('currencySelect').value = userSettings.currency || 'EUR';
}

function saveSettings() {
    if (!currentUser) return;

    userSettings.theme = document.getElementById('themeSelect').value;
    userSettings.autoPlay = document.getElementById('autoPlay').checked;
    userSettings.highQuality = document.getElementById('highQuality').checked;
    userSettings.pushNotifications = document.getElementById('pushNotifications').checked;
    userSettings.emailNotifications = document.getElementById('emailNotifications').checked;
    userSettings.language = document.getElementById('languageSelect').value;
    userSettings.currency = document.getElementById('currencySelect').value;

    saveUserProfile();
    alert('Impostazioni salvate con successo!');
}

function changeTheme(theme) {
    userSettings.theme = theme;
    
    // Apply theme
    if (theme === 'dark') {
        document.body.className = 'dark-theme';
    } else if (theme === 'light') {
        document.body.className = 'light-theme';
    } else {
        // System theme
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.className = prefersDark ? 'dark-theme' : 'light-theme';
    }
    
    if (currentUser) {
        saveUserProfile();
    }
}

// Modal Functions
function closeModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

// Utility Functions
function preventContextMenu() {
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    document.addEventListener('keydown', (e) => {
        // Prevent Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+S, F12, etc.
        if (
            (e.ctrlKey && (e.key === 'a' || e.key === 'c' || e.key === 'v' || e.key === 's')) ||
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.shiftKey && e.key === 'C') ||
            (e.ctrlKey && e.key === 'u')
        ) {
            e.preventDefault();
        }
    });
}

// Initialize theme on load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = userSettings.theme || 'light';
    changeTheme(savedTheme);
});