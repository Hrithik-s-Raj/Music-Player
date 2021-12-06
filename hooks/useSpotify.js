import { useSession, signIn } from "next-auth/react";
import spotifyApi from "../lib/spotify";
import { useEffect } from "react";
function useSpotify() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      //if refresh access token attempt fails ,Direct the user to login

      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }
      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);

  return spotifyApi;
}

export default useSpotify;
