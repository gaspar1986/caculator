const counter = (state = 0, action) => {
    switch (action.type) {
        case 'add':
            return action.first + action.second;
        case 'minus':
            return action.first - action.second;
        case 'mutiple':
            return action.first * action.second;
        case 'divided':
            return action.first / action.second;
        default:
            return state;
    }
}
export default counter;