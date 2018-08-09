
import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: "33542",
  secret: "5d8e2ef1c989c19b1d8bd2f93b8c3c2ca2fcbe85e4d15916ad2370c9d279a9a7",
  callbackUrl: "https://canvasbase.xyz"
});

export const unsplashAuth = () => {
  unsplash.auth.userAuthentication("{OAUTH_CODE}")
    .then(
      function(res){
        const response = JSON.parse(res);
        console.log(response);
      }
    )
}
