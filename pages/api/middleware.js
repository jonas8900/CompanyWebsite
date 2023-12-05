export { default } from "next-auth/middleware";

export const config = {
	session: true,
	matcher: ["/adminArea"],
};
