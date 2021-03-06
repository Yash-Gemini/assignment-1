import { Component, OnInit } from '@angular/core';
import {FlightServiceService} from '../flight-service.service'


@Component({
  selector: 'app-booking-page3',
  templateUrl: './booking-page3.component.html',
  styleUrls: ['./booking-page3.component.css']
})
export class BookingPage3Component implements OnInit {

  public flights  =[{
    id: "",
    name: "",
    image : "",
    departure: "",
    arrival: "",
    flight_hours:"",
    price: "",
    emi :""
  }]
  
  
  constructor(private ele : FlightServiceService) { }

  ngOnInit() {
    this.ele.getJSON().subscribe(res => {
      this.flights = res
    })
  }


}
