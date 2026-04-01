function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* 상단 네비게이션 */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-10 shadow-sm">
        <h1 className="text-2xl font-black text-emerald-500 tracking-tight">夢 집밥.zip</h1>
        <div className="flex space-x-4">
          <button className="text-slate-500 font-medium hover:text-emerald-500 transition-colors">내 냉장고</button>
          <button className="text-slate-500 font-medium hover:text-emerald-500 transition-colors">레시피</button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-6 space-y-8">
        {/* 메인 헤드라인 */}
        <section className="text-center py-10">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-2">오늘 뭐 해먹지? 🍳</h2>
          <p className="text-slate-500 text-lg">냉장고 속 재료로 만드는 마법 같은 식사</p>
        </section>

        {/* 냉장고 카드 섹션 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">🧊</span>
              <h3 className="text-xl font-bold text-slate-700">냉장고 속 재료</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex justify-between items-center p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                <span className="font-medium text-emerald-800">🥬 양상추</span>
                <span className="text-xs bg-emerald-200 text-emerald-700 px-2 py-1 rounded-full font-bold">신선</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-rose-50 rounded-xl border border-rose-100">
                <span className="font-medium text-rose-800">🥓 베이컨</span>
                <span className="text-xs bg-rose-200 text-rose-700 px-2 py-1 rounded-full font-bold italic underline">D-1 🔥</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-200 opacity-60">
                <span className="font-medium text-slate-400">+ 새 재료 추가하기</span>
              </li>
            </ul>
          </div>

          {/* 추천 요리 카드 */}
          <div className="bg-emerald-500 rounded-3xl p-8 shadow-xl text-white flex flex-col justify-between transform hover:-translate-y-2 transition-transform cursor-pointer">
            <div>
              <h3 className="text-2xl font-bold mb-2">Free-Go! 🚀</h3>
              <p className="opacity-90 leading-relaxed text-emerald-50">
                지금 냉장고에 있는 재료로<br />
                가장 맛있는 레시피를 찾아드릴까요?
              </p>
            </div>
            <button className="mt-8 bg-white text-emerald-600 font-black py-4 px-6 rounded-2xl shadow-lg hover:bg-emerald-50 transition-colors">
              추천 받기
            </button>
          </div>
        </div>

        {/* 하단 푸터 느낌 */}
        <footer className="text-center py-10 opacity-30 text-sm italic">
          &copy; 2026 Mon Frigo Project. 꿈을 담는 냉장고.
        </footer>
      </main>
    </div>
  )
}

export default App