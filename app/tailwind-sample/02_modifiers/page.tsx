// Handling Hover, Focus, and Other States
// 유틸리티를 사용하여 마우스 오버, 포커스 등에 대한 요소의 스타일을 지정합니다.
// https://tailwindcss.com/docs/hover-focus-and-other-states

// max-w-screen-sm
// 버전3: 하드코딩된 값(max-width: 640px) 사용
// 버전4: CSS 변수(var(--breakpoint-sm)) 사용
// ```
// .max-w-screen-sm {
// max-width: var(--breakpoint-sm) /* 40rem = 640px */;
// }
// ```
export default function SampleModifiers() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 py-10">
      <div className="flex w-full max-w-screen-sm flex-col gap-2 rounded-3xl bg-white p-5 shadow-lg">
        <input
          className="h-10 w-full rounded-full bg-gray-200 pl-5 ring ring-transparent transition-shadow outline-none placeholder:drop-shadow focus:ring-orange-500 focus:ring-offset-2"
          type="text"
          placeholder="검색어를 입력해주세요."
        />
        <button
          type="button"
          className="rounded-full bg-black/50 py-2 font-medium text-white transition-transform outline-none active:scale-90"
        >
          Search
        </button>
      </div>
    </main>
  );
}
