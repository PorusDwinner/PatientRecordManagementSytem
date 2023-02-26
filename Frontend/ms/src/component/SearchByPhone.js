

const SearchByPhone = ( {searchPatientPhone}) => {
  return (
    <>
     <>
                {
                    searchPatientPhone.length === 0 ? ( <></> ) : (
    
                        <div className="flex flex-col justify-center items-center text-lg mb-4 shadow-2xl">
                            <div className="flex">
                            { searchPatientPhone.map((ele , i) => (  
                                <div className="flex flex-col ml-8 m-4 text-slate-600" key={i}>
                                    <div className="flex">
                                        <p>Name</p>
                                        <p className="ml-[20rem]" > {searchPatientPhone[i].name} </p>
                                    </div>
    
                                    <div className="flex justify-between">
                                        <p>Aadhaar</p>
                                        <p> {searchPatientPhone[i].aadhaar} </p>
                                    </div>
    
                                    <div className="flex justify-between">
                                        <p>Age</p>
                                        <p> {searchPatientPhone[i].age} </p>
                                    </div>
    
                                    <div className="flex justify-between">
                                        <p>Address</p>
                                        <p> {searchPatientPhone[i].address} </p>
                                    </div>
    
                                    <div className="flex justify-between">
                                        <p>Phone</p>
                                        <p> {searchPatientPhone[i].phone} </p>
                                    </div>
    
                                    <div className="flex justify-between">
                                        <p>Department</p>
                                        <p>{searchPatientPhone[i].department}</p>
                                    </div>
    
                                    <div className="flex justify-between">
                                        <p>Doctor</p>
                                        <p>{searchPatientPhone[i].doctor}</p>
                                    </div>
    
                                    <div className="flex justify-between">
                                        <p>Room No.</p>
                                        <p>{searchPatientPhone[i].room}</p>
                                    </div>
    
                                    <div className="flex justify-between">
                                        <p>Date</p>
                                        <p>{searchPatientPhone[i].date}</p>
                                    </div>
    
                                    <div className="flex justify-between">
                                        <p>Complains/Remarks : </p>
                                        <p> {searchPatientPhone[i].complains}</p>
                                    </div>
    
                                </div>))}
                            </div>
                        </div>
                    )
                }        
        </>
    </>
  )
}

export default SearchByPhone