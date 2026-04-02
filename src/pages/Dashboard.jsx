import { useState, useEffect } from 'react';
import { collection, query, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase"; // 상위 폴더에 있으므로 ../ 사용

function Dashboard() {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('냉장');
  const [expiry, setExpiry] = useState('');

  // DB에서 데이터 실시간으로 가져오기
  useEffect(() => {
    const q = query(collection(db, "ingredients"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const itemArray = [];
      querySnapshot.forEach((doc) => {
        itemArray.push({ ...doc.data(), id: doc.id });
      });
      setIngredients(itemArray);
    });
    return () => unsubscribe();
  }, []);

  // 재료 추가 함수
  const addIngredient = async (e) => {
    e.preventDefault();
    if (!name || !expiry) return alert("내용을 채워주세요!");
    try {
      await addDoc(collection(db, "ingredients"), {
        name,
        category,
        expiryDate: expiry,
        createdAt: serverTimestamp()
      });
      setName(''); setExpiry('');
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* 사이드바 */}
      <aside className="w-64 bg-white border-r border-slate-100 p-6 hidden md:flex flex-col">
        <h1 className="text-2xl font-black text-emerald-500 mb-10 text-center">monFrigo</h1>
        <nav className="space-y-2">
          <button className="w-full text-left px-4 py-3 rounded-xl bg-emerald-50 text-emerald-600 font-bold">🧊 냉장고 관리</button>
          <button className="w-full text-left px-4 py-3 rounded-xl text-slate-400 font-bold hover:bg-slate-50">🪄 AI 레시피</button>
          <button className="w-full text-left px-4 py-3 rounded-xl text-slate-400 font-bold hover:bg-slate-50">📅 집밥 트래커</button>
        </nav>
      </aside>

      {/* 메인 영역 */}
      <main className="flex-1 p-8">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black text-slate-800">나의 냉장고</h2>
            <p className="text-slate-400">현재 <span className="text-emerald-500 font-bold">{ingredients.length}개</span>의 재료가 있습니다.</p>
          </div>
        </header>

        {/* 입력 폼 */}
        <form onSubmit={addIngredient} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 mb-10 flex flex-wrap gap-4 items-end">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs font-bold text-slate-400 mb-2 uppercase">Ingredient</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-slate-50 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="재료 이름" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-2 uppercase">Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="bg-slate-50 rounded-xl p-3 outline-none">
              <option>냉장</option>
              <option>냉동</option>
              <option>상온</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-2 uppercase">Expiry Date</label>
            <input type="date" value={expiry} onChange={(e) => setExpiry(e.target.value)} className="bg-slate-50 rounded-xl p-3 outline-none" />
          </div>
          <button type="submit" className="bg-slate-900 text-white font-bold py-3 px-8 rounded-xl hover:bg-emerald-500 transition-all shadow-lg">추가</button>
        </form>

        {/* 재료 리스트 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {ingredients.map((item) => (
            <div key={item.id} className="bg-white p-5 rounded-2xl border border-slate-100 flex justify-between items-center shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-2xl">
                  {item.category === '냉장' ? '🥦' : item.category === '냉동' ? '❄️' : '🍞'}
                </div>
                <div>
                  <h4 className="font-bold text-slate-700">{item.name}</h4>
                  <p className="text-xs text-slate-400">유통기한: {item.expiryDate}</p>
                </div>
              </div>
              <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-500 rounded-lg">{item.category}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;