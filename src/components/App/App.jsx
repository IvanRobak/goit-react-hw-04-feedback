import React, { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';
import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = options => {
    this.setState(prevState => ({ [options]: prevState[options] + 1 }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = Math.round((good / totalFeedback) * 100);
    return positiveFeedbackPercentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 36,
          color: '#010101',
        }}
      >
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.handleButtonClick}
            />
          </Section>
          {totalFeedback > 0 ? (
            <Section title="Statistics">
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback}
                positivePercentage={positiveFeedbackPercentage}
              />
            </Section>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Container>
      </div>
    );
  }
}
export default App;
