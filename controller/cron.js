import cron from 'cron';


const job = new cron.CronJob("*/14 * * * *", async function(){
    console.log(`Running scheduled job at ${new Date()}}`);
    const response = await fetch(`${process.env.CRON_URL}`);
    console.log(response.status); 
});

export default job;