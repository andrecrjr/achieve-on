import Link from "next/link";
import router from "../lib/router";

export default function Index({user}) {
	return (
		<div style={{textAlign: "center"}}>
			{user ? (
				<div>
					Welcome back!
					<br />
					From logging in, your SteamID is {user.id}.<br />
					You can call other APIs to get more information within
					`getServerSideProps` or within `lib/passport.ts`.
					<br />
					<Link href='/api/logout'>Logout</Link>
				</div>
			) : (
				<div>
					Welcome!
					<br />
					<Link href='/api/login'>Login</Link>
				</div>
			)}
		</div>
	);
}

export async function getServerSideProps({req, res}) {
	try {
		await router.run(req, res);
	} catch (error) {
		console.log(error);
	}

	return {props: {user: req.user || null}};
}
