// Dark Mode
// Tailwind CSS를 사용하여 Dark Mode에서 사이트 스타일을 지정합니다.
// https://tailwindcss.com/docs/dark-mode
// 윈도우 OS 사용자 Dark모드 시스템[WindowOS-11기준] : 설정 => 개인 설정 => 모드 선택 => 다크 or 라이트

export default function SampleDarkMode() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center py-10 dark:bg-gray-700">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm dark:bg-gray-600">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-600 font-semibold -mx-1 dark:text-gray-400">
              In transit
            </span>
            <span className="text-4xl font-semibold dark:text-white">
              Coolblue
            </span>
          </div>
          <div className="size-12 rounded-full bg-orange-400" />
        </div>

        <div className="my-2 flex items-center gap-2">
          <span className="bg-green-400 text-white uppercase px-2.5 py-1.5 text-xs font-medium rounded-full hover:bg-green-500 hover:scale-125 transition">
            Today
          </span>
          <span className="dark:text-gray-100">9:30-10:30</span>
        </div>

        <div className="relative">
          <div className="absolute bg-gray-200 w-full rounded-full h-2" />
          <div className="absolute bg-green-500 w-2/3 rounded-full h-2" />
        </div>

        <div className="flex justify-between items-center mt-5 text-gray-600 dark:text-gray-300">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className="text-gray-400 dark:text-gray-500">Delivered</span>
        </div>
      </div>
    </main>
  );
}
