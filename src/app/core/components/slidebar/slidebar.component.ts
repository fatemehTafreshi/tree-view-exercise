import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { FlexLayoutModule, MediaObserver } from '@angular/flex-layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
    ActivatedRoute,
    Event,
    NavigationStart,
    Router,
    RouterModule,
} from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import {LayoutSiderMenuComponent} from "@core/components/layout-slider-menu/layout-slider-menu.component";



@Component({
    standalone: true,
    selector: 'app-slidebar',
    imports: [
        CommonModule,
        NzLayoutModule,
        NzButtonModule,
        NzDropDownModule,
        NzBreadCrumbModule,
        FlexLayoutModule,
        NzGridModule,
        NzIconModule,
        RouterModule,
        NzPopconfirmModule,
        NzDrawerModule,
        NzDropDownModule,
        LayoutSiderMenuComponent
    ],
    templateUrl: './slidebar.component.html',
    styleUrls: ['./slidebar.component.css'],
})
export class SlidebarComponent implements OnInit {
    isCollapsed: boolean = true;
    isMobile: boolean = this.mediaObserver.isActive(['lt-lg']);


    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        public mediaObserver: MediaObserver,
        private httpclient: HttpClient
    ) {
        mediaObserver
            .asObservable()
            .subscribe(() => (this.isMobile = mediaObserver.isActive(['lt-lg'])));
        router.events.subscribe((event: Event) => {
            switch (true) {
                case event instanceof NavigationStart: {
                    this.isMobile && (this.isCollapsed = true);
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }

    ngOnInit(): void {}

    onCollapse() {
        this.isCollapsed = !this.isCollapsed;
    }

    refresh() {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { refresh: new Date().getTime() },
            queryParamsHandling: 'merge',
        });
    }

    // logout() {
    //     this.httpclient.post('/api/logout', {}).subscribe(() => {
    //         this.stateService.setState('signedIn', false);
    //         this.stateService.setState('me', null);
    //         localStorage.clear();
    //         this.refresh();
    //     });
    // }

    cancel(): void {}
}
