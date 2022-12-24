export default {
  registerCoach(context, payload) {
    const coachData = {
      id: context.rootGetters.userId,
      firstName: payload.firstName,
      lastName: payload.lastName,
      description: payload.description,
      hourlyRate: payload.hourlyRate,
      areas: payload.areas,
    };

    // Reach out to Firebase
    // const userId = context.rootGetters.userId;
    // fetch(`https://vue-http-demo-1e0e1.firebaseio.com/coaches/${userId}.json`, {
    //   method: 'PUT',
    //   body: JSON.stringify(coachData),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       // error ...
    //     }

    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });

    context.commit('registerCoach', coachData);
  },
};
