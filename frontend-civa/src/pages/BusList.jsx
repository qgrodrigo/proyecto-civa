import { useEffect, useState } from 'react';
import { getAllBuses } from '../api/busApi';
import BusCard from '../components/BusCard';
import Pagination from '../components/Pagination';
import ErrorMessage from '../components/ErrorMessage';
import styles from './BusList.module.css';
import { useNavigate } from 'react-router-dom';

export default function BusList() {
  const [buses, setBuses] = useState([]);
  const [page, setPage] = useState(0);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getAllBuses(page)
      .then(res => {
        setBuses(res.data.content),
        setTotalPages(res.data.totalPages);
      })
      .catch(() => setError('Error al cargar los buses'));
  }, [page]);

  if (error) return <ErrorMessage message={error} />;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Listado de Buses</h2>
      <div className={styles.grid}>
        {buses.map(bus => (
          <BusCard key={bus.busId} bus={bus} onClick={() => navigate(`/bus/${bus.busId}`)} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
    </div>
  );
}
