import { SearchActionTypes } from '../action-types/action-types';

interface SearchRepositoriesAction {
  type: SearchActionTypes.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: SearchActionTypes.SEARCH_REPOSITORY_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: SearchActionTypes.SEARCH_REPOSITORY_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
