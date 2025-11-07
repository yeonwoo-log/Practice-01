// Login.jsx
import React, { useState } from 'react';

export function Login() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? '로그아웃' : '로그인'}
      </button>
      <p>{isLogin ? '환영합니다!' : '로그인이 필요합니다.'}</p>
    </div>
  );
}
