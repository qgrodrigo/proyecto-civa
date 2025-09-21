// src/components/BusCard.jsx
import styles from './BusCard.module.css';

export default function BusCard({ bus, onClick, showEstado = true }) {
  return (
    <div className={styles.card} onClick={() => onClick?.(bus)}>
      <h3 className={styles.title}>Bus #{bus.numeroBus}</h3>
      <p><strong>Placa:</strong> {bus.placa}</p>
      <p><strong>Marca:</strong> {bus.marcaNombre}</p>
      <p><strong>Características:</strong> {bus.caracteristica}</p>
      {showEstado && <p><strong>Estado:</strong> {bus.estado ? 'Activo' : 'Inactivo'}</p>}
    </div>
  );
}
