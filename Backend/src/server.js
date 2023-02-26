const express = require('express');
const bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');
const app = express();
const port = 8000;

app.use(bodyParser.json());

//----------Connecting to Database Asynchronously--------------------------------------------\\
const withDB = async (operations , res) => {
    try{
        const client = await MongoClient.connect(
            'mongodb+srv://Username:Password@cluster0.q23poih.mongodb.net/?retryWrites=true&w=majority',
            { useNewUrlParser : true , useUnifiedTopology : true }
        )
    
        const db = client.db('prm');
        await operations(db);
        client.close();
    } catch(error) {
        res.status(500).json({message : 'Failed To Connect', error})
    }
};

//------- Reciving the username and password from forntend and verifying if details matches------\\

app.get('/api/member/login/:inputUsername/:inputPassword' , (req , res) => {
    const inputUsername = req.params.inputUsername;
    const inputPassword = req.params.inputPassword;
    
    withDB( async(db) => {
        const membersDataFromDB = await db.collection('member').find().toArray();
        const filterMemeber = membersDataFromDB.filter((ele) => ele.username === inputUsername);
        if(filterMemeber[0].password === inputPassword){
            res.json('verified');
        } else {
            res.json('Not Verified')
        }
    } , res)
})

//---------Get Patient Details By Aadhaar no., this will give only one result--------------------\\

app.get('/api/get/patient/:aadhaar', async (req , res) => {
    const searchAadhaar = req.params.aadhaar ;

    withDB( async(db) => {
        const searchPatient = await db.collection('patient')
        .find({aadhaar : searchAadhaar }).toArray();
        res.status(200).json(searchPatient);
    } , res)
});

//---------Get patient by phone no.----------------------------------------------------------------\\

app.get('/api/get/patient/phone/:searchPhone' , async(req ,res) => {
    const searchPhone = req.params.searchPhone ;

    withDB( async(db) => {
        const patientByPhone = await db.collection('patient')
        .find({phone : searchPhone}).toArray();
        res.status(200).json(patientByPhone);
    } , res)
});

//---------Get all patients by date entered by user-------------------------------------------------\\

app.get('/api/get/patient/:dd/:mm/:yyyy' , async (req , res) => {
    const dd = req.params.dd;
    const mm = req.params.mm;
    const yyyy = req.params.yyyy;
    const searchDate = `${dd}/${mm}/${yyyy}`;
    
    withDB( async(db) => {
        const patientsByDate = await db.collection('patient')
        .find({date : searchDate}).toArray();
        res.status(200).json(patientsByDate);
    } , res)
});

//---------Insert the details of new patient-----------------------------------------------------------\\

app.post('/api/post/new-patient', (req ,res) => {
    const patientData = req.body ;
    
    withDB(async (db) => {
        await db.collection('patient').insertOne({
        name        : patientData.name ,
        aadhaar     : patientData.aadhaar ,
        age         : patientData.age ,
        phone       : patientData.phone ,
        department  : patientData.department ,
        doctor      : patientData.doctor ,
        room        : patientData.room ,
        date        : patientData.date ,
        address     : patientData.address ,
        complains   : patientData.complains ,
        });
        res.status(200).json(patientData);
    }, res)
});

app.listen(port , () => {
    console.log(`Listening On Port : ${port}`)
})