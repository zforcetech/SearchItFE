import { Component, Input, OnInit } from '@angular/core';
import { Celebrity } from 'src/app/model/Celebrity';
import { AuthService } from 'src/app/service/auth.service';
import { KeycloakService } from 'keycloak-angular';


@Component({
  selector: 'app-matter',
  templateUrl: './matter.component.html',
  styleUrls: ['./matter.component.scss']
})
export class MatterComponent implements OnInit {

  constructor(private auth: KeycloakService) {
    this.auth =auth;
  }

  ngOnInit(): void {
  }

  @Input() public celebImage: string;
  @Input() public showImage: boolean;
  @Input("results") public celebs: Celebrity[];
@Input()public defaultText: string;

logout() {
console.log(this.auth);
console.log("in auth");
// KeycloakService.auth.logoutUrl;
this.auth.getKeycloakInstance().logout();
}


}
