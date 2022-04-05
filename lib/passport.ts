import passport from "passport";
import SteamStrategy from "passport-steam";
import {User} from "../types";

passport.serializeUser(function (user: User, done) {
	done(null, user);
});

passport.deserializeUser(function (obj, done) {
	done(null, obj);
});

passport.use(
	new SteamStrategy(
		{
			returnURL: `${process.env.DOMAIN}/api/return`,
			realm: `${process.env.DOMAIN}`,
			apiKey: `${process.env.STEAM_API_KEY}`,
		},
		(_, profile: User, done) => {
			// Fetch any more information to populate
			return done(null, profile);
		}
	)
);

export default passport;
