import React from 'react'

export default function Accordian() {
    const style = {
        color: "white",
        backgroundColor: "rgb(33,37,41)"
    }
    return (
        <>
            <div className="container my-5" style={{ color: "white" }}>
                <h1 className="text-center my-3 mb-4 mt-2">About This Webpage</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={style}>
                                License & Permission
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={style}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium alias, omnis mollitia odit labore fugit? Quaerat, harum. Accusamus et quos eligendi numquam quis recusandae eveniet assumenda laborum doloremque, molestias esse?
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={style}>
                                Content & Images
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={style}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam dolores at architecto, ipsam exercitationem earum amet blanditiis placeat sequi labore voluptas alias consequatur nam veritatis voluptatibus ullam unde repudiandae praesentium!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={style}>
                                Browser & Device Compatiable
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={style}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, eveniet ab, cumque, fuga quaerat praesentium repudiandae porro velit incidunt facere aperiam labore dignissimos delectus dolorem quas rerum asperiores omnis ratione.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
