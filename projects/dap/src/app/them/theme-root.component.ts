import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StylableComponent } from './stylable.component'
import { BorderDirective } from './border.directive'
import { ThemeDirective } from './theme.directive'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, StylableComponent, BorderDirective, ThemeDirective],
    template: `
        <h1>Host() (or inject( host: true )) Example: Conflicting Providers</h1>
        <p>Observe the console and the component colors to see which ThemeService instance is injected.</p>

        <div class="container">
            <app-stylable componentId="Card A" appTheme="blue" appBorder="blue"></app-stylable>

            <app-stylable componentId="Card B" appTheme="purple"></app-stylable>

            <app-stylable componentId="Card C"></app-stylable>

            <div appTheme="dark" class="plain-div">
                <h4>Plain Div with ThemeDirective</h4>
                <p>This div has the theme directive, but no StylableComponent inside to show its effect.</p>
                <app-stylable componentId="Card D"></app-stylable>
            </div>
        </div>
    `,
    styles: [`
        .container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            padding: 20px;
        }

        .plain-div {
            border: 2px dashed #000;
            padding: 15px;
            margin: 10px;
            border-radius: 8px;
            width: 250px;
            display: inline-block;
            vertical-align: top;
            background-color: #eee;
            color: #333;
        }

        .plain-div h4 {
            margin-top: 0;
        }
    `]
})
export class ThemeRootComponent {
}
