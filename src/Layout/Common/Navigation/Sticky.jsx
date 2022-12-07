import React, { useRef, useLayoutEffect } from 'react'
function Sticky() {
    const stickyHeader = useRef()
    useLayoutEffect(() => {
        const mainHeader = document.getElementById('mainHeader')
        let fixedTop = stickyHeader.current.offsetTop
        const fixedHeader = () => {
            if (window.pageYOffset > fixedTop) {
                mainHeader.classList.add('fixedTop')
            } else {
                mainHeader.classList.remove('fixedTop')
            }
        }
        window.addEventListener('scroll', fixedHeader)
    }, [])
    return (
        <>
            <div className="mainHeader" id="mainHeader" ref={stickyHeader}>
           
                <h2>React Js onScroll Sticky Header Example</h2>
           
           
            </div>
           
           
           
           
        </>
    )
}
export default Sticky;