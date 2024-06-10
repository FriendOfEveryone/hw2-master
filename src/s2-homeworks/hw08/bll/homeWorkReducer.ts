import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort':
        { // by name
            const newState = [...state]
            if (action.payload === 'up') {

                return [...newState.sort((a, b) => a.name.localeCompare(b.name))] // need to fix
            } else {
                return [...newState.sort((a, b) => a.name.localeCompare(b.name)).reverse()]
            }
        }
        case 'check': {
            return [...state.filter(u => u.age >= 18)]// need to fix
        }
        default:
            return state
    }
}
