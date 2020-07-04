export const initialState =[ 
    {
        item: 'List tasks!',
        completed: false,
        id: Date.now(),
        todos: []
}
]

export const TodoReducer = (state, action) =>{

    switch(action.type){
        case "ADD_TODO":
            const newTodo = {
                item:action.payload,
                id:Date.now(),
                completed:false
            }
            return( [ ...state, newTodo])

            case "COMPLETE":
                return state.map(e => e.id ===action.id ? { ...e, completed: !e.completed } : e)
                
                case "CLEAR" :
                    return state.filter(e => !e.completed);
            default:
    return state
        }
            
    };
