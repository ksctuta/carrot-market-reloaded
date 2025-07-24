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
    "dev": "next dev --turbopack -p 3030",
    "build": "next build",
    "start": "next start -p 3030",
    "lint": "eslint \"./**/*.+(ts|tsx)\"",
    "lint:fix": "eslint \"./**/*.+(ts|tsx)\" --fix",
    "format": "prettier . --write",
    "format:check": "prettier . --check"
  },
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

## Front-End 코드 컨벤션 필독사항 (Eslint + Prettier 스타일)

> 개발자 & 퍼블리셔 필독사항 : [README-CODE-CONVENSION.md](README-CODE-CONVENSION.md)

## VSCode 확장 프로그램 설치 - SETUP GUIDE 

> 개발자 & 퍼블리셔 필독사항 : [README-VSCODE-SETUP-GUIDE.md](README-VSCODE-SETUP-GUIDE.md)

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

## 🧩 VSCode 확장 프로그램 설치

먼저 아래 확장 프로그램을 설치하세요.

- **ESLint** (필수)  
  - Marketplace 링크: [ESLint - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)  
  - 기능: 코드 내 ESLint 규칙 위반을 실시간으로 검사하고, 자동 수정 기능 제공  

- **Prettier - Code formatter** (필수)  
  - Marketplace 링크: [Prettier - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)  
  - 기능: 코드 포맷팅을 자동으로 해주는 인기 있는 도구  

- **Tailwind CSS IntelliSense** (필수)  
  - Marketplace 링크: [Tailwind CSS - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)  
  - 기능: Tailwind CSS 클래스 자동완성, 문서 툴팁, 색상 미리보기 등 지원 (Next.js 사용 시 특히 유용)  

- **Material Icon Theme** (선택)  
  - Marketplace 링크: [Material Icon Theme - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=pkief.material-icon-theme)  
  - 기능: 폴더 및 파일에 직관적인 아이콘 테마 적용으로 가독성과 생산성 향상  

- **Korean Language Pack** (선택)  
  - Marketplace 링크: [Korean Language Pack - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ko)  
  - 기능: VSCode UI를 한국어로 표시하여 보다 친숙한 개발 환경 제공  

---

## ⚙️ VSCode 설정 열기

- VSCode 상단 메뉴 `파일 > 기본 설정 > 설정` (또는 단축키: `Ctrl + ,`) 을 클릭하세요.  
- 오른쪽 상단의 아이콘 중 **열기 아이콘 (Open Settings JSON)** 을 클릭하여 `settings.json` 파일을 엽니다.

---

## 🛠️ `settings.json`에 아래 내용 추가

```json
{
  // 파일 저장 시 자동 포맷 적용
  "editor.formatOnSave": true,

  // 기본 포맷터로 Prettier 지정
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // 저장 시 ESLint가 자동으로 fix (권장 방식: explicit)
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },

  // ESLint 포맷 기능 사용
  "eslint.format.enable": true,

  // 상태 표시줄에 ESLint 항상 표시
  "eslint.alwaysShowStatus": true,

  // ESLint가 검사할 파일 유형 지정
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],

  // 프로젝트에 .prettierrc 있을 때만 Prettier 활성화 (중복 방지)
  "prettier.requireConfig": true,

  // 탐색기에서 폴더 구조를 좀 더 보기 쉽게
  "explorer.compactFolders": false,
  "explorer.confirmDelete": false,

  // 파일 이동 시 import 경로 자동 업데이트
  "javascript.updateImportsOnFileMove.enabled": "always",

  // 💡 파일 유형별 포맷터 지정 (Prettier + ESLint 조합 사용 시)
  "[javascript]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[typescript]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[json]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },

  // 💡 JSON 스키마 확장 포인트 (필요 시 추가)
  "json.schemas": []
}
```

---

# 🧭 Front-End 코드 컨벤션

본 프로젝트는 **Next.js 15**, **React 19**, **TypeScript**, **TailwindCSS** 기반의 프론트엔드 애플리케이션입니다. 일관된 개발 환경과 유지보수를 위해 아래의 코드 컨벤션을 따릅니다.

---

## 📁 프로젝트 구조 규칙

- 디렉토리 구조는 **기능 중심 (feature-based)** 으로 구성합니다.
- `pages/`, `app/`, `components/`, `hooks/`, `utils/`, `styles/`, `types/` 등은 최상위에 위치합니다.

```ts
// ❌ 지양
import Button from '@/components/Button';

// ✅ 지향
import Button from '../../../components/Button';
```

---

## 🧠 코드 스타일 규칙

### ✅ 파일 & 컴포넌트 명명

- 파일 이름: `camelCase` (ex. `userCard.tsx`)
- 컴포넌트 이름: `PascalCase` (ex. `UserCard`)
- 훅: `use` 접두사로 시작 (ex. `useUserData`)
- 스타일 모듈: `*.module.css` 또는 TailwindCSS 사용

---

## 🛠️ Lint & Format 설정

- **ESLint** + **Prettier** + **TypeScript**
- 저장 시 자동 포맷 (`editor.formatOnSave`: `true`)
- Prettier 설정:
  - 세미콜론 사용 (`semi: true`)
  - 큰따옴표 사용 (`singleQuote: false`)
  - 줄 최대 길이 80자 (`printWidth: 80`)
  - 들여쓰기 2칸 (`tabWidth: 2`)
  - 마지막 쉼표 유지 (`trailingComma: es5`)

```jsonc
// .prettierrc
{
  "semi": true,
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2,
  "trailingComma": "es5",
  "endOfLine": "auto"
}
```

---

## 💅 TailwindCSS 스타일 가이드

- `@apply`는 가능한 최소화하고, 클래스 utility 우선 사용
- 클래스 순서는 `레이아웃 → 박스모델 → 타이포그래피 → 상태 → 반응형` 순
- 조건부 클래스는 `clsx` 또는 `classnames` 사용

```tsx
// ✅ 권장 예시
<button
  className="flex items-center justify-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700"
>
  Click me
</button>
```

---

## 🧪 테스트 (선택 사항)

- 컴포넌트 단위 테스트는 [Jest](https://jestjs.io/) 또는 [React Testing Library](https://testing-library.com/) 사용
- 파일명은 `*.test.tsx`, 테스트 대상과 동일 폴더에 위치

---

## 🧾 커밋 메시지 컨벤션

급할때는 어쩔 수 없지만, 가급적이면

[Conventional Commits](https://www.conventionalcommits.org/) 표준을 따릅니다.

- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 스타일 변경 (기능 X)
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드 추가/수정
- `chore`: 빌드/배포 설정 등 기타

예시:

```bash
git commit -m "feat: 사용자 로그인 페이지 추가"
```

---

## 📌 기타 권장 사항

- `console.log`는 커밋 전에 제거
- React 19 기준 `use` 프리픽스 훅 사용 시 `Suspense`와 함께 사용할 것
- 서버 컴포넌트 / 클라이언트 컴포넌트 구분 명확히 (`"use client"`)

---

## 📦 주요 도구 버전

| 도구              | 버전          |
|-------------------|---------------|
| Next.js           | 15.x          |
| React             | 19.x          |
| TypeScript        | 최신 (5.x 이상) |
| Tailwind CSS      | 최신 (4.x 이상) |
| ESLint            | Flat config 사용 |
| Prettier          | 최신          |

---

> 📁 참고 파일: `.eslintrc.mjs`, `eslint.config.mjs`, `tsconfig.json`, `.prettierrc`, `.vscode/settings.json`
