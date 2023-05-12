import { Tweet } from './tweet.entity';

describe('Tweet Tests', () => {
  it('should create a Tweet', () => {
    const tweet = new Tweet({ content: 'Hello World', screenName: 'Matheus' });

    expect(tweet.content).toBe('Hello World');
    expect(tweet.screenName).toBe('Matheus');
  });
});
