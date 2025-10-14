# Google Sheets Early Bird Form Setup Guide

이 가이드는 Guidecast 랜딩페이지의 Early Bird 폼 데이터를 Google Sheets에 자동으로 저장하는 방법을 설명합니다.

## 📋 준비물

- Google 계정
- 약 30분의 시간

---

## 🚀 설정 단계

### 1단계: Google Sheets 생성

1. [Google Sheets](https://sheets.google.com) 접속
2. **빈 스프레드시트** 생성
3. 스프레드시트 이름을 **"Guidecast Early Bird Applications"**로 변경
4. 첫 번째 행(A1-H1)에 다음 헤더 입력:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Name | Email | Phone | Company | Feedback | Privacy Consent | Language | Timestamp |

---

### 2단계: Google Apps Script 설정

1. 스프레드시트 상단 메뉴에서 **확장 프로그램** > **Apps Script** 클릭
2. 기본 코드(`function myFunction() {...}`)를 모두 삭제
3. `google-apps-script.js` 파일의 내용을 복사해서 붙여넣기
4. 상단의 **프로젝트 이름**을 "Guidecast Early Bird Handler"로 변경
5. **저장** 버튼 클릭 (💾 아이콘)

---

### 3단계: 웹앱 배포

1. Apps Script 편집기 상단 우측의 **배포** > **새 배포** 클릭
2. **유형 선택** (⚙️ 아이콘) > **웹 앱** 선택
3. 다음 설정 입력:
   - **설명**: "Early Bird Form Handler v1"
   - **다음 계정으로 실행**: **나**
   - **액세스 권한**: **모든 사용자**
4. **배포** 버튼 클릭
5. **액세스 승인** 클릭
   - Google 계정 선택
   - "Google에서 이 앱을 확인하지 않았습니다" 경고가 나오면 **고급** > **... (안전하지 않은 페이지)로 이동** 클릭
   - **허용** 클릭
6. **웹앱 URL** 복사 (형식: `https://script.google.com/macros/s/.../exec`)

---

### 4단계: main.js 파일 수정

1. 프로젝트의 `assets/js/main.js` 파일 열기
2. 파일 상단의 다음 부분 찾기:

```javascript
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
```

3. `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'`를 3단계에서 복사한 URL로 교체:

```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
```

4. 파일 저장

---

### 5단계: 테스트

#### 로컬 테스트 (Jekyll 서버)

```bash
bundle exec jekyll serve
```

브라우저에서 `http://localhost:4000` 접속 후:
1. "얼리버드 신청하고 1,000시간 받기" 버튼 클릭
2. 폼 작성 후 제출
3. Google Sheets에서 데이터 확인

#### Apps Script에서 직접 테스트

1. Apps Script 편집기에서 `testDoPost` 함수 선택
2. **실행** 버튼 클릭
3. Google Sheets에서 테스트 데이터 확인

---

## ✅ 확인 사항

폼 제출 후 다음을 확인하세요:

- [ ] Google Sheets에 새로운 행이 추가됨
- [ ] 모든 필드(이름, 이메일, 전화번호 등)가 올바르게 저장됨
- [ ] Timestamp가 정확함
- [ ] Language 필드에 언어 코드(ko, en, ja 등)가 저장됨
- [ ] 브라우저에 성공 메시지가 표시됨

---

## 🔧 문제 해결

### "스크립트 URL을 찾을 수 없습니다" 오류

- **원인**: `GOOGLE_SCRIPT_URL`이 올바르게 설정되지 않음
- **해결**: main.js의 URL이 정확한지 확인

### 데이터가 저장되지 않음

1. Apps Script 편집기 > **실행 로그** 확인
2. 웹앱 배포 설정 확인:
   - "다음 계정으로 실행": **나**
   - "액세스 권한": **모든 사용자**
3. 스프레드시트 권한 확인 (편집 가능한 상태여야 함)

### "권한이 거부되었습니다" 오류

1. Apps Script > **배포** > **배포 관리**
2. 현재 배포 삭제
3. 2-3단계 다시 실행

### CORS 오류

- 이 설정은 `mode: 'no-cors'`를 사용하므로 CORS 문제가 발생하지 않습니다
- 만약 오류가 발생한다면 Apps Script 배포 설정을 다시 확인하세요

---

## 📊 데이터 관리

### 데이터 다운로드

1. Google Sheets 열기
2. **파일** > **다운로드** > **Microsoft Excel (.xlsx)** 또는 **CSV**

### 데이터 필터링/정렬

- 헤더 행 선택 > **데이터** > **필터 만들기**
- 각 열 헤더의 ▼ 아이콘으로 필터링/정렬

### 데이터 분석

Google Sheets의 기본 기능 활용:
- **피벗 테이블**: 언어별, 날짜별 통계
- **차트**: 시간대별 신청 현황
- **함수**: `=COUNTIF()`, `=SUMIF()` 등

---

## 🔐 보안 고려사항

1. **스프레드시트 공유 설정**
   - 기본적으로 본인만 접근 가능
   - 팀원과 공유 시: 상단 **공유** 버튼 > 이메일 추가

2. **Apps Script 권한**
   - "모든 사용자" 접근 허용은 폼 제출에만 필요
   - 스프레드시트 자체는 비공개로 유지됨

3. **민감한 정보**
   - 개인정보(이름, 이메일, 전화번호) 포함
   - GDPR/개인정보보호법 준수 필요
   - 30일 후 자동 삭제 고려 (수동 작업 필요)

---

## 🚀 다음 단계

### 배포 (GitHub Pages)

1. 변경사항 커밋:
```bash
git add assets/js/main.js
git commit -m "Add Google Sheets integration for Early Bird form"
git push origin main
```

2. GitHub Pages 자동 배포 (1-5분 소요)

3. 실제 사이트에서 테스트

### 알림 설정 (선택)

새로운 신청이 들어올 때 이메일 알림 받기:

1. Apps Script 편집기에서 `doPost` 함수 수정:

```javascript
function doPost(e) {
  // ... 기존 코드 ...

  // 새로운 신청 알림 이메일 전송
  MailApp.sendEmail({
    to: 'your-email@example.com',
    subject: 'New Early Bird Application',
    body: `New application from ${data.name} (${data.email})`
  });

  // ... 기존 코드 ...
}
```

2. 재배포: **배포** > **배포 관리** > **수정** > **버전: 새 버전** > **배포**

---

## 📞 지원

문제가 계속되면:
- Google Apps Script 문서: https://developers.google.com/apps-script
- 프로젝트 이슈: GitHub Issues

---

## 🎉 완료!

이제 Early Bird 신청이 자동으로 Google Sheets에 저장됩니다!

**다음 확인 사항:**
- ✅ Google Sheets 준비
- ✅ Apps Script 배포
- ✅ main.js URL 설정
- ✅ 로컬 테스트 완료
- ✅ GitHub에 푸시
- ✅ 실제 사이트 테스트
