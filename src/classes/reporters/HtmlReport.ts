import { OutputTarget } from '../Summary';
import { writeFileSync } from 'fs';

export class HtmlReport implements OutputTarget {
    constructor(public fileName: string) {
    }
    print(report: string): void {
        const html = `
            <div>
                <h1>Analysis output</h1>
                <p>${report}</p>
            </div>    
        `;

        writeFileSync(this.fileName, html);
    }
}
