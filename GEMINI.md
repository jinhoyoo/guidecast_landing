# Guidecast Landing Page 제작 가이드

## 프로젝트 개요
Guidecast 서비스의 랜딩페이지를 Vanilla HTML, CSS, JavaScript로 제작합니다.
모바일 및 데스크탑 반응형 디자인을 지원하며, 투어 가이드들에게 무선 장비 대신 스마트폰 기반 솔루션을 제안하는 페이지입니다.

---

## 디자인 시스템

### 컬러 팔레트
```css
/* Primary Colors */
--primary-blue: #2563EB;
--accent-lime: #A3E635;
--success-green: #22C55E;

/* Grayscale */
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-600: #4B5563;
--gray-800: #1F2937;
--gray-900: #111827;

/* Semantic Colors */
--text-primary: #111827;
--text-secondary: #4B5563;
--background: #FFFFFF;
--background-alt: #F9FAFB;
```

### 타이포그래피
```css
/* Font Family */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans KR', sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

### 간격 시스템
```css
--spacing-1: 0.25rem;  /* 4px */
--spacing-2: 0.5rem;   /* 8px */
--spacing-3: 0.75rem;  /* 12px */
--spacing-4: 1rem;     /* 16px */
--spacing-6: 1.5rem;   /* 24px */
--spacing-8: 2rem;     /* 32px */
--spacing-12: 3rem;    /* 48px */
--spacing-16: 4rem;    /* 64px */
--spacing-24: 6rem;    /* 96px */
```

---

## 페이지 구조

### 1. Hero Section
**목적**: 첫 인상으로 핵심 가치 제안 전달

**구성 요소**:
- 헤드라인: "무선 장비 없이, 스마트폰으로 완성하는 프로 투어 가이드"
- 서브헤드: "24만원짜리 무선 장비 대신 QR코드 하나로 시작하세요. 충전 걱정, 파손 위험, 관리 스트레스 모두 끝."
- 인포박스: "가이드는 요금제 구독. 관광객은 100% 무료, 앱 설치 없이 참여."
- CTA 버튼: "데모 영상 보기 (30초)"
- Hero 이미지: QR코드 스캔 장면

**레이아웃**:
- 데스크탑: 좌측 텍스트 + 우측 이미지 (60:40 비율)
- 모바일: 세로 스택 (텍스트 → 이미지)

**HTML 구조**:
```html
<section id="hero" class="hero-section">
  <div class="container">
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="headline">무선 장비 없이, 스마트폰으로 완성하는 프로 투어 가이드</h1>
        <p class="subheadline">24만원짜리 무선 장비 대신 QR코드 하나로 시작하세요.<br>
        충전 걱정, 파손 위험, 관리 스트레스 모두 끝.</p>
        <div class="info-box">
          <span class="icon">💡</span>
          <p><strong>가이드는 요금제 구독. 관광객은 100% 무료, 앱 설치 없이 참여.</strong></p>
        </div>
        <button class="cta-primary" onclick="showDemoVideo()">데모 영상 보기 (30초)</button>
      </div>
      <div class="hero-image">
        <img src="./images/hero-qr-scan.png" alt="가이드가 QR코드를 보여주는 장면" />
      </div>
    </div>
  </div>
</section>
```

---

### 2. Pain Point Section
**목적**: 타겟 고객의 문제점에 공감대 형성

**구성 요소**:
- 섹션 제목: "이런 고민, 당신만의 문제가 아닙니다"
- 3개 카드 (아이콘 + 제목 + 설명)

**HTML 구조**:
```html
<section id="pain-points" class="pain-points-section">
  <div class="container">
    <h2 class="section-title">이런 고민, 당신만의 문제가 아닙니다</h2>
    <div class="cards-grid">
      <div class="card">
        <div class="card-icon">💸</div>
        <h3 class="card-title">장비 구매비 부담</h3>
        <p class="card-description">"10명 투어 한 번 하려고 24만원? 개인 가이드에겐 너무 큰 초기 비용"</p>
      </div>
      <div class="card">
        <div class="card-icon">🔋</div>
        <h3 class="card-title">충전·관리 스트레스</h3>
        <p class="card-description">"투어 전날 밤 충전 확인, 파손되면 수리비까지... 가이드 일에만 집중하고 싶은데"</p>
      </div>
      <div class="card">
        <div class="card-icon">📱</div>
        <h3 class="card-title">관광객 경험 한계</h3>
        <p class="card-description">"일방적인 음성만 들려주기엔 2025년이 아깝죠. 사진 공유도, 실시간 소통도 안 되는 구식 장비"</p>
      </div>
    </div>
  </div>
</section>
```

---

### 3. Solution Section
**목적**: Guidecast의 핵심 기능 소개

**구성 요소**:
- 섹션 제목: "Guidecast 하나면 충분합니다"
- 4개 기능 블록 (아이콘 + 제목 + 설명)

**HTML 구조**:
```html
<section id="solution" class="solution-section">
  <div class="container">
    <h2 class="section-title">Guidecast 하나면 충분합니다</h2>
    <div class="features-grid">
      <div class="feature">
        <div class="feature-icon">⚡</div>
        <h3 class="feature-title">QR 스캔 한 번으로 시작</h3>
        <p class="feature-description">앱에서 투어 생성 → QR코드 보여주기 → 관광객 스캔 참여. 3초 완료.</p>
      </div>
      <div class="feature">
        <div class="feature-icon">🎙️</div>
        <h3 class="feature-title">실시간 음성 방송</h3>
        <p class="feature-description">WebRTC 기반 고품질 오디오. 최대 20명까지 끊김 없이 전달.</p>
      </div>
      <div class="feature">
        <div class="feature-icon">📋</div>
        <h3 class="feature-title">요점 카드 + 진동 알림</h3>
        <p class="feature-description">중요한 정보는 카드로 전송. 관광객 폰이 진동하며 알림 → 놓칠 일 없음.</p>
      </div>
      <div class="feature">
        <div class="feature-icon">📸</div>
        <h3 class="feature-title">투어 사진 공유 앨범</h3>
        <p class="feature-description">투어 중 찍은 사진 실시간 업로드 → 여행 끝나면 관광객들이 한 번에 다운로드 가능</p>
      </div>
    </div>
  </div>
</section>
```

---

### 4. Social Proof Section
**목적**: 신뢰도 구축

**구성 요소**:
- 섹션 제목: "이미 전환한 가이드들의 이야기"
- 3개 후기 카드

**HTML 구조**:
```html
<section id="testimonials" class="testimonials-section">
  <div class="container">
    <h2 class="section-title">이미 전환한 가이드들의 이야기</h2>
    <div class="testimonials-grid">
      <div class="testimonial-card">
        <p class="testimonial-text">"무선 장비 살 돈으로 3개월 구독했는데 훨씬 편해요. 관광객 반응도 좋고!"</p>
        <p class="testimonial-author">- 김OO, 서울 도보 투어 가이드</p>
      </div>
      <div class="testimonial-card">
        <p class="testimonial-text">"박물관 도슨트로 일하는데 장비 충전 안 해도 돼서 아침이 편해졌어요."</p>
        <p class="testimonial-author">- 이OO, 박물관 도슨트</p>
      </div>
      <div class="testimonial-card">
        <p class="testimonial-text">"사진 공유 기능 덕분에 관광객들이 리뷰를 더 많이 남겨줘요."</p>
        <p class="testimonial-author">- 박OO, 제주 투어 가이드</p>
      </div>
    </div>
  </div>
</section>
```

---

### 5. Pricing Section
**목적**: 명확한 가격 정보 제공

**구성 요소**:
- 섹션 제목: "당신의 투어 규모에 맞는 요금제"
- 4개 요금제 카드
- 추가 사용량 크레딧 정보
- 하단 안내 문구

**HTML 구조**:
```html
<section id="pricing" class="pricing-section">
  <div class="container">
    <h2 class="section-title">당신의 투어 규모에 맞는 요금제</h2>
    <div class="pricing-grid">
      <!-- Free Plan -->
      <div class="pricing-card">
        <h3 class="plan-name">Free</h3>
        <div class="plan-price">무료</div>
        <ul class="plan-features">
          <li>최대 3명</li>
          <li>월 1,000분 포함</li>
          <li>시험 서비스</li>
          <li>무상 평가용</li>
          <li>오디오 방송, 사진 공유</li>
        </ul>
        <button class="btn-secondary">무료로 시작</button>
      </div>

      <!-- Basic Plan -->
      <div class="pricing-card featured">
        <div class="popular-badge">인기</div>
        <h3 class="plan-name">Basic</h3>
        <div class="plan-price">$15<span class="period">/월</span></div>
        <ul class="plan-features">
          <li>최대 10명</li>
          <li>월 5,000분 포함</li>
          <li>개인 가이드 최적</li>
          <li>장비 대체, 간편 운영</li>
        </ul>
        <button class="btn-primary">1주 무료 체험</button>
      </div>

      <!-- Pro Plan -->
      <div class="pricing-card">
        <h3 class="plan-name">Pro</h3>
        <div class="plan-price">$75<span class="period">/월</span></div>
        <ul class="plan-features">
          <li>최대 20명</li>
          <li>월 30,000분 포함</li>
          <li>중견 가이드/여행사</li>
          <li>대규모 그룹 안정적 운영</li>
        </ul>
        <button class="btn-primary">1주 무료 체험</button>
      </div>

      <!-- Enterprise Plan -->
      <div class="pricing-card">
        <h3 class="plan-name">Enterprise</h3>
        <div class="plan-price">맞춤 견적</div>
        <ul class="plan-features">
          <li>무제한</li>
          <li>별도 협의</li>
          <li>박물관/공공기관</li>
          <li>조직 전체 라이선싱</li>
          <li>전용 지원</li>
        </ul>
        <button class="btn-secondary">상담 신청</button>
      </div>
    </div>

    <div class="additional-credits">
      <h4>추가 사용량 크레딧</h4>
      <ul>
        <li>1,000분: $1.5</li>
        <li>2,000분: $2.8</li>
        <li>3,000분: $4.0</li>
      </ul>
    </div>

    <p class="pricing-note">본 요금제와 무료 체험은 '가이드' 전용입니다. 관광객은 항상 무료로 참여합니다. 무료 체험 기간 내 언제든 위약금 없이 취소 가능. 신용카드 등록 필요 없음.</p>
  </div>
</section>
```

---

### 6. Comparison Section
**목적**: 경쟁 우위 명확히 제시

**HTML 구조**:
```html
<section id="comparison" class="comparison-section">
  <div class="container">
    <h2 class="section-title">무선 장비 vs Guidecast</h2>
    <p class="section-subtitle">결제 주체: 가이드 · 관광객은 항상 무료</p>

    <div class="comparison-table-wrapper">
      <table class="comparison-table">
        <thead>
          <tr>
            <th>항목</th>
            <th>기존 무선 장비</th>
            <th class="highlight">Guidecast</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>초기 비용</td>
            <td>24만원+(인원이 늘면 더 비용발생)</td>
            <td class="highlight">무료 체험 → 월 $15(인원이 늘어도 안심)</td>
          </tr>
          <tr>
            <td>충전/관리</td>
            <td>매번 필요</td>
            <td class="highlight">불필요</td>
          </tr>
          <tr>
            <td>파손 위험</td>
            <td>높음 (수리비 추가)</td>
            <td class="highlight">없음</td>
          </tr>
          <tr>
            <td>사진 공유</td>
            <td>불가능</td>
            <td class="highlight">실시간 앨범</td>
          </tr>
          <tr>
            <td>요점 전달</td>
            <td>음성뿐</td>
            <td class="highlight">카드 + 진동 알림</td>
          </tr>
          <tr>
            <td>관광객 소통</td>
            <td>일방향</td>
            <td class="highlight">양방향 가능</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
```

---

### 7. FAQ Section
**목적**: 사전 의문점 해소

**HTML 구조**:
```html
<section id="faq" class="faq-section">
  <div class="container">
    <h2 class="section-title">자주 묻는 질문</h2>
    <div class="faq-list">
      <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
          <span>관광객은 비용을 내나요?</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <p>아니요. 관광객은 항상 무료이며, 앱 설치 없이 QR 스캔으로 바로 참여합니다. 결제와 구독은 가이드만 해당됩니다.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
          <span>무선 장비 없이 정말 투어가 가능한가요?</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <p>네, 가능합니다. Guidecast는 스마트폰의 인터넷 연결만으로 실시간 음성 방송이 가능합니다. 관광객들이 QR코드를 스캔하면 자동으로 연결되며, 기존 무선 장비와 동일하거나 더 나은 음질을 제공합니다.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
          <span>관광객들도 앱을 설치해야 하나요?</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <p>아니요, 설치 필요 없습니다. 관광객은 QR코드를 스캔하면 웹브라우저로 바로 참여할 수 있습니다. 별도의 앱 다운로드나 회원가입 없이 즉시 투어에 참여 가능합니다.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
          <span>인터넷이 안 되는 곳에서도 사용할 수 있나요?</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <p>Guidecast는 인터넷 연결이 필요한 서비스입니다. 다만 4G/5G 모바일 데이터만으로도 충분히 작동하며, 데이터 사용량은 1시간 투어 기준 약 50-100MB 수준으로 부담이 적습니다.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
          <span>무료 체험 후 자동 결제되나요?</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <p>아니요, 자동 결제되지 않습니다. 1주 무료 체험 기간 동안 신용카드 등록 없이 모든 기능을 사용할 수 있으며, 체험 종료 후 원하실 때 유료 구독을 선택하시면 됩니다.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
          <span>투어 중 사진은 어떻게 관리되나요?</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <p>가이드가 투어 중 촬영한 사진은 자동으로 공유 앨범에 업로드됩니다. 관광객들은 투어 종료 후 30일 이내에 앨범에서 사진을 다운로드할 수 있으며, 30일 후 자동 삭제되어 개인정보가 안전하게 보호됩니다.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### 8. CTA Section
**목적**: 최종 행동 유도

**HTML 구조**:
```html
<section id="cta" class="cta-section">
  <div class="container">
    <h2 class="cta-title">다음 투어부터 바로 써보세요</h2>
    <p class="cta-subtitle">1주 무료 체험으로 위험 부담 제로. 신용카드 등록도 필요 없습니다.</p>
    <button class="cta-primary large">가이드 무료로 시작하기</button>
    <div class="cta-links">
      <a href="#faq">FAQ 보기</a>
      <span>|</span>
      <a href="#contact">1:1 상담 신청</a>
    </div>
  </div>
</section>
```

---

### 9. Footer
**HTML 구조**:
```html
<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-brand">
        <h3>Guidecast</h3>
        <p>스마트폰으로 완성하는 프로 투어 가이드</p>
      </div>
      <div class="footer-contact">
        <h4>문의</h4>
        <p>이메일: <a href="mailto:support@guidecast.com">support@guidecast.com</a></p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 Guidecast. All rights reserved.</p>
    </div>
  </div>
</footer>
```

---

## CSS 스타일 가이드

### 글로벌 스타일
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Colors */
  --primary-blue: #2563EB;
  --accent-lime: #A3E635;
  --success-green: #22C55E;
  --gray-50: #F9FAFB;
  --gray-100: #F3F4F6;
  --gray-200: #E5E7EB;
  --gray-300: #D1D5DB;
  --gray-600: #4B5563;
  --gray-800: #1F2937;
  --gray-900: #111827;
  --text-primary: #111827;
  --text-secondary: #4B5563;
  --background: #FFFFFF;
  --background-alt: #F9FAFB;

  /* Spacing */
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;
  --spacing-24: 6rem;

  /* Typography */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;

  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans KR', sans-serif;
  color: var(--text-primary);
  background-color: var(--background);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--spacing-8);
  }
}
```

### 버튼 스타일
```css
button, .btn-primary, .btn-secondary {
  font-family: inherit;
  font-size: var(--text-base);
  font-weight: 600;
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-lg);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-block;
  text-decoration: none;
  text-align: center;
}

.btn-primary, .cta-primary {
  background-color: var(--primary-blue);
  color: white;
}

.btn-primary:hover, .cta-primary:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background-color: white;
  color: var(--primary-blue);
  border: 2px solid var(--primary-blue);
}

.btn-secondary:hover {
  background-color: var(--gray-50);
  transform: translateY(-2px);
}

.cta-primary.large {
  font-size: var(--text-lg);
  padding: var(--spacing-4) var(--spacing-12);
}
```

### 섹션 공통 스타일
```css
section {
  padding: var(--spacing-16) 0;
}

@media (max-width: 768px) {
  section {
    padding: var(--spacing-12) 0;
  }
}

.section-title {
  font-size: var(--text-4xl);
  font-weight: 700;
  text-align: center;
  margin-bottom: var(--spacing-12);
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .section-title {
    font-size: var(--text-3xl);
    margin-bottom: var(--spacing-8);
  }
}

.section-subtitle {
  font-size: var(--text-lg);
  text-align: center;
  color: var(--text-secondary);
  margin-top: calc(var(--spacing-4) * -1);
  margin-bottom: var(--spacing-8);
}
```

### Hero Section 스타일
```css
.hero-section {
  background: linear-gradient(135deg, var(--gray-50) 0%, var(--background) 100%);
  padding: var(--spacing-24) 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
  align-items: center;
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-8);
  }

  .hero-section {
    padding: var(--spacing-16) 0;
  }
}

.headline {
  font-size: var(--text-5xl);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: var(--spacing-6);
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .headline {
    font-size: var(--text-3xl);
  }
}

.subheadline {
  font-size: var(--text-xl);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-8);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .subheadline {
    font-size: var(--text-lg);
  }
}

.info-box {
  background-color: var(--accent-lime);
  background: linear-gradient(135deg, #A3E635 0%, #84CC16 100%);
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-8);
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-3);
}

.info-box .icon {
  font-size: var(--text-2xl);
  flex-shrink: 0;
}

.info-box p {
  margin: 0;
  color: var(--gray-900);
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
}
```

### Cards Grid 스타일
```css
.cards-grid, .features-grid, .testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-8);
}

@media (max-width: 768px) {
  .cards-grid, .features-grid, .testimonials-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
  }
}

.card, .feature, .testimonial-card {
  background: white;
  padding: var(--spacing-8);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover, .feature:hover, .testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.card-icon, .feature-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-4);
  display: block;
}

.card-title, .feature-title {
  font-size: var(--text-xl);
  font-weight: 700;
  margin-bottom: var(--spacing-3);
  color: var(--text-primary);
}

.card-description, .feature-description {
  color: var(--text-secondary);
  line-height: 1.6;
}
```

### Pain Points Section 스타일
```css
.pain-points-section {
  background-color: var(--background-alt);
}
```

### Testimonials 스타일
```css
.testimonials-section {
  background-color: var(--background-alt);
}

.testimonial-text {
  font-size: var(--text-lg);
  font-style: italic;
  color: var(--text-primary);
  margin-bottom: var(--spacing-4);
  line-height: 1.6;
}

.testimonial-author {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  font-weight: 600;
}
```

### Pricing Section 스타일
```css
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-12);
}

@media (max-width: 768px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }
}

.pricing-card {
  background: white;
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.pricing-card.featured {
  border-color: var(--primary-blue);
  border-width: 3px;
  box-shadow: var(--shadow-lg);
}

.popular-badge {
  position: absolute;
  top: -12px;
  right: var(--spacing-6);
  background: var(--primary-blue);
  color: white;
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: 600;
}

.plan-name {
  font-size: var(--text-2xl);
  font-weight: 700;
  margin-bottom: var(--spacing-4);
  color: var(--text-primary);
}

.plan-price {
  font-size: var(--text-4xl);
  font-weight: 800;
  color: var(--primary-blue);
  margin-bottom: var(--spacing-6);
}

.plan-price .period {
  font-size: var(--text-lg);
  font-weight: 400;
  color: var(--text-secondary);
}

.plan-features {
  list-style: none;
  margin-bottom: var(--spacing-8);
}

.plan-features li {
  padding: var(--spacing-3) 0;
  border-bottom: 1px solid var(--gray-200);
  color: var(--text-secondary);
}

.plan-features li:last-child {
  border-bottom: none;
}

.pricing-card button {
  width: 100%;
}

.additional-credits {
  background: var(--gray-50);
  padding: var(--spacing-6);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-6);
}

.additional-credits h4 {
  font-size: var(--text-lg);
  margin-bottom: var(--spacing-3);
}

.additional-credits ul {
  list-style: none;
}

.additional-credits li {
  padding: var(--spacing-2) 0;
  color: var(--text-secondary);
}

.pricing-note {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  text-align: center;
  line-height: 1.6;
}
```

### Comparison Table 스타일
```css
.comparison-section {
  background-color: var(--background-alt);
}

.comparison-table-wrapper {
  overflow-x: auto;
  margin-top: var(--spacing-8);
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.comparison-table th,
.comparison-table td {
  padding: var(--spacing-4);
  text-align: left;
  border-bottom: 1px solid var(--gray-200);
}

.comparison-table thead th {
  background-color: var(--gray-900);
  color: white;
  font-weight: 700;
  font-size: var(--text-lg);
}

.comparison-table thead th.highlight {
  background-color: var(--primary-blue);
}

.comparison-table td {
  color: var(--text-secondary);
}

.comparison-table td:first-child {
  font-weight: 600;
  color: var(--text-primary);
}

.comparison-table td.highlight {
  background-color: rgba(37, 99, 235, 0.05);
  color: var(--primary-blue);
  font-weight: 600;
}

.comparison-table tbody tr:last-child td {
  border-bottom: none;
}

@media (max-width: 768px) {
  .comparison-table th,
  .comparison-table td {
    padding: var(--spacing-3);
    font-size: var(--text-sm);
  }
}
```

### FAQ Section 스타일
```css
.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-4);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-6);
  background: white;
  border: none;
  cursor: pointer;
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-primary);
  text-align: left;
  transition: background-color 0.2s ease;
}

.faq-question:hover {
  background-color: var(--gray-50);
}

.faq-icon {
  font-size: var(--text-2xl);
  color: var(--primary-blue);
  font-weight: 300;
  transition: transform 0.3s ease;
}

.faq-item.active .faq-icon {
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding: 0 var(--spacing-6);
}

.faq-item.active .faq-answer {
  max-height: 500px;
  padding: 0 var(--spacing-6) var(--spacing-6);
}

.faq-answer p {
  color: var(--text-secondary);
  line-height: 1.6;
}
```

### CTA Section 스타일
```css
.cta-section {
  background: linear-gradient(135deg, var(--primary-blue) 0%, #1d4ed8 100%);
  color: white;
  text-align: center;
  padding: var(--spacing-24) 0;
}

@media (max-width: 768px) {
  .cta-section {
    padding: var(--spacing-16) 0;
  }
}

.cta-title {
  font-size: var(--text-4xl);
  font-weight: 800;
  margin-bottom: var(--spacing-4);
  color: white;
}

@media (max-width: 768px) {
  .cta-title {
    font-size: var(--text-3xl);
  }
}

.cta-subtitle {
  font-size: var(--text-xl);
  margin-bottom: var(--spacing-8);
  opacity: 0.9;
}

@media (max-width: 768px) {
  .cta-subtitle {
    font-size: var(--text-lg);
  }
}

.cta-section .cta-primary {
  background-color: var(--accent-lime);
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
}

.cta-section .cta-primary:hover {
  background-color: #84CC16;
  transform: translateY(-2px);
}

.cta-links {
  display: flex;
  justify-content: center;
  gap: var(--spacing-4);
  font-size: var(--text-base);
}

.cta-links a {
  color: white;
  text-decoration: none;
  opacity: 0.9;
  transition: opacity 0.2s ease;
}

.cta-links a:hover {
  opacity: 1;
  text-decoration: underline;
}
```

### Footer 스타일
```css
.footer {
  background-color: var(--gray-900);
  color: white;
  padding: var(--spacing-12) 0 var(--spacing-6);
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-12);
  margin-bottom: var(--spacing-8);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
  }
}

.footer-brand h3 {
  font-size: var(--text-2xl);
  margin-bottom: var(--spacing-2);
}

.footer-brand p {
  color: var(--gray-300);
}

.footer-contact h4 {
  font-size: var(--text-lg);
  margin-bottom: var(--spacing-2);
}

.footer-contact a {
  color: var(--accent-lime);
  text-decoration: none;
}

.footer-contact a:hover {
  text-decoration: underline;
}

.footer-bottom {
  border-top: 1px solid var(--gray-800);
  padding-top: var(--spacing-6);
  text-align: center;
}

.footer-bottom p {
  color: var(--gray-300);
  font-size: var(--text-sm);
}
```

---

## JavaScript 인터랙션

### FAQ Toggle 함수
```javascript
function toggleFAQ(button) {
  const faqItem = button.parentElement;
  const isActive = faqItem.classList.contains('active');

  // Close all FAQ items
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('active');
  });

  // Open clicked item if it wasn't active
  if (!isActive) {
    faqItem.classList.add('active');
  }
}
```

### Demo Video Modal 함수
```javascript
function showDemoVideo() {
  // Create modal
  const modal = document.createElement('div');
  modal.className = 'video-modal';
  modal.innerHTML = `
    <div class="modal-overlay" onclick="closeDemoVideo()"></div>
    <div class="modal-content">
      <button class="modal-close" onclick="closeDemoVideo()">&times;</button>
      <video controls autoplay>
        <source src="./videos/demo.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
}

function closeDemoVideo() {
  const modal = document.querySelector('.video-modal');
  if (modal) {
    modal.remove();
    document.body.style.overflow = '';
  }
}
```

### Video Modal 스타일
```css
.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  z-index: 1001;
}

.modal-content video {
  width: 100%;
  max-width: 800px;
  border-radius: var(--radius-lg);
}

.modal-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: var(--spacing-2);
}

.modal-close:hover {
  opacity: 0.7;
}

@media (max-width: 768px) {
  .modal-content {
    max-width: 95%;
  }

  .modal-close {
    top: -35px;
    font-size: 1.5rem;
  }
}
```

### Smooth Scroll 함수
```javascript
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
```

### Scroll Animation (Intersection Observer)
```javascript
// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  section.classList.add('fade-out');
  observer.observe(section);
});
```

### Scroll Animation 스타일
```css
.fade-out {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 파일 구조

```
landing_page/
├── index.html              # 메인 HTML 파일
├── css/
│   └── styles.css          # 모든 CSS 스타일
├── js/
│   └── main.js             # 모든 JavaScript 인터랙션
├── images/
│   ├── hero-qr-scan.png    # Hero 섹션 이미지
│   └── testimonials.png    # 후기 이미지
└── videos/
    └── demo.mp4            # 데모 영상
```

---

## 최적화 및 성능

### 이미지 최적화
- 모든 이미지는 WebP 포맷 사용 (fallback으로 PNG)
- 이미지 lazy loading 적용
```html
<img src="image.webp" alt="description" loading="lazy" />
```

### CSS 최적화
- Critical CSS를 `<head>`에 인라인으로 삽입
- 나머지 CSS는 비동기 로드
```html
<link rel="preload" href="css/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="css/styles.css"></noscript>
```

### JavaScript 최적화
- JavaScript 파일을 `</body>` 직전에 배치
- `defer` 속성 사용
```html
<script src="js/main.js" defer></script>
```

---

## 접근성 (Accessibility)

### 시맨틱 HTML
- 적절한 헤딩 계층 구조 사용 (h1 > h2 > h3)
- `<section>`, `<article>`, `<nav>`, `<footer>` 등 시맨틱 태그 사용

### ARIA 속성
```html
<button aria-label="FAQ 토글" aria-expanded="false">질문</button>
```

### 키보드 네비게이션
- 모든 인터랙티브 요소에 키보드 접근 가능
- Focus 상태 시각적 표시
```css
button:focus, a:focus {
  outline: 2px solid var(--primary-blue);
  outline-offset: 2px;
}
```

### 색상 대비
- WCAG 2.1 AA 기준 준수 (최소 4.5:1 대비)

---

## 브라우저 호환성

### 지원 브라우저
- Chrome (최신 2개 버전)
- Firefox (최신 2개 버전)
- Safari (최신 2개 버전)
- Edge (최신 2개 버전)
- 모바일 Safari (iOS 12+)
- Chrome Mobile (Android 8+)

### 폴리필 (필요시)
```html
<!-- Intersection Observer 폴리필 -->
<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"></script>
```

---

## SEO 최적화

### Meta Tags
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Guidecast - 스마트폰으로 완성하는 프로 투어 가이드</title>
  <meta name="description" content="무선 장비 없이 스마트폰으로 투어 가이드. QR 스캔으로 시작하는 실시간 음성 방송과 사진 공유. 1주 무료 체험.">
  <meta name="keywords" content="투어 가이드, 무선 장비, QR코드, 실시간 음성, 투어 사진 공유, 도슨트">

  <!-- Open Graph -->
  <meta property="og:title" content="Guidecast - 스마트폰으로 완성하는 프로 투어 가이드">
  <meta property="og:description" content="무선 장비 없이 스마트폰으로 투어 가이드. 1주 무료 체험.">
  <meta property="og:image" content="./images/og-image.jpg">
  <meta property="og:url" content="https://guidecast.com">
  <meta property="og:type" content="website">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Guidecast - 스마트폰으로 완성하는 프로 투어 가이드">
  <meta name="twitter:description" content="무선 장비 없이 스마트폰으로 투어 가이드. 1주 무료 체험.">
  <meta name="twitter:image" content="./images/twitter-image.jpg">
</head>
```

### Structured Data (JSON-LD)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Guidecast",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "15",
    "priceCurrency": "USD"
  },
  "description": "스마트폰으로 완성하는 프로 투어 가이드 솔루션"
}
</script>
```

---

## 분석 및 추적

### Google Analytics 4
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Event Tracking
```javascript
// CTA 버튼 클릭 추적
document.querySelectorAll('.cta-primary').forEach(button => {
  button.addEventListener('click', () => {
    gtag('event', 'cta_click', {
      'event_category': 'engagement',
      'event_label': button.textContent
    });
  });
});

// 데모 영상 재생 추적
function showDemoVideo() {
  gtag('event', 'video_play', {
    'event_category': 'engagement',
    'event_label': 'demo_video'
  });
  // ... 나머지 코드
}
```

---

## 배포 체크리스트

- [ ] 모든 이미지 최적화 완료 (WebP 변환)
- [ ] CSS/JS 파일 minify
- [ ] 메타 태그 및 OG 이미지 설정
- [ ] Google Analytics 코드 삽입
- [ ] 404 페이지 생성
- [ ] robots.txt 생성
- [ ] sitemap.xml 생성
- [ ] 모바일 반응형 테스트 (iPhone, Android)
- [ ] 데스크탑 브라우저 테스트 (Chrome, Firefox, Safari, Edge)
- [ ] 접근성 테스트 (WAVE, Lighthouse)
- [ ] 페이지 속도 테스트 (PageSpeed Insights)
- [ ] 링크 및 버튼 동작 확인
- [ ] 폼 제출 테스트 (있는 경우)
- [ ] HTTPS 적용 확인

---

## 추가 개선 사항 (Phase 2)

1. **애니메이션 강화**
   - Lottie 애니메이션 추가
   - Parallax scrolling 효과

2. **다국어 지원**
   - 영어, 일본어, 중국어 버전

3. **A/B 테스팅**
   - 헤드라인 변형 테스트
   - CTA 버튼 색상 테스트
   - 요금제 배치 테스트

4. **채팅 위젯**
   - 실시간 고객 상담 (Intercom, Zendesk)

5. **블로그 섹션**
   - 투어 가이드 팁
   - 고객 성공 사례

---

이 가이드를 기반으로 index.html, styles.css, main.js 파일을 생성하여 완전한 랜딩페이지를 구현할 수 있습니다.
