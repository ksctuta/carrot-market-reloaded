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
    <main className="flex h-screen items-center justify-center bg-gray-100 py-10 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100">
      <div className="flex w-full max-w-screen-sm flex-col gap-2 rounded-3xl bg-white p-5 shadow-lg">
        {["피카츄", "라이츄", "파이리", "꼬부기", ""].map((person, index) => (
          <div
            key={index}
            className="flex items-center gap-5 rounded-xl border-b-1 p-2.5 pb-5 last:border-0 last:border-b-0 odd:bg-gray-100 even:bg-cyan-100"
          >
            <div className="size-10 rounded-full bg-blue-400" />

            <span className="animate-bounce text-lg font-medium empty:h-5 empty:w-24 empty:animate-pulse empty:rounded-full empty:bg-gray-300">
              {person}
            </span>

            <div className="relative flex size-6 items-center justify-center rounded-full bg-red-500 text-white">
              <span className="z-10">{index}</span>
              <div className="absolute size-6 animate-ping rounded-full bg-red-500" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
