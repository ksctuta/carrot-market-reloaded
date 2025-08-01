### .md 파일은 단축키 Ctrl+Shift+V 사용해서 보세요. (VS Code)

# 🧭 Front-End 코드 컨벤션

본 프로젝트는 **Next.js 15**, **React 19**, **TypeScript**, **TailwindCSS** 기반의 프론트엔드 애플리케이션입니다. 일관된 개발 환경과 유지보수를 위해 아래의 코드 컨벤션을 따릅니다.

---

## 📁 프로젝트 구조 규칙

- 디렉토리 구조는 **기능 중심 (feature-based)** 으로 구성합니다.
- `app/`, `components/`, `hooks/`, `utils/`, `styles/`, `types/` 등은 최상위에 위치합니다.

```ts
// ❌ 지양
import Button from "@/components/Button";

// ✅ 지향
import Button from "../../../components/Button";
```

---

## 🧠 코드 스타일 규칙

### ✅ 파일 & 컴포넌트 명명

- 파일 이름: `camelCase` (ex. `userCard.tsx`)
- ㄴ 해당 부분 nextjs15 사용 시 페이지 일 경우 폴더 밑 page.tsx 통일 (AppRoute 방식)
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
  - EOL LF 로 변경 처리 (윈도우에서 발생하는 ␍ 문제 방지) (`endOfLine: lf`)

```jsonc
// .prettierrc
{
  "semi": true,
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2,
  "trailingComma": "es5",
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindFunctions": ["clsx", "classnames", "cva"],
}
```

---

## 💅 TailwindCSS 스타일 가이드

- `prettier-plugin-tailwindcss` 적용
- `@apply`는 가능한 최소화하고, 클래스 utility 우선 사용
- 클래스 순서는 `레이아웃 → 박스모델 → 타이포그래피 → 상태 → 반응형` 순
- 조건부 클래스는 `clsx` 또는 `classnames` 사용
  > 예: `flex w-full p-4 text-sm text-gray-700 hover:text-black md:text-base`

---

### ✅ 클래스 순서 예시

| 구분         | 예시 클래스                                |
| ------------ | ------------------------------------------ |
| 레이아웃     | `flex`, `grid`, `items-center`             |
| 박스모델     | `p-4`, `px-2`, `w-full`, `h-10`            |
| 타이포그래피 | `text-sm`, `font-bold`, `text-gray-700`    |
| 상태         | `hover:bg-blue-500`, `disabled:opacity-50` |
| 반응형       | `md:text-base`, `lg:p-6`                   |

### ✅ 권장 사용 예시

```tsx

// 예시 1: 일반 버튼
<button className="flex items-center justify-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700">
  Click me
</button>

// 예시 2: 반응형 텍스트
<div className="flex w-full p-4 text-sm text-gray-700 hover:text-black md:text-base" />

// 예시 3: 조건부 클래스는 clsx 사용
<div className={clsx("flex p-4", isActive && "bg-blue-500", "text-white")}>
  Hello
</div>

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

| 도구         | 버전             |
| ------------ | ---------------- |
| Next.js      | 15.x             |
| React        | 19.x             |
| TypeScript   | 최신 (5.x 이상)  |
| Tailwind CSS | 최신 (4.x 이상)  |
| ESLint       | Flat config 사용 |
| Prettier     | 최신             |

---

> 📁 참고 파일: `.eslintrc.mjs`, `eslint.config.mjs`, `tsconfig.json`, `.prettierrc`, `.vscode/settings.json`
