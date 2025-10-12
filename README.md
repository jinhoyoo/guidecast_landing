# Guidecast 랜딩페이지

스마트폰으로 완성하는 프로 투어 가이드 서비스 Guidecast의 랜딩페이지입니다.

## 프로젝트 구조

```
landing_page/
├── index.html          # 메인 HTML 파일
├── css/
│   └── styles.css      # 전체 스타일시트
├── js/
│   └── main.js         # JavaScript 인터랙션
├── images/             # 이미지 파일들
│   ├── hero-qr-scan.png
│   ├── og-image.jpg
│   └── twitter-image.jpg
├── videos/             # 데모 영상 (선택사항)
└── README.md           # 이 파일
```

## 주요 섹션

### 1. Hero Section
- 메인 헤드라인과 가치 제안
- QR 코드 스캔 이미지
- 데모 영상 버튼 (30초)

### 2. Pain Points Section
- 고객의 주요 문제점 3가지 카드 형식으로 표시
  - 장비 구매비 부담
  - 충전/관리 스트레스
  - 관광객 경험 한계

### 3. Solution Section
- Guidecast의 4가지 핵심 기능
  - QR 스캔으로 시작
  - 실시간 음성 방송
  - 요점 카드 + 진동 알림
  - 투어 사진 공유 앨범

### 4. Social Proof (후기)
- 실제 가이드들의 사용 후기 3개

### 5. Pricing Section
- 4가지 요금제
  - Free: 무료 (최대 3명)
  - Basic: $15/월 (최대 10명) - 인기
  - Pro: $75/월 (최대 20명)
  - Enterprise: 맞춤 견적
- 추가 사용량 크레딧 정보

### 6. Comparison Table
- 기존 무선 장비 vs Guidecast 비교표

### 7. FAQ Section
- 자주 묻는 질문 6개
- 아코디언 형식으로 토글 가능

### 8. CTA Section
- 최종 전환 유도
- 무료 체험 버튼

### 9. Footer
- 브랜드 정보 및 연락처

## 필요한 이미지

다음 이미지 파일들을 `images/` 폴더에 추가해야 합니다:

### 1. hero-qr-scan.png
- **용도**: Hero 섹션의 메인 이미지
- **내용**: 가이드가 스마트폰으로 QR코드를 관광객들에게 보여주는 장면
- **권장 크기**: 1000x800px 이상
- **형식**: PNG (투명 배경 가능) 또는 JPG

### 2. og-image.jpg
- **용도**: 소셜 미디어 공유 시 표시되는 이미지 (Open Graph)
- **내용**: Guidecast 로고 + 주요 메시지
- **권장 크기**: 1200x630px
- **형식**: JPG

### 3. twitter-image.jpg
- **용도**: 트위터 카드 이미지
- **내용**: og-image와 동일하거나 유사
- **권장 크기**: 1200x630px
- **형식**: JPG

## 이미지 플레이스홀더

현재 이미지가 없어도 페이지가 정상적으로 작동합니다. 이미지가 없을 경우:
- 브라우저는 대체 텍스트(alt text)를 표시합니다
- 레이아웃은 정상적으로 유지됩니다
- 실제 이미지 추가 시 파일명만 맞추면 자동으로 표시됩니다

## 사용 방법

### 1. 로컬에서 실행
브라우저에서 `index.html` 파일을 직접 열거나, 로컬 서버를 실행하세요:

```bash
# Python 3 사용 시
python -m http.server 8000

# 또는 Node.js http-server 사용 시
npx http-server
```

그 다음 브라우저에서 `http://localhost:8000` 접속

### 2. 커스터마이징

#### 색상 변경
`css/styles.css` 파일의 `:root` 섹션에서 CSS 변수를 수정하세요:

```css
:root {
  --primary-color: #2563eb;  /* 메인 색상 */
  --accent-color: #f59e0b;   /* 강조 색상 */
  /* ... */
}
```

#### 텍스트 수정
`index.html` 파일에서 직접 텍스트를 수정하세요.

#### 이미지 추가
`images/` 폴더에 이미지를 추가하고, 파일명이 위의 "필요한 이미지" 섹션과 일치하는지 확인하세요.

## 주요 기능

### JavaScript 인터랙션
- **FAQ 아코디언**: 질문 클릭 시 답변 토글
- **데모 영상 모달**: 버튼 클릭 시 영상 팝업 (현재는 플레이스홀더)
- **스크롤 애니메이션**: 요소가 화면에 나타날 때 페이드인 효과
- **스무스 스크롤**: 앵커 링크 클릭 시 부드러운 스크롤
- **이벤트 트래킹**: CTA 클릭 및 섹션 뷰 추적 (콘솔 로그)

### 반응형 디자인
- 데스크톱 (1024px 이상)
- 태블릿 (768px - 1024px)
- 모바일 (768px 이하)

## 데모 영상 추가하기

`js/main.js` 파일의 `showDemoVideo()` 함수에서 주석 처리된 부분을 활성화하고 YouTube ID를 입력하세요:

```javascript
<iframe
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
```

## SEO 최적화

이미 구현된 SEO 요소:
- ✅ 메타 태그 (title, description, keywords)
- ✅ Open Graph 태그 (소셜 미디어 공유)
- ✅ Twitter Card 태그
- ✅ Structured Data (Schema.org)
- ✅ 시맨틱 HTML5 태그
- ✅ Alt 텍스트 (이미지)
- ✅ 모바일 최적화 (viewport 메타 태그)

## 배포

### Netlify / Vercel
1. GitHub에 저장소 업로드
2. Netlify 또는 Vercel에서 저장소 연결
3. 자동 배포 완료

### 일반 웹 호스팅
1. 모든 파일을 FTP로 업로드
2. index.html이 루트 디렉토리에 있는지 확인

## 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)
- 모바일 브라우저 (iOS Safari, Chrome Mobile)

## 성능 최적화

구현된 최적화:
- ✅ 이미지 lazy loading
- ✅ CSS/JS 최소화 (배포 시 권장)
- ✅ 반응형 이미지
- ✅ 효율적인 CSS 애니메이션

## 추가 개발 항목

실제 서비스를 위해 추가로 구현해야 할 항목:

1. **실제 이미지 추가** ✅ 우선순위 높음
2. **데모 영상 업로드 및 연결**
3. **회원가입/로그인 페이지 연결**
4. **실제 결제 시스템 연동**
5. **Google Analytics 연동**
6. **이메일 수집 폼**
7. **다국어 지원** (영어, 일본어 등)
8. **A/B 테스트 설정**
9. **채팅 상담 위젯** (Intercom, Zendesk 등)
10. **쿠키 동의 배너**

## 라이선스

© 2025 Guidecast. All rights reserved.

## 문의

이메일: support@guidecast.com
