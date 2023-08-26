import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return (good / totalFeedback) * 100;
  };

  render() {
    const PositiveFeedbackPercentage = Math.round(
      this.countPositiveFeedbackPercentage()
    );
    return (
      <>
        <Section
          title="Please leave feedback"
          totalFeedback={this.countTotalFeedback()}
          positiveFeedbackPercentage={PositiveFeedbackPercentage}
          state={this.state}
          click={this.handleClick}
        />
        <GlobalStyle />
      </>
    );
  }
}
