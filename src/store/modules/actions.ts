import { ActionTree } from 'vuex';
import { StudentListState } from './types';
import { RootState } from '../types';
import StudentDataService from "@/services/DataService";
import { Vue } from "vue-property-decorator";



export const actions: ActionTree<StudentListState, RootState> = {
    fetchData({ commit }): any {
        StudentDataService.getAll().then((response) => {
            commit('SET_STUDENT', response.data);
        }, (error) => {
            console.log(error);
        });
    },

    removeData({ dispatch }, data): any {
        StudentDataService.delete(data.id)
            .then(() => {
                dispatch('fetchData')
                Vue.$toast.success("Record Deleted Successfully.");
            })
            .catch((error) => {
                console.log(error);
                Vue.$toast.error("Error: Record Not Deleted.");
            });
    },

    createStudent({ dispatch }, data): any {
        StudentDataService.create(data)
            .then(() => {
                dispatch('fetchData')
                Vue.$toast.success("Record Saved Successfully.");
            })
            .catch((error) => {
                console.log(error);
                Vue.$toast.error("Error: Record Not Saved.");
            });
    },

    updateStudent({ dispatch }, data): any {
        StudentDataService.update(data.id, data)
            .then(() => {
                dispatch('fetchData')
                Vue.$toast.success("Record Updated Successfully.");
            })
            .catch((error) => {
                console.log(error);
                Vue.$toast.error("Error: Record Not Updated.");
            });
    }
};