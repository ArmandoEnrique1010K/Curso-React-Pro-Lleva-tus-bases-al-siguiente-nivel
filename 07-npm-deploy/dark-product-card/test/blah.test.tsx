import { createRoot } from 'react-dom/client';

describe('MyComponent', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.unmount();

    // console.log("Hola mundo")
  });
});
