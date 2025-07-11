import { Component, OnInit } from '@angular/core';
import { SentryService } from '../../services/sentry.service';
import { BehaviorSubject } from 'rxjs';
import { JPService } from '../../services/json-placeholder.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  isLoading$ = new BehaviorSubject<boolean>(true);

  users: any[] = [];

  constructor(private jpService: JPService, private sentryService: SentryService) {
  }

  ngOnInit() {
    this.loadModules();
  }

  private loadModules() {
    this.jpService.getUsers().subscribe(
      (data) => {
        this.users = data;
        this.isLoading$.next(false);
      },
      (error) => {
        console.error('Error fetching people:', error);
        this.sentryService.captureException(error);
        this.isLoading$.next(false);
      }
    );
  }
}
