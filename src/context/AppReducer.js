export default function appReducer(state, action) {
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