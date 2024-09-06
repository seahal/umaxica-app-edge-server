// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

export default function IndexComponent() {
    return (
        <>
            <div className="font-sans p-4">
                <h1 className="text-3xl">Welcome to Remix</h1>
                <ul className="list-disc mt-4 pl-6 space-y-2">
                    <li>
                        <a href=''>Homepage</a>
                    </li>
                    <li>
                        <a href='http://localhost:3000/registration/new'>Sign Up</a>
                    </li>
                    <li>
                        <a href='http://localhost:3000/session/new'>Sign In</a>
                    </li>
                    <li>
                        <a href='http://localhost:3000/health'>health status</a>
                    </li>
                </ul>
            </div>
        </>
    );
}
