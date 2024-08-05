//
// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

import appStylesHref from "./app.css?url";

export const links = () => [{rel: 'stylesheet', href: appStylesHref}];

export default function index() {
    return (
        <>
            <div className="font-sans p-4">
                <h1 className="text-3xl">Welcome to Remix</h1>
                <ul className="list-disc mt-4 pl-6 space-y-2">
                    <li>A</li>
                </ul>
            </div>
        </>
    );
}


