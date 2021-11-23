import React from 'react';
import { storiesOf } from '@storybook/react';

import { Survey } from '../components/Survey';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
  const survey = {
    surveyId: 9,
    questions: [
      {
        questionId: '79e2a8e3-25ed-418f-bf8c-ea280faf6d21',
        type: 1,
        questionText: 'gjjgjg',
      },
      {
        questionId: '4dcd7f98-9bb4-40df-8455-e26a0dbe8c02',
        type: 2,
        questionText: 'gjg gj gj',
        options: [
          { key: 'red', value: '99c3be11-8835-40e4-8528-065ab4892758' },
          { key: 'blue', value: '0dbc3e47-f340-4edf-87c5-d3feb540e98e' },
          { key: 'green', value: '56db706c-69f1-48be-b9b4-7671fff23877' },
        ],
      },
    ],
  };

  return <Survey configuration={survey} />;
});
