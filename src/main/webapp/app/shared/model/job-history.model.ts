import { Moment } from 'moment';

export const enum Language {
    FRENCH = 'FRENCH',
    ENGLISH = 'ENGLISH',
    SPANISH = 'SPANISH'
}

export interface IJobHistory {
    id?: string;
    startDate?: Moment;
    endDate?: Moment;
    language?: Language;
}

export class JobHistory implements IJobHistory {
    constructor(public id?: string, public startDate?: Moment, public endDate?: Moment, public language?: Language) {}
}
