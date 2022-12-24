export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  getCoachById(state) {
    return (coachId) => {
      return state.coaches.find((coach) => coach.id === coachId);
    };
  },
};
