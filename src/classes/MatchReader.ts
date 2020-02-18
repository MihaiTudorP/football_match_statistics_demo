import { MatchResult } from '../enums/MatchResult';
import { datesStringToDate } from '../utils';
import { MatchRow } from '../MatchRow';

interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader {
    matches: MatchRow[] = [];
    constructor(public reader: DataReader) {}

    load() {
        this.reader.read();
        this.matches = this.reader.data.map(
            (row): MatchRow => {
                return [
                    datesStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult,
                    row[6],
                ];
            }
        );
    }
}
