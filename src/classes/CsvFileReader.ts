import fs from "fs";
import {datesStringToDate} from '../utils';
import {MatchResult} from '../enums/MatchResult';

type MatchRow = [Date, string, string, number, number, MatchResult, string];
export class CsvFileReader {
    data: MatchRow[] = [];
    constructor(public fileName: string) {
    }

    read():void{
        this.data = fs.readFileSync(this.fileName, {encoding: 'utf-8'}).split('\n').map((record)=>{
            return record.split(',');
        }).map((row): MatchRow=>{
            return [
                datesStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,
                row[6]
            ];
        });
    }
}