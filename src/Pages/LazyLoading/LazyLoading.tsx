import {lazy,Suspense} from "react";
const Example1 = lazy(()=> import('./Example1'))


const LazyLoading = () => {
    return (
        <>
        <h2>This is Lazy loading application.</h2>
        <Suspense fallback={<div>Please Wait till page load.....</div>}>
        <Example1 />
        </Suspense>
        </>
    )
}
export default LazyLoading;