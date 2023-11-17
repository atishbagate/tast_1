import ChildCustomHook from "./APICallingHook/ChildCustomHook";
import ChildCustomHook1 from "./BasicCustomHook/ChildCustomHook1";


const ParentCustomHok = () => {

    return (
        <>
        <h3>ParentCustomHok</h3>
        {/* <ChildCustomHook1 /> */}
        <ChildCustomHook />
        </>
    )
}
export default ParentCustomHok;