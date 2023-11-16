import ChildUseMemo from "./ChildUseMemo1";
import ChildUseMemo2 from "./ChildUseMemo2";
const ParentUseMemo = () => {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,18,19,20];
    return (
        <>
        <h2>ParentUseMemo</h2>
        <p>Use memo use to memorise the value so that we don’t have to make calculations again and again.  </p>
        {/* <ChildUseMemo arr = {arr}/> */}
        <ChildUseMemo2 />
        </>
    )
}

export default ParentUseMemo;