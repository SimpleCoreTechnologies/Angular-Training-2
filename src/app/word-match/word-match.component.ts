import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-match',
  templateUrl: './word-match.component.html',
  styles: [`
  `]
})
export class WordMatchComponent implements OnInit {
  check: string;
  identification: string;
  result: string;


  constructor() {
      this.check  = "";
      this.identification = ""; 
      this.result = "";
  }

  wordChecker(check, identification) {
      var checkLogic: boolean;
      checkLogic = check.toLowerCase().includes(identification.toLowerCase());
      if (check === "" || identification === "") {
          this.result = "There is nothing in one of the boxes."
      }
      else if (checkLogic === true) {
        this.result = "It includes the given word."
      } else if (checkLogic === false) {
        this.result = "It does not include the given word."
      } else {
        this.result = "You broke the machine Charlie!"
      }
  }

  ngOnInit() {
  }

}
