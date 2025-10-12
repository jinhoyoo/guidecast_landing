# Guidecast Landing Page - Jekyll + 다국어 지원

## 프로젝트 개요
GitHub Pages에서 Jekyll을 사용하여 Guidecast 서비스의 다국어 랜딩페이지를 제작합니다.
한국어, 영어를 기본 지원하며, 사용자가 언어를 전환하며 볼 수 있습니다.

---

## ✅ 구현 가능성 확인

**가능합니다!** 다음과 같은 이유로:

1. **GitHub Pages + Jekyll**: GitHub Pages는 Jekyll을 기본 지원
2. **다국어 지원**: Jekyll 플러그인 또는 수동 구현으로 다국어 가능
3. **언어 전환**: JavaScript로 언어 전환 UI 구현
4. **무료 호스팅**: GitHub Pages는 무료이며 커스텀 도메인 지원

### 권장 접근 방식

GitHub Pages의 제한된 플러그인 지원을 고려하여, **순수 Jekyll + JavaScript 기반 다국어 구현**을 사용합니다:
- Jekyll `_data` 폴더에 다국어 데이터 저장
- 각 언어별 페이지 경로 (`/ko/`, `/en/`)
- JavaScript로 클라이언트 사이드 언어 전환
- SEO 친화적 (각 언어별 고유 URL)

---

## 기술 스택

- **정적 사이트 생성기**: Jekyll 4.x
- **호스팅**: GitHub Pages
- **다국어**: `_data/translations.yml` + Liquid 템플릿
- **스타일링**: SCSS (Jekyll 기본 지원)
- **스크립트**: Vanilla JavaScript (ES6+)
- **SEO**: jekyll-seo-tag 플러그인

---

## 프로젝트 구조

```
landing_page/
├── _config.yml                 # Jekyll 설정
├── Gemfile                     # Ruby 의존성
├── .gitignore
│
├── _data/                      # 데이터 파일
│   └── translations.yml        # 다국어 번역 데이터
│
├── _includes/                  # 재사용 컴포넌트
│   ├── head.html
│   ├── header.html            # 헤더 + 언어 전환
│   ├── footer.html
│   ├── hero.html
│   ├── pain-points.html
│   ├── solution.html
│   ├── testimonials.html
│   ├── pricing.html
│   ├── comparison.html
│   ├── faq.html
│   └── cta.html
│
├── _layouts/                   # 레이아웃
│   ├── default.html
│   └── home.html
│
├── _sass/                      # SCSS 파일
│   ├── _variables.scss        # 변수
│   ├── _mixins.scss
│   ├── _base.scss
│   ├── _layout.scss
│   ├── _components.scss
│   ├── _sections.scss
│   └── _responsive.scss
│
├── assets/
│   ├── css/
│   │   └── main.scss          # 메인 SCSS
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   └── image0.png
│   └── videos/
│       └── demo.mp4
│
├── ko/                         # 한국어 페이지
│   └── index.html
│
├── en/                         # 영어 페이지
│   └── index.html
│
└── index.html                  # 루트 (리다이렉트)
```


---

## 설정 파일

### 1. _config.yml

```yaml
# Site settings
title: Guidecast
description: 스마트폰으로 완성하는 프로 투어 가이드
baseurl: "" # GitHub repo name이 있으면 "/repo-name"
url: "https://yourusername.github.io"

# Build settings
markdown: kramdown
permalink: pretty

# Plugins (GitHub Pages 지원)
plugins:
  - jekyll-seo-tag
  - jekyll-sitemap

# Exclude from processing
exclude:
  - Gemfile
  - Gemfile.lock
  - node_modules
  - vendor
  - .sass-cache
  - .jekyll-cache
  - CLAUDE.md
  - CLAUDE.md.backup
  - README.md

# Defaults
defaults:
  - scope:
      path: ""
    values:
      layout: "default"
  - scope:
      path: "ko"
    values:
      lang: "ko"
  - scope:
      path: "en"
    values:
      lang: "en"

# SEO
twitter:
  username: guidecast
  card: summary_large_image

social:
  name: Guidecast
  links:
    - https://twitter.com/guidecast

# Analytics (배포 시 추가)
# google_analytics: G-XXXXXXXXXX
```

### 2. Gemfile

```ruby
source "https://rubygems.org"

gem "jekyll", "~> 4.3"
gem "webrick", "~> 1.8"

group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

# Windows 지원
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
```

### 3. .gitignore

```
_site/
.sass-cache/
.jekyll-cache/
.jekyll-metadata
Gemfile.lock
.DS_Store
node_modules/
*.backup
```


---

## 다국어 데이터 구조

### _data/translations.yml

이 파일에 모든 다국어 텍스트를 저장합니다. 현재 index.html의 내용을 기반으로 작성되었습니다.

```yaml
# 한국어
ko:
  site:
    title: "Guidecast"
    description: "스마트폰으로 완성하는 프로 투어 가이드"
    
  nav:
    home: "홈"
    features: "기능"
    pricing: "요금제"
    faq: "FAQ"
    
  hero:
    headline: "무선 장비 없이, 스마트폰으로 완성하는 프로 투어 가이드"
    subheadline: "24만원짜리 무선 장비 대신 QR코드 하나로 시작하세요. 충전 걱정, 파손 위험, 관리 스트레스 모두 끝."
    info_box: "가이드는 요금제 구독. 관광객은 100% 무료 참여."
    cta_button: "데모 영상 보기 (30초)"
    
  pain_points:
    title: "이런 고민, 당신만의 문제가 아닙니다"
    items:
      - icon: "💸"
        title: "장비 구매비 부담"
        description: "10명 투어 한 번 하려고 24만원? 개인 가이드에겐 너무 큰 초기 비용"
      - icon: "🔋"
        title: "충전·관리 스트레스"
        description: "투어 전날 밤 충전 확인, 파손되면 수리비까지... 가이드 일에만 집중하고 싶은데"
      - icon: "📱"
        title: "관광객 경험 한계"
        description: "일방적인 음성만 들려주기엔 2025년이 아깝죠. 사진 공유도, 실시간 소통도 안 되는 구식 장비"
        
  solution:
    title: "Guidecast 하나면 충분합니다"
    features:
      - icon: "⚡"
        title: "QR 스캔 한 번으로 시작"
        description: "앱에서 투어 생성 → QR코드 보여주기 → 관광객 스캔 참여. 3초 완료."
      - icon: "🎙️"
        title: "실시간 음성 방송"
        description: "WebRTC 기반 고품질 오디오. 최대 20명까지 끊김 없이 전달."
      - icon: "📋"
        title: "요점 카드 + 진동 알림"
        description: "중요한 정보는 카드로 전송. 관광객 폰이 진동하며 알림 → 놓칠 일 없음."
      - icon: "📸"
        title: "투어 사진 공유 앨범"
        description: "투어 중 찍은 사진 실시간 업로드 → 여행 끝나면 관광객들이 한 번에 다운로드 가능"
        
  # ... (더 많은 섹션은 translations.yml 파일 참조)

# 영어
en:
  site:
    title: "Guidecast"
    description: "Professional Tour Guiding with Your Smartphone"
    
  nav:
    home: "Home"
    features: "Features"
    pricing: "Pricing"
    faq: "FAQ"
    
  hero:
    headline: "Professional Tour Guiding Without Wireless Equipment"
    subheadline: "Start with a QR code instead of $200 wireless equipment. No charging worries, no damage risks, no management stress."
    info_box: "Guides subscribe to plans. Tourists participate 100% free."
    cta_button: "Watch Demo (30s)"
    
  # ... (더 많은 섹션은 translations.yml 파일 참조)
```

> **참고**: 전체 번역 데이터는 별도의 `_data/translations.yml` 파일에 작성됩니다. 
> 위 예시는 구조를 보여주기 위한 것입니다.


---

## 레이아웃 및 컴포넌트 구조

### 레이아웃: _layouts/default.html

```html
<!DOCTYPE html>
<html lang="{{ page.lang | default: 'ko' }}">
{% include head.html %}
<body>
  {% include header.html %}
  
  <main class="main-content">
    {{ content }}
  </main>
  
  {% include footer.html %}
  
  <script src="{{ '/assets/js/main.js' | relative_url }}"></script>
</body>
</html>
```

### 레이아웃: _layouts/home.html

```html
---
layout: default
---

{% assign t = site.data.translations[page.lang] %}

{% include hero.html %}
{% include pain-points.html %}
{% include solution.html %}
{% include testimonials.html %}
{% include pricing.html %}
{% include comparison.html %}
{% include faq.html %}
{% include cta.html %}
```

### 컴포넌트: _includes/header.html

```html
{% assign t = site.data.translations[page.lang] %}

<header class="site-header">
  <div class="container">
    <nav class="main-nav">
      <div class="nav-brand">
        <a href="{{ '/' | relative_url }}">
          <h1>{{ t.site.title }}</h1>
        </a>
      </div>
      
      <div class="nav-menu">
        <ul class="nav-links">
          <li><a href="#hero">{{ t.nav.home }}</a></li>
          <li><a href="#solution">{{ t.nav.features }}</a></li>
          <li><a href="#pricing">{{ t.nav.pricing }}</a></li>
          <li><a href="#faq">{{ t.nav.faq }}</a></li>
        </ul>
        
        <!-- 언어 전환 드롭다운 -->
        <div class="language-switcher">
          <button class="lang-toggle" aria-label="Language">
            <span class="current-lang">{{ page.lang | upcase }}</span>
            <svg class="chevron" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="2"/>
            </svg>
          </button>
          <ul class="lang-dropdown">
            <li><a href="/ko/" lang="ko">KO</a></li>
            <li><a href="/en/" lang="en">EN</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</header>
```

### 컴포넌트: _includes/hero.html

```html
{% assign t = site.data.translations[page.lang].hero %}

<section id="hero" class="hero-section">
  <div class="container">
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="headline">{{ t.headline }}</h1>
        <p class="subheadline">{{ t.subheadline }}</p>
        
        <div class="info-box">
          <span class="icon">💡</span>
          <p><strong>{{ t.info_box }}</strong></p>
        </div>
        
        <button class="cta-primary" onclick="showDemoVideo()">
          {{ t.cta_button }}
        </button>
      </div>
      
      <div class="hero-image">
        <img src="{{ '/assets/images/image0.png' | relative_url }}"
             alt="{{ t.image_alt | default: 'Guidecast' }}"
             loading="lazy" />
      </div>
    </div>
  </div>
</section>
```

> **참고**: 다른 섹션들(pain-points, solution, testimonials 등)도 동일한 패턴으로 작성됩니다.
> 각 섹션은 `site.data.translations[page.lang]`에서 해당 언어의 데이터를 가져옵니다.


---

## 스타일링 (SCSS)

### assets/css/main.scss

```scss
---
# Front matter required by Jekyll
---

@import "variables";
@import "mixins";
@import "base";
@import "layout";
@import "components";
@import "sections";
@import "responsive";
```

### _sass/_variables.scss

```scss
// Colors (CLAUDE.md 디자인 시스템 따름)
$primary-blue: #2563EB;
$accent-lime: #A3E635;
$success-green: #22C55E;

$gray-50: #F9FAFB;
$gray-100: #F3F4F6;
$gray-200: #E5E7EB;
$gray-600: #4B5563;
$gray-900: #111827;

$text-primary: #111827;
$text-secondary: #4B5563;
$background: #FFFFFF;
$background-alt: #F9FAFB;

// Typography
$font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans KR', sans-serif;

$text-sm: 0.875rem;
$text-base: 1rem;
$text-lg: 1.125rem;
$text-xl: 1.25rem;
$text-2xl: 1.5rem;
$text-3xl: 1.875rem;
$text-4xl: 2.25rem;
$text-5xl: 3rem;

// Spacing
$spacing-4: 1rem;
$spacing-6: 1.5rem;
$spacing-8: 2rem;
$spacing-12: 3rem;
$spacing-16: 4rem;
$spacing-24: 6rem;

// Border Radius
$radius-lg: 0.75rem;
$radius-xl: 1rem;

// Shadows
$shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
$shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
$shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

> **참고**: 전체 SCSS 파일은 기존 `css/styles.css`를 SCSS 모듈로 분리하여 작성합니다.


---

## 페이지 파일

### ko/index.html (한국어 페이지)

```html
---
layout: home
lang: ko
title: 홈
description: 스마트폰으로 완성하는 프로 투어 가이드
permalink: /ko/
---
```

### en/index.html (영어 페이지)

```html
---
layout: home
lang: en
title: Home
description: Professional Tour Guiding with Your Smartphone
permalink: /en/
---
```

### index.html (루트 - 언어 자동 감지 및 리다이렉트)

```html
---
layout: none
---
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=/ko/">
  <script>
    // 브라우저 언어 자동 감지
    const userLang = navigator.language || navigator.userLanguage;
    const lang = userLang.startsWith('ko') ? 'ko' : 'en';
    window.location.href = `/${lang}/`;
  </script>
</head>
<body>
  <p>Redirecting...</p>
</body>
</html>
```

---

## 로컬 개발 환경 설정

### 1. 사전 요구사항

- Ruby 2.7 이상 ([설치 가이드](https://www.ruby-lang.org/ko/documentation/installation/))
- Bundler (`gem install bundler`)

### 2. 프로젝트 설정

```bash
# 프로젝트 디렉토리로 이동
cd landing_page

# 의존성 설치
bundle install

# Jekyll 서버 실행
bundle exec jekyll serve

# 라이브 리로드와 함께 실행
bundle exec jekyll serve --livereload
```

브라우저에서 `http://localhost:4000` 접속

### 3. 언어별 페이지 테스트

- 한국어: `http://localhost:4000/ko/`
- 영어: `http://localhost:4000/en/`
- 루트: `http://localhost:4000/` (자동 리다이렉트)

---

## GitHub Pages 배포

### 1. GitHub 저장소 생성

두 가지 옵션:
- **사용자/조직 사이트**: 저장소 이름을 `username.github.io`로 생성
- **프로젝트 사이트**: 임의의 이름 (예: `guidecast-landing`)

### 2. 로컬 저장소 초기화 및 푸시

```bash
# Git 초기화 (아직 안 했다면)
git init

# 모든 파일 추가
git add .

# 커밋
git commit -m "Initial commit: Jekyll multilingual landing page"

# 메인 브랜치 설정
git branch -M main

# GitHub 저장소 연결
git remote add origin https://github.com/username/repository-name.git

# 푸시
git push -u origin main
```

### 3. GitHub Pages 활성화

1. GitHub 저장소 → **Settings** → **Pages**
2. **Source**: `Deploy from a branch` 선택
3. **Branch**: `main` 선택, Folder: `/ (root)` 선택
4. **Save** 클릭

### 4. _config.yml 업데이트 (프로젝트 사이트인 경우)

사용자 사이트(`username.github.io`)가 아닌 프로젝트 사이트인 경우:

```yaml
# _config.yml
baseurl: "/repository-name"  # 저장소 이름 입력
url: "https://username.github.io"
```

### 5. 배포 확인

- **사용자 사이트**: `https://username.github.io`
- **프로젝트 사이트**: `https://username.github.io/repository-name`

배포는 보통 1-5분 소요됩니다. Actions 탭에서 빌드 상태 확인 가능합니다.

### 6. 커스텀 도메인 설정 (선택사항)

#### 도메인 DNS 설정

도메인 제공업체(Namecheap, GoDaddy 등)에서:

```
# A 레코드 추가
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153

# CNAME 레코드 추가 (www 서브도메인용)
CNAME www  username.github.io
```

#### GitHub Pages 설정

1. Settings → Pages → Custom domain에 도메인 입력 (예: `guidecast.com`)
2. **Enforce HTTPS** 체크 (필수!)
3. DNS 전파까지 최대 24시간 소요

---

## 자동 배포 (GitHub Actions)

GitHub Pages는 기본적으로 Jekyll을 자동 빌드하지만, 더 많은 제어를 위해 GitHub Actions를 사용할 수 있습니다.

### .github/workflows/jekyll.yml

```yaml
name: Deploy Jekyll site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.1'
          bundler-cache: true
          
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Build with Jekyll
        run: bundle exec jekyll build --baseurl "${{ steps.pages.outputs.base_path }}"
        env:
          JEKYLL_ENV: production
          
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

이 설정을 사용하려면 Settings → Pages → Source를 **GitHub Actions**로 변경하세요.

---

## SEO 및 성능 최적화

### robots.txt

루트에 `robots.txt` 파일 생성:

```
User-agent: *
Allow: /

Sitemap: https://yourusername.github.io/sitemap.xml
```

### sitemap.xml

`jekyll-sitemap` 플러그인이 자동 생성합니다. 추가 설정 불필요.

### 성능 체크리스트

- [ ] 이미지 최적화 (WebP 포맷, 압축)
- [ ] Lazy loading 적용 (`loading="lazy"`)
- [ ] SCSS 자동 minify (Jekyll 기본)
- [ ] Lighthouse 점수 90+ 확인
- [ ] Core Web Vitals 통과

---

## 테스트 체크리스트

### 기능 테스트
- [ ] 로컬에서 Jekyll 서버 정상 작동
- [ ] 한국어 페이지(`/ko/`) 정상 표시
- [ ] 영어 페이지(`/en/`) 정상 표시
- [ ] 언어 전환 드롭다운 작동
- [ ] 모든 섹션 정상 렌더링
- [ ] FAQ 아코디언 작동
- [ ] 데모 영상 모달 작동
- [ ] 부드러운 스크롤 작동
- [ ] 얼리버드 폼 작동

### 반응형 테스트
- [ ] 모바일 (375px, 414px)
- [ ] 태블릿 (768px, 1024px)
- [ ] 데스크탑 (1280px, 1920px)

### 브라우저 테스트
- [ ] Chrome (최신)
- [ ] Firefox (최신)
- [ ] Safari (최신)
- [ ] Edge (최신)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### SEO 테스트
- [ ] 메타태그 확인 (title, description)
- [ ] Open Graph 태그 확인
- [ ] Structured Data 확인
- [ ] Sitemap 생성 확인
- [ ] robots.txt 확인

---

## 문제 해결

### Jekyll 빌드 오류

```bash
# 의존성 재설치
bundle clean --force
bundle install

# 캐시 클리어
bundle exec jekyll clean
bundle exec jekyll build
```

### GitHub Pages 배포 실패

1. **Actions 탭에서 빌드 로그 확인**
2. **_config.yml의 baseurl 확인**
   - 사용자 사이트: `baseurl: ""`
   - 프로젝트 사이트: `baseurl: "/repo-name"`
3. **플러그인 호환성 확인**
   - GitHub Pages는 제한된 플러그인만 지원
   - [지원 플러그인 목록](https://pages.github.com/versions/)

### 언어 전환 안 됨

1. JavaScript 콘솔에서 오류 확인
2. `_data/translations.yml` 파일 존재 확인
3. 각 언어 페이지의 `lang` front matter 확인

---

## 추가 개선 사항 (Phase 2)

### 단기 (1-2주)
- [ ] 일본어, 중국어 추가
- [ ] 다크 모드 지원
- [ ] PWA (Progressive Web App) 지원
- [ ] 애니메이션 강화 (GSAP, Lottie)

### 중기 (1-2개월)
- [ ] 블로그 섹션 추가
- [ ] 고객 성공 사례 페이지
- [ ] 문서/가이드 페이지
- [ ] 채팅 위젯 (Intercom, Crisp)

### 장기 (3-6개월)
- [ ] A/B 테스팅 도구 연동
- [ ] CMS 연동 (NetlifyCMS, Forestry)
- [ ] 다국어 블로그 지원
- [ ] 사용자 대시보드 연동

---

## 참고 자료

### Jekyll
- [Jekyll 공식 문서](https://jekyllrb.com/docs/)
- [Jekyll Themes](https://jekyllthemes.io/)
- [Liquid 템플릿 언어](https://shopify.github.io/liquid/)

### GitHub Pages
- [GitHub Pages 문서](https://docs.github.com/pages)
- [커스텀 도메인 설정](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)

### 다국어 Jekyll
- [Jekyll Multiple Languages Plugin](https://github.com/kurtsson/jekyll-multiple-languages-plugin)
- [Jekyll i18n Best Practices](https://forestry.io/blog/creating-a-multilingual-blog-with-jekyll/)

---

## 결론

이 가이드를 따라:
1. ✅ GitHub Pages에서 무료로 호스팅
2. ✅ Jekyll로 정적 사이트 생성
3. ✅ 한국어/영어 다국어 지원
4. ✅ SEO 최적화
5. ✅ 반응형 디자인
6. ✅ 쉬운 유지보수

를 모두 구현할 수 있습니다!

**다음 단계**: 실제 파일들을 생성하여 프로젝트를 구축하세요.
