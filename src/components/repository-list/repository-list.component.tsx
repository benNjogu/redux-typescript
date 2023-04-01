import { useState } from 'react';
import { useSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const RepositoryList = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useSelector((state) => state.repositories);

  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} type="text" onChange={handleTermChange} />
        <button className="btn btn-primary btn-sm">Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((item) => <li key={item}>{item}</li>)}
    </div>
  );
};

export default RepositoryList;
