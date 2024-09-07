// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

import {Link} from "@remix-run/react";

export default function IndexComponent() {
  return (
    <>
      <div className="font-sans p-4">
        <h1 className="text-3xl">Welcome to Umaxica's Homepage!</h1>
        <ul>
          <li>Homepage
           <ul className="list-disc mt-4 pl-6 space-y-2">
             <li><Link to='/'>UMAXICA(Staff)</Link></li>
             <li><Link to='/'>UMAXICA(User)</Link></li>
        </ul>
        </li>
          <li>
            <a href="http://localhost:3000/registration/new">Sign Up</a>
          </li>
          <li>
            <a href="http://localhost:3000/session/new">Sign In</a>
          </li>
          <li>
            <a href="http://localhost:3000/health">health status</a>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
