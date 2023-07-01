import {createStore} from "vuex";
import {indexPageStorage} from "@/store/indexPageStorage";

export default createStore({
    state: {
    //   isAuth: false,
    },
    modules: {
        indexPageStorage: indexPageStorage
    }
})