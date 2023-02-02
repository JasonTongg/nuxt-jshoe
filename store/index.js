// import vuex from "vuex";

// const store = () => {
//   return new vuex.Store({
//     state: {
//       movieData: [
//         {
//           name: "Avatar: The Way of Water",
//           link: "https://i.ibb.co/PjB95Lr/movie1.jpg",
//           genre: "Science Fiction",
//           year: 2022,
//           review: "Avatar: The Way of Water",
//           id: 1,
//         },
//         {
//           name: "Insidious 1",
//           link: "https://i.ibb.co/vh30y4P/movie2.jpg",
//           genre: "Horror",
//           year: 2010,
//           review: "Insidious 1",
//           id: 2,
//         },
//         {
//           name: "Jumanji: The Next Level",
//           link: "https://i.ibb.co/SKjMVJK/movie5.jpg",
//           genre: "Adventure",
//           year: 2019,
//           review: "Jumanji: The Next Level",
//           id: 3,
//         },
//         {
//           name: "Avengers: Infinity War",
//           link: "https://i.ibb.co/Tg5rkBj/movie6.jpg",
//           genre: "Action",
//           year: 2018,
//           review: "Avengers: Infinity War",
//           id: 4,
//         },
//       ],
//     },
//     getters: {
//       getMovie(state) {
//         console.log("jalan?");
//         return state.movieData;
//       },
//     },
//     mutations: {
//       addNewRecipe(state, payload) {
//         return state.recipes.push(payload);
//       },
//     },
//     actions: {},
//   });
// };

import Vuex from "vuex";
import axios from "axios";
import Cookie from "js-cookie";

const createStore = () => {
  return new Vuex.Store({
    state: {
      movieData: [],
      token: null,
      userData: null,
    },

    getters: {
      getMovieData(state) {
        return state.movieData;
      },
      detailMovie: (state) => (id) => {
        return state.movieData.find((movie) => movie.id === id);
      },
      userLogin(state) {
        return state.token;
      },
      getUsername(state) {
        return state.userData.displayName;
      },
      getUserId(state) {
        return state.userData.userId;
      },
      isAutheticated(state) {
        return state.token !== null;
      },
    },

    mutations: {
      addNewMovie(state, payload) {
        return state.movieData.push(payload);
      },
      setData(state, payload) {
        state.movieData = payload;
      },
      setToken(state, payload) {
        state.token = payload;
      },
      setUserData(state, payload) {
        state.userData = payload;
      },
    },

    actions: {
      nuxtServerInit({ commit }) {
        return axios
          .get(
            "https://moviereview-bb068-default-rtdb.firebaseio.com/movielist.json"
          )
          .then((response) => {
            const recipeArray = [];
            for (const key in response.data) {
              recipeArray.push({ ...response.data[key] });
            }
            commit("setData", recipeArray);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      addMovie({ commit, state }, movie) {
        return axios
          .post(
            "https://moviereview-bb068-default-rtdb.firebaseio.com/movielist.json?auth=" +
              state.token,
            movie
          )
          .then(() => {
            commit("addNewMovie", movie);
          });
      },
      userAuthentication({ commit }, authData) {
        let webkey = "AIzaSyDsCmpkmOGOnaViNgGx5Uy5EwP6H_TKVFs";
        let url = authData.isLogin
          ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
          : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";

        return axios
          .post(url + webkey, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
            displayName: authData.displayName,
          })
          .then((response) => {
            let userData = {
              username: response.data.displayName,
              email: response.data.email,
              userId: response.data.localId,
            };
            commit("setToken", response.data.idToken);
            commit("setUserData", userData);
            window.localStorage.setItem("token", response.data.idToken);
            window.localStorage.setItem("user", JSON.stringify(userData));
            Cookie.set("jwt", response.data.idToken);
            Cookie.set("acc_user", JSON.stringify(userData));
          });
      },
      initAuth({ commit }, req) {
        let token;
        let user;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          let pecahcookie = req.headers.cookie.split(";");
          token = pecahcookie
            .find((c) => c.trim().startsWith("jwt="))
            .split("=")[1];
          user = pecahcookie
            .find((c) => c.trim().startsWith("acc_user"))
            .split("=")[1];
          user = JSON.parse(decodeURIComponent(user));
          commit("setUserData", user);
          commit("setToken", token);
          console.log(user);
        }
      },
      logout({ commit }) {
        commit("setToken", null);
        Cookie.remove("acc_user");
        Cookie.remove("jwt");
        if (process.client) {
          window.localStorage.removeItem("token");
          window.localStorage.removeItem("user");
        }
      },
    },
  });
};

export default createStore;
