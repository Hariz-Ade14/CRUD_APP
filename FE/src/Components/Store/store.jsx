import {create} from "zustand";
import { persist } from 'zustand/middleware';

const useStore = create((set) => ({
      name: "",
      email: "",
      password: "",
      passwordError: "",
      laoding: false,
      error: false,
      firstname: "",
      lastname: "",
      othername: "",
      sex: "",
     

      setMail: (email) => set({ email }),
      setPassword: (password) => set({ password }),
      setPasswordError: (passwordError) => set({ passwordError }),
      setError: (error) => set({ error }),
      setName: (name) => set({name}),
      setLoading: (loading) => set({loading}),
      setFirstname: (firstname) => set({firstname}),
      setLastname: (lastname) => set({lastname}),
      setOthername: (othername) => set({othername}),
      setSex: (sex) => set({sex}),
}));


export default useStore;