// Main JavaScript for Guidecast Landing Page

// Google Apps Script Web App URL is now loaded from Jekyll config via window.GOOGLE_SCRIPT_URL
// Fallback to empty string if not configured
const GOOGLE_SCRIPT_URL = window.GOOGLE_SCRIPT_URL || '';

// 햄버거 메뉴 토글 기능
function toggleMobileMenu() {
  const navMenu = document.getElementById('navMenu');
  const hamburger = document.querySelector('.hamburger');

  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');

  // ARIA 속성 업데이트
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !isExpanded);

  // body 스크롤 제어 (선택사항)
  if (navMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}

// 언어 전환 토글 기능 (모바일용)
function toggleLanguageSwitcher() {
  const langSwitcher = document.querySelector('.language-switcher');
  langSwitcher.classList.toggle('active');
}

// 메뉴 링크 클릭 시 모바일 메뉴 닫기
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const navMenu = document.getElementById('navMenu');
      const hamburger = document.querySelector('.hamburger');

      if (window.innerWidth <= 768 && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // 모바일에서 언어 선택 버튼 클릭 이벤트
  const langToggle = document.querySelector('.lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();
        toggleLanguageSwitcher();
      }
    });
  }

  // 메뉴 외부 클릭 시 닫기
  document.addEventListener('click', (e) => {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    const isClickInsideNav = navMenu.contains(e.target) || hamburger.contains(e.target);

    if (!isClickInsideNav && navMenu.classList.contains('active') && window.innerWidth <= 768) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = 'auto';
    }
  });

  // 창 크기 변경 시 데스크탑에서 body overflow 복원
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      document.body.style.overflow = 'auto';
      const navMenu = document.getElementById('navMenu');
      const hamburger = document.querySelector('.hamburger');
      if (navMenu) navMenu.classList.remove('active');
      if (hamburger) hamburger.classList.remove('active');
      if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});

// FAQ Toggle Functionality
function toggleFAQ(button) {
  const faqItem = button.parentElement;
  const faqAnswer = faqItem.querySelector('.faq-answer');
  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  // Close all other FAQ items
  document.querySelectorAll('.faq-item').forEach(item => {
    if (item !== faqItem) {
      item.classList.remove('active');
      const otherButton = item.querySelector('.faq-question');
      otherButton.setAttribute('aria-expanded', 'false');
    }
  });

  // Toggle current FAQ item
  if (isExpanded) {
    faqItem.classList.remove('active');
    button.setAttribute('aria-expanded', 'false');
  } else {
    faqItem.classList.add('active');
    button.setAttribute('aria-expanded', 'true');
  }
}

// Demo Video Modal Functionality
function showDemoVideo() {
  // Get the base URL for assets
  const baseUrl = window.location.origin + (window.location.pathname.includes('/landing_page') ? '/landing_page' : '');
  const videoPath = baseUrl + '/assets/videos/20251012_1541_01k7bhyr4sffkst9xrw8e4xzcy.mp4';

  // Create modal overlay
  const modal = document.createElement('div');
  modal.className = 'video-modal';
  modal.innerHTML = `
    <div class="video-modal-content">
      <button class="video-modal-close" onclick="closeDemoVideo()">&times;</button>
      <div class="video-wrapper">
        <video id="demo-video" controls autoplay>
          <source src="${videoPath}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  // Add styles for video modal
  addVideoModalStyles();

  // Play the video
  const video = document.getElementById('demo-video');
  if (video) {
    video.play().catch(err => {
      console.log('Video autoplay was prevented:', err);
    });
  }
}

function closeDemoVideo() {
  const modal = document.querySelector('.video-modal');
  if (modal) {
    // Stop video before removing
    const video = document.getElementById('demo-video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    modal.remove();
    document.body.style.overflow = 'auto';
  }
}

function addVideoModalStyles() {
  if (document.getElementById('video-modal-styles')) return;

  const style = document.createElement('style');
  style.id = 'video-modal-styles';
  style.textContent = `
    .video-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
      animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .video-modal-content {
      position: relative;
      width: 90%;
      max-width: 900px;
      background-color: #000;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }

    .video-modal-close {
      position: absolute;
      top: -40px;
      right: 0;
      background: transparent;
      border: none;
      color: white;
      font-size: 2.5rem;
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10001;
      transition: transform 0.2s ease;
    }

    .video-modal-close:hover {
      transform: scale(1.1);
    }

    .video-wrapper {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 aspect ratio */
      height: 0;
      overflow: hidden;
    }

    .video-wrapper video,
    .video-wrapper iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
    }

    .video-placeholder {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 2rem;
      text-align: center;
    }

    .video-placeholder p {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .video-note {
      font-size: 0.875rem;
      opacity: 0.8;
      max-width: 500px;
    }

    @media (max-width: 768px) {
      .video-modal-content {
        width: 95%;
      }

      .video-modal-close {
        top: -35px;
        font-size: 2rem;
      }

      .video-placeholder p {
        font-size: 1.125rem;
      }
    }
  `;

  document.head.appendChild(style);
}

// Early Bird Form Modal Functionality
function showEarlyBirdForm() {
  // Get current language and translations
  const lang = window.GUIDECAST_LANG || 'ko';
  const translations = window.GUIDECAST_TRANSLATIONS || {};
  const t = translations[lang]?.form || translations['ko'].form;

  const modal = document.createElement('div');
  modal.className = 'form-modal';
  modal.innerHTML = `
    <div class="form-modal-content">
      <button class="form-modal-close" onclick="closeEarlyBirdForm()">&times;</button>
      <div class="form-wrapper">
        <h2 class="form-title">${t.title}</h2>
        <p class="form-subtitle">${t.subtitle}</p>
        <form id="early-bird-form" onsubmit="handleEarlyBirdSubmit(event)">
          <fieldset>
            <div class="form-group">
              <label for="name">${t.name_label}</label>
              <input type="text" id="name" name="name" required placeholder="${t.name_placeholder}">
            </div>
            <div class="form-group">
              <label for="email">${t.email_label}</label>
              <input type="email" id="email" name="email" required placeholder="${t.email_placeholder}">
            </div>
            <div class="form-group">
              <label for="phone">${t.phone_label}</label>
              <div class="phone-input-group">
                <select id="country-code" name="country_code" class="country-code-select">
                  <option value="+82" selected>🇰🇷 +82</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+81">🇯🇵 +81</option>
                  <option value="+86">🇨🇳 +86</option>
                  <option value="+886">🇹🇼 +886</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+33">🇫🇷 +33</option>
                  <option value="+49">🇩🇪 +49</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+65">🇸🇬 +65</option>
                  <option value="+852">🇭🇰 +852</option>
                  <option value="+66">🇹🇭 +66</option>
                  <option value="+60">🇲🇾 +60</option>
                  <option value="+63">🇵🇭 +63</option>
                  <option value="+84">🇻🇳 +84</option>
                  <option value="+62">🇮🇩 +62</option>
                  <option value="+7">🇷🇺 +7</option>
                  <option value="+34">🇪🇸 +34</option>
                  <option value="+39">🇮🇹 +39</option>
                  <option value="+351">🇵🇹 +351</option>
                  <option value="+31">🇳🇱 +31</option>
                  <option value="+41">🇨🇭 +41</option>
                  <option value="+46">🇸🇪 +46</option>
                  <option value="+47">🇳🇴 +47</option>
                  <option value="+45">🇩🇰 +45</option>
                  <option value="+358">🇫🇮 +358</option>
                  <option value="+48">🇵🇱 +48</option>
                  <option value="+420">🇨🇿 +420</option>
                  <option value="+43">🇦🇹 +43</option>
                  <option value="+32">🇧🇪 +32</option>
                  <option value="+30">🇬🇷 +30</option>
                  <option value="+90">🇹🇷 +90</option>
                  <option value="+20">🇪🇬 +20</option>
                  <option value="+27">🇿🇦 +27</option>
                  <option value="+52">🇲🇽 +52</option>
                  <option value="+55">🇧🇷 +55</option>
                  <option value="+54">🇦🇷 +54</option>
                  <option value="+56">🇨🇱 +56</option>
                  <option value="+57">🇨🇴 +57</option>
                  <option value="+64">🇳🇿 +64</option>
                </select>
                <input type="tel" id="phone" name="phone" placeholder="${t.phone_placeholder}">
              </div>
            </div>
            <div class="form-group">
              <label for="company">${t.company_label}</label>
              <input type="text" id="company" name="company" placeholder="${t.company_placeholder}">
            </div>
            <div class="form-group">
              <label for="feedback">${t.feedback_label}</label>
              <textarea id="feedback" name="feedback" rows="4" required placeholder="${t.feedback_placeholder}"></textarea>
            </div>
            <div class="form-group checkbox-group">
              <label>
                <input type="checkbox" id="privacy" name="privacy" required>
                <span>${t.privacy_label}</span>
              </label>
            </div>
            <button type="submit" class="btn-primary form-submit">
              <span class="button-text">${t.submit_button}</span>
              <span class="spinner"></span>
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  addFormModalStyles();
}

function closeEarlyBirdForm() {
  const modal = document.querySelector('.form-modal');
  if (modal) {
    modal.remove();
    document.body.style.overflow = 'auto';
  }
}

function handleEarlyBirdSubmit(event) {
  event.preventDefault();

  // Get current language and translations
  const lang = window.GUIDECAST_LANG || 'ko';
  const translations = window.GUIDECAST_TRANSLATIONS || {};
  const t = translations[lang]?.form || translations['ko'].form;
  
  const form = event.target;
  const fieldset = form.querySelector('fieldset');
  const submitButton = form.querySelector('.form-submit');
  

  const formData = new FormData(event.target);
  const countryCode = formData.get('country_code');
  const phoneNumber = formData.get('phone');
  const fullPhone = phoneNumber ? `${countryCode} ${phoneNumber}` : '';

  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: fullPhone,
    company: formData.get('company'),
    feedback: formData.get('feedback'),
    privacy: formData.get('privacy') ? 'Yes' : 'No',
    language: lang,
    timestamp: new Date().toISOString()
  };

  // Show loading state
  fieldset.disabled = true;
  submitButton.classList.add('loading');


  // Check if Google Script URL is configured
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === '') {
    console.warn('Google Apps Script URL not configured in _config.yml. Data:', data);
    showSuccessMessage(t);
    trackEvent('Early Bird', 'submit', data.email);
    return;
  }

  // Send data to Google Sheets
  fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors', // Required for Google Apps Script
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(() => {
    // Note: With 'no-cors' mode, we can't read the response
    // But if no error is thrown, we can assume success
    console.log('Early bird application submitted:', data);
    showSuccessMessage(t);
    trackEvent('Early Bird', 'submit', data.email);
  })
  .catch((error) => {
    console.error('Error submitting form:', error);
    fieldset.disabled = false;
    submitButton.classList.remove('loading');

    // Show error message
    const formWrapper = document.querySelector('.form-wrapper');
    const errorMessages = {
      ko: '죄송합니다. 오류가 발생했습니다. 다시 시도해 주세요.',
      en: 'Sorry, an error occurred. Please try again.',
      ja: '申し訳ございません。エラーが発生しました。もう一度お試しください。',
      'zh-TW': '抱歉，發生錯誤。請重試。',
      'zh-CN': '抱歉，发生错误。请重试。'
    };

    formWrapper.innerHTML = `
      <div class="form-error">
        <div class="error-icon">⚠</div>
        <h2>${errorMessages[lang] || errorMessages['en']}</h2>
        <p>Email: support@guidecast.com</p>
        <button class="btn-primary" onclick="closeEarlyBirdForm()">${t.success_button}</button>
      </div>
    `;

    trackEvent('Early Bird', 'error', error.toString());
  });
}

// Helper function to show success message
function showSuccessMessage(t) {
  const formWrapper = document.querySelector('.form-wrapper');
  formWrapper.innerHTML = `
    <div class="form-success">
      <div class="success-icon">✓</div>
      <h2>${t.success_title}</h2>
      <p>${t.success_message}</p>
      <button class="btn-primary" onclick="closeEarlyBirdForm()">${t.success_button}</button>
    </div>
  `;
}

function addFormModalStyles() {
  if (document.getElementById('form-modal-styles')) return;

  const style = document.createElement('style');
  style.id = 'form-modal-styles';
  style.textContent = `
    .form-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
      animation: fadeIn 0.3s ease;
      overflow-y: auto;
      padding: 2rem 0;
    }

    .form-modal-content {
      position: relative;
      width: 90%;
      max-width: 600px;
      background-color: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
      margin: auto;
    }

    .form-modal-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: transparent;
      border: none;
      color: #64748b;
      font-size: 2rem;
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10001;
      transition: transform 0.2s ease, color 0.2s ease;
    }

    .form-modal-close:hover {
      transform: scale(1.1);
      color: #1e293b;
    }

    .form-wrapper {
      padding: 3rem 2.5rem;
    }

    .form-title {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      color: #1e293b;
    }

    .form-subtitle {
      font-size: 1rem;
      color: #64748b;
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .form-subtitle strong {
      color: #2563eb;
      font-weight: 700;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      font-size: 1rem;
      font-family: inherit;
      transition: border-color 0.2s ease;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #2563eb;
    }

    .form-group textarea {
      resize: vertical;
      min-height: 100px;
    }

    .phone-input-group {
      display: flex;
      gap: 0.5rem;
    }

    .country-code-select {
      flex: 0 0 120px;
      padding: 0.75rem 0.5rem;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      font-size: 0.95rem;
      font-family: inherit;
      background-color: white;
      cursor: pointer;
      transition: border-color 0.2s ease;
    }

    .country-code-select:focus {
      outline: none;
      border-color: #2563eb;
    }

    .phone-input-group input[type="tel"] {
      flex: 1;
    }

    .checkbox-group {
      display: flex;
      align-items: flex-start;
    }

    .checkbox-group label {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      cursor: pointer;
      margin: 0;
      font-weight: 400;
    }

    .checkbox-group input[type="checkbox"] {
      width: auto;
      margin-top: 0.25rem;
      cursor: pointer;
    }

    .form-submit {
      width: 100%;
      padding: 1rem;
      font-size: 1.125rem;
      margin-top: 1rem;
    }

    .form-submit:disabled {
      background-color: #94a3b8;
      cursor: not-allowed;
    }

    .form-submit .spinner {
      display: none;
      width: 20px;
      height: 20px;
      border: 3px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top-color: #fff;
      animation: spin 1s ease-in-out infinite;
      margin: 0 auto;
    }

    .form-submit.loading .spinner {
      display: block;
    }

    .form-submit.loading .button-text {
      display: none;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    fieldset:disabled {
      opacity: 0.7;
    }

    .form-success {
      text-align: center;
      padding: 2rem 0;
    }

    .success-icon {
      width: 80px;
      height: 80px;
      background-color: #10b981;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      margin: 0 auto 1.5rem;
      font-weight: 700;
    }

    .form-success h2 {
      color: #1e293b;
      margin-bottom: 1rem;
    }

    .form-success p {
      color: #64748b;
      line-height: 1.8;
      margin-bottom: 2rem;
    }

    .form-success strong {
      color: #2563eb;
    }

    .form-error {
      text-align: center;
      padding: 2rem 0;
    }

    .error-icon {
      width: 80px;
      height: 80px;
      background-color: #ef4444;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      margin: 0 auto 1.5rem;
      font-weight: 700;
    }

    .form-error h2 {
      color: #1e293b;
      margin-bottom: 1rem;
    }

    .form-error p {
      color: #64748b;
      line-height: 1.8;
      margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
      .form-wrapper {
        padding: 2rem 1.5rem;
      }

      .form-title {
        font-size: 1.5rem;
      }

      .form-modal-close {
        top: 0.5rem;
        right: 0.5rem;
      }

      .phone-input-group {
        flex-direction: column;
        gap: 0.75rem;
      }

      .country-code-select {
        flex: 1;
        width: 100%;
      }
    }
  `;

  document.head.appendChild(style);
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('video-modal')) {
    closeDemoVideo();
  }
  if (e.target.classList.contains('form-modal')) {
    closeEarlyBirdForm();
  }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDemoVideo();
    closeEarlyBirdForm();
  }
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Don't prevent default if it's just "#" or if the target doesn't exist
    if (href === '#' || href === '#contact') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add scroll animation for elements
function addScrollAnimation() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe all cards, features, and testimonials
  document.querySelectorAll('.card, .feature, .testimonial-card, .pricing-card').forEach(el => {
    el.classList.add('animate-target');
    observer.observe(el);
  });
}

// Add CSS for scroll animations
function addScrollAnimationStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .animate-target {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .animate-target.animate-in {
      opacity: 1;
      transform: translateY(0);
    }

    .card.animate-target:nth-child(1) { transition-delay: 0.1s; }
    .card.animate-target:nth-child(2) { transition-delay: 0.2s; }
    .card.animate-target:nth-child(3) { transition-delay: 0.3s; }

    .feature.animate-target:nth-child(1) { transition-delay: 0.1s; }
    .feature.animate-target:nth-child(2) { transition-delay: 0.2s; }
    .feature.animate-target:nth-child(3) { transition-delay: 0.3s; }
    .feature.animate-target:nth-child(4) { transition-delay: 0.4s; }

    .testimonial-card.animate-target:nth-child(1) { transition-delay: 0.1s; }
    .testimonial-card.animate-target:nth-child(2) { transition-delay: 0.2s; }
    .testimonial-card.animate-target:nth-child(3) { transition-delay: 0.3s; }

    .pricing-card.animate-target:nth-child(1) { transition-delay: 0.1s; }
    .pricing-card.animate-target:nth-child(2) { transition-delay: 0.2s; }
    .pricing-card.animate-target:nth-child(3) { transition-delay: 0.3s; }
    .pricing-card.animate-target:nth-child(4) { transition-delay: 0.4s; }
  `;
  document.head.appendChild(style);
}

// Form submission handling (placeholder)
function handleFormSubmit(event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log('Form submitted:', data);

  // Show success message
  alert('감사합니다! 곧 연락드리겠습니다.');

  // Reset form
  event.target.reset();
}

// Add event listeners to all forms
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', handleFormSubmit);
});

// CTA Button handlers
document.querySelectorAll('.btn-primary, .cta-primary').forEach(button => {
  button.addEventListener('click', function(e) {
    // Skip if it's the demo video button
    if (this.textContent.includes('데모 영상')) return;

    // Placeholder for actual sign-up flow
    console.log('CTA clicked:', this.textContent);

    // // In production, this would redirect to sign-up page or open a modal
    // alert('회원가입 페이지로 이동합니다. (실제 구현 시 적절한 URL로 연결하세요)');
  });
});

// Secondary button handlers
document.querySelectorAll('.btn-secondary').forEach(button => {
  button.addEventListener('click', function(e) {
    console.log('Secondary CTA clicked:', this.textContent);

    // In production, this would handle consultation requests
    // if (this.textContent.includes('상담')) {
    //   alert('상담 신청 페이지로 이동합니다. (실제 구현 시 적절한 URL로 연결하세요)');
    // } else {
    //   alert('무료 체험을 시작합니다. (실제 구현 시 적절한 URL로 연결하세요)');
    // }
  });
});

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  addScrollAnimationStyles();
  addScrollAnimation();

  console.log('Guidecast Landing Page initialized');
});

// Analytics tracking (placeholder)
function trackEvent(category, action, label) {
  console.log('Track event:', { category, action, label });

  // In production, integrate with Google Analytics or other analytics tools
  // Example: gtag('event', action, { 'event_category': category, 'event_label': label });
}

// Track CTA clicks
document.querySelectorAll('.cta-primary, .btn-primary').forEach(button => {
  button.addEventListener('click', () => {
    trackEvent('CTA', 'click', button.textContent.trim());
  });
});

// Track section views
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.id;
      trackEvent('Section', 'view', sectionId);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('section[id]').forEach(section => {
  sectionObserver.observe(section);
});
