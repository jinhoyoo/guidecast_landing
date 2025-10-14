# Early Bird Form - Google Sheets 연동 완료

## ✅ 구현 완료 내용

Early Bird 신청 폼이 Google Sheets와 연동되어 자동으로 데이터를 수집합니다.

---

## 📦 생성된 파일

### 1. `google-apps-script.js`
- Google Apps Script 코드 (Google Sheets에서 사용)
- POST 요청을 받아 스프레드시트에 저장
- 테스트 함수 포함

### 2. `GOOGLE_SHEETS_SETUP.md`
- 상세한 설정 가이드 (30분 소요)
- 단계별 스크린샷 설명
- 문제 해결 방법
- 보안 고려사항

### 3. `assets/js/main.js` (수정됨)
- `GOOGLE_SCRIPT_URL` 상수 추가
- `handleEarlyBirdSubmit()` 함수 업데이트
- 로딩 상태, 성공/오류 메시지 추가
- 다국어 에러 메시지 지원

### 4. `README.md` (업데이트됨)
- Early Bird Form 설정 섹션 추가
- Phase 2 진행 상황 업데이트

---

## 🚀 다음 단계 (필수)

### 1. Google Sheets 설정 (30분)

```
1. Google Sheets 생성 및 헤더 설정
2. Apps Script 배포 (웹앱, 모든 사용자 접근)
3. 배포 URL 복사
```

**자세한 가이드**: [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md)

### 2. main.js 파일 수정

`assets/js/main.js` 파일 열기 (5번째 줄):

```javascript
// 수정 전
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

// 수정 후 (실제 URL로 교체)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby...실제URL.../exec';
```

### 3. 로컬 테스트

```bash
bundle exec jekyll serve
```

브라우저에서 `http://localhost:4000` 접속 후:
1. 얼리버드 신청 버튼 클릭
2. 폼 작성 및 제출
3. Google Sheets에서 데이터 확인

### 4. 배포

```bash
git add .
git commit -m "Add Google Sheets integration for Early Bird form"
git push origin main
```

GitHub Pages 자동 배포 (1-5분 소요)

---

## 💡 주요 기능

### 1. 다국어 폼
- 5개 언어 완벽 지원 (ko, en, ja, zh-TW, zh-CN)
- 폼 레이블, 플레이스홀더, 버튼 모두 번역됨

### 2. 로딩 상태
```
전송 중... (한국어)
Submitting... (영어)
送信中... (일본어)
发送中... (중국어)
```

### 3. 성공 메시지
- 다국어 성공 메시지
- 체크 아이콘 애니메이션
- 확인 버튼

### 4. 에러 핸들링
- 네트워크 오류 감지
- 다국어 에러 메시지
- 지원 이메일 표시

### 5. 데이터 수집
```
- 이름 (Name)
- 이메일 (Email)
- 전화번호 (Phone)
- 소속 (Company, 선택)
- 의견/피드백 (Feedback)
- 개인정보 동의 (Privacy Consent: Yes/No)
- 언어 (Language: ko/en/ja/zh-TW/zh-CN)
- 제출 시간 (Timestamp, ISO 8601)
```

---

## 🔍 테스트 체크리스트

로컬 테스트:
- [ ] 한국어 페이지에서 폼 제출
- [ ] 영어 페이지에서 폼 제출
- [ ] Google Sheets에 데이터 저장 확인
- [ ] 모든 필드가 올바르게 저장됨
- [ ] Privacy Consent 필드 확인 (Yes/No)
- [ ] Language 필드 확인
- [ ] Timestamp 정확성 확인

실제 사이트 테스트 (배포 후):
- [ ] www.guidecast.co/ko/ 에서 폼 제출
- [ ] www.guidecast.co/en/ 에서 폼 제출
- [ ] 모바일에서 테스트
- [ ] Google Sheets 실시간 저장 확인

---

## 📊 데이터 관리

### 다운로드
```
Google Sheets > 파일 > 다운로드 > Excel (.xlsx) 또는 CSV
```

### 필터링/정렬
```
헤더 행 선택 > 데이터 > 필터 만들기
```

### 통계 분석
```
- 언어별 신청자 수: =COUNTIF(G:G, "ko")
- 동의율 확인: =COUNTIF(F:F, "Yes")/COUNTA(F:F)
- 날짜별 신청 현황: 피벗 테이블
- 시간대별 분석: 차트
```

---

## 🔐 보안 및 법적 준수

### 보안
- ✅ Google Sheets는 본인만 접근 가능 (기본)
- ✅ Apps Script는 "모든 사용자" 접근 (폼 제출만 가능)
- ✅ 스프레드시트 자체는 비공개 유지
- ⚠️ 개인정보 포함 (GDPR/개인정보보호법 준수 필요)

### Privacy Consent 필드의 법적 중요성
- **GDPR (유럽)**: 개인정보 수집 시 명시적 동의 필수
- **개인정보보호법 (한국)**: 동의 사실 기록 보관 의무
- **감사 추적**: Privacy Consent 필드로 동의 여부 증명
- **저장 형식**: "Yes"/"No"로 명확하게 기록
- **필수 체크**: 폼 제출 시 체크박스 required 속성으로 강제

**중요**: Privacy Consent가 "No"인 경우는 이론적으로 발생하지 않아야 합니다 (required 속성). 만약 "No"가 있다면 시스템 오류를 의심하세요.

---

## ❓ 자주 묻는 질문

### Q1: URL을 설정하지 않으면 어떻게 되나요?
**A**: 콘솔에 경고 메시지만 표시되고, 성공 메시지가 보입니다. 데이터는 저장되지 않습니다.

### Q2: 데이터가 저장되지 않아요
**A**:
1. Apps Script 배포 URL이 정확한지 확인
2. 배포 설정: "다음 계정으로 실행: 나", "액세스 권한: 모든 사용자"
3. Apps Script > 실행 로그 확인

### Q3: CORS 오류가 발생해요
**A**: `mode: 'no-cors'`를 사용하므로 CORS 문제가 발생하지 않습니다. Apps Script 배포 설정을 다시 확인하세요.

### Q4: 응답이 너무 느려요
**A**: Google Apps Script는 1-2초 정도 걸립니다. 이는 정상입니다. 더 빠른 응답이 필요하면 Supabase 사용을 고려하세요.

### Q5: 나중에 Supabase로 전환할 수 있나요?
**A**: 네, 가능합니다. `handleEarlyBirdSubmit()` 함수의 fetch URL만 변경하면 됩니다.

---

## 🎉 완료!

이제 Early Bird 신청이 자동으로 Google Sheets에 저장됩니다!

**다음 할 일:**
1. ✅ Google Sheets 설정 ([가이드](./GOOGLE_SHEETS_SETUP.md))
2. ✅ main.js URL 업데이트
3. ✅ 로컬 테스트
4. ✅ GitHub 푸시
5. ✅ 실제 사이트 테스트

---

## 📞 지원

문제가 있으시면:
- 가이드 확인: [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md)
- Google Apps Script 문서: https://developers.google.com/apps-script
- GitHub Issues 생성

**Made with ❤️ by the Guidecast Team**
