import  appReducer, {showLoader, hideLoader} from './appReducer'

const defaultState = {
    loader: false
}

test('loader should be true', () => {
    let action = showLoader()
    let newState = appReducer(defaultState, action)

    expect(newState.loader).toBe(true);
});

test('loader should be false', () => {
    let action = hideLoader()
    let newState = appReducer(defaultState, action)

    expect(newState.loader).toBe(false);
});