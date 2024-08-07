export function SampleHeader() {
    return (<>
        <h1>Sample Index Page 1</h1>
        <hr/>
    </>);
}

export function Footer() {
    return (<>
        <hr/>
        <center><p>This is the end fo line</p>{new Date().getTime().toString()}</center>
    </>);
}
