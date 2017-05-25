import { makeActionCreator } from '../../../utils';

export const $addPerson = 'ADD_PERSON';
export const addPerson = makeActionCreator($addPerson, 'person');
