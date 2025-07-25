### md 파일은 Ctrl+Shift+V 클릭해서 보세요.

## ✅ TailwindCSS 프레임워크 JIT(Just-in-Time) 모드란?

```
테일윈드에서 JIT 모드는 실시간으로 CSS 유틸리티 클래스를 생성해주는 기능입니다.
기존에는 테일윈드가 미리 모든 유틸리티 클래스(예: text-red-500, mt-4 등)를 만들어서 하나의 큰 CSS 파일로 만들어두는 방식이었는데, 이 방식은 불필요한 클래스까지 모두 포함돼서 파일이 커지는 단점이 있었습니다.

🛠️ 동작방식
JIT 모드는 HTML, JSX 같은 파일에 클래스명을 작성한 순간, 그 클래스만 바로 CSS로 생성해 줍니다. 예를 들어 text-green-600을 처음 쓰면, 기존 방식에서는 이게 미리 정의되어 있어야 했지만,
JIT는 이걸 처음 쓰더라도 즉시 CSS를 만들어서 적용해줍니다.
따라서 실제로 사용하는 클래스만 CSS로 만들어지기 때문에 빌드 속도가 빨라지고 결과물도 작아집니다.

Tailwind 4 버전 부터는 tailwind.config.js 대신 Tailwind를 가져온
CSS 파일(@import "tailwindcss" 파일)에서 직접 모든 사용자 정의를 구성할 수 있습니다.
```

---

# 🌈 TailwindCSS 스타일 가이드 및 도입 배경

## 📜 CSS의 발전 역사

### 🔹 1. 순수 CSS (Vanilla CSS)

- HTML 파일 내 `<style>` 태그 혹은 `.css` 파일로 스타일 정의
- **문제점**:
  - 클래스 중복 및 충돌
  - 유지보수 어려움
  - 네이밍 규칙 불분명

### 🔹 2. CSS Preprocessor: SASS / SCSS / LESS

- 중첩, 변수, 함수 등 프로그래밍 개념 도입
- **장점**: 코드 재사용성과 가독성 향상
- **단점**: 러닝 커브 존재, 런타임 동작 불가, 빌드 필요

### 🔹 3. CSS Framework: Bootstrap, Foundation 등

- 미리 정의된 컴포넌트와 그리드 시스템 제공
- **장점**: 빠른 초기 개발 가능
- **단점**: 제한된 커스터마이징, 비슷한 UI 양산, 복잡한 오버라이딩

---

## ✨ TailwindCSS란?

> **"Utility-First CSS Framework"**  
> TailwindCSS는 스타일을 미리 만들어진 컴포넌트 단위가 아닌, **작고 독립적인 유틸리티 클래스**로 조합하는 방식입니다.

예:

```html
<!-- 버튼 -->
<button class="rounded bg-blue-500 px-4 py-2 font-bold text-white">버튼</button>
```

### 🧩 특징

- HTML 안에서 직접 디자인 조립
- 전통적인 CSS 설계/추상화 방식에서 벗어남
- 개발 속도 향상 + 스타일 일관성 확보

---

## ⚡ Just-In-Time (JIT) 모드란?

> TailwindCSS의 JIT 모드는 실제 사용하는 클래스만 **즉시 생성**해주는 기능입니다.

---

### 🧠 기존 방식 vs JIT 방식

| 항목             | 기존 방식 (Pre-JIT)               | JIT 모드                          |
| ---------------- | --------------------------------- | --------------------------------- |
| 클래스 처리 방식 | 모든 가능한 클래스를 사전 생성    | 사용하는 클래스만 실시간으로 생성 |
| 빌드 속도        | 느림 (전체 CSS 사전 빌드)         | 빠름 (필요한 것만 생성)           |
| 번들 크기        | 큼 (불필요한 클래스 포함)         | 작음 (사용된 것만 포함됨)         |
| 동적 클래스      | 불가능 (`bg-${color}` 등 purge됨) | 가능 (템플릿 문자열도 지원)       |

---

### 🔍 작동 방식

```html
<div class="bg-gray-100 p-4 text-blue-600">Hello Tailwind</div>
```

- 저장 시 위 클래스만 분석해 즉시 CSS 생성
- Unused CSS 제거 필요 없음
- Tailwind v3부터 기본 활성화

---

### 🧪 동적 클래스도 OK

```tsx
const level = "500";
return <div className={`bg-blue-${level} text-white`}>Dynamic</div>;
```

- JIT는 템플릿 내 동적 표현까지 분석해 CSS 생성 가능
- 기존 방식에서는 이런 동적 클래스는 purge로 인해 무시됨

---

### ✅ JIT 모드 장점 요약

- ⚡ **즉시 반영**: 저장과 동시에 CSS 생성
- 📉 **최소 용량 번들**: 사용된 클래스만 포함됨
- 🧼 **깨끗한 결과물**: purge 설정 불필요
- 🧪 **실험 및 프로토타이핑 최적**: 빠른 클래스 테스트 가능
- 🎯 **템플릿 문자열 지원**: JS/TS/React에서도 자연스럽게 사용 가능

---

## 🆚 CSS 방식 비교 요약

| 항목          | Bootstrap                 | SCSS/SASS                  | TailwindCSS                 |
| ------------- | ------------------------- | -------------------------- | --------------------------- |
| 구성 방식     | 미리 정의된 컴포넌트 기반 | CSS 확장 문법              | 유틸리티 클래스 조합        |
| 커스터마이징  | 제한적                    | 가능                       | 매우 유연                   |
| 러닝 커브     | 낮음                      | 중간                       | 낮음~중간 (익숙해지면 빠름) |
| 결과물 용량   | 큼 (전체 컴포넌트 포함됨) | 중간                       | 작음 (사용한 것만 생성)     |
| 디자인 일관성 | 프리셋에 의존             | 설계에 따라 다름           | 디자인 시스템 구축 유리     |
| 유지보수      | 클래스 오버라이딩 필요    | 중첩 구조 복잡해질 수 있음 | 클래스 기반이므로 단순함    |

---

## 📁 TailwindCSS 예제 경로

- **디렉토리 위치**: `./app/tailwind-sample`
- **개발 서버 접속**: [http://localhost:3030/tailwind-sample](http://localhost:3030/tailwind-sample)

> 실제 Tailwind 구성 및 JIT 기능을 테스트할 수 있는 샘플입니다.

---

## 🔧 TailwindCSS 설정 예시

```js
// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## 🧭 왜 React / Next.js에서 TailwindCSS를 많이 쓸까?

### ✅ 프론트엔드 모던 스택과의 높은 궁합

TailwindCSS는 특히 React, Next.js, Vue 같은 **컴포넌트 기반 UI 라이브러리**와 잘 맞습니다.

- 컴포넌트 내부에서 직접 스타일 작성 가능 (`className`)
- 전역 CSS 충돌 최소화
- props에 따라 동적으로 클래스 조합 가능
- 스타일 로직을 코드 안에서 관리 가능

### 🚀 Next.js와 Tailwind의 시너지

- **빠른 프로토타이핑**: JIT 모드 + Hot Reloading으로 매우 빠른 UI 실험 가능
- **파일 크기 최적화**: 자동 purge 덕분에 production 빌드 시 CSS 크기 최소화
- **SSR / SSG 친화적**: Next.js의 정적/서버사이드 렌더링 방식에도 완벽하게 대응
- **다크모드 / 반응형 지원**: `dark:` / `md:` 같은 접두어로 간단히 구현 가능
- **플러그인 생태계**: typography, aspect-ratio, line-clamp 등 다양한 Tailwind 플러그인을 쉽게 통합 가능

---

## 🔒 기업과 커뮤니티의 신뢰

- **Vercel** (Next.js 개발사)도 TailwindCSS를 공식적으로 추천
- **GitHub**, **Laravel**, **Twitch**, **Discord** 등 수많은 대기업이 Tailwind를 도입
- **Stack Overflow Developer Survey**에서 인기 상승 중
- 활발한 커뮤니티와 방대한 예제/컴포넌트 자료 존재

---

✅ 따라서 React와 Next.js 환경에서 TailwindCSS는 **생산성, 유지보수성, 성능 최적화** 면에서 매우 적합하며, 실무에서 빠르게 안정적인 UI를 구축할 수 있게 도와주는 **현대적인 선택지**입니다.

---

## 📚 참고자료

- [TailwindCSS 공식 문서](https://tailwindcss.com/docs/installation)

---
