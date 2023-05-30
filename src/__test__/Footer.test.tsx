import { render } from '@testing-library/react';
import Footer from '../components/footer/footer';
import '@testing-library/jest-dom/extend-expect';

describe('Footer component', () => {
  test('renders the title "LET US HELP YOU"', () => {
    const { getByText } = render(<Footer />);
    const title = getByText('LET US HELP YOU');
    expect(title).toBeInTheDocument();
  });

  test('renders the title "ABOUT SOLOTO"', () => {
    const { getByText } = render(<Footer />);
    const title = getByText('ABOUT SOLOTO');
    expect(title).toBeInTheDocument();
  });

  test('renders the title "STAY CONNECTED"', () => {
    const { getByText } = render(<Footer />);
    const title = getByText('STAY CONNECTED');
    expect(title).toBeInTheDocument();
  });
});
