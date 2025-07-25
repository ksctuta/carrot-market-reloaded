// 상위 상태에 따른 스타일 지정(group-{modifier})
// 일부 상위 요소의 상태를 기반으로 요소의 스타일을 지정해야 하는 경우 상위 요소를 group 클래스로 표시하고 group-hover와 같은 group-* 수정자를 사용하여 대상 요소의 스타일을 지정합니다.
// https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state
export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 py-10 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100">
      <div className="flex w-full max-w-screen-sm flex-col gap-4 rounded-3xl bg-white p-5 shadow-lg">
        <div className="group flex flex-col">
          <input
            className="w-full bg-gray-100"
            placeholder="Write your Email"
          />
          <span className="hidden group-focus-within:block">
            Make sure it is a valid email...
          </span>
          <button type="button">Submit</button>
        </div>
      </div>
    </main>
  );
}
