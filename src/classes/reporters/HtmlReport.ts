import { OutputTarget } from '../Summary';
import { writeFileSync } from 'fs';

export class HtmlReport implements OutputTarget {
    print(report: string): void {
        const html = `
            <div>
                <h1>Analysis output</h1>
                <p>${report}</p>
            </div>    
        `;

        writeFileSync('report.html', html);
    }
}
