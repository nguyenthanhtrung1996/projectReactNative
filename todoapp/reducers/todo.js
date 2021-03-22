const initialState = {
    list: [
            // { work: 'đi làm', isComplete: false },
            // { work: 'đi học', isComplete: true },
            // { work: 'đi chơi', isComplete: true },
            // { work: 'đi bơi', isComplete: false },
            // { work: 'đi cf', isComplete: false }
    ],
    arrayClone: [
        // { work: 'đi làm', isComplete: false },
        // { work: 'đi học', isComplete: true },
        // { work: 'đi chơi', isComplete: true },
        // { work: 'đi bơi', isComplete: false },
        // { work: 'đi cf', isComplete: false }
    ]
}

const addReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'ADD_WORK': {
            const newList = [...state.list];
            newList.push(action.payload);
            return {
                ...state,
                list: newList,
                arrayClone: newList
            };
        }
        case 'SET_ACTIVE_WORK': {
            const newList = [...state.arrayClone];
            const index = newList.findIndex( element => {
                if (element.work === action.payload.work) {
                  return true;
                }
              });
            newList[index].isComplete = !newList[index].isComplete;
            return {
                ...state,
                list: newList,
                arrayClone: newList
            }
        }
        case 'DELETE_WORK': {
            const stateTotal = [...state.arrayClone];
            const newList = stateTotal.filter(element => {
                return element.isComplete == false;
            });
            return {
                ...state,
                list: newList,
                arrayClone: newList
            }
        }
        case 'ALL_WORK': {
            console.log(state);
            const stateTotal = [...state.arrayClone];
            return {
                ...state,
                list: stateTotal
            }
        }
        case 'ACTIVE_WORK': {
            console.log(state.arrayClone);
            const stateTotal = [...state.arrayClone];
            const newList = stateTotal.filter(element => {
                return element.isComplete == false;
            });
            return {
                ...state,
                list: newList
            }
        }
        case 'COMPLETE_WORK': {
            console.log(state.arrayClone);
            const stateTotal = [...state.arrayClone];
            const newList = stateTotal.filter(element => {
                return element.isComplete == true;
            });
            return {
                ...state,
                list: newList
            }
        }
        case 'ALL_COMPLETE_WORK': {
            const newlist = [...state.arrayClone];
            for(const object of newlist){
                if(object.isComplete == false) object.isComplete = true;
            }
            return{
                ...state,
                list: newlist,
                arrayClone: newlist
            }

        }   
        case 'SET_STATE': {
            console.log(action.payload)
            const newlist = [...action.payload];
            console.log(newlist)
            return {
                ...state,
                list: newlist,
                arrayClone: newlist
            }
        }
        default:
            return state;
    }
}

export default addReducer;