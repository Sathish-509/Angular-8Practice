import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
    ServerName = "HostMachine";
    ServerPid = "173.0.0.1";
    ServerStatus = "Active";
    statusFlag = true;
    buttonState = true;

    constructor() {
        setTimeout(() => {
            this.buttonState = false;
        }, 2500);
    }

    toggleServerStatus() {
        this.statusFlag = !this.statusFlag;
        if(this.statusFlag) {
            this.ServerStatus = "Active";
        } else {
            this.ServerStatus = "InActive";
        }
        return this.ServerStatus;
    }
}
