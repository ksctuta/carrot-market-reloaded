/* eslint-disable import/no-anonymous-default-export */
// ESM 모드에서는 import 사용
// TypeScript 코드 파싱을 위한 파서 및 플러그인 임포트
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

// Prettier 관련 ESLint 플러그인 및 설정
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

// Next.js 기본 ESLint 규칙 (core-web-vitals 포함)
// eslint-disable-next-line import/extensions
import nextCoreWebVitalsConfig from "eslint-config-next/core-web-vitals.js";

// React 및 React Hooks 관련 ESLint 플러그인
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

// import 정렬 등을 위한 플러그인
import importPlugin from "eslint-plugin-import";

// 현재 경로를 절대경로로 계산하기 위한 Node.js 내장 모듈
import path from "path";

// ESLint 설정 배열을 기본 내보내기
export default [
  // 1. 무시할 파일/디렉토리 목록
  {
    ignores: [".next/**/*", "node_modules/**/*", "dist/**/*", "out/**/*"],
    // 빌드시 제외할 디렉토리
  },

  // 2. 메인 ESLint 설정
  {
    languageOptions: {
      parser: tsParser, // TypeScript 문법을 이해하도록 설정
      parserOptions: {
        ecmaVersion: 2020, // 최신 ECMAScript 2020 문법 허용
        sourceType: "module", // import/export 지원
        project: "./tsconfig.json", // 타입 정보 기반 검사 위해 tsconfig 참조
        tsconfigRootDir: path.resolve("."), // tsconfig.json 기준 디렉토리
        ecmaFeatures: { jsx: true }, // JSX 구문 사용 허용
      },
      globals: {
        React: "readonly", // React 전역 변수로 인식 (import 없이 사용 가능하도록)
      },
    },

    // 사용할 ESLint 플러그인 등록
    plugins: {
      "@typescript-eslint": tsPlugin, // 타입스크립트 코드 검사
      prettier: prettierPlugin, // Prettier와 연동
      react: reactPlugin, // React 관련 규칙
      "react-hooks": reactHooksPlugin, // React Hooks 규칙 검사
      import: importPlugin, // import 순서, 중복 등 검사
    },

    // 커스텀 규칙 정의
    rules: {
      // Prettier 포맷과 불일치하는 경우 ESLint 에러로 처리
      "prettier/prettier": [
        "error",
        {
          semi: true, // 세미콜론 사용
          singleQuote: false, // 큰따옴표 사용
          printWidth: 80, // 줄 길이 제한
          tabWidth: 2, // 들여쓰기 2칸
          trailingComma: "es5", // 객체/배열 마지막 쉼표
          endOfLine: "auto", // 운영체제에 맞게 줄바꿈 자동 처리
        },
      ],

      // 사용되지 않는 변수 경고 처리
      "@typescript-eslint/no-unused-vars": "warn",

      // 문자열은 더블쿼터 사용
      "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],

      // Next.js에서는 React 17+ 이후 자동 import이므로 off
      "react/react-in-jsx-scope": "off",

      // .tsx 파일에서만 JSX 허용
      "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],

      // Hook은 함수 컴포넌트나 custom hook 안에서만 사용해야 함
      "react-hooks/rules-of-hooks": "error",

      // useEffect 등의 의존성 배열 누락 경고
      "react-hooks/exhaustive-deps": "warn",

      // import 순서를 정리하고, 블럭 간 한 줄 추가 요구
      "import/order": ["error", { "newlines-between": "always" }],

      // 최대 라인 길이 제한 (문자열/주석 제외)
      "max-len": [
        "error",
        {
          code: 80,
          ignoreComments: true,
          ignoreStrings: true,
        },
      ],
    },
  },

  // 3. 외부 설정 확장 (Prettier 및 Next.js 설정)
  prettierConfig, // eslint-config-prettier: ESLint와 Prettier 충돌 제거
  nextCoreWebVitalsConfig, // next/core-web-vitals: Next.js 권장 규칙
];
