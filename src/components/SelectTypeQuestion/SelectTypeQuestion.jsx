import React from 'react';
import '../../styles.css';

export const SelectTypeQuestion = ({ values, question, onChange }) => {
  const fieldName = question.questionId;
  const selectOptions = question.options;

  return (
    <div className="questionItem">
      <p>{question.questionText}</p>
      <select name={fieldName} value={values[fieldName]} onChange={onChange}>
        {selectOptions.map((item) => (
          <option value={item.value}>{item.key}</option>
        ))}
      </select>
    </div>
  );
};
