import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // const id = +this.route.snapshot.params['id'];
    // // this.server = {
    // //   id: this.route.snapshot.params['id'],
    // //   name: this.route.snapshot.params['name'],
    // //   status: this.route.snapshot.params['status']
    // // };

    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params['id']);
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
    // });
    // console.log(this.server);
    // console.log(this.route);
  }
  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }

}
