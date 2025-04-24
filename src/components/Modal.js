import React from 'react';
import styled from 'styled-components';

// 전체 화면을 덮는 오버레이
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// 모달 컨테이너
const ModalContainer = styled.div`
  background-color: white;
  padding: 24px 16px;/* 상하 24px, 좌우 16px 패딩 */
  margin: 0 20px; /* 좌우 20px 마진 */
  border-radius: 8px;
  max-width: calc(100% - 40px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ModalTitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 16px;
  line-height: 1.2;
`;

const ModalText = styled.p`
  font-size: 17px;
  margin-bottom: 8px;
  line-height: 1.5;
`;

const ModalSubText = styled.p`
  font-size: 17px;
  color: #666;
  margin-bottom: 16px;
  line-height: 1.4;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 24px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  
  &:hover {
    background-color: #c0392b;
  }
`;

const Modal = ({ isOpen, onClose, title, content, buttonText }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalTitle>{title || '긴급상황인가요?'}</ModalTitle>
        <ModalText>{content || '15초후 SOS가 접수되어 현지에서 바로 도움을 받으실 수 있습니다.'}</ModalText>
        <ModalSubText>*중국 사용자의 경우 도움이 어려울수 있습니다.</ModalSubText>
        
        
        <Button onClick={onClose}>{buttonText || '긴급알람 취소'}</Button>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
