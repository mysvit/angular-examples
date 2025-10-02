import { afterEveryRender, afterNextRender, Component, ElementRef, viewChild } from '@angular/core'

@Component({
    selector: 'app-render',
    template: `
        <div #chartContainer id="my-chart-div" style="width: 300px; height: 150px; border: 1px solid #ccc;">
            <h1>See console log</h1>
        </div>
    `
})
export class RenderComponent {
    // Get a reference to the DOM element in the template
    private chartRef = viewChild.required<ElementRef<HTMLDivElement>>('chartContainer')

    constructor() {

        afterNextRender({
            // Use the `Write` phase to write to a geometric property.
            write: () => {
                const nativeElement = this.chartRef().nativeElement
                console.log('afterNextRender write before change', nativeElement.style.height)
                nativeElement.style.height = '200px'
                // Communicate whether anything changed to the read phase.
                return nativeElement
            },
            // Use the `Read` phase to read geometric properties after all writes have occurred.
            read: (afterWrite) => {
                if (afterWrite) {
                    console.log('afterNextRender read afterWrite', afterWrite.style.height)
                }
            }
        })
        afterEveryRender({
            write: () => {
                console.log('afterEveryRender write')
            },
            read: (res) => {
                console.log('afterEveryRender read', res)
            }
        })
    }
}