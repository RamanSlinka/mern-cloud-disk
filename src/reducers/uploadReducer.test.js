import uploadReducer, {hideUploader, showUploader,
    addUploadFile, removeUploadFile} from './uploadReducer';

const file =  {id: 1, name: "file", process: 0};

const defaultState = {
    IsVisible : false,
    files : []
};

const defaultState2 = {
    IsVisible : false,
    files : [file]
};

test('uploader should be false', () => {
    let action = hideUploader();
    let newState = uploadReducer(defaultState, action)

    expect(newState.isVisible).not.toBe(true)
    expect(newState.isVisible).toBe(false)
})

test('uploader should be true', () => {
    let action = showUploader();
    let newState = uploadReducer(defaultState, action)

    expect(newState.isVisible).not.toBe(false)
    expect(newState.isVisible).toBe(true)
})

test('upload file should be added', () => {
    let action = addUploadFile(file);
    let newState = uploadReducer(defaultState,action)

    expect(newState.files[0].name).toBe("file")
    expect(newState.files[0].id).toBe(1)
    expect(newState.files.length).toBe(1)
})

test('file should be removed', () => {
    let fileId = file.id
    let action = removeUploadFile(fileId);
    let newState = uploadReducer(defaultState2,action)

    expect(newState.files[0]).toBe(undefined)
    expect(newState.files.length).toBe(0)
})

