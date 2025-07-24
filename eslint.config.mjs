/* eslint-disable import/no-anonymous-default-export */
// import문만 있고 이름이 없는 default export에 대해 ESLint 경고 끄기

// Node.js 전용 경로 및 파일 유틸리티 가져오기
import path from "node:path";
import { fileURLToPath } from "node:url";

// ESLint Flat Config와 기존 설정을 호환하기 위한 헬퍼
import { FlatCompat } from "@eslint/eslintrc";

// 기본 JavaScript 권장 설정들
import js from "@eslint/js";

// TypeScript 관련 플러그인 및 파서
import typescriptEslintEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

// Prettier 플러그인
import prettier from "eslint-plugin-prettier";

// __dirname, __filename을 ESM에서 사용하는 방식으로 정의
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 기존 ESLint config와 호환되도록 도와주는 compat 객체 생성
const compat = new FlatCompat({
  baseDirectory: __dirname,            // 기준 경로 설정
  recommendedConfig: js.configs.recommended, // 기본 권장 config
  allConfig: js.configs.all,                 // 전체 config도 포함 가능 (사용 안 함)
});

// ⚙️ 기본 설정 시작 (Flat Config 배열 형식으로 export)
export default [
  // 📌 Next.js 및 Prettier 관련 추천 설정들 확장
  ...compat.extends("next", "next/core-web-vitals", "prettier"),

  // 📌 공통 규칙 설정
  {
    plugins: {
      prettier, // Prettier 플러그인 적용
    },
    rules: {
      "prettier/prettier": "error", // Prettier 포맷 위반 시 ESLint 에러

      // 기타 린트 비활성화/수정
      camelcase: "off", // camelCase 강제 비활성화
      "import/prefer-default-export": "off", // default export 강요 안 함

      "react/jsx-filename-extension": "off", // JSX 확장자 제한 안 함
      "react/jsx-props-no-spreading": "off", // props 스프레드 허용
      "react/no-unused-prop-types": "off", // 사용되지 않는 prop 검사 비활성화
      "react/require-default-props": "off", // 기본 props 강제 안 함
      "react/no-unescaped-entities": "off", // JSX에 특수문자 허용

      // import 시 확장자 붙이지 않도록 허용
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          ts: "never",
          tsx: "never",
          js: "never",
          jsx: "never",
        },
      ],
    },
  },

  // 📌 TypeScript 전용 규칙 설정 (plugin:@typescript-eslint/recommended)
  ...compat.extends(
    "plugin:@typescript-eslint/recommended", // TypeScript 추천 규칙
    "prettier"                               // Prettier와 충돌 제거
  ).map((config) => ({
    ...config,
    files: ["**/*.+(ts|tsx)"], // 해당 규칙은 TypeScript 파일에만 적용
  })),

  // 📌 추가적인 TypeScript 세부 규칙
  {
    files: ["**/*.+(ts|tsx)"], // TypeScript 파일만 해당
    plugins: {
      "@typescript-eslint": typescriptEslintEslintPlugin, // TS 전용 플러그인
    },
    languageOptions: {
      parser: tsParser, // TS 파서 적용
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off", // 함수 리턴 타입 명시 안 해도 됨
      "@typescript-eslint/explicit-module-boundary-types": "off", // 모듈 리턴 타입 명시 비활성화

      // 변수 사용 전에 정의된 경우 허용
      "no-use-before-define": [0], // 기본 JS 규칙 끄고
      "@typescript-eslint/no-use-before-define": [1], // TS 버전만 경고

      "@typescript-eslint/no-explicit-any": "off", // any 타입 사용 허용
      "@typescript-eslint/no-var-requires": "off", // require() 사용 허용 (CJS 코드 등에서)
    },
  },
];