import React, { useState } from 'react';
import Modal from '../components/Modal';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
      <div className="max-w-4xl mx-auto p-5">
         <div className="about-container">
            <h1 className="text-2xl font-bold mb-4">홈 페이지</h1>
            <p className="text-base mb-6">메인 페이지 내용입니다.</p>
          
        <button 
        onClick={openModal} 
      >
        모달 테스트
      </button>
         </div>
    
      {isModalOpen && <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title="긴급상황인가요?" 
        content="15초후 SOS가 접수되어 현지에서 바로 도움을 받으실 수 있습니다." 
        buttonText="확인" 
      />}
    </div>
  );
}

export default Home; 