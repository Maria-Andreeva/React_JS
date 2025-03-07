export const middleware = (store) => (next) => (action) => {
    console.log("Действие: ", action);
    console.log("Состояние (до): ", store.getState());

    const result = next(action);

    console.log("Состояние (после): ",store.getState());
    return result;
};
