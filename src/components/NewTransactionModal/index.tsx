import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./style";
import incomeImg from "../../assets/income.svg";
import autcomeImg from "../../assets/outcome.svg";
import CloseImg from "../../assets/close.svg";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={CloseImg} alt="Fechar Modal" />
      </button>

      <Container>
        <h2>Cadrastrar transação</h2>

        <input placeholder="Título" />

        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive = {type === 'deposit'}
            activeColor = 'green'
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive = {type === 'withdraw'}
            activeColor = 'red'
          >
            <img src={autcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categorias" />

        <button type="submit"> Cadastrar</button>
      </Container>
    </Modal>
  );
}
