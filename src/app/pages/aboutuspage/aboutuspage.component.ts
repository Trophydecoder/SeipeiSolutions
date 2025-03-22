import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/GlobalComponents/navbar/navbar.component";
import { AboutpagecarouselComponent } from "../../Components/AboutpageComponents/aboutpagecarousel/aboutpagecarousel.component";
import { AboutpageMissionComponent } from "../../Components/AboutpageComponents/aboutpage-mission/aboutpage-mission.component";
import { AboutpageClientsComponent } from "../../Components/AboutpageComponents/aboutpage-clients/aboutpage-clients.component";
import { AboutpageWhyChooseUSComponent } from "../../Components/AboutpageComponents/aboutpage-why-choose-us/aboutpage-why-choose-us.component";
import { FooterComponent } from "../../Components/GlobalComponents/footer/footer.component";

@Component({
  selector: 'app-aboutuspage',
  standalone: true,
  imports: [NavbarComponent, AboutpagecarouselComponent, AboutpageMissionComponent, AboutpageClientsComponent, AboutpageWhyChooseUSComponent, FooterComponent],
  templateUrl: './aboutuspage.component.html',
  styleUrl: './aboutuspage.component.scss'
})
export class AboutuspageComponent {

}
