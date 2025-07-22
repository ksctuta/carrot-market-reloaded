export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center py-10">

      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-2">
        <input className="w-full rounded-full h-10 bg-gray-200 pl-5 outline-none 
          ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow 
          placeholder:drop-shadow"
          type="text"
          placeholder="검색어를 입력해주세요." />
        <button className="bg-black/50 text-white py-2 rounded-full active:scale-90 transition-transform font-medium outline-none">Search</button>
      </div>

    </main>
  );
};