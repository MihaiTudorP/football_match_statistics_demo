import fs from "fs";

export abstract class CsvFileReader<T> {
    data: T[] = [];
    constructor(public fileName: string) {
    }

    read():void{
        this.data = fs.readFileSync(this.fileName, {encoding: 'utf-8'}).split('\n').map((record)=>{
            return record.split(',');
        }).map(this.mapRow);
    }

    abstract mapRow(row: string[]): T;
}