### .md 파일은 단축키 Ctrl+Shift+V 사용해서 보세요. (VS Code)

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

  // 줄바꿈은 LF 사용 (Windows의 CRLF 방지)
  "files.eol": "\n",

  // 저장 시 ESLint가 자동으로 fix (권장 방식: explicit)
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit"
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

  // Tailwind CSS IntelliSense가 지원하는 class 이름 자동 정렬을 활성화합니다.
  "tailwindCSS.experimental.classRegex": [
    // clsx(`...`)
    ["clsx\\(([^)]*)\\)", "[\"'`]([^\"'`]*)[\"'`]"],
    // classnames('...')
    ["classnames\\(([^)]*)\\)", "[\"'`]([^\"'`]*)[\"'`]"],
    // tw`...`
    ["tw`([^`]*)`", "tw`([^`]*)`"]
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
