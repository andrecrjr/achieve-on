import passport from "../../lib/passport";
import router from "../../lib/router";

interface AuthLoginResponse extends Response {
	redirect: (path: string) => any;
}

export default router
	.use("/api/login", passport.authenticate("steam", {failureRedirect: "/"}))
	.get("/api/login", (_, res: AuthLoginResponse) => res.redirect("/"));
