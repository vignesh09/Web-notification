self.addEventListener('activate', async () => {
  // This will be called only once when the service worker is activated.
  console.log('service worker activate')
   // return self.skipWaiting();
   // await letsgo();
   // return self.skipWaiting();
})
async function letsgo(){


}
const showLocalNotification = (title, body, swRegistration) => {
  const options = {
    body
    // here you can add more properties like icon, image, vibrate, etc.
  };
  swRegistration.showNotification(title, options);
};

console.log("##################3")
// while(new Date().getMinutes() !== 6){};
 showLocalNotification('This is title', 'this is the message', self.registration);
