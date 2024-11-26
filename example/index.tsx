import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Chip } from '../.';

const App = () => {
  return (
    <div>
      <Chip
        title="Meu componente Chip"
        width={300}
        color="orange"
        type="outlined"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
