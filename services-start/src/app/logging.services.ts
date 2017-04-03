export class LoggingServices{
    logAccountStatus(status:string){
        console.log('A server status changed, new status: ' + status);
    }
}