import React from 'react'

const SearchDate = ({patientDate}) => {

  return (
    <div className="flex flex-col justify-center items-center text-lg  shadow-2xl">
        
        {
            patientDate.length === 0 ? (<></>) : (
                
                    patientDate.map((ele , i) => (
                        <div className="flex text-lg mb-4 shadow-sm border-2" key={i}>
                        <div className="flex">
                            <div className="flex flex-col ml-8 m-4 text-slate-600 ">
                                <div className="flex">
                                    <p>Name</p>
                                    <p className="ml-[20rem]" > {patientDate[i].name} </p>
                                </div>

                                <div className="flex justify-between">
                                    <p>Aadhaar</p>
                                    <p> {patientDate[i].aadhaar} </p>
                                </div>

                                <div className="flex justify-between">
                                    <p>Age</p>
                                    <p> {patientDate[i].age} </p>
                                </div>

                                <div className="flex justify-between">
                                    <p>Address</p>
                                    <p> {patientDate[i].address} </p>
                                </div>

                                <div className="flex justify-between">
                                    <p>Phone</p>
                                    <p> {patientDate[i].phone} </p>
                                </div>

                                <div className="flex justify-between">
                                    <p>Department</p>
                                    <p>{patientDate[i].department}</p>
                                </div>

                                <div className="flex justify-between">
                                    <p>Doctor</p>
                                    <p>{patientDate[i].doctor}</p>
                                </div>

                                <div className="flex justify-between">
                                    <p>Room No.</p>
                                    <p>{patientDate[i].room}</p>
                                </div>

                                <div className="flex justify-between">
                                    <p>Date</p>
                                    <p>{patientDate[i].date}</p>
                                </div>

                                <div className="flex justify-between">
                                    <p>Complains/Remarks</p>
                                    <p> {patientDate[i].complains}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    ))
                
            )
        }

    </div>
  )
}

export default SearchDate