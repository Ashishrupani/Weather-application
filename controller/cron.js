import cron from 'cron';
import https from 'https';


const job = new cron.CronJob("*/14 * * * *",function(){
    https.get(process.env.CRON_URL, (res) => {
        if (res.statusCode === '200') console.log("Request sent..");
        else console.log("Error sending request..");
    })
    .on("error", (e)=> console.error("Error while sending request",e));
});

export default job;