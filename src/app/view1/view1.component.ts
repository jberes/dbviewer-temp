import { Component, OnDestroy, OnInit } from '@angular/core';
import { RevealSdkSettings, RevealViewOptions } from '@revealbi/ui';
import { Subject, takeUntil } from 'rxjs';
import { DashboardNames } from '../models/acme-analytics-server/dashboard-names';
import { AcmeAnalyticsServerService } from '../services/acme-analytics-server.service';

@Component({
  selector: 'app-view1',
  standalone: false,
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit, OnDestroy {
  dashboardOptions: RevealViewOptions = {
    visualizations: {
      menu: {
        copy: false,
        duplicate: false
      }
    }
  };

  private destroy$: Subject<void> = new Subject<void>();
  public db?: string;
  public acmeAnalyticsServerDashboardNames: DashboardNames[] = [];

  constructor(
    private acmeAnalyticsServerService: AcmeAnalyticsServerService,
  ) {
    RevealSdkSettings.serverUrl = 'https://acmeanalyticsserver.azurewebsites.net';
  }

  ngOnInit() {
    this.acmeAnalyticsServerService.getDashboardNamesList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.acmeAnalyticsServerDashboardNames = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public listItemClick(item: DashboardNames) {
    this.db = item.dashboardFileName;
  }
}
