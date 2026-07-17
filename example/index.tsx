import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Chip, Button, Input, NotificationDialog, ConfirmDialog, Modal } from '../src';
import '../src/styles/global.css';

const App = () => {
  const [open, setOpen] = React.useState(false);
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div style={{ padding: '32px', position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Chip
        title="Meu componente Chip"
        width={300}
        color="orange"
        type="outlined"
      />
      
      <Button
        variant="normal"
        colors="orange__outline"
        width={400}
        onClick={() => setOpen(true)}
      >
        Abrir Notification Dialog
      </Button>
      
      <Button
        variant="normal"
        colors="orange"
        width={400}
        onClick={() => setOpenConfirm(true)}
      >
        Abrir Confirm Dialog
      </Button>
      
      <Button
        variant="normal"
        colors="white"
        width={400}
        onClick={() => setOpenModal(true)}
      >
        Abrir Modal
      </Button>
      
      <Input
        labelId="input-name"
        labelText="Name"
        width={300}
        height={80}
        icon="https://cdn3.iconfinder.com/data/icons/feather-5/24/settings-512.png"
        iconPosition="left"
        placeholder="Digite seu nome"
      />
      
      <NotificationDialog
        open={open}
        type="success"
        title="Meu título!"
        description="minha descrição do dialog é essa daqui."
        actionText="Fechar"
        handleClose={() => setOpen(false)}
      />

      <ConfirmDialog
        open={openConfirm}
        type="error"
        title="Meu título!"
        description="minha descrição para o confirm dialog."
        btnConfirmText="Confirmar"
        btnCancelText="Cancelar"
        handleConfirm={() => setOpenConfirm(false)}
        handleCancel={() => setOpenConfirm(false)}
      />

      <Modal
        open={openModal}
        width={450}
        height={600}
        btnConfirmText="Confirmar"
        btnCancelText="Cancelar"
        handleConfirm={() => setOpenModal(false)}
        handleCancel={() => setOpenModal(false)}
      >
        <h1>Meu Modal</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <h2>Meu sub título</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed cumque nulla exercitationem rerum eius in optio laborum, aut excepturi temporibus quam perferendis! Omnis tenetur incidunt aliquam voluptates vel delectus harum!
          </p>
        </div>
      </Modal>
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
