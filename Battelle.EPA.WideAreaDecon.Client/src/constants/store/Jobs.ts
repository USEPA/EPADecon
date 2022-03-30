/* eslint-disable no-shadow */
export enum JobsStoreActions {
  CREATE_JOB_REQUEST = 'CREATE_JOB_REQUEST',
  POST_CURRENT_JOB_REQUEST = 'POST_CURRENT_JOB_REQUEST',
  GET_CURRENT_JOB_RESULTS = 'GET_CURRENT_JOB_RESULTS',
  CANCEL_CURRENT_JOB_REQUEST = 'CANCEL_CURRENT_JOB_REQUEST',
  RESET_CURRENT_JOB_REQUEST = 'RESET_CURRENT_JOB_REQUEST',
  UPDATE_JOB_STATUS = 'UPDATE_JOB_STATUS',
  UPDATE_JOB_PROGRESS = 'UPDATE_JOB_PROGRESS',
}
export enum JobsStoreGetters {
  HAS_RESULTS = 'HAS_RESULTS',
}
export enum JobsStoreMutations {
  EXAMPLE_CLIENT_CONFIGURATION = 'EXAMPLE_CLIENT_CONFIGURATION',
  SET_CURRENT_JOB = 'SET_CURRENT_JOB',
  UPDATE_JOB_ID = 'UPDATE_JOB_ID',
  UPDATE_JOB_STATUS = 'UPDATE_JOB_STATUS',
  UPDATE_JOB_PROGRESS = 'UPDATE_JOB_PROGRESS',
}