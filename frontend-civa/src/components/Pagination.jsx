import styles from './Pagination.module.css';

export default function Pagination({ page, setPage, totalPages }) {
  return (
    <div className={styles.pagination}>
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 0}
      >
        Anterior
      </button>
      <span>Página {page + 1} de {totalPages}</span>
      <button
        onClick={() => setPage(page + 1)}
        disabled={page + 1 >= totalPages}
      >
        Siguiente
      </button>
    </div>
  );
}
