// state argument is not app state, but the state this reducer is responsible for
// we can't return from here undefined, so if the sate is undefined, we assign to it null
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload // which is the selected book
    }
    return state
}