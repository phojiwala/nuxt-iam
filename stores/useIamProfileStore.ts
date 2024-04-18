import { User, NxFormInput } from "~~/iam/misc/types";
import { defineStore } from "pinia";

export const useIamProfileStore = defineStore("iamProfile", () => {
  const myProfile = ref(<User | null>null);
  const isLoggedIn = ref(false);
  const updateCount = ref(0);

  const getProfile = computed(() => myProfile.value);

  function setProfile(profile: User) {
    if (profile) myProfile.value = profile;
  }

  function setIsLoggedIn(value: boolean) {
    isLoggedIn.value = value;
  }

  function clearProfile() {
    myProfile.value = null;
  }

  function setUpdateCount() {
    updateCount.value++;
  }

  return {
    setProfile,
    getProfile,
    setIsLoggedIn,
    isLoggedIn,
    clearProfile,
    setUpdateCount,
    updateCount,
  };
});
