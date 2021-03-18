import axios from "axios"


export const addNewWork = (Work) => {
    return {
        type: 'ADD_WORK',
        payload: Work
    }
}

export const setActiveWork = (Work) => {
    return {
        type: 'SET_ACTIVE_WORK',
        payload: Work
    }
}

export const deleteWork = (Work) => {
    return {
        type: 'DELETE_WORK',
        payload: Work
    }
}

export const allWork = (Work) => {
    return {
        type: 'ALL_WORK',
        payload: Work
    }
}

export const activeWork = (Work) => {
    return {
        type: 'ACTIVE_WORK',
        payload: Work
    }
}

export const completeWork = (Work) => {
    return {
        type: 'COMPLETE_WORK',
        payload: Work
    }
}

export const allCompleteWork = () => {
    return {
        type: 'ALL_COMPLETE_WORK',
    }
}

export const setState = (items) => {
    console.log(items);
    return {
        type: 'SET_STATE',
        payload: items
    }
}

export const fetchToDo = () => async (dispatch) => {
    const res = await axios.get('https://60508dbf5346090017670030.mockapi.io/api/v1/Item');
    console.log(res.data);
    dispatch(setState(res.data));
}

export const postToDo = (data) => async (dispatch) => {
    await axios.post(`https://60508dbf5346090017670030.mockapi.io/api/v1/Item`, data)
    .then(res => 
        dispatch(addNewWork(res.data)))
    .catch(error => {
        console.log(error)
    });
}

export const putToDo = (index, data) => async (dispatch) => {
    console.log(index, data);
    const newData = { ...data, isComplete: !data.isComplete };
    await axios.put(`https://60508dbf5346090017670030.mockapi.io/api/v1/Item/${index}`, newData)
    .then(res => {
        console.log(res.data);
        dispatch(setActiveWork(res.data));
    })
    .catch(error => {
        console.log(error)
    });
}

export const deleteToDo = (array) => async (dispatch) => {
    const newList = array.filter(element => {
        return element.isComplete == false;
    });
    console.log(newList);
    axios.all()
    
    await axios.patch(`https://60508dbf5346090017670030.mockapi.io/api/v1/Item/`, { ...newList })
    .then(res => 
        // dispatch(setActiveWork(res.data)))
        console.log(res.data))
    .catch(error => {
        console.log(error)
    });
}

