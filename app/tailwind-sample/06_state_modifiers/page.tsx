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
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center py-10">
      <div
        className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-2
        *:outline-none has-[:invalid]:ring-3 has-[:invalid]:ring-red-100"
      >
        <input
          id="input-email"
          className="w-full rounded-full h-10 bg-gray-200 pl-5
          ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow
          placeholder:drop-shadow invalid:focus:ring-red-500 peer"
          type="email"
          required
          placeholder="이메일을 입력해주세요."
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block">
          이메일이 형식이 유효하지 않습니다.
        </span>
        <button
          type="button"
          className="text-white py-2 rounded-full active:scale-90 transition-transform font-medium md:px-10 bg-black peer-invalid:bg-red-100"
        >
          Login
        </button>
      </div>
    </main>
  );
}
