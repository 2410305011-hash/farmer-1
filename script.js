// ===== PRODUCT DATA =====
const products = [
    {
        id: 1, name: "Fresh Tomatoes", category: "vegetables", price: 40, originalPrice: 60,
        unit: "per kg", farm: "Patel Farm, Gujarat", badge: "Fresh",
        img: "images/tomato.png"
    },
    {
        id: 2, name: "Green Okra (Bhindi)", category: "vegetables", price: 55, originalPrice: 80,
        unit: "per kg", farm: "Singh Farm, Punjab", badge: "Organic", badgeType: "organic",
        img: "https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?w=400&h=300&fit=crop"
    },
    {
        id: 3, name: "Alphonso Mangoes", category: "fruits", price: 350, originalPrice: 500,
        unit: "per dozen", farm: "Kumari Farm, Maharashtra", badge: "Premium",
        img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=300&fit=crop"
    },
    {
        id: 4, name: "Fresh Bananas", category: "fruits", price: 45, originalPrice: 60,
        unit: "per dozen", farm: "Reddy Farm, Karnataka", badge: "Organic", badgeType: "organic",
        img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop"
    },
    {
        id: 5, name: "Haldi (Turmeric)", category: "spices", price: 120, originalPrice: 180,
        unit: "per 500g", farm: "Devi Farm, Andhra Pradesh", badge: "Pure",
        img: "https://images.pexels.com/photos/6220710/pexels-photo-6220710.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
        id: 6, name: "Basmati Rice", category: "spices", price: 180, originalPrice: 250,
        unit: "per 5kg", farm: "Devi Farm, Andhra Pradesh", badge: "Organic", badgeType: "organic",
        img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop"
    },
    {
        id: 7, name: "Pure Desi Ghee", category: "dairy", price: 650, originalPrice: 800,
        unit: "per litre", farm: "Singh Farm, Punjab", badge: "Premium",
        img: "https://images.pexels.com/photos/20689447/pexels-photo-20689447.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
        id: 8, name: "Farm Fresh Paneer", category: "dairy", price: 320, originalPrice: 400,
        unit: "per kg", farm: "Singh Farm, Punjab", badge: "Fresh",
        img: "https://images.pexels.com/photos/19460144/pexels-photo-19460144.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
        id: 9, name: "Red Chilli Powder", category: "spices", price: 95, originalPrice: 140,
        unit: "per 250g", farm: "Kumari Farm, Maharashtra", badge: "Pure",
        img: "https://images.pexels.com/photos/2893882/pexels-photo-2893882.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
        id: 10, name: "Fresh Cauliflower", category: "vegetables", price: 35, originalPrice: 50,
        unit: "per piece", farm: "Patel Farm, Gujarat", badge: "Organic", badgeType: "organic",
        img: "https://images.unsplash.com/photo-1613743983303-b3e89f8a2b80?w=400&h=300&fit=crop"
    },
    {
        id: 11, name: "Sweet Pomegranate", category: "fruits", price: 180, originalPrice: 250,
        unit: "per kg", farm: "Kumari Farm, Maharashtra", badge: "Fresh",
        img: "https://images.pexels.com/photos/36355010/pexels-photo-36355010.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
        id: 12, name: "Farm Fresh Dahi", category: "dairy", price: 60, originalPrice: 80,
        unit: "per 500g", farm: "Singh Farm, Punjab", badge: "Organic", badgeType: "organic",
        img: "https://images.pexels.com/photos/373882/pexels-photo-373882.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
        id: 13, name: "Gehu (Wheat)", category: "grains", price: 35, originalPrice: 45,
        unit: "per kg", farm: "Saini Farm, Haryana", badge: "Fresh",
        img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop"
    },
    {
        id: 14, name: "Bajra (Pearl Millet)", category: "grains", price: 40, originalPrice: 55,
        unit: "per kg", farm: "Sharma Farm, Rajasthan", badge: "Organic", badgeType: "organic",
        img: "https://images.pexels.com/photos/10817550/pexels-photo-10817550.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
        id: 15, name: "Makka (Corn)", category: "grains", price: 30, originalPrice: 40,
        unit: "per kg", farm: "Singh Farm, Punjab", badge: "Fresh",
        img: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop"
    },
    {
        id: 16, name: "Jowar (Sorghum)", category: "grains", price: 45, originalPrice: 60,
        unit: "per kg", farm: "Patil Farm, Maharashtra", badge: "Organic", badgeType: "organic",
        img: "https://images.pexels.com/photos/8108121/pexels-photo-8108121.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
];

// ===== STATE =====
let cart = [];
let currentFilter = 'all';
let currentTestimonial = 0;

// ===== DOM ELEMENTS =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartFooter = document.getElementById('cartFooter');
const backToTop = document.getElementById('backToTop');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');
const preloader = document.getElementById('preloader');
const contactForm = document.getElementById('contactForm');

// ===== PRELOADER =====
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = 'auto';
        animateHeroStats();
    }, 1800);
});

// ===== NAVBAR SCROLL =====
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Add scrolled class
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to top button
    if (scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }

    // Active nav link based on section
    updateActiveNavLink();

    lastScroll = scrollY;
});

// ===== ACTIVE NAV LINK =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===== HAMBURGER MENU =====
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// Close on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// ===== BACK TO TOP =====
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== RENDER PRODUCTS =====
function renderProducts(filter = 'all') {
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

    productsGrid.innerHTML = '';

    filtered.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-animate', 'fade-up');
        card.style.animationDelay = `${index * 80}ms`;

        card.innerHTML = `
            <span class="product-badge ${product.badgeType || ''}">${product.badge}</span>
            <div class="product-img">
                <img src="${product.img}" alt="${product.name}" loading="lazy">
                <button class="product-wishlist" data-id="${product.id}" aria-label="Add to wishlist">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <span class="product-farm"><i class="fas fa-map-marker-alt"></i> ${product.farm}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-unit">${product.unit}</p>
                <div class="product-footer">
                    <span class="product-price">₹${product.price}<span class="original">₹${product.originalPrice}</span></span>
                    <button class="add-to-cart-btn" data-id="${product.id}" aria-label="Add to cart">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `;

        productsGrid.appendChild(card);

        // Animate after a tiny delay
        setTimeout(() => {
            card.classList.add('visible');
        }, 50 + index * 80);
    });

    // Bind add-to-cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(btn.dataset.id);
            addToCart(id);

            // Button animation
            btn.innerHTML = '<i class="fas fa-check"></i>';
            btn.style.background = 'var(--green-primary)';
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-plus"></i>';
                btn.style.background = '';
            }, 1000);
        });
    });

    // Bind wishlist buttons
    document.querySelectorAll('.product-wishlist').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            if (btn.classList.contains('active')) {
                btn.innerHTML = '<i class="fas fa-heart"></i>';
                showToast('Added to wishlist! ❤️');
            } else {
                btn.innerHTML = '<i class="far fa-heart"></i>';
            }
        });
    });
}

// ===== FILTER BUTTONS =====
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderProducts(currentFilter);
    });
});

// ===== CART FUNCTIONS =====
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCart();
    showToast(`${product.name} added to basket! 🧺`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            removeFromCart(productId);
            return;
        }
    }
    updateCart();
}

function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    cartCount.textContent = totalItems;

    // Animate cart count
    cartCount.style.transform = 'scale(1.4)';
    setTimeout(() => { cartCount.style.transform = 'scale(1)'; }, 200);

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <span>🧺</span>
                <p>Your basket is empty</p>
                <small>Add some fresh farm produce!</small>
            </div>
        `;
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-img">
                    <img src="${item.img}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span>₹${item.price * item.qty}</span>
                </div>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span class="qty">${item.qty}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove item">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `).join('');
        cartFooter.style.display = 'block';
        cartTotal.textContent = `₹${totalPrice}`;
    }
}

// Cart toggle
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
});

function closeCart() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = 'auto';
}

cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// Checkout button
document.getElementById('checkoutBtn').addEventListener('click', () => {
    showToast('Order placed successfully! 🎉 Jai Kisan!');
    cart = [];
    updateCart();
    closeCart();
});

// ===== TOAST =====
function showToast(message) {
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== HERO STATS COUNTER =====
function animateHeroStats() {
    document.querySelectorAll('.stat-number').forEach(el => {
        const target = parseInt(el.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const counter = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(counter);
            }
            el.textContent = Math.round(current).toLocaleString();
        }, 16);
    });
}

// ===== TESTIMONIAL SLIDER =====
const testimonialCards = document.querySelectorAll('.testimonial-card');
const dotsContainer = document.getElementById('testimonialDots');

// Create dots
testimonialCards.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToTestimonial(index));
    dotsContainer.appendChild(dot);
});

function goToTestimonial(index) {
    testimonialCards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === index) card.classList.add('active');
    });
    document.querySelectorAll('.testimonial-dots .dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    currentTestimonial = index;
}

// Auto rotate
setInterval(() => {
    const next = (currentTestimonial + 1) % testimonialCards.length;
    goToTestimonial(next);
}, 5000);

// ===== SCROLL ANIMATIONS (Intersection Observer) =====
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, parseInt(delay));
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

function initScrollAnimations() {
    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
}

// ===== CONTACT FORM =====
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
        submitBtn.style.background = 'var(--green-primary)';
        showToast('Message sent successfully! We\'ll be in touch. 🙏');

        setTimeout(() => {
            contactForm.reset();
            submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
            submitBtn.style.background = '';
        }, 2500);
    }, 1500);
});

// ===== SMOOTH SCROLL FOR SHOP NOW =====
document.getElementById('shopNowBtn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

// ===== PARALLAX EFFECT ON HERO (subtle) =====
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');

    if (scrollY < 800) {
        if (heroContent) heroContent.style.transform = `translateY(${scrollY * 0.15}px)`;
        if (heroImage) heroImage.style.transform = `translateY(${scrollY * 0.08}px)`;
    }
});

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initScrollAnimations();
});
