import * as React from 'react';
import Form from '../form/Form';
import './app.css';
import Tabs from '../tabs/Tabs';
import Constructor from '../constructor/Constructor';
import parsing from '../utils/validation';
import example from './example';

const App = (): JSX.Element => {
  const [formData, setFormData] = React.useState(null);
  const [constructorField, setConstructorField] = React.useState('');
  const [invalid, setInvalid] = React.useState(false);
  const handleCreate = (): void => {
    try {
      const parsedSchema = JSON.parse(constructorField, parsing);
      setFormData(parsedSchema);
    } catch (err) {
      setInvalid(true);
    }
  };
  const pages = [
    {
      title: 'Config',
      content: (
        <Constructor
          invalid={invalid}
          constructorField={constructorField}
          setConstructorField={setConstructorField}
          handleCreate={handleCreate}
        />
      ),
    },
    { title: 'Result', content: <Form formSchema={formData} /> },
    { title: 'Example', content: <pre>{example}</pre> },
  ];
  return <Tabs pages={pages} />;
};
export default App;
