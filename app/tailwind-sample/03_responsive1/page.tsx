// Responsive Design
// 반응형 유틸리티 variants를 사용하여 적응형 사용자 인터페이스를 구축합니다.
// 반응형으로 작업 시 작은사이즈에서부터 시작하여 큰사이즈로 맞춥니다.
// https://tailwindcss.com/docs/responsive-design

// Responsive
// ```
// sm 640px @media (min-width: 640px) { ... }
// md 768px @media (min-width: 768px) { ... }
// lg 1024px @media (min-width: 1024px) { ... }
// xl 1280px @media (min-width: 1280px) { ... }
// 2xl 1536px @media (min-width: 1536px) { ... }
// ```
export default function SampleResponsive() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 py-10 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100">
      <div className="flex w-full max-w-screen-sm flex-col gap-2 rounded-3xl bg-white p-5 shadow-lg">
        <input
          className="h-10 w-full rounded-full bg-gray-200 pl-5 ring ring-transparent transition-shadow outline-none placeholder:drop-shadow focus:ring-orange-500 focus:ring-offset-2"
          type="text"
          placeholder="검색어를 입력해주세요."
        />
        <button
          type="button"
          className="rounded-full bg-black/50 py-2 font-medium text-white transition-transform outline-none active:scale-90 md:px-10"
        >
          Search
        </button>
      </div>
    </main>
  );
}
