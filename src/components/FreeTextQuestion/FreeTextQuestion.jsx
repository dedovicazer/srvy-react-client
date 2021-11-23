import React from 'react';
import '../../styles.css';

export const FreeTextQuestion = ({ values, question, onChange }) => {
  const fieldName = question.questionId;

  return (
    <div className="questionItem">
      <p>{question.questionText}</p>
      <textarea
        name={fieldName}
        value={values[fieldName]}
        onChange={onChange}
      />
    </div>
  );
};
