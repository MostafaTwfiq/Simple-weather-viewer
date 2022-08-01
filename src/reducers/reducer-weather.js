import { FETCH_WEATHER } from "../actions";

export default function(state = [], action) {
    console.log(action);
    switch(action.type) {
        case FETCH_WEATHER: {
            if (action.payload.code !== "ERR_BAD_REQUEST") {
                return [action.payload.data, ...state];
            }
        }
    }

    return state
}