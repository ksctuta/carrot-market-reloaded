// 형제 상태에 따른 스타일 지정(peer-{modifier})
// 형제 요소의 상태에 따라 요소의 스타일을 지정해야 하는 경우 형제를 peer 클래스로 표시하고 peer-invalid와 같은 peer-* 수정자를 사용하여 대상 요소의 스타일을 지정합니다.

// 주의!
// peer 마커는 이전 형제에서만 사용할 수 있다는 점을 유의
// ```
// // 작동하지 않습니다. 이전 형제 자매만 peer로 표시될 수 있습니다.
// // input이 span보다 앞에 있어야 함
// < label >
// < span class="peer-invalid:text-red-500 ..." >Email< /span >
// < input type="email" class="peer ..."/ >
// < /label >
// ```

// https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-sibling-state
export default function SampleInvalid() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 py-10">
      <div className="flex w-full max-w-screen-sm flex-col gap-2 rounded-3xl bg-white p-5 shadow-lg md:flex-row">
        <input
          className="peer h-10 w-full rounded-full bg-gray-100 pl-5 ring ring-transparent transition-shadow outline-none placeholder:drop-shadow focus:ring-green-500 focus:ring-offset-2 invalid:focus:ring-red-500"
          type="email"
          required
          placeholder="Email address"
        />
        <span className="hidden font-medium text-red-500 peer-invalid:block">
          Email is required.
        </span>
        <button
          type="button"
          className="rounded-full bg-black py-2 font-medium text-white transition-transform outline-none peer-invalid:bg-red-100 active:scale-90 md:px-10"
        >
          Login
        </button>
      </div>
    </main>
  );
}
