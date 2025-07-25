// Functions & Directives
// 지시어(Directives)는 Tailwind CSS 프로젝트에 특별한 기능을 제공하는 CSS에서 사용할 수 있는 사용자 정의 Tailwind 관련 at-규칙입니다.
// https://tailwindcss.com/docs/functions-and-directives

// @tailwind
// Tailwind에서 기본적으로 제공하는 스타일들을 불러오는 지시문입니다.
// https://tailwindcss.com/docs/functions-and-directives#tailwind

// @apply
// Tailwind 유틸리티 클래스들을 내가 만든 CSS 클래스 안에 재사용할 수 있게 해줍니다.
// https://tailwindcss.com/docs/functions-and-directives#apply

// @layer
// Tailwind에게 “이 CSS는 어느 그룹(base, components, utilities)에 넣을지 알려주는 역할”을 합니다.
// https://tailwindcss.com/docs/functions-and-directives#layer

// 테일윈드 4버전에서는 아래가 @import "tailwindcss"; 한 줄로 축약되었습니다.
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 py-10 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100">
      <div className="flex w-full max-w-screen-sm flex-col gap-4 rounded-3xl bg-white p-5 shadow-lg">
        <div className="group flex flex-col">
          <button
            type="button"
            className="bs-submit cp-btnSubmit ut-font-size-30 ut-font-semibold"
          >
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}
