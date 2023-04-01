import axios from 'axios';
import { Dispatch } from 'redux';

import { SearchActionTypes } from '../action-types/action-types';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: SearchActionTypes.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: SearchActionTypes.SEARCH_REPOSITORY_SUCCESS,
        payload: names,
      });
    } catch (error: any) {
      dispatch({
        type: SearchActionTypes.SEARCH_REPOSITORY_ERROR,
        payload: error.message,
      });
    }
  };
};
