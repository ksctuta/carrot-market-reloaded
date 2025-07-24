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
    <main className="bg-gray-100 h-screen flex items-center justify-center py-10">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-2">
        <input
          className="w-full rounded-full h-10 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
          type="text"
          placeholder="검색어를 입력해주세요."
        />
        <button
          type="button"
          className="bg-black/50 text-white py-2 rounded-full active:scale-90 transition-transform font-medium outline-none"
        >
          Search
        </button>
      </div>
    </main>
  );
}
