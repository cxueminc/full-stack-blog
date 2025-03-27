const PostMenuActions = () => {
    return (
        <div className="">
            <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
            <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="20px"
                    height="20px"
                >
                    <path 
                        d="M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z"
                        stroke="black"
                        strokeWidth="2"
                    />
                </svg>
                <span>Save this post</span>
            </div>
            <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    fill="none"
                    stroke="red"
                    stroke-width="5"
                    width="20px"
                    height="20px"
                >
                    <path d="M12 6H38" />
                    <path d="M18 6V4C18 3.44772 18.4477 3 19 3H31C31.5523 3 32 3.44772 32 4V6" />
                    <path d="M39 6V44C39 45.1046 38.1046 46 37 46H13C11.8954 46 11 45.1046 11 44V6H39Z" />
                    <path d="M18 20V39" />
                    <path d="M32 20V39" />

                </svg>
                <span>Delete this post</span>
            </div>
        </div>
    );
};

export default PostMenuActions;