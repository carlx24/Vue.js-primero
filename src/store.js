// Almacenamiento central

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
        state:{
            message: 'Hola Mundo con Vue'
        },
        mutations:{
            setMessage(state, newMessage){
                state.message = newMessage;
            }
        }
    });