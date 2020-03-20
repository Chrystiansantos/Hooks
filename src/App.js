import React, { useState, useEffect } from 'react';

function App() {
  const [tech, setTech] = useState(['React Js', 'React Native']);
  const [newTech, setNewTech] = useState('');
  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }
  /* Dessa maneira ele ira executar apenas uma vez */
  useEffect(() => {
    const storageTech = JSON.parse(localStorage.getItem('tech'));
    if (storageTech) {
      setTech(storageTech);
    }
    /* COMPONENT WillUnmount  */
    /* Sera executada sempre que um component deixar de existir */
    return () => {};
  }, []);
  /* Assim ele ira ficar monitorando o array de tech, sempre
  que houver uma alteração ele executara */
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
