export const createProject = (project) => {
    return (dispatch, getState) => {
        //make async call to database here
        dispatch({
            type: 'ADD_PROJECT',
            project: project
        })
    }
}