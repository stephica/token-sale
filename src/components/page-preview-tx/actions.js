import { makeActionCreator } from '../../utils';

export const $queryBySender = 'QUERY_BY_SENDER';
export const queryBySender = makeActionCreator($queryBySender, 'sender');
