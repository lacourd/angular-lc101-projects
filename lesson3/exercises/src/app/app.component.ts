import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  gutterCheck(width, height) {
    if (width> 260000 || width < 0 || height < 0 || height > 310000) {
      this.color = 'orange';
    } else {
      this.color = "blue";
    }
  }

  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = "Shuttle in flight.";
      let movement = parseInt(rocketImage.style.bottom) + 30 + 'px';
      rocketImage.style.bottom = movement;
      this.takeOffEnabled = false;
    }
  }

  handleLand(rocketImage) {
    window.alert('The shuttle is landing. Landing gear engaged');
    this.color = "green";
    this.height = 0;
    this.message = "The shuttle has landed";
    rocketImage.style.bottom = "0px";
    this.takeOffEnabled = true;
  }

  missionAbort(rocketImage) {
    let result = window.confirm("Do you really want to abort the mission?");
    if (result) {
      this.message = "Mission aborted";
      this.color = "red";
      this.height = 0;
      rocketImage.style.bottom = "0px";
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage, direction: string) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }
    if (direction === "left") {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    }
    if (direction === "up") {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    if (direction === "down") {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }
    this.gutterCheck(this.width, this.height);
  }
}
