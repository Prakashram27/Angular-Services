export class LoggingServices {
LoggingMessage(status:string){
    console.log('A server status changed, Logged using service, new status: ' + status);
}
}