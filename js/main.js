// Main JavaScript for Guidecast Landing Page

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
  // Create modal overlay
  const modal = document.createElement('div');
  modal.className = 'video-modal';
  modal.innerHTML = `
    <div class="video-modal-content">
      <button class="video-modal-close" onclick="closeDemoVideo()">&times;</button>
      <div class="video-wrapper">
        <video id="demo-video" controls autoplay>
          <source src="./videos/20251012_1541_01k7bhyr4sffkst9xrw8e4xzcy.mp4" type="video/mp4">
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
  const modal = document.createElement('div');
  modal.className = 'form-modal';
  modal.innerHTML = `
    <div class="form-modal-content">
      <button class="form-modal-close" onclick="closeEarlyBirdForm()">&times;</button>
      <div class="form-wrapper">
        <h2 class="form-title">얼리버드 신청</h2>
        <p class="form-subtitle">연락처와 의견을 남겨주시면 출시 후 <strong>1,000시간 무료 크레딧</strong>을 드립니다!</p>
        <form id="early-bird-form" onsubmit="handleEarlyBirdSubmit(event)">
          <div class="form-group">
            <label for="name">이름 *</label>
            <input type="text" id="name" name="name" required placeholder="홍길동">
          </div>
          <div class="form-group">
            <label for="email">이메일 *</label>
            <input type="email" id="email" name="email" required placeholder="example@email.com">
          </div>
          <div class="form-group">
            <label for="phone">연락처 *</label>
            <input type="tel" id="phone" name="phone" required placeholder="010-1234-5678">
          </div>
          <div class="form-group">
            <label for="company">소속 (선택)</label>
            <input type="text" id="company" name="company" placeholder="개인 가이드 / 여행사명 등">
          </div>
          <div class="form-group">
            <label for="feedback">의견 및 기대사항 *</label>
            <textarea id="feedback" name="feedback" rows="4" required placeholder="Guidecast에 기대하는 점이나 필요한 기능을 자유롭게 작성해주세요."></textarea>
          </div>
          <div class="form-group checkbox-group">
            <label>
              <input type="checkbox" id="privacy" name="privacy" required>
              <span>개인정보 수집 및 이용에 동의합니다.</span>
            </label>
          </div>
          <button type="submit" class="btn-primary form-submit">1,000시간 크레딧 받기</button>
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

  const formData = new FormData(event.target);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    company: formData.get('company'),
    feedback: formData.get('feedback'),
    timestamp: new Date().toISOString()
  };

  // Log data to console (실제 구현 시 서버로 전송)
  console.log('얼리버드 신청 데이터:', data);

  // Show success message
  const formWrapper = document.querySelector('.form-wrapper');
  formWrapper.innerHTML = `
    <div class="form-success">
      <div class="success-icon">✓</div>
      <h2>신청이 완료되었습니다!</h2>
      <p>소중한 의견 감사합니다.<br>
      출시 후 이메일로 <strong>1,000시간 무료 크레딧</strong>을 보내드리겠습니다.</p>
      <button class="btn-primary" onclick="closeEarlyBirdForm()">확인</button>
    </div>
  `;

  // Track event
  trackEvent('Early Bird', 'submit', data.email);
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
