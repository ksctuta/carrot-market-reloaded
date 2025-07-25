// Dark Mode
// Tailwind CSS를 사용하여 Dark Mode에서 사이트 스타일을 지정합니다.
// https://tailwindcss.com/docs/dark-mode
// 윈도우 OS 사용자 Dark모드 시스템[WindowOS-11기준] : 설정 => 개인 설정 => 모드 선택 => 다크 or 라이트

export default function SampleDarkMode() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 py-10 dark:bg-gray-700">
      <div className="w-full max-w-screen-sm rounded-3xl bg-white p-5 shadow-lg dark:bg-gray-600">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="-mx-1 font-semibold text-gray-600 dark:text-gray-400">
              In transit
            </span>
            <span className="text-4xl font-semibold dark:text-white">
              Coolblue
            </span>
          </div>
          <div className="size-12 rounded-full bg-orange-400" />
        </div>

        <div className="my-2 flex items-center gap-2">
          <span className="rounded-full bg-green-400 px-2.5 py-1.5 text-xs font-medium text-white uppercase transition hover:scale-125 hover:bg-green-500">
            Today
          </span>
          <span className="dark:text-gray-100">9:30-10:30</span>
        </div>

        <div className="relative">
          <div className="absolute h-2 w-full rounded-full bg-gray-200" />
          <div className="absolute h-2 w-2/3 rounded-full bg-green-500" />
        </div>

        <div className="mt-5 flex items-center justify-between text-gray-600 dark:text-gray-300">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className="text-gray-400 dark:text-gray-500">Delivered</span>
        </div>
      </div>
    </main>
  );
}
