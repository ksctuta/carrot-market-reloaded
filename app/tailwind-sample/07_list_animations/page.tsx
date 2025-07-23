// First, last, odd, and even
// first, last variants를 통해 첫 번째 자식 또는 마지막 자식인 요소에 스타일을 지정합니다.
// https://tailwindcss.com/docs/hover-focus-and-other-states#first-last-odd-and-even

// Animation
// CSS 애니메이션으로 요소를 애니메이션화 하기 위한 유틸리티입니다.
// ```
// animate-spin
// animate-ping
// animate-pulse
// animate-bounce
// animate-none
// ...
// ```
// https://tailwindcss.com/docs/animation

// :empty
// :empty CSS 수도 클래스는 자식이 없는 모든 요소를나타냅니다.
// 하위 항목은 엘리먼트 노드이거나 텍스트(공백 포함)일 수 있습니다.
// https://developer.mozilla.org/en-US/docs/Web/CSS/:empty
export default function SampleListAnimations() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center py-10">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-2 ">
        {["피카츄", "라이츄", "파이리", "꼬부기", ""].map((person, index) => (
          <div
            key={index}
            className="flex items-center gap-5 p-2.5 rounded-xl pb-5 border-b-1 odd:bg-gray-100 even:bg-cyan-100 last:border-0 last:border-b-0"
          >
            <div className="size-10 bg-blue-400 rounded-full" />

            <span className="text-lg font-medium animate-bounce empty:w-24 empty:h-5 empty:rounded-full empty:animate-pulse empty:bg-gray-300">
              {person}
            </span>

            <div className="size-6 bg-red-500 text-white flex items-center justify-center rounded-full relative    ">
              <span className="z-10">{index}</span>
              <div className="size-6 bg-red-500 rounded-full absolute animate-ping" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
