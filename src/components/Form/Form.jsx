import React, { useState, useEffect } from 'react';
import { QUESTION_TYPE } from '../../constnats/constants';
import { FreeTextQuestion } from '../FreeTextQuestion';
import { SelectTypeQuestion } from '../SelectTypeQuestion';

export const Form = ({ questions, onSubmit }) => {
  const [values, setValues] = useState(null);

  useEffect(() => {
    const newValues = questions.map((item) => ({
      [item.questionId]: '',
    }));

    const parsedNewValues = newValues.reduce(
      (obj, item) => Object.assign(obj, item),
      {},
    );

    setValues(parsedNewValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form>
        {values &&
          questions.map((question) => (
            <div className="questionContainer">
              {question.type === QUESTION_TYPE.FREE_TEXT ? (
                <FreeTextQuestion
                  values={values}
                  question={question}
                  onChange={handleChange}
                />
              ) : (
                <SelectTypeQuestion
                  values={values}
                  question={question}
                  onChange={handleChange}
                />
              )}
            </div>
          ))}
        <button onClick={() => onSubmit(values)}>Submit</button>
      </form>
    </div>
  );
};
