const initialState = {

    burger: { salad: 1, cheese: 1, beef: 1 }, // [{name:'salad',amount:1},{name:'cheese',amount:1},{name:'beef',amount:1}]

    menu: {

        salad: 10,

        cheese: 20,

        beef: 55

    },

    total: 85

}
const burgerReducer = (state = initialState, action) => {

    switch (action.type) {


        case 'ADD_BREADMID': {

            // const amount = state.burger[action.burgerItem] + action.amount;
            // const breadMidNew = {...state.burger, }
          

            const updateBreadMid = {...state.burger};
            updateBreadMid[action.burgerItem] += action.amount;
            if(updateBreadMid[action.burgerItem] >= 0){
                return {...state, burger: updateBreadMid}
            }
            return state
           
        }

        case 'ADD_SALAD': {

            const saladNew = action.value + 1;
            console.log(saladNew)
            const burgerNew = { ...state.burger, salad: saladNew };
            console.log(burgerNew)


            return { ...state, burger: burgerNew };



        }
        case 'ADD_CHEESE': {

            const cheeseNew = action.value + 1;
            console.log(cheeseNew)
            const burgerNew = { ...state.burger, cheese: cheeseNew };
            console.log(burgerNew)


            return { ...state, burger: burgerNew };

        }
        case 'ADD_BEEF': {

            const beefNew = action.value + 1;
            console.log(beefNew)
            const burgerNew = { ...state.burger, beef: beefNew };
            console.log(burgerNew)


            return { ...state, burger: burgerNew };

        }
        case 'SUBTRACT_SALAD': {

            if(action.value > 0) {
                const saladNew = action.value - 1;
                console.log(saladNew)
                const burgerNew = { ...state.burger, salad: saladNew };
                console.log(burgerNew)
    
    
                return { ...state, burger: burgerNew };
            }
            

        }
        case 'SUBTRACT_CHEESE': {

            if(action.value > 0) {
                const cheeseNew = action.value - 1;
                console.log(cheeseNew)
                const burgerNew = { ...state.burger, cheese: cheeseNew };
                console.log(burgerNew)
    
    
                return { ...state, burger: burgerNew };
            }
            

        }
        case 'SUBTRACT_BEEF': {

            if(action.value > 0) {
                const beefNew = action.value - 1;
                console.log(beefNew)
                const burgerNew = { ...state.burger, beef: beefNew };
                console.log(burgerNew)
    
    
                return { ...state, burger: burgerNew };
            }
            

        }

        case 'TINH_TONG': {

            return { ...state, total: action.value }
        }



        default:
            return state;
    }
}
export default burgerReducer