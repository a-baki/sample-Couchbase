import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { IJobHistory } from 'app/shared/model/job-history.model';
import { JobHistoryService } from './job-history.service';

@Component({
    selector: 'jhi-job-history-update',
    templateUrl: './job-history-update.component.html'
})
export class JobHistoryUpdateComponent implements OnInit {
    jobHistory: IJobHistory;
    isSaving: boolean;
    startDate: string;
    endDate: string;

    constructor(protected jobHistoryService: JobHistoryService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ jobHistory }) => {
            this.jobHistory = jobHistory;
            this.startDate = this.jobHistory.startDate != null ? this.jobHistory.startDate.format(DATE_TIME_FORMAT) : null;
            this.endDate = this.jobHistory.endDate != null ? this.jobHistory.endDate.format(DATE_TIME_FORMAT) : null;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.jobHistory.startDate = this.startDate != null ? moment(this.startDate, DATE_TIME_FORMAT) : null;
        this.jobHistory.endDate = this.endDate != null ? moment(this.endDate, DATE_TIME_FORMAT) : null;
        if (this.jobHistory.id !== undefined) {
            this.subscribeToSaveResponse(this.jobHistoryService.update(this.jobHistory));
        } else {
            this.subscribeToSaveResponse(this.jobHistoryService.create(this.jobHistory));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IJobHistory>>) {
        result.subscribe((res: HttpResponse<IJobHistory>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
