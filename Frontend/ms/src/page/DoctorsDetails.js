import { useSelector } from "react-redux"


const DoctorsDetails = () => {

    const loginState = useSelector((state) => state.loginState);

    return (
        <>
            {
                !loginState ? (
                <div className="text-center mt-10">
                    <h1 className="text-slate-600 text-3xl font-medium">Please Login First...</h1>
                    <p className="text-slate-500 text-center text-lg"> Developed & Designed by Amit Saini</p>
                </div>  ) : (
                    <div className='w-[80%] display-block m-auto bg-slate-300 p-8 mt-4'>

                        <div className='flex flex-col font-medium text-lg'>
                            
                            <table class="table-auto">
                                <tbody>
                                    <tr>
                                        <td>Dr. ABC</td>
                                        <td>Cardiologist</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td>Dr. ABC</td>
                                        <td>Cardiologist</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td>Dr. ABC</td>
                                        <td>Cardiologist</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td>Dr. ABC</td>
                                        <td>Cardiologist</td>
                                        <td>10</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                )
            }
        </>
    )
}

export default DoctorsDetails