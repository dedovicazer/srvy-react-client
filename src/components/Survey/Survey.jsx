import React, { useState } from 'react';
import '../../styles.css';
import { Form } from '../Form';
import { QUESTION_TYPE } from '../../constnats/constants';

export const Survey = ({ configuration }) => {
  const { surveyId, questions } = configuration;

  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const getPreparedRequest = (values) => {
    return questions.map((question) => {
      if (question.type === QUESTION_TYPE.FREE_TEXT) {
        return {
          questionId: question.questionId,
          type: question.type,
          answer: values[question.questionId],
        };
      }

      const selectedOption = question.options.find(
        (item) => item.value === values[question.questionId],
      );

      return {
        questionId: question.questionId,
        type: question.type,
        selectedOption,
      };
    });
  };

  const sendRequest = (result) => {
    const bodyData = { result };

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(bodyData),
    };

    fetch(`http://localhost:3001/api/v1/surveys/${surveyId}/results/`, options)
      .then(() => {
        console.log('Success');
      })
      .catch((errors) => Promise.reject(errors));
  };

  const handleSubmit = (values) => {
    const preparedResults = getPreparedRequest(values);

    sendRequest(preparedResults);

    handleClose();
  };

  return (
    <div id="container">
      {isOpen && surveyId && questions && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span onClick={handleClose} className="close">
              &times;
            </span>
            <h4>Simple Survey</h4>
            <Form questions={questions} onSubmit={handleSubmit} />
          </div>
        </div>
      )}
    </div>
  );
};
