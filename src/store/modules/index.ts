import { Module } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { StudentListState } from './types';
import { RootState } from '../types';

 const state: StudentListState = {
    student: undefined
};

export const studentList: Module<StudentListState, RootState> = {
    
    state,
    mutations,
    actions
};