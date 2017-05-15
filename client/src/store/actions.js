import api from '../api';

export const markRequestPending = (key) => ({
  type: 'app/markRequestPending',
  meta: { key },
});

export const markRequestSuccess = (key) => ({
  type: 'app/markRequestSuccess',
  meta: { key },
});

export const markRequestFailed = (reason, key) => ({
  type: 'app/markRequestFailed',
  payload: reason,
  meta: { key },
});

export const createRequestThunk = ({ request, key, start = [], success = [], failure = [] }) => {

  return (...args) => (dispatch) => {
    const requestKey = (typeof key === 'function') ? key(...args) : key;

    start.forEach((actionCreator) => dispatch(actionCreator()));
    dispatch(markRequestPending(requestKey));
    return request(...args)
      .then((data) => {
        success.forEach((actionCreator) => dispatch(actionCreator(data)));
        dispatch(markRequestSuccess(requestKey));
      })
      .catch((reason) => {
        failure.forEach((actionCreator) => dispatch(actionCreator(reason)));
        dispatch(markRequestFailed(reason, requestKey));
      });
  };
};

export const replaceEvents = (events) => ({
  type: 'app/replaceEvents',
  payload: events,
});

export const requestReadEvents = createRequestThunk({
  request: api.events.readList,
  key: 'readEvents',
  success: [ replaceEvents ]
});

export const replaceProjects = (projects) => ({
  type: 'app/replaceProjects',
  payload: projects,
});

export const requestReadProjects = createRequestThunk({
  request: api.projects.readList,
  key: 'readProjects',
  success: [ replaceProjects ]
});

export const replaceMembers = (members) => ({
  type: 'app/replaceMembers',
  payload: members,
});

export const requestReadMembers = createRequestThunk({
  request: api.members.readList,
  key: 'readMembers',
  success: [ replaceMembers ]
});


