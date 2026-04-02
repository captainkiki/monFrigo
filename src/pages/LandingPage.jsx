import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      {/* 배경에 살짝 은은한 그라데이션 원형 효과 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-[60%] left-[70%] w-[30%] h-[30%] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <span className="text-emerald-600 font-black tracking-widest mb-4 block uppercase text-sm">Smart Kitchen Companion</span>
      <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter">
        mon<span className="text-emerald-500 text-shadow-sm">Frigo</span>
      </h1>
      <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-md leading-relaxed">
        버려지는 식재료 없이, <br/>
        오늘 당신의 냉장고를 스마트하게 관리하세요.
      </p>

      <button 
        onClick={() => navigate('/dashboard')}
        className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-emerald-500 hover:scale-105 transition-all shadow-2xl"
      >
        내 냉장고 열기 🧊
      </button>

      <div className="mt-20 grid grid-cols-3 gap-12 text-slate-400">
        <div><p className="font-black text-slate-900 text-2xl">0%</p><p className="text-xs uppercase font-bold">Food Waste</p></div>
        <div><p className="font-black text-slate-900 text-2xl">AI</p><p className="text-xs uppercase font-bold">Recipe</p></div>
        <div><p className="font-black text-slate-900 text-2xl">100%</p><p className="text-xs uppercase font-bold">Home Meal</p></div>
      </div>
    </div>
  );
}

export default LandingPage;