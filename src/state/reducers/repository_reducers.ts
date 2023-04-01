import { SearchActionTypes } from '../action-types/action-types';
import { Action } from '../actions';

interface RepositoriesState {
  data: string[];
  loading: boolean;
  error: string | null;
}

const repositoriesReducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case SearchActionTypes.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };

    case SearchActionTypes.SEARCH_REPOSITORY_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case SearchActionTypes.SEARCH_REPOSITORY_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default repositoriesReducer;
