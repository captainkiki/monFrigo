import { useState, useEffect } from 'react';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
function App() {
  const [ingredients, setIngredients] = useState([]);

  // ⭐ 여기서 '사용'을 시작합니다! (이 코드가 들어가는 순간 경고가 사라져요)
  useEffect(() => {
    // 1. 쿼리 만들기 (냉장고 재료 가져와!)
    const q = query(collection(db, "ingredients"));

    // 2. 실시간 감시 모드 켜기
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const itemArray = [];
      querySnapshot.forEach((doc) => {
        itemArray.push({ ...doc.data(), id: doc.id });
      });
      setIngredients(itemArray); // 데이터 바구니에 담기
    });

    return () => unsubscribe(); // 컴포넌트 닫힐 때 감시 종료
  }, []);

  return (
    <div>
      {/* 이제 ingredients를 화면에 뿌려주기만 하면 끝! */}
      <h1>내 냉장고에 {ingredients.length}개의 재료가 있어요.</h1>
    </div>
  );
}

export default App;