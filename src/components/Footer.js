import React from 'react';


const Footer = () => {

    return (
        <footer className="flex items-center justify-center pt-2 pb-3 px-3 bg-blue-500 bottom-0">
            {/*<p className="icon block">🚀 </p>*/}
            <div className="text-center">
                {/*<p className="text-blue-50 text-xs ">Power by React and Node</p>*/}
                <p className="icon block">🚀 </p>
                <p className="text-blue-50 text-xs block w-full "><a href="https://manfit78.com/" title="manufit78">manufit78</a></p>
            </div>

        </footer>
    )
}

export default Footer;