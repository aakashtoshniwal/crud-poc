import { MutationTree } from 'vuex';
import { StudentListState } from './types';

export const mutations: MutationTree<StudentListState> = {
    SET_STUDENT(state,payload){
        state.student = payload
    }
}