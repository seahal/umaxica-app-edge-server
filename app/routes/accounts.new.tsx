import {ClientLoaderFunctionArgs, json, useLoaderData} from "@remix-run/react";

export async function clientLoader({request, params, serverLoader,}: ClientLoaderFunctionArgs) {
    const response = await fetch("http://rails:3333/connects/new.json", { method: "GET", mode:"cors" });
    const data = await response.json();
    return data;
}

export default function create_new_account() {
    const data = useLoaderData<typeof clientLoader>();

    return (<>
        <p>新規登録</p>
        <p>{data.form_authenticity_token}</p>
        <form action="http://rails:3333/connects" method="post">
            <input type="hidden" name="authenticity_token" value={data.authenticity_token} />
            <input type="text" placeholder="title" className="border-2 block" name="connect[title]"/><br/>
            <textarea placeholder="description" className="border-2 block" name="connect[description]"/><br/>
            <input type="submit" value="送信"/>
        </form>
        <a href="http://localhost:3333/session/">ログイン？</a>
    </>);
}
