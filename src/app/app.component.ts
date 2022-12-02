import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assgnmt';
  public count:any;
  constructor(){
    this.getDuplicates()
  }
  public obj = [
    {"first_name":"Norrie"},
    {"first_name":"Norrie"},
    {"first_name":"Desiree"},
    {"first_name":"Desiree"},
    {"first_name":"Desiree"},
    {"first_name":"Desiree"},
    {"first_name":"Desiree"},
    {"first_name":"Forrester"},
    {"first_name":"Zorah"},
    {"first_name":"Roy"},
    {"first_name":"Osborne"},
    {"first_name":"Franklin"},
    {"first_name":"Ange"},
    {"first_name":"Stacie"},
    {"first_name":"Weber"},
    {"first_name":"Weber"},
    {"first_name":"Weber"},
    {"first_name":"Weber"},
    {"first_name":"Weber"},
    {"first_name":"Weber"},
    {"first_name":"Weber"},
    {"first_name":"Weber"},
    {"first_name":"Jammie"},
    {"first_name":"Weber"},
    {"first_name":"Weber"},
    {"first_name":"Weber"},
    {"first_name":"Hildagard"},
    {"first_name":"Marley"},
    {"first_name":"Weber"},
    {"first_name":"Weber"},
    {"first_name":"Noami"},
    {"first_name":"Tabor"},
    {"first_name":"Coriss"},
    {"first_name":"Bernelle"},
    {"first_name":"Faina"},
    {"first_name":"Constantin"},
    {"first_name":"Harper"},
    {"first_name":"Ailina"},
    {"first_name":"Siegfried"},
    {"first_name":"Hollyanne"},
    {"first_name":"Ronalda"},
    {"first_name":"Wash"},
    {"first_name":"Virgil"},
    {"first_name":"Barbabas"},
    {"first_name":"Alfie"},
    {"first_name":"Alanah"},
    {"first_name":"Irena"},
    {"first_name":"Quintus"},
    {"first_name":"Lucilia"},
    {"first_name":"Damiano"}
  ];
  getDuplicates(){
    const result = [...this.obj.reduce( (nm, i) => {
      if (!nm.has(i.first_name)) nm.set(i.first_name, { ...i, count: 0 });
      nm.get(i.first_name).count++;
      return nm;
  }, new Map).values()];
  this.count = result

  }
}
