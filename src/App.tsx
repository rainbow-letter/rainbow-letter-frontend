import Router from 'Router';

import { PetRegistrationProvider } from './contexts/PetRegistrationContext';

function App() {
  return (
    <PetRegistrationProvider>
      <Router />
    </PetRegistrationProvider>
  );
}

export default App;
