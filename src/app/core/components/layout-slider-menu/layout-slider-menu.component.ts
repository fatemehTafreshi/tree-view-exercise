import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { RouterModule } from '@angular/router';
import {TreeComponent} from "@core/components/Tree";

@Component({
    selector: 'app-layout-slider-menu',
    templateUrl: './layout-slider-menu.component.html',
    styleUrls: ['./layout-slider-menu.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        FlexLayoutModule,
        NzLayoutModule,
        RouterModule,
        TreeComponent
    ],
})
export class LayoutSiderMenuComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
