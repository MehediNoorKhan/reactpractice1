import React, { useRef } from 'react';

export default function VerifyCode() {
  // Refs for each input
  const inputs = Array.from({ length: 6 }, () => useRef(null));

  // Handle input change and auto-focus
  const handleChange = (e, idx) => {
    const value = e.target.value;
    if (value.length === 1 && idx < 5) {
      inputs[idx + 1].current.focus();
    }
    if (value.length > 1) {
      e.target.value = value[0];
    }
  };

  // Handle backspace to move focus
  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && !e.target.value && idx > 0) {
      inputs[idx - 1].current.focus();
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ width: 350, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 32, fontFamily: 'Urbanist, sans-serif' }}>
        <h1 style={{ fontWeight: 700, fontSize: 36, marginBottom: 8 }}>Enter Code</h1>
        <p style={{ color: '#444', fontSize: 15, marginBottom: 28, marginTop: 0 }}>
          Enter 6 digit code that we sent in your email address
        </p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 24 }}>
          {Array.from({ length: 6 }).map((_, idx) => (
            <input
              key={idx}
              ref={inputs[idx]}
              type="text"
              maxLength={1}
              inputMode="numeric"
              style={{
                width: 44,
                height: 44,
                border: '1.5px solid #e5e7eb',
                borderRadius: 8,
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 500,
                outline: 'none',
                background: '#fff',
                transition: 'border 0.2s',
              }}                                                                                                                                                                                                                                                                                                                                                                                                                                           
              onChange={e => handleChange(e, idx)}
              onKeyDown={e => handleKeyDown(e, idx)}
            />
          ))}
        </div>                                                                                                                           
        <button
          style={{
            width: '100%',
            background: '#D6F57A',
            color: '#222',
            border: 'none',
            borderRadius: 6,
            padding: '10px 0',
            fontWeight: 500,
            fontSize: 16,
            cursor: 'pointer',
            marginTop: 4,
            boxShadow: '0 1px 2px rgba(0,0,0,0.01)',
            transition: 'background 0.2s',
          }}
        >
          Verify Code
        </button>
      </div>
    </div>
  );
}
