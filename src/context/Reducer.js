export const Reducer = (state,action) =>{
    switch(action.type){
        case 'INCREMENT':
            return({...state,count:state.count + action.payload})  
        case 'DECREMENT':
            return({...state,count:state.count - action.payload})
        case 'SHOWONE':
            return({...state,count:state.count - action.payload})
        case 'REVERCEORDER':
            return({...state,count:state.count + action.payload})
        default:
            return({state})


    }

}