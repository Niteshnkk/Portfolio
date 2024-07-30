import "../MyWork/MyWork.css"
import MyWork_Data from "../../assets/MyWork_Data"
import work_1 from "../../assets/work_1.png"


const MyWork = () => {
    return (
        <div>
            <div className="MyWork_ms">
                <div className="title mt-3" >
                    <h1>My Work</h1>
                    <img src={work_1} alt="" />
                </div>
                <div className="work-container">
                    {
                        MyWork_Data.map((work, index) => {
                            return (<>

                                <div key={index} className="work_card">
                                    {/* <h3>{work.id}</h3> */}
                                    <img src={work.imageUrl} alt="img" />

                                    <h4><a href={work.Url_project}>{work.projectName}</a></h4>
                                    <h6>{work.description}</h6>

                                </div>

                            </>)

                        })}
                    <div className="show-more">
                        <div className="btn_112">
                            <button data-type="button_normal">SHOW MORE</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyWork
