const Card = ({ children }) => {
  return (
    <div
      style={{
        borderRadius: '0.375rem',
        padding: '10px 10px',
        width: '95%',
        margin: '0 auto',
        marginTop: '15px',
        marginBottom: '15px',
        boxShadow:
          'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
      }}
    >
      {children}
    </div>
  );
};

export default Card;
