import router from "../../lib/router";

interface AuthLogoutRequest extends Request {
	logout: () => any;
}

interface AuthLogoutResponse extends Response {
	redirect: (path: string) => any;
}

const path = "/api/logout";

export default router.get(
	path,
	(req: AuthLogoutRequest, res: AuthLogoutResponse) => {
		req.logout();
		res.redirect("/");
	}
);
