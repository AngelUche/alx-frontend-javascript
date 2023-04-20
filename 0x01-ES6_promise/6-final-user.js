import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const s = signUpUser(firstName, lastName);
  const u = uploadPhoto(fileName);

  return Promise.allSettled([s, u]).then((reponse) => {
    const data = [];
    reponse.forEach((value) => {
      if (value.status === 'fulfilled') {
        data.push({ status: value.status, value: value.value });
      } else {
        data.push({
          status: value.status,
          value: `Error: ${value.reason.message}`,
        });
      }
    });
    return data;
  });
}
