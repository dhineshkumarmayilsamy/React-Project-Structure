export default function appReducer(state, action) {

    console.log(JSON.stringify({
        ...state
    }));

    switch (action.type) {
        case "TOGGLE_SIDEBAR":
            return {
                ...state,
                isToggled: action.payload,

            };

        case "SET_DARKMODE":
            return {
                ...state,
                isDarkMode: action.payload,
            };
        default:
            return state;
    }
};