import "../Services/Service.css"
import Service_Data from "../../assets/Service_Data"
import Service_img from "../../assets/customer-service.png"
const Service = () => {
  return (
    <div>
      <div className="services">
        <div className="title">
            <h1>My Services</h1>
            <img src={Service_img} alt="" />
        </div>

        <div className="service_card">
            {
            Service_Data.map((Service,index) =>{
        return <div key={index} className="service-format">
      <h3>{Service.id}</h3>
      <h2>{Service.name}</h2>
      <p>{Service.description}</p>

      <div className="service-readmore">
       <p>
        Read more
       </p>
       {/* arrow */}
       <img src="" alt="" />
</div>
        </div>
       
            })
            }
        </div>
      </div>
    </div>
  )
}

export default Service
