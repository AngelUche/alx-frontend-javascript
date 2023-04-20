export default function handleResponseFromAPI(promise) {
  const Response = { status: 200, body: 'success' };
  return promise.then(() => Response).catch(() => new Error())
    .finally(() => { console.log('Got a response from the API'); });
}
