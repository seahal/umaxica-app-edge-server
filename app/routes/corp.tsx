import {json, LoaderFunctionArgs, MetaFunction} from "@remix-run/node";

export type Company = {
    id: string;
    name: string;
}

export async function getCompanies(): Promise<Array<Company>> {
    const array = [{id: '1', name: 'January',},
        {id: "aaa", name: "ウエキン合同会社",},
        {id: "bbb", name: "ウエキンコーポレーション",},
        {id: "ccc", name: "シンチ有限会社",},
    ]
    return array
}

export default function CorpComponent() {
    return (<>
        <h1>hello</h1>
    </>);
}

export const loader = async ({request}: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const term = url.searchParams.get('term');
    return json(await searchCompany(term + ''))
}

async function searchCompany(term: string): Promise<Array<Company>> {
    const corps = await getCompanies();
    return corps.filter(c => c.name?.match(term))
}

export const meta: MetaFunction = () => {
    return [{title: "home"}];
}