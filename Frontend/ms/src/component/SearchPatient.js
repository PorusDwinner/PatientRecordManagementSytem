const SearchPatient = ({ patientAadhaar }) => {
    
    return (
        <>
                {
                    patientAadhaar.length === 0 ? ( <></> ) : (
    
                        <div className="flex flex-col justify-center items-center text-lg mb-4 shadow-2xl">
                            <div className="flex">
                            {patientAadhaar.map((ele , i) => (    
                                <div className="flex flex-col ml-8 m-4 text-slate-600" key={i}>
                                    <div className="flex">
                                        <p>Name</p>
                                        <p className="ml-[20rem]" > {patientAadhaar[i].name} </p>
                                    </div>
    
                                    <div className="flex justify-between">
                                        <p>Aadhaar</p>
                                        <p> {patientAadhaar[i].aadhaar} </p>
                                    </div>
    
                                    <div className="flex justify-between">
                                        <p>Age</p>
                                        <p> {patientAadhaar[i].age} </p>
                                    </div>
    
                                    <div className="flex justify-between">
                                        <p>Address</p>
                                        <p> {patientAadhaar[i].address} </p>
                                    </div>
    
                                    <div className="flex justify-between">
                                        <p>Phone</p>
                                        <p> {patientAadhaar[i].phone} </p>
                                    </div>
    
                                    <div className="flex justify-between">
                                        <p>Department</p>
                                        <p>{patientAadhaar[i].department}</p>
                                    </div>
    
                                    <div className="flex justify-between">
                                        <p>Doctor</p>
                                        <p>{patientAadhaar[i].doctor}</p>
                                    </div>
    
                                    <div className="flex justify-between">
                                        <p>Room No.</p>
                                        <p>{patientAadhaar[i].room}</p>
                                    </div>
    
                                    <div className="flex justify-between">
                                        <p>Date</p>
                                        <p>{patientAadhaar[i].date}</p>
                                    </div>
    
                                    <div className="flex justify-between">
                                        <p>Complains/Remarks</p>
                                        <p> {patientAadhaar[i].complains}</p>
                                    </div>
    
                                </div>
                                ))
                            }
                            </div>
                        </div>
                    )
                }        
        </>
    )
}

export default SearchPatient