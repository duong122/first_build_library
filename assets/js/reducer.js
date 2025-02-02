
const init = {
    cars: ['Lamboghini']
}

export default function(state = init, action, args) {
    switch (action) {
        case 'ADD': 
            const [newCar] = args
            return {
                ...state,
                cars: [...state.cars, newCar]
            }
        default: 
            return state
    }
}