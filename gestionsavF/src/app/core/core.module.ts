import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthService } from "./services/Auth/auth.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [AuthService],
  })
  export class CoreModule {}
  