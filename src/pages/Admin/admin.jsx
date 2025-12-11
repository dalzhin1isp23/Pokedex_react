import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import {
  createPokemonThunk,
  updateSpriteThunk,
  deletePokemonThunk,
} from '../../features/Admin/adminSlices'; 

import {
  showNotification,
  clearNotification,
} from '../../features/Ui/uiSlice'; 

export const AdminPage = () => {
  const dispatch = useDispatch();
  const { notification } = useSelector((state) => state.ui);
  const { isLoading } = useSelector((state) => state.admin); 
  const [newName, setNewName] = useState('');
  const [updateId, setUpdateId] = useState('');
  const [newSprite, setNewSprite] = useState('');
  const [deleteId, setDeleteId] = useState('');


  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch(clearNotification());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification, dispatch]);


  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    const name = newName.trim();
    if (!name) {
      dispatch(showNotification({ message: 'Имя не может быть пустым', type: 'error' }));
      return;
    }

    try {
      await dispatch(createPokemonThunk(name)).unwrap();
      dispatch(showNotification({ message: 'Покемон успешно добавлен!', type: 'success' }));
      setNewName('');
    } catch (error) {
      dispatch(showNotification({ message: error || 'Не удалось добавить покемона', type: 'error' }));
    }
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    const id = Number(updateId);
    const spriteUrl = newSprite.trim();

    if (isNaN(id) || id <= 0 || !spriteUrl) {
      dispatch(showNotification({ message: 'Укажите корректный ID и URL спрайта', type: 'error' }));
      return;
    }

    try {
      await dispatch(updateSpriteThunk({ id, spriteUrl })).unwrap();
      dispatch(showNotification({ message: 'Спрайт обновлён!', type: 'success' }));
      setUpdateId('');
      setNewSprite('');
    } catch (error) {
      dispatch(showNotification({ message: error || 'Не удалось обновить спрайт', type: 'error' }));
    }
  };

  const handleSubmitDelete = async (e) => {
    e.preventDefault();
    const id = Number(deleteId);

    if (isNaN(id) || id <= 0) {
      dispatch(showNotification({ message: 'Укажите корректный ID', type: 'error' }));
      return;
    }

    if (!window.confirm('Вы уверены, что хотите удалить покемона?')) return;

    try {
      await dispatch(deletePokemonThunk(id)).unwrap();
      dispatch(showNotification({ message: 'Покемон удалён!', type: 'success' }));
      setDeleteId('');
    } catch (error) {
      dispatch(showNotification({ message: error || 'Не удалось удалить покемона', type: 'error' }));
    }
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '25px',
    padding: '50px',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const inputStyle = {
    display: 'block',
    width: '90%',
    padding: '8px',
    margin: '10px',
    borderRadius: '25px',
    border: '1px solid #ccc',
  };

  const buttonStyle = (isLoading) => ({
    padding: '8px 16px',
    backgroundColor: isLoading ? '#ccc' : '#f71a1a',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: isLoading ? 'not-allowed' : 'pointer',
    marginTop: '10px',
  });

  return (
    <div className="content" style={{ padding: '20px' }}>

      {notification && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '12px 24px',
            borderRadius: '8px',
            backgroundColor: notification.type === 'success' ? '#4caf50' : '#f44336',
            color: 'white',
            zIndex: 1000,
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          }}
        >
          {notification.message}
        </div>
      )}

      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '30px' }}>
        Админ-панель
      </h1>


      <div style={cardStyle}>
        <h3>Добавить покемона</h3>
        <form onSubmit={handleSubmitCreate}>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Имя покемона"
            style={inputStyle}
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            style={buttonStyle(isLoading)}
          >
            {isLoading ? 'Добавление...' : 'Добавить'}
          </button>
        </form>
      </div>

      <div style={cardStyle}>
        <h3>Изменить спрайт</h3>
        <form onSubmit={handleSubmitUpdate}>
          <input
            type="number"
            value={updateId}
            onChange={(e) => setUpdateId(e.target.value)}
            placeholder="ID покемона"
            style={inputStyle}
            required
          />
          <input
            type="url"
            value={newSprite}
            onChange={(e) => setNewSprite(e.target.value)}
            placeholder="Новый URL спрайта"
            style={inputStyle}
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            style={buttonStyle(isLoading)}
          >
            {isLoading ? 'Обновление...' : 'Обновить'}
          </button>
        </form>
      </div>

      <div style={cardStyle}>
        <h3>Удалить покемона</h3>
        <form onSubmit={handleSubmitDelete}>
          <input
            type="number"
            value={deleteId}
            onChange={(e) => setDeleteId(e.target.value)}
            placeholder="ID покемона"
            style={inputStyle}
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            style={buttonStyle(isLoading)}
          >
            {isLoading ? 'Удаление...' : 'Удалить'}
          </button>
        </form>
      </div>
    </div>
  );
};