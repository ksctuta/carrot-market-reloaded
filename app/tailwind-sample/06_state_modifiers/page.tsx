// :has()
// 자식의 상태나 조건을 체크해서 해당 조건에 따라 부모 요소의 스타일을 지정할 수 있습니다.
// ```
// // checked된 input을 포함한 label 요소에 스타일 지정
// label:has(input:checked) {
// font-weight: bold;
// color: blue;
// }
// ```
// https://tailwindcss.com/docs/hover-focus-and-other-states#has

// :has() 수도 클래스는 Flexbox 이후 CSS에 추가된 가장 강력한 것입니다.
// 최초로 부모를 기준으로 하는 것이 아니라 자식을 기준으로 요소의 스타일을 지정할 수 있습니다.
// has()를 사용해서 코드에서 엄청난 양의 JavaScript를 대체했습니다.
// https://tailwindcss.com/blog/tailwindcss-v3-4#new-has-variant
export default function SampleStateModifiers() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 py-10 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100">
      <div className="flex w-full max-w-screen-sm flex-col gap-2 rounded-3xl bg-white p-5 shadow-lg *:outline-none has-[:invalid]:ring-3 has-[:invalid]:ring-red-100">
        <input
          id="input-email"
          className="peer h-10 w-full rounded-full bg-gray-200 pl-5 ring ring-transparent transition-shadow placeholder:drop-shadow focus:ring-green-500 focus:ring-offset-2 invalid:focus:ring-red-500"
          type="email"
          required
          placeholder="이메일을 입력해주세요."
        />
        <span className="hidden font-medium text-red-500 peer-invalid:block">
          이메일이 형식이 유효하지 않습니다.
        </span>
        <button
          type="button"
          className="rounded-full bg-black py-2 font-medium text-white transition-transform peer-invalid:bg-red-100 active:scale-90 md:px-10"
        >
          Login
        </button>
      </div>
    </main>
  );
}
