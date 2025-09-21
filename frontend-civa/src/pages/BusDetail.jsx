import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBusById } from '../api/busApi';
import BusCard from '../components/BusCard';
import ErrorMessage from '../components/ErrorMessage';
import styles from './BusDetail.module.css';

export default function BusDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bus, setBus] = useState(null);
  const [error, setError] = useState(null);
  const [alertShown, setAlertShown] = useState(false); // 👈 control del alert

  useEffect(() => {
    getBusById(id)
      .then(res => {
        setBus(res.data);
      })
      .catch(() => setError('Bus no encontrado'));
  }, [id]);

  useEffect(() => {
    if (bus && !alertShown) {
      alert(
        `Bus #${bus.numeroBus}\nPlaca: ${bus.placa}\nMarca: ${bus.marcaNombre}\nCaracterísticas: ${bus.caracteristica}\nEstado: ${bus.estado ? 'Activo' : 'Inactivo'}`
      );
      setAlertShown(true);
    }
  }, [bus, alertShown]);

  if (error) return <ErrorMessage message={error} />;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Detalle del Bus</h2>
      {bus && <BusCard bus={bus} />}
      <button className={styles.button} onClick={() => navigate('/')}>Volver</button>
    </div>
  );
}
