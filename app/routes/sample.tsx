import {ActionFunctionArgs, json, LoaderFunctionArgs, redirect} from "@remix-run/node";
import {useActionData} from "@remix-run/react";
import {footer as Footer, SampleHeader as Header} from '~/routes/parts/header';
import {SampleForm as Forming} from "~/routes/parts/form";

type Former = {
    title: string,
    description: string,
}

export const loader = async ({params, request}: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const title = url.searchParams.get('title');
    console.log(`[L] title: ${title}, description: ${params.description}`)
    return json({params});
};

export default function sample_index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data = useActionData<typeof action>();
    console.log('[C] ' + data)
    //const params = useParams();
    // const data: Former = useLoaderData<typeof loader>();
    //console.log(`[Default] title: ${1} , description: ${params.description} <= ?????`);
    return (<>
        <p>{data?.message ?? ''}</p>
        <Header/>
        <Forming/>
        <Footer/>
    </>);
}

export const action = async ({request}: ActionFunctionArgs) => {
    const formData = await request.formData();
    const title = formData.get('title');
    const description = formData.get('description');
    console.log(`[A] title: ${title}, description: ${description}`)

    if (false) {
        return redirect("/")
    } else {
        return json({title, description, message: 'you are not good write'})
    }
}
