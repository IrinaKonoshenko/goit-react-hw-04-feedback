import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Secion/Section';
import { Notification } from './Notification/Notification';
import { useState } from 'react';
import { useMemo } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = useMemo(() => {
    return good + neutral + bad;
  }, [good, neutral, bad]);

  const percentage = useMemo(() => {
    if (total === 0) {
      return 0;
    }
    return (good / total) * 100;
  }, [good, total]);

  const onLeaveFeedback = type => {
    switch (type) {
      case 'good': {
        setGood(good + 1);
        break;
      }
      case 'neutral': {
        setNeutral(neutral + 1);
        break;
      }
      case 'bad': {
        setBad(bad + 1);
        break;
      }
      default: {
        setGood(0);
        setNeutral(0);
        setBad(0);
        break;
      }
    }
  };

  return (
    <div className="main">
      <div className="main__content">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad', 'clear']}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            />
          ) : (
            <div className="empty">
              <Notification message="There is no feedback" />
            </div>
          )}
        </Section>
      </div>
    </div>
  );
};
