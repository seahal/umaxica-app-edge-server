import {Form} from "@remix-run/react";

export function SampleForm() {
    //console.log(`[SF] title: ${params.title}, description: ${params.description}`);
    return (<>
        <fieldset>
            <Form method='post' action='/sample'>
                <input type="text" name='title' className='border-2 block'/>
                <textarea name='description' className='border-2 block'/>
                <button type='submit' className='border-2 block'>送信</button>
            </Form>
        </fieldset>
    </>);
}