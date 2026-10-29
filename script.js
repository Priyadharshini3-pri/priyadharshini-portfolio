/**
 * PRIYADHARSHINI — THE SERIES
 * Core Streaming Engine & Micro-Interactions JavaScript
 */

// Project Metadata Store
const projectsData = {
  'tommy-hub': {
    title: 'TOMMY HUB Billing Terminal',
    badge: 'NETFLIX ORIGINAL • SEASON 1',
    match: '99% Match',
    releaseYear: '2026',
    rating: 'ENTERPRISE READY',
    genres: ['Full-Stack', 'POS & Retail', 'FastAPI Backend', 'Cloud DB'],
    liveUrl: 'https://tommy-hub.vercel.app/',
    gradient: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 60%, #415a77 100%)',
    synopsis: 'A high-throughput full-stack retail point-of-sale and invoice generation platform architected for modern merchant operations, fast barcode/item calculation, and multi-tier payment processing.',
    highlights: [
      'Multi-mode transaction settlement: Cash, UPI, and Credit/Debit Card modes.',
      'Real-time automated PDF receipt and thermal bill printing across desktop, tablet, and mobile browsers.',
      'Supabase Cloud backend with relational integrity for stock, customer ledgers, and transaction auditing.',
      'High-performance asynchronous FastAPI micro-endpoints and modern React frontend deployed on Vercel edge network.'
    ],
    techStack: ['React', 'FastAPI', 'Python', 'Supabase', 'SQL', 'Vercel', 'Tailwind CSS']
  },

  'trip-planner': {
    title: 'AI Tourist Trip Planner & Chatbot',
    badge: 'AI SPECIAL • ORIGINAL',
    match: '98% Match',
    releaseYear: '2026',
    rating: 'AI CONVERSATIONAL',
    genres: ['Artificial Intelligence', 'Chatbot', 'Travel Tech', 'Dynamic UI'],
    liveUrl: 'https://697323ca9ce0ee43a18a0b77--fastidious-sunshine-62a883.netlify.app/',
    gradient: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 60%, #40916c 100%)',
    synopsis: 'An intelligent AI-powered travel assistant and itinerary synthesizer that crafts personalized multi-day vacation journeys according to travelers budget, tempo, and destination preferences.',
    highlights: [
      'Intelligent conversational chatbot handling natural language travel queries and recommendation requests.',
      'Dynamic day-by-day itinerary scheduler computing sightseeing schedules, local attractions, and travel tips.',
      'Zero-latency responsive client interface optimized for mobile exploration and travel on-the-go.',
      'Deployed on Netlify with continuous automated deployment from Git.'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'AI APIs', 'Netlify', 'REST Architecture']
  },

  'welding-shop': {
    title: 'Responsive Welding & Fabrication Portal',
    badge: 'CLIENT COMMERCIAL • SHOWCASE',
    match: '96% Match',
    releaseYear: '2026',
    rating: 'HIGH CONVERSION',
    genres: ['Commercial Web', 'Lead Generation', 'Responsive Design', 'WhatsApp API'],
    liveUrl: 'https://priyadharshini33.neocities.org/shop/',
    gradient: 'linear-gradient(135deg, #370617 0%, #6a040f 60%, #9d0208 100%)',
    synopsis: 'A production commercial digital storefront and custom fabrication showcase built to convert prospective local clients into direct high-value engineering orders.',
    highlights: [
      'Interactive product and craftsmanship gallery with detailed fabrication specifications.',
      'Integrated direct-to-WhatsApp quote and order enquiry functionality, converting visitors directly into chat leads.',
      'Pixel-perfect responsive layout designed to load smoothly even on low-bandwidth mobile connections.',
      'Hosted on Neocities platform with fast static asset delivery.'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'WhatsApp API', 'Neocities', 'UI/UX Design']
  }
};

// Certificate Data Store
const certsData = {
  'ether-cert': {
    title: 'Machine Learning With R — Internship Certificate',
    issuer: 'Ether Infotech • Coimbatore (ISO 9001:2015)',
    image: 'assets/images/certificate-ether.jpg',
    synopsis: 'Candidate Priyadharshini S (Reg No: 613023205034), Final Year IT student of Vivekanandha College of Technology for Women, successfully completed internship training from 15/06/2026 to 30/06/2026 with "Excellent" performance in Machine Learning with R.'
  },
  'ibm-ai': {
    title: 'IBM AI Artificial Intelligence Certification',
    issuer: 'IBM Academic Initiative & Skills Network',
    image: 'assets/images/certificate-ether.jpg', // fallback
    synopsis: 'Certified training covering Artificial Intelligence principles, Cognitive computing workflows, neural architecture basics, and machine learning model deployment.'
  },
  'diploma-java': {
    title: 'Diploma in Java Programming',
    issuer: 'Technical Certification Institute',
    image: 'assets/images/certificate-ether.jpg',
    synopsis: 'Certified in Java Core, Object Oriented Paradigms, Collections, Multi-threading, and relational database connectivity (JDBC).'
  },
  'sawit-ai': {
    title: 'SAWIT.AI Learnathon Certification',
    issuer: 'SAWIT.AI National Tech Initiative',
    image: 'assets/images/certificate-ether.jpg',
    synopsis: 'National level recognition for participation and hands-on skill development in state-of-the-art AI, generative intelligence, and computer vision.'
  },
  'hackathon': {
    title: 'Inter-College Hackathon Winner Trophy',
    issuer: 'Inter-College Technical Symposium',
    image: 'assets/images/certificate-ether.jpg',
    synopsis: 'Awarded 1st Place for architecting and shipping a real-time problem-solving web platform within an intensive 24-hour hackathon sprint.'
  },
  'paavai': {
    title: 'National Level Digital Marketing Winner',
    issuer: 'Paavai College of Engineering',
    image: 'assets/images/certificate-ether.jpg',
    synopsis: 'Secured 1st Place in National Level competition evaluating digital analytics, conversion funnels, data-driven campaign strategy, and marketing metrics.'
  }
};

// State
let soundEnabled = true;

// Synthesize Netflix "Ta-Dum" Sound via Web Audio API (Zero external audio file needed!)
function playTaDum() {
  if (!soundEnabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    // Cinematic deep cello/bass note (1st beat)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(55, ctx.currentTime); // A1 note
    osc1.frequency.exponentialRampToValueAtTime(70, ctx.currentTime + 0.4);

    gain1.gain.setValueAtTime(0.3, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.2);

    osc1.connect(gain1);
    gain1.connect(ctx.destination);

    // Second punchy resonant chord (2nd beat - the "Dum")
    setTimeout(() => {
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(110, ctx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(90, ctx.currentTime + 0.6);

      gain2.gain.setValueAtTime(0.4, ctx.currentTime);
      gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);

      osc2.connect(gain2);
      gain2.connect(ctx.destination);

      osc2.start();
      osc2.stop(ctx.currentTime + 1.5);
    }, 180);

    osc1.start();
    osc1.stop(ctx.currentTime + 1.2);
  } catch (err) {
    console.warn('Audio synthesis not supported or blocked by autoplay policy:', err);
  }
}

// Open Netflix Project Modal
function openProjectModal(projectId) {
  playTaDum();
  const project = projectsData[projectId];
  if (!project) return;

  const modalBody = document.getElementById('modalDynamicBody');
  modalBody.innerHTML = `
    <div class="modal-hero-visual" style="background: ${project.gradient}">
      <div class="modal-hero-overlay"></div>
      <div class="modal-hero-content">
        <span class="badge-brand" style="margin-bottom: 0.5rem;"><i class="fa-solid fa-n"></i> ${project.badge}</span>
        <h2 class="modal-hero-title">${project.title}</h2>
        <div class="card-rating" style="position: static; margin-top: 0.5rem;">
          <span class="match-score">${project.match}</span>
          <span class="age-pill">${project.releaseYear}</span>
          <span class="def-pill">${project.rating}</span>
        </div>
        <div class="modal-actions-bar">
          <a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn btn-play">
            <i class="fa-solid fa-play"></i> Launch Live Deployment
          </a>
          <button class="btn btn-more-info" onclick="triggerToast('Saved &quot;${project.title}&quot; to your playlist!')">
            <i class="fa-solid fa-plus"></i> Add To My List
          </button>
        </div>
      </div>
    </div>

    <div class="modal-body-padding">
      <div class="modal-grid-details">
        <div class="modal-main-desc">
          <h4>SYNOPSIS</h4>
          <p>${project.synopsis}</p>

          <h4>KEY ARCHITECTURAL HIGHLIGHTS</h4>
          <ul>
            ${project.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>

          <h4>LIVE DEMO VERIFICATION</h4>
          <p>
            Deployed live and publically verifiable at: 
            <a href="${project.liveUrl}" target="_blank" rel="noopener" style="color: var(--netflix-red); font-weight: 600; text-decoration: underline;">
              ${project.liveUrl}
            </a>
          </p>
        </div>

        <div class="modal-side-meta">
          <div class="meta-group">
            <strong>DIRECTOR & LEAD DEV</strong>
            <span>Priyadharshini S</span>
          </div>
          <div class="meta-group">
            <strong>PRODUCTION STATUS</strong>
            <span style="color: var(--netflix-green); font-weight: 700;"><i class="fa-solid fa-circle-check"></i> Live & Verified</span>
          </div>
          <div class="meta-group">
            <strong>TECH STACK & TOOLS</strong>
            <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
              ${project.techStack.map(t => `<span class="pill" style="font-size: 0.75rem;">${t}</span>`).join('')}
            </div>
          </div>
          <div class="meta-group">
            <strong>GENRES</strong>
            <span>${project.genres.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('projectModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// Open Certificate Modal
function openCertModal(certId) {
  playTaDum();
  const cert = certsData[certId] || {
    title: 'Verified Credential',
    issuer: 'Priyadharshini S Official Portfolio',
    image: 'assets/images/certificate-ether.jpg',
    synopsis: 'Verified academic and industrial credential.'
  };

  document.getElementById('certModalTitle').innerText = cert.title;
  document.getElementById('certModalSubtitle').innerText = `${cert.issuer} • ${cert.synopsis}`;
  document.getElementById('certModalImg').src = cert.image;
  document.getElementById('certDownloadLink').href = cert.image;

  document.getElementById('certModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// Close Modals
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

function handleBackdropClick(event) {
  if (event.target.classList.contains('modal-backdrop')) {
    event.target.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// Toast System
function triggerToast(message) {
  const toast = document.getElementById('toastNotification');
  const msgEl = document.getElementById('toastMessage');
  msgEl.innerText = message;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3500);
}

// Contact Form Handler
function handleContactSubmit(event) {
  event.preventDefault();
  playTaDum();

  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const subject = document.getElementById('contactSubject').value;
  const message = document.getElementById('contactMessage').value;

  const feedback = document.getElementById('formFeedback');
  feedback.className = 'form-feedback success';
  feedback.innerHTML = `
    <i class="fa-solid fa-circle-check"></i> Thank you, <strong>${name}</strong>! Your transmission has been queued. Priyadharshini will respond to <strong>${email}</strong> shortly.
  `;
  feedback.classList.remove('hidden');

  // Also construct mailto shortcut
  const mailtoLink = `mailto:priyadharshinis3006@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Priyadharshini,\n\n${message}\n\nFrom: ${name} (${email})`)}`;
  
  setTimeout(() => {
    window.open(mailtoLink, '_blank');
  }, 1000);

  document.getElementById('contactForm').reset();
}

// DOM Setup & Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll background effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Sound FX Toggle
  const soundBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');
  soundBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
      soundIcon.className = 'fa-solid fa-volume-high';
      triggerToast('Cinematic Audio Enabled (Ta-Dum)');
      playTaDum();
    } else {
      soundIcon.className = 'fa-solid fa-volume-xmark';
      triggerToast('Audio FX Muted');
    }
  });

  // Hero Play Button
  document.getElementById('heroPlayBtn').addEventListener('click', (e) => {
    playTaDum();
  });

  // Hero More Info Button
  document.getElementById('heroMoreInfoBtn').addEventListener('click', () => {
    openProjectModal('tommy-hub');
  });

  // Resume Modal trigger
  document.getElementById('viewResumeBtn').addEventListener('click', (e) => {
    e.preventDefault();
    playTaDum();
    document.getElementById('resumeModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
  });

  // Close mobile nav when link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
    });
  });

  // Search Engine Feature
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const searchPanel = document.getElementById('searchResultsPanel');
  const searchList = document.getElementById('searchResultsList');
  const closeSearch = document.getElementById('closeSearchPanel');

  searchBtn.addEventListener('click', () => {
    searchInput.focus();
  });

  closeSearch.addEventListener('click', () => {
    searchPanel.classList.add('hidden');
  });

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length < 2) {
      searchPanel.classList.add('hidden');
      return;
    }

    const cards = document.querySelectorAll('.media-card');
    const matches = [];

    cards.forEach(card => {
      const title = card.getAttribute('data-title') || '';
      const tags = card.getAttribute('data-tags') || '';
      if (title.toLowerCase().includes(query) || tags.toLowerCase().includes(query)) {
        matches.push({
          title: card.querySelector('.card-title').innerText,
          desc: card.querySelector('.card-desc').innerText,
          liveUrl: card.querySelector('.btn-stream').href
        });
      }
    });

    if (matches.length > 0) {
      searchList.innerHTML = matches.map(m => `
        <div class="search-item-card" onclick="window.open('${m.liveUrl}', '_blank')">
          <h4><i class="fa-solid fa-play" style="color: var(--netflix-red); font-size: 0.8rem; margin-right: 0.4rem;"></i> ${m.title}</h4>
          <p>${m.desc.substring(0, 110)}...</p>
        </div>
      `).join('');
      searchPanel.classList.remove('hidden');
    } else {
      searchList.innerHTML = `<p style="color: var(--netflix-gray); grid-column: 1 / -1;">No titles or tags matching "${query}". Try "React", "Python", "FastAPI", "Billing", "AI", or "Welding".</p>`;
      searchPanel.classList.remove('hidden');
    }
  });

  // Global ESC key listener to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal('projectModal');
      closeModal('certModal');
      closeModal('resumeModal');
      searchPanel.classList.add('hidden');
    }
  });
});
