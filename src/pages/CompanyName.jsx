const CompanyName = ({ style = {} }) => {
  return (
    <span style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '2rem', ...style }}>
      <span style={{ color: '#f26522' }}>DC</span>{' '}
      <span style={{ color: '#eee' }}>CABLE</span>
    </span>
  );
};

export default CompanyName;
