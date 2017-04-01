import {Component} from '@angular/core'

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles:[`
    .online-class{
        color: white;
    }
    `]
})

export class ServerComponent{
    serverId: number = 10;
    serverStatus : string = 'offline';
    allowNewServer: boolean = false;
    serverCreationStatus: string = "No server was created";
    serverName: string = "";
    serverCreated: boolean = false;
    servers = ['Test Server', 'Test Server 2'];

    getServerStatus(){
        return this.serverStatus;
    }

    constructor(){
        setTimeout(() => {
            this.allowNewServer = true;
        },2000);

        this.serverStatus = Math.random() > 0.5 ? 'online':'offline';
    }

    onCreateServer(){
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = "New Server was created";
    }
    onUpdateServerName(event: any){
        // console.log(event);
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    getColor(){
        return this.serverStatus === 'online'?'green':'red';
    }

}