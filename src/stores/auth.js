import { defineStore } from "pinia";
import http from "@/services/axios";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: "",
    token: "",
  }),
  actions: {
    async login(payload) {
      try {
        const req = await http.post("auth/user/token", payload);
        const res = req.data;

        if (res.status === 200) {
          this.user = res.content;
          this.token = res.token;

          localStorage.setItem("user", JSON.stringify(res.content));
          localStorage.setItem("token", res.token);

          return true;
        }
        return false;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    setLocalDatas() {},
  },
  getters: {
    $token(state) {
      return state.token || localStorage.getItem("token");
    },
    $user(state) {
      return state.user || localStorage.getItem("user");
    },
  },
});
