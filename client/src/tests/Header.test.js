import { render } from '@testing-library/react';
import Header from '../components/Header';

it('Header component renders without crashing', () => {
  const {getByText} = render(<Header />)
  expect(getByText('Dashboard')).toBeInTheDOM()
})