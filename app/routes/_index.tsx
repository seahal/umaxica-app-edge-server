// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

import {Link, NavLink, useLoaderData} from "@remix-run/react";
import {json} from "@remix-run/node";

export default function IndexComponent() {
    const data = useLoaderData<typeof loader>();
console.log(data['ENV'])
    let ENV = data['ENV'] ?? {}

    return (
        <>
            <div className="font-sans p-4">
                <h1 className="text-3xl">Welcome to Umaxica's Homepage!</h1>
                <ul>
                    <li>
                        Homepage
                        <ul className="list-disc pl-6">
                            <li>
                                <Link to={ ENV['ROR_USER_URL'] ?? '' }>User</Link>
                            </li>
                            <li>
                                <Link to={ ENV['ROR_STAFF_URL'] ?? '' }>Staff</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="http://localhost:3000/registration/new">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="http://localhost:3000/session/new">Sign In</Link>
                    </li>
                    <li>
                        <Link to="http://localhost:3000/health">health status</Link>
                    </li>
                    <li>
                        <NavLink to="/about">about</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export async function loader() {
  return json({ENV: {
      ROR_USER_URL: process.env.ROR_USER_URL,
      ROR_STAFF_URL: process.env.ROR_STAFF_URL
  }});
}
