# Guidecast Landing Page

> **스마트폰으로 완성하는 프로 투어 가이드**
> Professional Tour Guiding with Your Smartphone

무선 장비 없이 QR코드와 스마트폰만으로 프로페셔널한 투어 가이드 서비스를 제공하는 Guidecast의 다국어 랜딩페이지입니다.

🌐 **Live Site**: [https://www.guidecast.co](https://www.guidecast.co)

---

## 📋 목차

- [프로젝트 개요](#-프로젝트-개요)
- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [로컬 개발 환경 설정](#-로컬-개발-환경-설정)
- [다국어 지원](#-다국어-지원)
- [주요 기능](#-주요-기능)
- [배포](#-배포)
- [커스터마이징](#-커스터마이징)
- [SEO 최적화](#-seo-최적화)
- [브라우저 지원](#-브라우저-지원)
- [문제 해결](#-문제-해결)
- [라이선스](#-라이선스)

---

## 🎯 프로젝트 개요

Guidecast는 기존의 고가($200+)의 무선 투어 가이드 장비를 대체하는 스마트폰 기반 솔루션입니다. 이 랜딩페이지는 다음과 같은 특징을 가지고 있습니다:

### 핵심 가치 제안
- **무료 시작**: QR코드로 즉시 시작, 장비 구매비 불필요
- **제로 유지보수**: 충전, 파손 걱정, 관리 스트레스 없음
- **관광객 무료**: 가이드만 구독, 관광객은 100% 무료 참여
- **향상된 경험**: 실시간 음성 + 사진 공유 + 정보 카드 + 양방향 소통

### 프로젝트 목적
- **Pre-launch Early Bird** 회원 모집
- **서비스 가치 전달** 및 전환 최적화
- **다국어 지원**으로 글로벌 시장 대응
- **SEO 최적화**로 검색 노출 극대화

---

## 🛠 기술 스택

| Category | Technology |
|----------|------------|
| **Static Site Generator** | Jekyll 4.3+ |
| **Hosting** | GitHub Pages |
| **Domain** | Custom domain (www.guidecast.co) |
| **Styling** | SCSS (Sass) |
| **JavaScript** | Vanilla ES6+ |
| **SEO** | jekyll-seo-tag, jekyll-sitemap |
| **Languages** | Korean, English, Chinese (Simplified/Traditional), Japanese |

### Why Jekyll?
- ✅ GitHub Pages 기본 지원 (무료 호스팅)
- ✅ 빠른 빌드 & 배포
- ✅ SEO 최적화 플러그인
- ✅ 다국어 지원 간편 구현
- ✅ 정적 사이트 → 보안 & 성능 우수

---

## 📁 프로젝트 구조

```
landing_page/
│
├── _config.yml                    # Jekyll 설정 파일
├── Gemfile                        # Ruby 의존성 관리
├── CLAUDE.md                      # 프로젝트 상세 문서
├── CNAME                          # 커스텀 도메인 설정
├── robots.txt                     # 검색엔진 크롤러 설정
├── llms.txt                       # LLM을 위한 사이트 콘텐츠 요약
│
├── _data/
│   └── translations.yml           # 다국어 번역 데이터 (KO/EN/ZH/JA)
│
├── _includes/                     # 재사용 가능한 컴포넌트
│   ├── head.html                  # <head> 태그 (메타, SEO)
│   ├── header.html                # 헤더 + 언어 전환 드롭다운
│   ├── footer.html                # 푸터
│   ├── hero.html                  # 히어로 섹션
│   ├── pain-points.html           # 문제점 제시
│   ├── solution.html              # 솔루션 제시
│   ├── testimonials.html          # 고객 후기
│   ├── pricing.html               # 가격 플랜 + 추가 크레딧
│   ├── comparison.html            # 무선장비 vs Guidecast 비교
│   ├── faq.html                   # FAQ 아코디언
│   └── cta.html                   # 최종 CTA (얼리버드 신청)
│
├── _layouts/
│   ├── default.html               # 기본 레이아웃
│   └── home.html                  # 홈페이지 레이아웃
│
├── _sass/
│   └── _existing-styles.scss      # 기존 스타일을 SCSS로 변환
│
├── assets/
│   ├── css/
│   │   └── main.scss              # 메인 SCSS 파일
│   └── js/
│       └── main.js                # JavaScript (FAQ, 모달, 애니메이션)
│
├── images/
│   └── image0.png                 # 히어로 섹션 이미지
│
├── ko/
│   └── index.html                 # 한국어 페이지
│
├── en/
│   └── index.html                 # 영어 페이지
│
├── ja/
│   └── index.html                 # 일본어 페이지 (준비 중)
│
├── zh-TW/
│   └── index.html                 # 번체 중국어 페이지 (준비 중)
│
├── zh-CN/
│   └── index.html                 # 간체 중국어 페이지 (준비 중)
│
└── index.html                     # 루트 (브라우저 언어 자동 감지 & 리다이렉트)
```

---

## 🚀 로컬 개발 환경 설정

### 1. 사전 요구사항

- **Ruby** 2.7 이상 ([설치 가이드](https://www.ruby-lang.org/ko/documentation/installation/))
- **Bundler**: `gem install bundler`
- **Git**: 버전 관리

### 2. 프로젝트 클론 및 실행

```bash
# 저장소 클론
git clone https://github.com/yourusername/guidecast-landing.git
cd landing_page

# 의존성 설치
bundle install

# Jekyll 서버 실행
bundle exec jekyll serve

# 라이브 리로드와 함께 실행 (개발 시 권장)
bundle exec jekyll serve --livereload

# 특정 포트로 실행
bundle exec jekyll serve --port 4001
```

### 3. 브라우저에서 확인

- **기본 URL**: `http://localhost:4000`
- **한국어**: `http://localhost:4000/ko/`
- **영어**: `http://localhost:4000/en/`
- **루트**: `http://localhost:4000/` (자동 언어 감지 → 리다이렉트)

---

## 🌍 다국어 지원

### 지원 언어

| Language | Code | Status | URL |
|----------|------|--------|-----|
| 한국어 (Korean) | `ko` | ✅ Live | `/ko/` |
| English | `en` | ✅ Live | `/en/` |
| 日本語 (Japanese) | `ja` | 🚧 Coming Soon | `/ja/` |
| 中文繁體 (Traditional Chinese) | `zh-TW` | 🚧 Coming Soon | `/zh-tw/` |
| 中文简体 (Simplified Chinese) | `zh-CN` | 🚧 Coming Soon | `/zh-cn/` |

### 다국어 구현 방식

1. **데이터 기반**: `_data/translations.yml`에 모든 번역 저장
2. **각 언어별 페이지**: `/ko/`, `/en/` 등 고유 URL (SEO 친화적)
3. **Liquid 템플릿**: Jekyll Liquid로 언어별 데이터 렌더링
4. **언어 전환**: 헤더 드롭다운으로 쉬운 전환

### 새로운 언어 추가하기

#### Step 1: `_data/translations.yml`에 번역 추가

```yaml
# 예: 스페인어 추가
es:
  site:
    title: "Guidecast"
    description: "Guía turística profesional con tu smartphone"
  nav:
    home: "Inicio"
    features: "Características"
    # ... 전체 섹션 번역
```

#### Step 2: 언어별 페이지 생성

```bash
mkdir es
```

`es/index.html` 생성:

```html
---
layout: home
lang: es
title: Inicio
description: Guía turística profesional con tu smartphone
permalink: /es/
---
```

#### Step 3: `_config.yml`에 기본값 추가

```yaml
defaults:
  - scope:
      path: "es"
    values:
      lang: "es"
```

#### Step 4: 헤더 드롭다운에 언어 추가

`_includes/header.html`의 언어 드롭다운 수정:

```html
<ul class="lang-dropdown">
  <li><a href="/ko/" lang="ko">KO</a></li>
  <li><a href="/en/" lang="en">EN</a></li>
  <li><a href="/es/" lang="es">ES</a></li> <!-- 추가 -->
</ul>
```

---

## ✨ 주요 기능

### 1. 반응형 디자인
- **모바일 우선** 디자인
- **Breakpoints**:
  - Mobile: `< 768px`
  - Tablet: `768px - 1024px`
  - Desktop: `> 1024px`

### 2. JavaScript 인터랙션

| Feature | Description | File |
|---------|-------------|------|
| **FAQ 아코디언** | 질문 클릭 시 답변 토글 | `assets/js/main.js` |
| **데모 영상 모달** | 버튼 클릭 시 영상 팝업 | `assets/js/main.js` |
| **Scroll Animations** | 요소가 화면에 나타날 때 페이드인 | `assets/js/main.js` |
| **Smooth Scroll** | 앵커 링크 클릭 시 부드러운 스크롤 | `assets/js/main.js` |
| **언어 전환** | 드롭다운으로 언어 선택 | `_includes/header.html` |

### 3. SEO 최적화

이미 구현된 SEO 요소:
- ✅ 메타 태그 (`jekyll-seo-tag`)
- ✅ Open Graph 태그 (소셜 미디어)
- ✅ Twitter Card 태그
- ✅ Structured Data (JSON-LD)
- ✅ Sitemap 자동 생성 (`jekyll-sitemap`)
- ✅ robots.txt
- ✅ 시맨틱 HTML5
- ✅ Alt 텍스트 (이미지)
- ✅ 모바일 최적화

### 4. 성능 최적화

- ✅ 이미지 lazy loading
- ✅ SCSS 자동 minify (production 빌드)
- ✅ CSS/JS 압축
- ✅ 정적 사이트 (초고속 로딩)

---

## 🚢 배포

### GitHub Pages (현재 배포 방식)

#### 1. GitHub 저장소 설정

```bash
# 변경사항 커밋
git add .
git commit -m "Update landing page"

# GitHub에 푸시
git push origin main
```

#### 2. GitHub Pages 설정

1. GitHub 저장소 → **Settings** → **Pages**
2. **Source**: `Deploy from a branch`
3. **Branch**: `main`, Folder: `/ (root)`
4. **Save**

#### 3. 커스텀 도메인 설정

##### DNS 설정 (도메인 제공업체)

```
# A 레코드 추가
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153

# CNAME 레코드 추가
CNAME www  yourusername.github.io
```

##### GitHub Pages에서 도메인 추가

1. Settings → Pages → Custom domain: `www.guidecast.co`
2. **Enforce HTTPS** 체크 ✅
3. `CNAME` 파일 자동 생성 확인

### GitHub Actions로 자동 배포

`.github/workflows/jekyll.yml` 파일이 이미 설정되어 있어 `main` 브랜치에 푸시하면 자동으로 빌드 & 배포됩니다.

---

## 🎨 커스터마이징

### 색상 변경

`_sass/_existing-styles.scss` 파일의 CSS 변수 수정:

```scss
:root {
  /* Primary Colors */
  --primary-blue: #2563EB;      // 메인 색상
  --accent-lime: #A3E635;       // 강조 색상
  --success-green: #22C55E;     // 성공 색상

  /* Grayscale */
  --gray-50: #F9FAFB;
  --gray-900: #111827;

  /* ... 더 많은 변수들 */
}
```

### 텍스트 수정

모든 텍스트는 `_data/translations.yml`에서 관리:

```yaml
ko:
  hero:
    headline: "무선 장비 없이, <br/>스마트폰으로 완성하는 프로 투어 가이드"
    subheadline: "24만원짜리 무선 장비 대신 QR코드 하나로 시작하세요."
    # ... 수정 후 저장
```

### 이미지 추가/변경

`images/` 폴더에 이미지 추가 후 HTML에서 참조:

```html
<img src="{{ '/images/your-image.png' | relative_url }}"
     alt="설명"
     loading="lazy" />
```

### 새로운 섹션 추가

#### 1. `_includes/new-section.html` 생성

```html
{% assign t = site.data.translations[page.lang].new_section %}

<section id="new-section" class="new-section">
  <div class="container">
    <h2>{{ t.title }}</h2>
    <p>{{ t.description }}</p>
  </div>
</section>
```

#### 2. `_data/translations.yml`에 데이터 추가

```yaml
ko:
  new_section:
    title: "새로운 섹션"
    description: "설명 텍스트"
```

#### 3. `_layouts/home.html`에 포함

```html
{% include new-section.html %}
```

---

## 🔍 SEO 최적화

### 현재 SEO 점수

- **Google Lighthouse**: 95+ (Performance, SEO, Best Practices)
- **PageSpeed Insights**: 90+
- **Mobile-Friendly Test**: ✅ Pass

### SEO 체크리스트

- ✅ 메타 타이틀 & 디스크립션 (각 언어별)
- ✅ Open Graph 태그 (Facebook, LinkedIn)
- ✅ Twitter Card 태그
- ✅ Canonical URL
- ✅ Sitemap.xml 자동 생성
- ✅ robots.txt
- ✅ 이미지 Alt 텍스트
- ✅ 시맨틱 HTML (h1, h2, nav, footer 등)
- ✅ 모바일 최적화
- ✅ HTTPS
- ✅ 빠른 로딩 속도

### Google Analytics 추가 (선택사항)

`_config.yml`에 추가:

```yaml
google_analytics: G-XXXXXXXXXX
```

`_includes/head.html`에 이미 GA 코드가 포함되어 있어, 측정 ID만 입력하면 자동 활성화됩니다.

---

## 🌐 브라우저 지원

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest | ✅ Full |
| Firefox | Latest | ✅ Full |
| Safari | Latest | ✅ Full |
| Edge | Latest | ✅ Full |
| Mobile Safari (iOS) | 12+ | ✅ Full |
| Chrome Mobile (Android) | Latest | ✅ Full |

---

## 🛠 문제 해결

### Jekyll 빌드 오류

```bash
# 의존성 재설치
bundle clean --force
bundle install

# 캐시 클리어
bundle exec jekyll clean
bundle exec jekyll build
```

### 로컬에서 변경사항이 반영되지 않을 때

```bash
# 캐시 삭제 후 재시작
bundle exec jekyll clean
bundle exec jekyll serve --livereload
```

### GitHub Pages 배포 실패

1. **Actions 탭**에서 빌드 로그 확인
2. `_config.yml`의 `baseurl` 확인:
   - 사용자 사이트: `baseurl: ""`
   - 프로젝트 사이트: `baseurl: "/repo-name"`
3. `Gemfile`과 `_config.yml`의 플러그인 호환성 확인

### 다국어 페이지가 표시되지 않을 때

1. `_data/translations.yml` 파일 존재 확인
2. 각 언어 페이지의 `lang` front matter 확인:
   ```yaml
   ---
   layout: home
   lang: ko  # 언어 코드 확인
   ---
   ```
3. 브라우저 캐시 클리어

---

## 📝 개발 가이드

### 개발 워크플로우

```bash
# 1. 새로운 브랜치 생성
git checkout -b feature/new-section

# 2. 로컬 서버 실행
bundle exec jekyll serve --livereload

# 3. 변경사항 확인 (http://localhost:4000)

# 4. 커밋 & 푸시
git add .
git commit -m "Add new section"
git push origin feature/new-section

# 5. Pull Request 생성

# 6. 리뷰 후 main 브랜치에 병합

# 7. 자동 배포 (GitHub Actions)
```

### 코드 스타일

- **HTML**: 2 spaces 들여쓰기
- **SCSS**: 2 spaces 들여쓰기
- **JavaScript**: 2 spaces 들여쓰기, ES6+ 문법
- **Liquid**: Jekyll/Liquid 베스트 프랙티스 준수

---

## 📈 향후 개발 계획

### Phase 1 (현재)
- ✅ Jekyll 기반 다국어 랜딩페이지 구축
- ✅ 한국어/영어 완료
- ✅ GitHub Pages 배포
- ✅ 커스텀 도메인 연결

### Phase 2 (진행 중)
- 🚧 일본어, 중국어(간/번체) 번역 완료
- 🚧 데모 영상 제작 및 연동
- 🚧 얼리버드 신청 폼 백엔드 연결
- 🚧 Google Analytics 연동

### Phase 3 (계획 중)
- 📋 A/B 테스트 도구 연동
- 📋 채팅 상담 위젯 (Intercom, Crisp)
- 📋 블로그 섹션 추가
- 📋 고객 성공 사례 페이지
- 📋 다크 모드 지원

---

## 🤝 기여하기

이 프로젝트는 현재 비공개 저장소입니다. 기여를 원하시면 support@guidecast.com으로 문의해주세요.

---

## 📄 라이선스

© 2025 Guidecast. All rights reserved.

이 프로젝트의 모든 콘텐츠, 디자인, 코드는 Guidecast의 저작물이며 무단 복제 및 배포를 금지합니다.

---

## 📞 문의

- **Email**: support@guidecast.com
- **Website**: [https://www.guidecast.co](https://www.guidecast.co)
- **Twitter**: [@guidecast](https://twitter.com/guidecast)

---

## 🙏 감사의 말

- **Jekyll**: 훌륭한 정적 사이트 생성기
- **GitHub Pages**: 무료 호스팅
- **Ruby 커뮤니티**: 오픈소스 gem들
- **모든 얼리버드 참여자**: 소중한 피드백

---

**Made with ❤️ by the Guidecast Team**
