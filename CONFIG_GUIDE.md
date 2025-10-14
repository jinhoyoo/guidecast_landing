# 환경 설정 가이드

## Google Apps Script URL 설정

### 방법 1: _config.yml에서 직접 설정 (프로덕션)

`_config.yml` 파일에서 `google_script_url`을 설정합니다:

```yaml
# Google Apps Script URL for form submissions
google_script_url: "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
```

**주의**: 이 파일은 Git에 커밋되므로, 공개 저장소에서는 민감한 정보가 노출될 수 있습니다.

### 방법 2: _config.local.yml 사용 (로컬 개발)

보안을 위해 로컬 개발 환경에서는 `_config.local.yml` 파일을 생성하여 사용할 수 있습니다:

1. `_config.local.yml` 파일 생성:

```yaml
# Local development configuration
google_script_url: "https://script.google.com/macros/s/YOUR_DEV_SCRIPT_ID/exec"
```

2. Jekyll 서버 실행 시 로컬 설정 파일 포함:

```bash
bundle exec jekyll serve --config _config.yml,_config.local.yml
```

**참고**: `_config.local.yml`은 `.gitignore`에 포함되어 있어 Git에 커밋되지 않습니다.

## 설정 우선순위

Jekyll은 여러 설정 파일을 사용할 때 다음 우선순위로 적용합니다:

1. `_config.yml` (기본 설정)
2. `_config.local.yml` (로컬 오버라이드)

나중에 지정된 파일의 설정이 이전 파일의 설정을 덮어씁니다.

## 개발/프로덕션 환경 분리

### 개발 환경 (_config.local.yml)
```yaml
google_script_url: "https://script.google.com/macros/s/DEV_SCRIPT_ID/exec"
```

### 프로덕션 환경 (_config.yml)
```yaml
google_script_url: "https://script.google.com/macros/s/PROD_SCRIPT_ID/exec"
```

## GitHub Actions / CI/CD 환경

GitHub Actions에서 환경 변수를 사용하려면:

1. GitHub 저장소 Settings → Secrets and variables → Actions
2. New repository secret 추가:
   - Name: `GOOGLE_SCRIPT_URL`
   - Value: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`

3. GitHub Actions 워크플로우에서 사용:

```yaml
- name: Build Jekyll site
  env:
    GOOGLE_SCRIPT_URL: ${{ secrets.GOOGLE_SCRIPT_URL }}
  run: |
    sed -i 's|google_script_url:.*|google_script_url: "${{ secrets.GOOGLE_SCRIPT_URL }}"|' _config.yml
    bundle exec jekyll build
```

## 설정 확인

브라우저 개발자 도구 콘솔에서 다음을 실행하여 설정된 URL을 확인할 수 있습니다:

```javascript
console.log(window.GOOGLE_SCRIPT_URL);
```

## 트러블슈팅

### URL이 설정되지 않은 경우

폼 제출 시 다음 경고 메시지가 표시됩니다:
```
Google Apps Script URL not configured in _config.yml. Data: {...}
```

이 경우 폼 데이터는 전송되지 않지만, 성공 메시지는 표시됩니다 (개발/테스트 목적).

### Jekyll 서버 재시작

`_config.yml` 파일을 수정한 후에는 Jekyll 서버를 재시작해야 변경사항이 적용됩니다:

```bash
# Ctrl+C로 서버 중지 후
bundle exec jekyll serve
```

## 보안 권장사항

1. **공개 저장소**: `_config.local.yml` 사용 권장
2. **비공개 저장소**: `_config.yml`에 직접 설정 가능
3. **CI/CD**: GitHub Secrets 사용 권장
4. **프로덕션 배포**: 환경 변수 또는 비공개 저장소 사용
