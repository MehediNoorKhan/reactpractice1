
import React, { useState } from 'react';
import customerTop from '../../../assets/customer-top.png';
import backgroundQuotationMark from "../../../assets/reviewQuote.png";

const testimonials = [
  {
    name: 'Awlad Hossin',
    role: 'Senior Product Designer',
    text: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
    avatar: '',
  },
  {
    name: 'Rasel Ahamed',
    role: 'CTO',
    text: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
    avatar: '',
  },
  {
    name: 'Nasir Uddin',
    role: 'CEO',
    text: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
    avatar: '',
  },
  // Add more testimonials as needed
];

export default function CustomersSay() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  // Helper to get the correct index with wrap-around
  const getIndex = (idx) => (idx + total) % total;

  const handlePrev = () => setCurrent((prev) => getIndex(prev - 1));
  const handleNext = () => setCurrent((prev) => getIndex(prev + 1));

  return (
    <section style={{ background: '#f6f7f8', padding: '60px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={customerTop} alt="Customer Top" style={{ width: 120, marginBottom: 24 }} />
        <h2 style={{ fontWeight: 700, fontSize: 36, color: '#00332e', marginBottom: 12, textAlign: 'center' }}>
          What our customers are sayings
        </h2>
        <p style={{ color: '#444', fontSize: 16, maxWidth: 600, textAlign: 'center', marginBottom: 48 }}>
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>
      </div>

      {/* Carousel/Slider */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', minHeight: 320, borderRadius: 24, overflow: 'hidden' }}>
        {/* Left partial card */}
        <div style={{ flex: '0 0 120px', opacity: 0.2, zIndex: 1, transform: 'scale(0.92) translateY(30px)', pointerEvents: 'none', borderRadius: 24, overflow: 'hidden' }}>
          <TestimonialCard testimonial={testimonials[getIndex(current - 2)]} backgroundQuotationMark={backgroundQuotationMark} faded />
        </div>
        {/* Left card */}
        <div style={{ flex: '0 0 260px', margin: '0 12px', opacity: 0.5, zIndex: 2, transform: 'scale(0.96) translateY(18px)', pointerEvents: 'none', borderRadius: 24, overflow: 'hidden' }}>
          <TestimonialCard testimonial={testimonials[getIndex(current - 1)]} backgroundQuotationMark={backgroundQuotationMark} faded />
        </div>
        {/* Center card */}
        <div style={{ flex: '0 0 320px', margin: '0 16px', opacity: 1, zIndex: 3, transform: 'scale(1.08) translateY(-18px)', boxShadow: '0 8px 32px rgba(0,0,0,0.10)', position: 'relative', borderRadius: 24, overflow: 'hidden' }}>
          <TestimonialCard testimonial={testimonials[getIndex(current)]} backgroundQuotationMark={backgroundQuotationMark} />
        </div>
        {/* Right card */}
        <div style={{ flex: '0 0 260px', margin: '0 12px', opacity: 0.5, zIndex: 2, transform: 'scale(0.96) translateY(18px)', pointerEvents: 'none', borderRadius: 24, overflow: 'hidden' }}>
          <TestimonialCard testimonial={testimonials[getIndex(current + 1)]} backgroundQuotationMark={backgroundQuotationMark} faded />
        </div>
        {/* Right partial card */}
        <div style={{ flex: '0 0 120px', opacity: 0.2, zIndex: 1, transform: 'scale(0.92) translateY(30px)', pointerEvents: 'none', borderRadius: 24, overflow: 'hidden' }}>
          <TestimonialCard testimonial={testimonials[getIndex(current + 2)]} backgroundQuotationMark={backgroundQuotationMark} faded />
        </div>
      </div>

      {/* Carousel Controls */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 32, gap: 24 }}>
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          style={{
            ...navBtnStyle,
            background: '#fff',
            border: '2px solid #00332e',
            color: '#00332e',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}
          aria-label="Previous"
        >
          <span style={{ fontSize: 24, color: '#00332e', fontWeight: 700 }}>&#8592;</span>
        </button>
        <div style={{ display: 'flex', gap: 8 }}>
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: idx === current ? '#1bbf72' : '#d9e2e7',
                display: 'inline-block',
                transition: 'background 0.2s',
              }}
            />
          ))}
        </div>
        {/* Next Button */}
        <button
          onClick={handleNext}
          style={{
            ...navBtnStyle,
            background: '#CAEB66',
            color: '#00332e',
            border: '2px solid #CAEB66',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}
          aria-label="Next"
        >
          <span style={{ fontSize: 24, color: '#00332e', fontWeight: 700 }}>&#8594;</span>
        </button>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, backgroundQuotationMark, faded }) {
  if (!testimonial) return <div style={{ height: 220 }} />;
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 24,
        padding: '52px 32px 28px 32px',
        minHeight: 220,
        minWidth: 220,
        maxWidth: 340,
        boxShadow: faded ? 'none' : '0 4px 24px rgba(0,0,0,0.06)',
        position: 'relative',
        overflow: 'hidden',
        filter: faded ? 'blur(0.5px)' : 'none',
        transition: 'all 0.3s',
        opacity: faded ? 0.5 : 1,
        pointerEvents: faded ? 'none' : 'auto',
      }}
    >
      {/* Quotation mark background */}
      <img
        src={backgroundQuotationMark}
        alt="Quote"
        style={{
          position: 'absolute',
          top: 24,
          left: 24,
          width: 36,
          height: 36,
          opacity: 0.18,
          zIndex: 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ color: '#444', fontSize: 16, marginBottom: 32, minHeight: 60 }}>{testimonial.text}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 16 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#00332e', opacity: 0.95 }} />
          <div>
            <div style={{ fontWeight: 700, color: '#00332e', fontSize: 18 }}>{testimonial.name}</div>
            <div style={{ color: '#888', fontSize: 14 }}>{testimonial.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const navBtnStyle = {
  width: 40,
  height: 40,
  borderRadius: '50%',
  border: 'none',
  background: '#f2f6f7',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  transition: 'background 0.2s',
};
