import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../reducers/tasksSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['register'],
};

const persistedReducer = persistReducer(persistConfig, tasksReducer);

const store = configureStore({
    reducer: {
        tasks: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
});

const persistor = persistStore(store);

export { store, persistor };
