import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import TaskList from "./components/TaskList";

function App() {
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <TaskList />
          </PersistGate>
      </Provider>
  );
}

export default App;
