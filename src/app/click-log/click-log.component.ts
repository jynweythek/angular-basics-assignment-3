import {Component} from '@angular/core';

@Component({
    selector: 'app-click-log',
    templateUrl: './click-log.component.html',
    styleUrls: ['./click-log.component.css']
})

export class ClickLogComponent {
    clickCounter = 0;
    privateCount = 0;
    clickNoteItems = [];
    startItemHighlightPosition = 5;

    clickIncrement() {
        this.privateCount = ++this.clickCounter;
        return this.privateCount;
    }

    clickHandler() {
        this.clickIncrement();
        this.clickNoteItems.push(this.privateCount);
    }

    getColor (click) {
        return click >= this.startItemHighlightPosition ? 'deepskyblue' : 'transparent';
    }
}

