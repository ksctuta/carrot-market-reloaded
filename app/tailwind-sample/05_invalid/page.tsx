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
    <main className="bg-gray-100 h-screen flex items-center justify-center py-10">
      <div className="bg-white md:flex-row shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-2">
        <input
          className="w-full rounded-full h-10 bg-gray-100 pl-5 outline-none ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
          type="email"
          required
          placeholder="Email address"
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block">
          Email is required.
        </span>
        <button
          type="button"
          className="text-white py-2 rounded-full active:scale-90 transition-transform font-medium outline-none md:px-10
          bg-black peer-invalid:bg-red-100"
        >
          Login
        </button>
      </div>
    </main>
  );
}
