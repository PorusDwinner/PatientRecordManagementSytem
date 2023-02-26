import { useState } from "react"
import { useSelector } from "react-redux";
import SearchPatient from "./SearchPatient";
import SearchDate from "./SearchDate";
import SearchByPhone from "./SearchByPhone";


const Home = () => {

  const loginState = useSelector((state) => state.loginState);

  //-----------------------------------------------------------------------\\
  const [patientName, setPatientName] = useState('');
  const [patientAdhaar, setPatientAdhaar] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientDepartment, setPatientDepartment] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [roomNo, setRoomNo] = useState('');
  const [date, setDate] = useState('');
  const [patientAddress, setPatientAddress] = useState('');
  const [complains, setComplains] = useState('');
  //------------------------------------------------------------------------\\

  const [searchAdhaar, setSerachAdhaar] = useState('');
  const [patientAadhaar, setPatientAadhaar] = useState('');

  const [searchDate , setSearchDate] = useState('');
  const [patientDate , setPatientDate] = useState('');

  const [searchPhone , setSearchPhone] = useState('');
  const [searchPatientPhone , setSearchPatientPhone] = useState('');

//--------------------------------------------------------------------------\\  

  // fetch function to fetch patient details by aadhaar
  const searchByAadhaar = async () => {
    const result = await fetch(`/api/get/patient/${searchAdhaar}`)
    const data = await result.json();
    setPatientAadhaar(data);
  }

  // fetch function to fetch patient details by pohone no.  
  const searchByPhone = async () => {
    const result = await fetch(`/api/get/patient/phone/${searchPhone}`)
    const data = await result.json();
    setSearchPatientPhone(data);

  }

  // fetch function to fetch all patient details by date
  const searchByDate = async () => {
    const result = await fetch(`/api/get/patient/${searchDate}`)
    const data = await result.json();
    setPatientDate(data);
  }

  const handelPatientData = (e) => {
    e.preventDefault();
    fetch('/api/post/new-patient', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: patientName,
        aadhaar: patientAdhaar,
        age: patientAge,
        phone: patientPhone,
        department: patientDepartment,
        doctor: doctorName,
        room: roomNo,
        date: date,
        address: patientAddress,
        complains: complains,
      })
    })
  };

  return (
    <>
      {!loginState ? (
        <div className="text-center mt-10">
          <h1 className="text-slate-600 text-3xl font-medium">Please Login First...</h1>
          <p className="text-slate-500 text-center text-lg"> Developed & Designed by Amit Saini</p>
        </div>) : (<div>

          <div className='bg-slate-200 mt-4 ml-10 mr-10'>
            <form className="p-10 border-2">

              <div className="flex flex-wrap justify-around">
                <div className="flex flex-col flex-wrap">
                  <label className="font-medium text-lg text-slate-700 m-1" >Patient Name</label>
                  <input type='text' className="border-2 mt-2 p-1 bg-slate-100"
                    name="patientName" value={patientName} onChange={(e) => setPatientName(e.target.value)} />

                  <label className="font-medium text-lg text-slate-700 m-1" >Adhaar No.</label>
                  <input type='text' className="border-2 mt-2 p-1 bg-slate-100"
                    name="patientAdhaar" value={patientAdhaar} onChange={(e) => setPatientAdhaar(e.target.value)} />

                  <label className="font-medium text-lg text-slate-700 m-1" >Age</label>
                  <input type='text' className="border-2 mt-2 p-1 bg-slate-100"
                    name="patientAge" value={patientAge} onChange={(e) => setPatientAge(e.target.value)} />

                  <label className="font-medium text-lg text-slate-700 m-1" >Phone</label>
                  <input type='text' className="border-2 mt-2 p-1 bg-slate-100"
                    name="patientphone" value={patientPhone} onChange={(e) => setPatientPhone(e.target.value)} />
                </div>
                <div className="flex flex-col flex-wrap">
                  <label className="font-medium text-lg text-slate-700 m-1" >Department</label>
                  <input type='text' className="border-2 mt-2 p-1 bg-slate-100"
                    name="patientDepartment" value={patientDepartment} onChange={(e) => setPatientDepartment(e.target.value)} />

                  <label className="font-medium text-lg text-slate-700 m-1" >Doctor Name</label>
                  <input type='text' className="border-2 mt-2 p-1 bg-slate-100"
                    name="doctorName" value={doctorName} onChange={(e) => setDoctorName(e.target.value)} />

                  <label className="font-medium text-lg text-slate-700 m-1" >Room No</label>
                  <input type='text' className="border-2 mt-2 p-1 bg-slate-100"
                    name="roomNo" value={roomNo} onChange={(e) => setRoomNo(e.target.value)} />

                  <label className="font-medium text-lg text-slate-700 m-1" >Date</label>
                  <input type='text' className="border-2 mt-2 p-1 bg-slate-100"
                    placeholder="dd/mm/yyyy"
                    name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>


                <div className="flex flex-col flex-wrap mt-4">
                  <label className="font-medium text-lg text-slate-700 m-1" >Address</label>
                  <textarea type='text' className="border-2 mt-2 p-1 bg-slate-100 w-[150%] "
                    name="patientAddress" value={patientAddress} onChange={(e) => setPatientAddress(e.target.value)} />

                  <label className="font-medium text-lg text-slate-700 m-1" >Complains/Remarks</label>
                  <textarea className="border-2 mt-2 p-1 bg-slate-100 w-[150%] "
                    name="complains" value={complains} onChange={(e) => setComplains(e.target.value)} />
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <button className=" text-center text-slate-700 bg-slate-300 py-2 px-20 font-medium mb-4 mt-4
                hover:bg-slate-100"
                  onClick={handelPatientData} >
                  Upload Details
                </button>
              </div>

            </form>
          </div>

          <div className="w-[80%] display-block m-auto mt-8">
            {/* Search a patient by aadhar no. */}
            <h1 className="text-slate-600 font-medium text-4xl text-center">Search Patient</h1>

            <div className="flex justify-center mt-4" >
              <input type='text' name='searchAdhaar' value={searchAdhaar}
                placeholder='Enter Valid Aadhaar...'
                className="p-3 border-2 mt-2 w-[60%] flex justify-center"
                onChange={(e) => setSerachAdhaar(e.target.value)} />

              <button className=" ml-1 bg-slate-200 px-4 hover:bg-slate-100"
                onClick={searchByAadhaar}  >
                Search
              </button>
              <button className=" ml-1 bg-slate-200 px-4 hover:bg-slate-100"
                onClick={() => {setPatientAadhaar('') ; setSerachAdhaar('')}}  >
                Remove Results
              </button>
            </div>

            <div className="mt-4">
              <SearchPatient patientAadhaar={patientAadhaar} />
            </div>

            {/* Search all patient by date */}
            <div className="flex justify-center mt-4">
              <input type='text' name='searchDate' value={searchDate}
                placeholder='Enter Date in dd/mm/yyyy format'
                className="p-3 border-2 mt-2 w-[60%] flex justify-center"
                onChange={(e) => setSearchDate(e.target.value)} />

              <button className=" ml-1 bg-slate-200 px-4 hover:bg-slate-100"
                onClick={searchByDate}  >
                Search
              </button>
              <button className=" ml-1 bg-slate-200 px-4 hover:bg-slate-100"
                onClick={() => {setPatientDate('') ; setSearchDate('')}}  >
                Remove Results
              </button>
            </div>

            <div className="mt-4">
              <SearchDate patientDate={patientDate} />
            </div>

            {/* Search Patient By Phone No. */}
            <div className="flex justify-center mt-4">
              <input type='text' name='searchPhone' value={searchPhone}
                placeholder='Enter Valid Phone No.'
                className="p-3 border-2 mt-2 w-[60%] flex justify-center"
                onChange={(e) => setSearchPhone(e.target.value)} />

              <button className=" ml-1 bg-slate-200 px-4 hover:bg-slate-100"
                onClick={searchByPhone}  >
                Search
              </button>
              <button className=" ml-1 bg-slate-200 px-4 hover:bg-slate-100"
                onClick={() => {setSearchPatientPhone('') ; setSearchPhone('')} } >
                Remove Results
              </button>
            </div>

            <div className="mt-4">
              <SearchByPhone searchPatientPhone={searchPatientPhone} />
            </div>

          </div>
        </div>)
      }
    </>
  )
}

export default Home