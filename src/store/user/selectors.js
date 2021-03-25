import {NameSpace} from '../root-reducer';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getIsErrorAuthorization = (state) => state[NameSpace.USER].isErrorAuthorization;
export const getUserLoggedInInfo = (state) => state[NameSpace.USER].userLoggedInInfo;
