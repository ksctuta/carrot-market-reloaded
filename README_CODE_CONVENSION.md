### .md 파일은 단축키 Ctrl+Shift+V 사용해서 보세요. (VS Code)

# VSCode 자동 ESLint & Prettier 설정 가이드

이 섹션에서는 VSCode 에디터에서 **저장 시 자동으로 ESLint와 Prettier 규칙에 맞게 코드 포맷팅 및 린팅 오류 자동 수정을 적용하는 방법**을 안내합니다.

---

## 1. VSCode 확장 프로그램 설치

먼저 아래 두 가지 확장 프로그램을 설치하세요.

- **ESLint**
  - Marketplace 링크: [ESLint - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - 기능: 코드 내 ESLint 규칙 위반을 실시간으로 검사하고, 자동 수정 기능 제공

- **Prettier - Code formatter**
  - Marketplace 링크: [Prettier - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - 기능: 코드 포맷팅을 자동으로 해주는 인기 있는 도구

---

## 2. VSCode 설정 열기

- VSCode 상단 메뉴 `파일 > 기본 설정 > 설정` (또는 단축키: `Ctrl + ,`) 을 클릭하세요.
- 오른쪽 상단의 아이콘 중 **열기 아이콘 (Open Settings JSON)** 을 클릭하여 `settings.json` 파일을 엽니다.

---

## 3. `settings.json`에 아래 내용 추가

```json
{
  // 저장할 때 자동으로 코드 포맷팅을 수행합니다.
  "editor.formatOnSave": true,

  // 기본 포맷터를 Prettier로 지정합니다.
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // ESLint 포맷터 사용 활성화 (Prettier와 함께 동작하도록)
  "eslint.format.enable": true,

  // ESLint 상태 표시줄을 항상 보여줍니다.
  "eslint.alwaysShowStatus": true,

  // 저장 시 ESLint가 자동으로 고칠 수 있는 문제를 해결하도록 설정
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },

  // 프로젝트 루트에 .prettierrc 파일이 있을 때만 Prettier가 동작하도록 설정 (중복 방지)
  "prettier.requireConfig": true
}
```
