import {Outlet} from "@remix-run/react";


export default function index_account() {
    return (<>
        <p>index</p>
        <form action="http://rails:3333/connects" method="post">
            <input type="text" placeholder="title" className="border-2 block" name="connect[title]"/><br/>
            <textarea placeholder="description" className="border-2 block" name="connect[description]"/><br/>
            <input type="submit" value="送信"/>
        </form>
        <a href="http://localhost:3333/session/">ログイン？</a>
    </>);
}
