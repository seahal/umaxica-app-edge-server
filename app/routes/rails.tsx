// import {HeadersFunction, json, MetaFunction} from "@remix-run/node";
// import {useLoaderData} from "react-router";
//
// import {footer as Footer} from '~/routes/parts/header';
//
// let odd = "";
//
//
// export const loader = (() => {
//     // 1️⃣ここでクッキーをとって、
// });
//
// export const meta: MetaFunction = () => {
//     return [
//         {title: "Remix to Rails"},
//         {
//             name: "csrf-param",
//             content: "authenticity_token",
//         },
//     ];
// };
//
// export const headers: HeadersFunction = ({}) => ({});
//
// export default function Rails() {
//     // 1️⃣ここでクッキーを設定する
//     async function getToken() {
//         const obj = await (await fetch("http://rails:3333/connects/new.json")).json();
//         let token = obj.form_authenticity_token
//         odd = token
//         console.log(token)
//         return token
//     }
//     getToken()
//     console.log(odd)
//
//     return (<>
//             <p>Connect with Rails</p>
//             <form action="http://rails:3333/connects" method="post">
//                 <fieldset>
//                     <legend>Write here</legend>
//                     <input type="hidden" name="authenticity_token"
//                            value={odd}/>
//                     <input type="text" placeholder="title" className="border-2 block" name="connect[title]"/><br/>
//                     <textarea placeholder="description" className="border-2 block" name="connect[description]"/><br/>
//                     <input type="submit" value="送信"/>
//                 </fieldset>
//             </form>
//             <Footer/>
//         </>
//     );
// }
