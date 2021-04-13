import * as React from 'react';
import './constructor.css';

interface ConstructorProps {
  invalid: boolean;
  constructorField: string;
  setConstructorField: (value: string) => void;
  handleCreate: () => void;
}

const Constructor = ({
  invalid,
  constructorField,
  setConstructorField,
  handleCreate,
}: ConstructorProps): JSX.Element => {
  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      setConstructorField(e.target.value),
    []
  );

  return (
    <div className="constructor">
      <textarea
        className="constructor-text"
        wrap="off"
        rows={20}
        cols={30}
        value={constructorField}
        onChange={onChange}
      />
      <div className="constructor-buttons">
        <button type="button" onClick={handleCreate}>
          Apply
        </button>
        {invalid && <span className="invalid">Invalid schema</span>}
      </div>
    </div>
  );
};
export default Constructor;
