// 그라데이션
// https://tailwindcss.com/docs/background-image#adding-a-linear-gradient
export default function SampleGradation() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 py-10 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100">
      <div className="flex w-full max-w-screen-sm flex-col gap-2 rounded-3xl bg-white p-5 shadow-lg md:flex-row">
        <input
          className="h-10 w-full rounded-full bg-gray-200 pl-5 ring ring-transparent transition-shadow outline-none placeholder:drop-shadow focus:ring-orange-500 focus:ring-offset-2"
          type="text"
          placeholder="검색어를 입력해주세요."
        />
        <button
          type="button"
          className="rounded-full bg-gradient-to-tr from-cyan-500 via-yellow-400 to-purple-400 py-2 font-medium text-white transition-transform outline-none active:scale-90 md:px-10"
        >
          Search
        </button>
      </div>
    </main>
  );
}
