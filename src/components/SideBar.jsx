export default function SideBar(props) {
    const { handleToggleModal, data } = props;

    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverLay"></div>

            <div className="sidebarContents">
                <h2>
                    {data?.title}
                </h2>
                <div>
                    <p>
                        {data?.explanation}
                    </p>
                    <p>
                        kjvh
                    </p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-angles-right"></i>
                </button>
            </div>
        </div>
    )
}