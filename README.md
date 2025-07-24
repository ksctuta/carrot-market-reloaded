### .md 파일은 단축키 Ctrl+Shift+V 사용해서 보세요. (VS Code)

# Carrot Market Reloaded

# 📁 프로젝트 디렉토리 구조 (Next.js 15 기반)

```
.
├─ app/ # Next.js App Router 기반 라우팅 (pages 대체)
│ ├─ api/ # API Route Handlers (예: /api/auth)
│ ├─ (route)/ # 각 라우트 별 폴더 (예: /dashboard, /login 등)
│ │ └─ page.tsx # 해당 경로의 페이지 컴포넌트
│ └─ layout.tsx # 공통 레이아웃 컴포넌트 (Root Layout)
│
├─ components/ # UI 컴포넌트 및 공용 컴포넌트 모음
│ ├─ common/ # 버튼, 모달 등 재사용 가능한 컴포넌트
│ └─ layout/ # Header, Footer, Sidebar 등 레이아웃 구성요소
│
├─ hooks/ # React Custom Hooks
│
├─ lib/ # 공통 유틸 함수 및 API 연동 모듈
│ ├─ api/ # RESTful API 호출 함수
│ ├─ constants/ # 앱 전체에서 사용하는 상수 모음
│ ├─ utils/ # 유틸리티 함수 모음 (ex. 날짜 포맷, 토큰 관리)
│ └─ auth/ # 인증 관련 함수 (ex. 세션 체크, 로그인 상태)
│
├─ middleware.ts # 경로 보호, 쿠키 검사 등 Next.js 미들웨어
│
├─ styles/ # Tailwind 및 글로벌 스타일
│ ├─ globals.css # 전체 프로젝트에 적용되는 CSS
│ └─ theme.ts # Tailwind 확장용 테마 설정
│
├─ types/ # 타입스크립트 인터페이스, 타입, enum 정의
│
├─ store/ # 클라이언트 상태관리 로직 (ex. Zustand, Redux)
│
├─ locales/ # 다국어(i18n) 번역 파일
│ ├─ ko/ # 한국어 번역 JSON
│ └─ en/ # 영어 번역 JSON
│
├─ public/ # 정적 리소스 (이미지, 폰트, favicon 등)
│ ├─ images/ # 이미지 리소스
│ └─ icons/ # 아이콘 리소스
│
├─ tests/ # 유닛 테스트, 통합 테스트
│ └─ mocks/ # 테스트용 목(mock) 데이터
│
├─ .gitignore # Git으로 추적하지 않을 파일/폴더 정의
├─ next.config.ts # Next.js 전체 프로젝트 설정 파일
├─ tsconfig.json # TypeScript 컴파일 설정
├─ eslint.config.mjs # ESLint 린팅 규칙 설정 파일
├─ postcss.config.mjs # Tailwind(PostCSS) 관련 설정 파일
└─ README.md # 프로젝트 소개 및 가이드 문서
```

---

---

## ⚙️ 주요 설정 파일 설명

| 파일명               | 설명                                 |
| -------------------- | ------------------------------------ |
| `.gitignore`         | Git으로 추적하지 않아야 할 파일 목록 |
| `next.config.ts`     | Next.js 전역 설정                    |
| `tsconfig.json`      | TypeScript 컴파일 설정               |
| `eslint.config.mjs`  | 코드 스타일 검사를 위한 ESLint 설정  |
| `postcss.config.mjs` | Tailwind 및 PostCSS 설정 파일        |

---

## ✅ `.gitignore` 예시

```gitignore
node_modules/
.next/
dist/
.env*
.DS_Store
npm-debug.log*
yarn-debug.log*
pnpm-debug.log*
```

---

## ⚡ 사용 가능한 스크립트 (`package.json`)

```json
{
  "scripts": {
    "dev": "next dev -p 3030",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest"
  }
}
```

| 명령어             | 설명                                   |
| ------------------ | -------------------------------------- |
| `npm run dev`      | 로컬 개발 서버 실행 (`localhost:3030`) |
| `npm run build`    | 배포용 번들 빌드 생성                  |
| `npm run start`    | 빌드된 앱 실행 (Production)            |
| `npm run lint`     | 코드 스타일 검사 실행                  |
| `npm run lint:fix` | 코드 스타일 자동 수정 실행             |
| `npm run test`     | 테스트 코드 실행 (Jest 기준)           |

|

---

## 🧰 개발환경 준비하기

### 📌 Git 설치 (Windows 기준)

1. [Git 공식 다운로드](https://git-scm.com/) 페이지로 이동
2. 운영체제에 맞는 설치 파일 다운로드
3. 기본 설정으로 설치 진행
4. 설치 완료 후 `git --version` 명령어로 정상 설치 확인

---

### 📌 Git으로 프로젝트 Clone 하기

```bash
git clone https://github.com/your-repo/your-project.git
cd your-project
```

---

## 🟢 Node.js 설치 가이드 (Windows 기준)

1. [Node.js 공식 홈페이지](https://nodejs.org/)에 접속
2. **LTS(Long Term Support)** 버전 선택 후 다운로드
3. 설치 마법사 진행 (기본 옵션으로 설치 추천)
4. 설치 완료 후 명령어 확인:

```bash
node -v     # Node.js 버전 확인
npm -v      # npm (패키지 관리자) 버전 확인
```

> 💡 권장 Node.js 버전: `v18` 이상

Node.js 설치 시 npm도 함께 설치되므로 별도 설치가 필요 없습니다.

---

### 💻 Visual Studio Code 설치

1. [Visual Studio Code 다운로드](https://code.visualstudio.com/)
2. 설치 진행 후 실행
3. 아래 확장 프로그램 설치 권장:
   - ESLint
   - Prettier
   - GitLens
   - Tailwind CSS IntelliSense

---

### 🧩 Visual Studio Code Git 연동 & Git 명령어 사용

1. VSCode 좌측 사이드바에서 소스 제어(Git 아이콘) 클릭
2. 변경된 파일 옆에 `+` 클릭 → Staging
3. 메시지 입력 후 체크(✔) 아이콘 클릭 → `Commit`
4. 하단 메뉴에서 `Publish Branch` 또는 `Push` 클릭 → 원격 저장소 반영

#### 🔁 기본 Git 명령어

```bash
git status              # 변경된 파일 목록 확인
git add .               # 전체 파일 stage
git commit -m "메시지"  # 커밋
git pull                # 원격 저장소의 변경 내용 가져오기
git push                # 로컬 변경 내용을 원격 저장소에 반영
```

---

## 📦 패키지 설치 예시

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
```

---

## 🌐 개발 서버 실행

```bash
npm run dev
```

> 브라우저에서 [http://localhost:3030](http://localhost:3030) 확인

---

## 코드 컨벤션 필수 적용 (Eslint + Prettier 스타일)

> [README_CODE_CONVENSION.md](README_CODE_CONVENSION.md)

## 📚 기타

- 권장 Node 버전: `v18+(이상) 가장 최신 버전`
- 코드 스타일: ESLint + Prettier + TypeScript
- 상태 관리: Zustand / Redux Toolkit 중 선택
- 번역: `next-i18next` 또는 `next-intl`

---

## 📦 package.json에 라이브러리 추가 방법

### ✅ npm을 사용하는 경우

```bash
npm install axios
```

- `dependencies` 항목에 `axios`가 추가됩니다.

### ✅ devDependencies로 추가하고 싶은 경우

```bash
npm install -D eslint
```

- `-D` 또는 `--save-dev` 옵션을 사용하면 `devDependencies`에 추가됩니다.

### ✅ 예시: `package.json` 결과

```json
{
  "dependencies": {
    "axios": "^1.6.0"
  },
  "devDependencies": {
    "eslint": "^8.56.0"
  }
}
```

> 라이브러리 추가 후 `package-lock.json` 또는 `yarn.lock` 파일도 함께 변경됩니다.

---
